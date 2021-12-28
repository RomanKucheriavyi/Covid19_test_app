import React from 'react';
import {render, fireEvent, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import Modal from "./modal";

describe("<Modal />", () => {
    const {queryByText} = screen;
    const {click}= fireEvent;

    it("find close button, if it open", () => {
        const handleClose = jest.fn();
        render(
            <Modal active={true} modalData={[]} setActive={handleClose}></Modal>
        );

        click(queryByText("OK"));

        expect(handleClose).toHaveBeenCalledTimes(1);
    });

    it("can`t find close button, if it closed", () => {
        const handleClose = jest.fn();
        render(
            <Modal active={false} modalData={[]} setActive={handleClose}></Modal>
        );
        
        expect(queryByText("OK")).toBeNull();
    });
});