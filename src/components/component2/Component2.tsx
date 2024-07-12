import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import { routeAction$ } from "@builder.io/qwik-city";

export const useTestAction2 = routeAction$( async (data, {request}) => {
    console.log(data);
    console.log(request);
    return {"success": true, "text": "action2 succeeded"}
});

export const Component2 = component$(() => {
    const action = useTestAction2();
    const text = useSignal("action2 yet to succeed")
    useVisibleTask$( async () => {
        await action.submit()
        if (action.value?.text != undefined)
            text.value = action.value.text;
    })
    return <>
        <p>{text}</p>
    </>
});