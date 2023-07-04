import React from "react";
const withvalue = (WrappedComponent, value) => {
    return (props) => {
        return (<><h5>HigherOrderComponent</h5>
        <WrappedComponent value={value}  ></WrappedComponent></>)
    }
}
const MyComponent = (props) => {
    return <div>{props.value}</div>
}
const EnhancedComponent = withvalue(MyComponent, 'Hello World');
export const HigherOrderComponent = () => {
    return (
        <EnhancedComponent />
    )
}