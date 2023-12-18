const buildTable = (keywords) => {
   const gotoFn = {
     0: {}
    };
    const output = {};

    let state = 0;
    keywords.forEach((word) => {
        let current = 0;
        for (let i=0; i< word.length; i++) {
            const l = word[i];
            if (gotoFn[current] && l in gotoFn[current]) {
                current = gotoFn[current][l];
            } else {
                state++;
                gotoFn[current][l] = state;
                gotoFn[state] = {};
                current = state;
                output[state] = [];
            }
        }

        output[current].push(word);
    });

    const failure = {};
    const xs = [];

    // f(s) = 0 for all states of depth 1 (the ones from which the 0 state can transition to)
    for (const l in gotoFn[0]) {
        const localState = gotoFn[0][l];
        failure[localState] = 0;
        xs.push(localState);
    }

    while (xs.length) {
        const r = xs.shift();
        // for each symbol a such that g(r, a) = s
        for (const l in gotoFn[r]) {
            const s = gotoFn[r][l];
            xs.push(s);

            // set state = f(r)
            let state = failure[r];
            while(state > 0 && !(l in gotoFn[state])) {
                state = failure[state];
            }

            if (l in gotoFn[state]) {
                const fs = gotoFn[state][l];
                failure[s] = fs;
                output[s] = output[s].concat(output[fs]);
            } else {
                failure[s] = 0;
            }
        }
    }

    return { gotoFn, output, failure };
};

const ahoCorasick = (keywords, string) => {
    const { gotoFn, output, failure } = buildTable(keywords);

    let state = 0;
    const results = [];
    for (let i=0; i<string.length; i++) {
        let l = string[i];
        while (state > 0 && !(l in gotoFn[state])) {
            state = failure[state];
        }
        if (!(l in gotoFn[state])) {
            continue;
        }

        state = gotoFn[state][l];

        if (output[state].length) {
            const foundStrs = output[state];
            results.push([i, foundStrs]);
        }
    }

    return results;
};

module.exports = { ahoCorasick };
