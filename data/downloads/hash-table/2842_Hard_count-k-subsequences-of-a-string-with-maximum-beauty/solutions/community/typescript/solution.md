# TS / JS.  HashMap + Sorting + Combinations

**Author:** yuliashmeleva
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-k-subsequences-of-a-string-with-maximum-beauty/solutions/4209333/](https://leetcode.com/problems/count-k-subsequences-of-a-string-with-maximum-beauty/solutions/4209333/)

---

# Code
```
const MOD = 1e9 + 7

const combinations = (n: number, r: number) => {
    if (r === 1) return n;
    if (r === n) return 1;
    return combinations(n - 1, r - 1) % MOD + combinations(n - 1, r) % MOD;
}

function countKSubsequencesWithMaxBeauty(s: string, k: number): number {
    // O(N) runtime, O(1) space since 26 possible chars
    const frequencyByChar = {};
    for (let i = 0; i < s.length; i++) {
        if (!frequencyByChar[s[i]]) frequencyByChar[s[i]] = 0;
        frequencyByChar[s[i]]++;
    }

    // O(1) runtime, O(1) space since 26 possible frequencies
    const frequencies: number[] = Object.values(frequencyByChar);
    if (frequencies.length < k) return 0;
    
    // O(1) runtime frequencies.length <= 26
    frequencies.sort((a,b) => b - a);

    let freqIndex = 0;
    let charCount = 0;
    let availableCharCount = 1;
    let result = 1;

    // O(1) runtime since charCount <= 26
    while(charCount < k) {
        // keep track of available char count with the current
        if (frequencies[freqIndex] === frequencies[freqIndex + 1]) {
             frequency
            availableCharCount++;
            freqIndex++;
            continue;
        }

        const charCountToPick = Math.min(k - charCount, availableCharCount)
        
        for (let i = 0; i < charCountToPick; i++) {
            result = result * frequencies[freqIndex] % MOD;
            charCount++;
        }

        // if we use all availableCharCount, combs = 1
        const combs = combinations(availableCharCount, charCountToPick);
        result = result * combs % MOD;

        availableCharCount = 1;
        freqIndex++;
    }

    return result;
};
```