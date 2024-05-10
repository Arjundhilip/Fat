// components/PrintButton.js

import React from 'react';
import html2canvas from 'html2canvas';
import { saveAs } from 'file-saver';
import Image from "next/image";

type ButtonProps = {
    type: 'button' | 'submit';
    title: string;
    icon: string; // Make icon required
    variant: string;
    full?: boolean;
}

const PrintButton = ({ type, title, icon, variant, full }: ButtonProps) => {
    const handlePrint = () => {
        // Capture the webpage as an image
        html2canvas(document.body).then(canvas => {
            // Convert the canvas to a Blob
            canvas.toBlob(blob => {
                if (blob) {
                    // Save the Blob as an image file
                    saveAs(blob, 'webpage.png');
                } else {
                    console.error("Failed to capture the webpage as an image.");
                }
            });
        });
    };
    

    return (
        <button className={`flexCenter rounded-md border border-gray-20 bg-black-300 px-5 py-2 text-black`}
            type={type} onClick={handlePrint}>
                {icon && <Image src={icon} alt={title} width={20} height={24} />}
            {title && <label className="bold-16 whitespace-nowrap cursor-pointer pl-3">{title}</label>}
        </button>
    );
};

export default PrintButton;
