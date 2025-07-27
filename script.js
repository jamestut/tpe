function init() {
    const vselects = document.querySelectorAll('select.vselect');
    vselects.forEach(updateSelection);
}

function updateSelection(vselect) {
    const selectionValue = vselect.value;
    const variants = document.querySelectorAll(`[data-variant-id="${vselect.id}"]`);
    variants.forEach(vel => {
        const variantValue = vel.getAttribute('data-variant');
        vel.style.display = variantValue === selectionValue ? '' : 'none';
    });
}

document.addEventListener('DOMContentLoaded', init);
