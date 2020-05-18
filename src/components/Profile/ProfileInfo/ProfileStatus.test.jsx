import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";


describe("ProfileStatus component", () => {
    test("status from props should be in the state(testing the wrong way!)", () => {
        const component = create(<ProfileStatus status="My StatusTest" />);
        const instance = component.getInstance();
        expect(instance.state.status).toBe("My StatusTest");
    });
    test("span with status should be displayed after rendering", () => {
        const component = create(<ProfileStatus status="My StatusTest" />);
        const root = component.root;
        let span = root.findByType("span");
        expect(span).not.toBeNull();
    });
    test("after rendering input shouldn't be displayed", () => {
        const component = create(<ProfileStatus status="My StatusTest" />);
        const root = component.root;
        let input = root.findAllByType("input")[0];
        expect(input).toBeUndefined();
    });
    test("after rendering span should contains correct status", () => {
        const component = create(<ProfileStatus status="My StatusTest" />);
        const root = component.root;
        let span = root.findByType("span");
        expect(span.children[1]).toBe("My StatusTest");
    });
    test("input should be displayed in editMode instead of span", () => {
        const component = create(<ProfileStatus status="My StatusTest"  />);
        const root = component.root;
        let span = root.findByType("span");
        span.props.onDoubleClick();
        let input = root.findAllByType('input')[0];
        expect(input.props.value).toBe('My StatusTest');
    });
    test("callback should be called", () => {
        const mockCallback = jest.fn();
        const component = create(<ProfileStatus status="My StatusTest" updateStatus={mockCallback }  />);
        const instance = component.getInstance();
        instance.deActivateEditMode();
        expect(mockCallback.mock.calls.length).toBe(1);
    });
});