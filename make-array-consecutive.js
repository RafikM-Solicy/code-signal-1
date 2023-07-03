function solution(statues) {
    for (let i = 0; i < statues.length - 1; ++i) {
        for (let j = 0; j < statues.length - 1; ++j) {
            if (statues[j] > statues[j + 1]) {
                let tmp = statues[j];
                statues[j] = statues[j + 1];
                statues[j + 1] = tmp;
            }
        }
    }

    let test = 0;
    for (let i = 0; i < statues.length - 1; ++i) {
        if (statues[i] + 1 !== statues[i + 1]) {
            let tmp = statues[i] + 1;
            while (tmp !== statues[i + 1]) {
                ++test;
                ++tmp;
            }
        }
    }

    return test;
}

// link to Code signal problem
// https://app.codesignal.com/arcade/intro/level-2/bq2XnSr5kbHqpHGJC/solutions
// ⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧