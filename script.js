function copyTextHandler(){
    let textBox = document.querySelector('#textBox');

    let tempElem = document.createElement('textarea');
    tempElem.value = textBox.innerText;
    document.body.appendChild(tempElem);
    tempElem.select();

    document.execCommand('copy');

    document.body.removeChild(tempElem);
}