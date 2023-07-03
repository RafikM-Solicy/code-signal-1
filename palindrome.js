function solution(inputString) {
    let start = 0;
    let end = inputString.length - 1;

    while (start < end) {
        if (inputString[start] !== inputString[end]) {
            return false;
        }
        start++;
        end--;
    }

    return true;
}


// link to Code signal problem
// https://app.codesignal.com/arcade/intro/level-1/s5PbmwxfECC52PWyQ
// ⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧⇧