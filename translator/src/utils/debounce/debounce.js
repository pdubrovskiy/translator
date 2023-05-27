const debounce = (func, delay) => {
    let timeout;
    return function(){
        const funcCall = () => {func.apply(this, arguments)}

        clearTimeout(timeout);

        timeout = setTimeout(funcCall, delay);
    }
}

export default debounce;