const copyButton = document.querySelector('.copy-icon');

const copyText = () => {
    const textToCopy = document.querySelector('.myEmail').textContent;
    let tooltipText = document.querySelector('.clipboard-tooltip');

    navigator.clipboard.writeText(textToCopy);

    tooltipText.textContent = 'Copied!'
}

copyButton.addEventListener('click', copyText);
