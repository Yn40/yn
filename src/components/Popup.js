import React, { useState } from 'react';

const Popup = ({sendState}) => {
    console.log(sendState); 
    const [open, setOpen] = useState(false);
    if(sendState !== null) setOpen(true);

    return (
    );
};

export default Popup;