function convertToBinary() {
    const textInput = document.getElementById('textInput').value;
    const outputTextArea = document.getElementById('output');
    
    let binaryResult = '';
    for (let i = 0; i < textInput.length; i++) {
      const binaryChar = textInput.charCodeAt(i).toString(2).padStart(8, '0');
      binaryResult += binaryChar + ' ';
    }

    outputTextArea.value = binaryResult.trim();
  }

  function convertToText() {
    const textInput = document.getElementById('textInput');
    const outputTextArea = document.getElementById('output').value;

    const binaryArray = outputTextArea.split(' ');
    let textResult = '';

    for (let i = 0; i < binaryArray.length; i++) {
      const binaryChar = binaryArray[i];
      const decimalValue = parseInt(binaryChar, 2);
      const charValue = String.fromCharCode(decimalValue);
      textResult += charValue;
    }

    textInput.value = textResult;
  }