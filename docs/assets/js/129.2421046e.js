(window.webpackJsonp=window.webpackJsonp||[]).push([[129],{613:function(t,e,s){"use strict";s.r(e);var n=s(45),a=Object(n.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"xstate-svelte"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#xstate-svelte"}},[t._v("#")]),t._v(" @xstate/svelte")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("These XState v4 docs are no longer maintained")]),t._v(" "),s("p",[t._v("XState v5 is out now! "),s("a",{attrs:{href:"https://stately.ai/blog/2023-12-01-xstate-v5",target:"_blank",rel:"noopener noreferrer"}},[t._v("Read more about XState v5"),s("OutboundLink")],1),t._v(" and "),s("a",{attrs:{href:"https://stately.ai/docs/xstate",target:"_blank",rel:"noopener noreferrer"}},[t._v("check out the XState v5 docs"),s("OutboundLink")],1),t._v(".")])]),t._v(" "),s("p",[t._v("The "),s("a",{attrs:{href:"https://github.com/statelyai/xstate/tree/main/packages/xstate-svelte",target:"_blank",rel:"noopener noreferrer"}},[t._v("@xstate/svelte package"),s("OutboundLink")],1),t._v(" contains utilities for using "),s("a",{attrs:{href:"https://github.com/statelyai/xstate",target:"_blank",rel:"noopener noreferrer"}},[t._v("XState"),s("OutboundLink")],1),t._v(" with "),s("a",{attrs:{href:"https://github.com/sveltejs/svelte",target:"_blank",rel:"noopener noreferrer"}},[t._v("Svelte"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("h2",{attrs:{id:"quick-start"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#quick-start"}},[t._v("#")]),t._v(" Quick Start")]),t._v(" "),s("ol",[s("li",[t._v("Install "),s("code",[t._v("xstate")]),t._v(" and "),s("code",[t._v("@xstate/svelte")]),t._v(":")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" i xstate @xstate/svelte\n")])])]),s("p",[s("strong",[t._v("Via CDN")])]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("https://unpkg.com/@xstate/svelte/dist/xstate-svelte.min.js"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token script"}}),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("By using the global variable "),s("code",[t._v("XStateSvelte")])]),t._v(" "),s("ol",{attrs:{start:"2"}},[s("li",[t._v("Import "),s("code",[t._v("useMachine")])])]),t._v(" "),s("div",{staticClass:"language-svelte extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("<script>\n  import { useMachine } from '@xstate/svelte';\n  import { createMachine } from 'xstate';\n\n  const toggleMachine = createMachine({\n    id: 'toggle',\n    initial: 'inactive',\n    states: {\n      inactive: {\n        on: { TOGGLE: 'active' }\n      },\n      active: {\n        on: { TOGGLE: 'inactive' }\n      }\n    }\n  });\n\n  const { state, send } = useMachine(toggleMachine);\n<\/script>\n\n<button on:click={() => send('TOGGLE')}>\n  {$state.value === 'inactive'\n    ? 'Click to activate'\n    : 'Active! Click to deactivate'}\n</button>\n")])])]),s("h2",{attrs:{id:"api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#api"}},[t._v("#")]),t._v(" API")]),t._v(" "),s("h3",{attrs:{id:"usemachine-machine-options"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#usemachine-machine-options"}},[t._v("#")]),t._v(" "),s("code",[t._v("useMachine(machine, options?)")])]),t._v(" "),s("p",[t._v("A function that interprets the given "),s("code",[t._v("machine")]),t._v(" and starts a service that runs for the lifetime of the component.")]),t._v(" "),s("p",[s("strong",[t._v("Arguments")])]),t._v(" "),s("ul",[s("li",[s("code",[t._v("machine")]),t._v(" - An "),s("a",{attrs:{href:"https://xstate.js.org/docs/guides/machines.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("XState machine"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("li",[s("code",[t._v("options")]),t._v(" (optional) - "),s("a",{attrs:{href:"https://xstate.js.org/docs/guides/interpretation.html#options",target:"_blank",rel:"noopener noreferrer"}},[t._v("Interpreter options"),s("OutboundLink")],1),t._v(" OR one of the following Machine Config options: "),s("code",[t._v("guards")]),t._v(", "),s("code",[t._v("actions")]),t._v(", "),s("code",[t._v("activities")]),t._v(", "),s("code",[t._v("services")]),t._v(", "),s("code",[t._v("delays")]),t._v(", "),s("code",[t._v("immediate")]),t._v(", "),s("code",[t._v("context")]),t._v(", or "),s("code",[t._v("state")]),t._v(".")])]),t._v(" "),s("p",[s("strong",[t._v("Returns")]),t._v(" "),s("code",[t._v("{ state, send, service}")]),t._v(":")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("state")]),t._v(" - A "),s("a",{attrs:{href:"https://svelte.dev/docs#svelte_store",target:"_blank",rel:"noopener noreferrer"}},[t._v("Svelte store"),s("OutboundLink")],1),t._v(" representing the current state of the machine as an XState "),s("code",[t._v("State")]),t._v(" object. You should reference the store value by prefixing with "),s("code",[t._v("$")]),t._v(" i.e. "),s("code",[t._v("$state")]),t._v(".")]),t._v(" "),s("li",[s("code",[t._v("send")]),t._v(" - A function that sends events to the running service.")]),t._v(" "),s("li",[s("code",[t._v("service")]),t._v(" - The created service.")])]),t._v(" "),s("h3",{attrs:{id:"useselector-actor-selector-compare-getsnapshot"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#useselector-actor-selector-compare-getsnapshot"}},[t._v("#")]),t._v(" "),s("code",[t._v("useSelector(actor, selector, compare?, getSnapshot?)")])]),t._v(" "),s("p",[t._v("A function that returns "),s("a",{attrs:{href:"https://svelte.dev/docs#svelte_store",target:"_blank",rel:"noopener noreferrer"}},[t._v("Svelte store"),s("OutboundLink")],1),t._v(" representing the selected value from the snapshot of an "),s("code",[t._v("actor")]),t._v(", such as a service. The store will only be updated when the selected value changes, as determined by the optional "),s("code",[t._v("compare")]),t._v(" function.")]),t._v(" "),s("p",[s("strong",[t._v("Arguments")])]),t._v(" "),s("ul",[s("li",[s("code",[t._v("actor")]),t._v(" - a service or an actor-like object that contains "),s("code",[t._v(".send(...)")]),t._v(" and "),s("code",[t._v(".subscribe(...)")]),t._v(" methods.")]),t._v(" "),s("li",[s("code",[t._v("selector")]),t._v(' - a function that takes in an actor\'s "current state" (snapshot) as an argument and returns the desired selected value.')]),t._v(" "),s("li",[s("code",[t._v("compare")]),t._v(" (optional) - a function that determines if the current selected value is the same as the previous selected value.")])]),t._v(" "),s("p",[s("strong",[t._v("Example")])]),t._v(" "),s("div",{staticClass:"language-svelte extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("<script lang=\"ts\">\n  import { interpret } from 'xstate';\n  import { createModel } from 'xstate/lib/model';\n  import { useSelector } from '../src';\n\n  const model = createModel(\n    {\n      count: 0,\n      anotherCount: 0\n    },\n    {\n      events: {\n        INCREMENT: () => ({}),\n        INCREMENT_ANOTHER: () => ({})\n      }\n    }\n  );\n\n  const machine = model.createMachine({\n    initial: 'idle',\n    context: model.initialContext,\n    states: {\n      idle: {\n        on: {\n          INCREMENT: {\n            actions: model.assign({ count: ({ count }) => count + 1 })\n          },\n          INCREMENT_ANOTHER: {\n            actions: model.assign({\n              anotherCount: ({ anotherCount }) => anotherCount + 1\n            })\n          }\n        }\n      }\n    }\n  });\n\n  const service = interpret(machine).start();\n\n  const count = useSelector(service, (state) => state.context.count);\n\n  let withSelector = 0;\n  $: $count && withSelector++;\n  let withoutSelector = 0;\n  $: $service.context.count && withoutSelector++;\n<\/script>\n\n<button data-testid=\"count\" on:click={() => service.send({type:'INCREMENT'})}\n  >Increment count</button\n>\n<button data-testid=\"another\" on:click={() => service.send({type:'INCREMENT_ANOTHER'})}\n  >Increment another count</button\n>\n\n<div data-testid=\"withSelector\">{withSelector}</div>\n<div data-testid=\"withoutSelector\">{withoutSelector}</div>\n")])])]),s("h2",{attrs:{id:"configuring-machines"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#configuring-machines"}},[t._v("#")]),t._v(" Configuring Machines")]),t._v(" "),s("p",[t._v("Existing machines can be configured by passing the machine options as the 2nd argument of "),s("code",[t._v("useMachine(machine, options)")]),t._v(".")]),t._v(" "),s("p",[t._v("Example: the "),s("code",[t._v("'fetchData'")]),t._v(" service and "),s("code",[t._v("'notifySuccess'")]),t._v(" action are both configurable:")]),t._v(" "),s("div",{staticClass:"language-svelte extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("<script>\n  import { useMachine } from '@xstate/svelte';\n  import { createMachine, assign } from 'xstate';\n\n  const fetchMachine = createMachine({\n    id: 'fetch',\n    initial: 'idle',\n    context: {\n      data: undefined,\n      error: undefined\n    },\n    states: {\n      idle: {\n        on: { FETCH: 'loading' }\n      },\n      loading: {\n        invoke: {\n          src: 'fetchData',\n          onDone: {\n            target: 'success',\n            actions: assign({\n              data: (_, event) => event.data\n            })\n          },\n          onError: {\n            target: 'failure',\n            actions: assign({\n              error: (_, event) => event.data\n            })\n          }\n        }\n      },\n      success: {\n        entry: 'notifySuccess',\n        type: 'final'\n      },\n      failure: {\n        on: {\n          RETRY: 'loading'\n        }\n      }\n    }\n  });\n\n  const onResolve = (data) => {\n    // Do something with data\n  };\n\n  const { state, send } = useMachine(fetchMachine, {\n    actions: {\n      notifySuccess: (context) => onResolve(context.data)\n    },\n    services: {\n      fetchData: (_, event) =>\n        fetch(`some/api/${event.query}`).then((res) => res.json())\n    }\n  });\n<\/script>\n\n{#if $state.value === 'idle'}\n  <button on:click={() => send({ type: 'FETCH', query: 'something' })}>\n    Search for something\n  </button>\n{:else if $state.value === 'loading'}\n  <div>Searching...</div>\n{:else if $state.value === 'success'}\n  <div>Success! Data: {$state.context.data}</div>\n{:else if $state.value === 'failure'}\n  <p>{$state.context.error.message}</p>\n  <button on:click={() => send('RETRY')}>Retry</button>\n{/if}\n")])])]),s("h2",{attrs:{id:"matching-states"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#matching-states"}},[t._v("#")]),t._v(" Matching States")]),t._v(" "),s("p",[t._v("When using "),s("a",{attrs:{href:"https://xstate.js.org/docs/guides/hierarchical.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("hierarchical"),s("OutboundLink")],1),t._v(" and "),s("a",{attrs:{href:"https://xstate.js.org/docs/guides/parallel.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("parallel"),s("OutboundLink")],1),t._v(" machines, the state values will be objects, not strings. In this case, it is best to use "),s("a",{attrs:{href:"https://xstate.js.org/docs/guides/states.html#state-methods-and-properties",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("state.matches(...)")]),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("div",{staticClass:"language-svelte extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("{#if $state.matches('idle')}\n  //\n{:else if $state.matches({ loading: 'user' })}\n  //\n{:else if $state.matches({ loading: 'friends' })}\n  //\n{/if}\n")])])]),s("h2",{attrs:{id:"persisted-and-rehydrated-state"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#persisted-and-rehydrated-state"}},[t._v("#")]),t._v(" Persisted and Rehydrated State")]),t._v(" "),s("p",[t._v("You can persist and rehydrate state with "),s("code",[t._v("useMachine(...)")]),t._v(" via "),s("code",[t._v("options.state")]),t._v(":")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Get the persisted state config object from somewhere, e.g. localStorage")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" persistedState "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("JSON")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("parse")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  localStorage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getItem")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'some-persisted-state-key'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" state"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" send "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("useMachine")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("someMachine"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  state"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" persistedState\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// state will initially be that persisted state, not the machine's initialState")]),t._v("\n")])])]),s("h2",{attrs:{id:"services"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#services"}},[t._v("#")]),t._v(" Services")]),t._v(" "),s("p",[s("code",[t._v("XState")]),t._v(" services implement the "),s("a",{attrs:{href:"https://svelte.dev/docs#Store_contract",target:"_blank",rel:"noopener noreferrer"}},[t._v("Svelte store contract"),s("OutboundLink")],1),t._v(". Existing services and spawned actors can therefore be accessed directly and subscriptions are handled automatically by prefixing the service name with "),s("code",[t._v("$")]),t._v(".")]),t._v(" "),s("p",[s("strong",[t._v("Example")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// service.js")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" createMachine"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" interpret "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'xstate'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" toggleMachine "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createMachine")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  id"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'toggle'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  initial"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'inactive'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  states"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    inactive"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      on"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("TOGGLE")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'active'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    active"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      on"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("TOGGLE")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'inactive'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" toggleService "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("interpret")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("toggleMachine"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("start")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("div",{staticClass:"language-svelte extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("// App.svelte\n\n<script>\n  import { toggleService } from './service';\n<\/script>\n\n<button on:click={() => toggleService.send({type:'TOGGLE'})}>\n  {$toggleService.value === 'inactive'\n    ? 'Click to activate'\n    : 'Active! Click to deactivate'}\n</button>\n")])])])])}),[],!1,null,null,null);e.default=a.exports}}]);