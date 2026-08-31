# Simple JavaScript / TypeScript DFS Backtrack with Memorization

**Author:** mikezzb
**Votes:** 1
**Link:** [https://leetcode.com/problems/k-similar-strings/solutions/4315482/](https://leetcode.com/problems/k-similar-strings/solutions/4315482/)

---

# Code
```
const arrEq = (arr1, arr2) => {
    if (arr1.length !== arr2.length) return false;
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) return false;
    }
    return true;
}

const swap = (arr, i, j) => {
    const tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
}

function kSimilarity(s1: string, s2: string): number {
    const memo = new Map();
    const backtrack = (s1Arr: string[], s2Arr: string[], start: number): number => {
        const memoKey = `${s1Arr.join('')}_${start}`;
        if (memo.has(memoKey)) return memo.get(memoKey);
        if (arrEq(s1Arr, s2Arr)) return 0; // no need swap, so return 0
        // if no need swap this index, then skip it
        if (s1Arr[start] === s2Arr[start]) return backtrack(s1Arr, s2Arr, start + 1);
        let minSwap = Number.MAX_SAFE_INTEGER;
        // for each start position i in s1, it could be swapped with a VALID position j in s2 s.t. j >= i
        for (let i = start + 1; i < s2.length; i++) {
            // make sure the swap position is valid s.t. AFTER SWAP s1[start] === s2[start]
            if (s1Arr[i] !== s2[start]) continue;
            swap(s1Arr, start, i);
            minSwap = Math.min(backtrack(s1Arr, s2Arr, start + 1) + 1, minSwap); // + 1 as this swap count as 1
            // undo
            swap(s1Arr, i, start);
        }
        memo.set(memoKey, minSwap);
        return minSwap;
    }
    return backtrack(s1.split(''), s2.split(''), 0);
};
```