import React, { useState, useEffect } from 'react';

const Editor = () => {

  // State to store the code input
  const [code, setCode] = useState("<-- This is Sample Text -->");

  // State to toggle the lock/unlock feature for the code input
  const [lock, setLock] = useState(false);

  // Use the 'useEffect' hook to load the saved code from localStorage on component mount
  useEffect(() => {
    const savedCode = localStorage.getItem('savedCode');
    if (savedCode) {
      setCode(savedCode);
    }
  }, []);

  // Function to handle copying the code to the clipboard
  const handleCopy = () => {

    // Use the Clipboard API to copy the code to the clipboard
    navigator.clipboard.writeText(code);

  }

  // Function to save the code to localStorage
  const handleSave = () => {
    localStorage.setItem('savedCode', code);
  };

  // Function to toggle the lock/unlock feature for the code input
  const handleLock = () => {
    setLock(!lock);
  }

  // Function to handle changes in the code input
  const handleOnChange = (e) => {
    if (!lock) {
      setCode(e.target.value);
    }
  }

  // Function to clear the code input and remove the code from localStorage
  const handleRemove = () => {
    setCode("");
    localStorage.clear();
  }

  return (
    <section>
      {/* Textarea for code input */}
      <textarea
        className='textarea'
        value={code}
        onChange={handleOnChange}
        readOnly={lock}
        placeholder=''
        cols={20}
        rows={25}
      ></textarea>

      {/* Buttons for actions */}
      <button onClick={handleCopy}>Copy</button>
      <button onClick={handleSave}>Save</button>
      <button onClick={handleLock}>{lock ? 'Unlock' : 'Lock'}</button>
      <button onClick={handleRemove}>Clear</button>
    </section>
  );
}

export default Editor;
