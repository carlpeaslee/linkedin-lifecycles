*Updating*

In the last video, we took a look at the methods which are called when a component is created or, in react lingo, when it mounts.

In this video we will be looking at another cycle of methods which are called when our component updates. Typically, a component's update cycle is triggered by either a change in state or a change in props.

Our update lifecycle methods are:

-componentWillReceiveProps
-shouldComponentUpdate
-componentWillUpdate
-render
-componentDidUpdate

With our lifecycles component we can see the order that these methods are called when make a change to state. And since our lifecycle component is wrapped in this propProvider component, we can press this button to see what happens when our component is given new props.

Notice that componentWillReceiveProps is not called when it is just state that changes
