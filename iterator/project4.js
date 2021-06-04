function iterateOver(...args) {
    let index = 0;
    const iterable = {
        
        [Symbol.iterator]() {
            const iterator = {
                next() {
                    if (index < args.length) {
                        return { value: args[index++] };
                    } else {
                        return { done: true };
                    }
                }
            };
            return iterator;
        }
    }
    console.log("it",iterable)
    return iterable;
}
for (const x of iterateOver('fee', 'fi', 'fo', 'fum')) {
    console.log(x);
}