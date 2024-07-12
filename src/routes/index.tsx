import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Component1, useTestAction1 } from "~/components/component1/Component1";
import { Component2, useTestAction2 } from "~/components/component2/Component2";

export {useTestAction1, useTestAction2};

export default component$(() => {
  return (
    <>
      <Component1 />
      <Component2 />
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
