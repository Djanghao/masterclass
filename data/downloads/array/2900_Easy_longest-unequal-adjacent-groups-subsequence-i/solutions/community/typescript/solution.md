# Why does this problem have DP as a tag lmaooo, I don't know

**Author:** vmss
**Votes:** 2
**Link:** [https://leetcode.com/problems/longest-unequal-adjacent-groups-subsequence-i/solutions/5346926/](https://leetcode.com/problems/longest-unequal-adjacent-groups-subsequence-i/solutions/5346926/)

---

# Code
```
function getLongestSubsequence(words: string[], groups: number[]): string[] {
    let result = [];

    result.push(words[0]);

    for(let i = 1; i < groups.length; i++) {
        if(groups[i] !== groups[i-1]) {
            result.push(words[i]);
        }
    }

    return result;
};
```