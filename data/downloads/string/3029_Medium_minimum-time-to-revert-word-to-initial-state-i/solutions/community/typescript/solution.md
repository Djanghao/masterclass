# easy javascript solution with types

**Author:** ajaysinghpanwar2002
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-time-to-revert-word-to-initial-state-i/solutions/4713809/](https://leetcode.com/problems/minimum-time-to-revert-word-to-initial-state-i/solutions/4713809/)

---

# Code
```
function doesSuffixMatchPrefix(word: string, startIndex: number): boolean {
    for (let i = startIndex, j = 0; i < word.length; i++, j++) {
        if (word[i] !== word[j]) {
            return false;
        }
    }
    return true;
}

function minimumTimeToInitialState(word: string, k: number): number {
    let steps = 1;
    let position = k;

    while (position < word.length) {
        if (doesSuffixMatchPrefix(word, position)) {
            break;
        }
        steps++;
        position += k;
    }

    return steps;
}
```