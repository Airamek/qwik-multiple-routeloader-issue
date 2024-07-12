import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import { routeAction$ } from "@builder.io/qwik-city";

export const useTestAction1 = routeAction$( async (data, {request}) => {
    console.log(data);
    console.log(request);
    return {"success": true, "text": "action1 succeeded"}
});

export const Component1 = component$(() => {
    const action = useTestAction1();
    const text = useSignal("action1 yet to succeed")
    useVisibleTask$( async () => {
        await action.submit()
        if (action.value?.text != undefined)
            text.value = action.value.text;
    })
    return <>
        <p>{text}</p>
    </>
});