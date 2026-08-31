# Find the biggest possible amount of anagrams. Beats 100%. Easy to understand :)

**Author:** saripov_denis
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-length-of-anagram-concatenation/solutions/5117004/](https://leetcode.com/problems/minimum-length-of-anagram-concatenation/solutions/5117004/)

---

# Approach
<!-- Describe your approach to solving the problem. -->
Than more amount of anagrams in input string, than less t length. So we need to find constraints of anagrams amount and find the biggest possible one.

2 <= anagrams <= s.length

# Complexity
- Time complexity: O(s * s)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(26)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
/**
 * @param {string} s
 * @return {number}
 */
var minAnagramLength = function (s) {
    for (let anagrams = s.length; anagrams >= 2; anagrams--) {
        if (s.length % anagrams !== 0) continue;

        let anMap = {};
        const anLength = s.length / anagrams;
        let p = 0;
        while (p < anLength) {
            anMap[s[p]] = (anMap[s[p]] ?? 0) + 1;
            p++;
        }

        let curAnMap = {};
        while (p < s.length) {
            if (p % anLength === 0) {
                curAnMap = {};
            }
            curAnMap[s[p]] = (curAnMap[s[p]] ?? 0) + 1;
            if (anMap[s[p]] === undefined || curAnMap[s[p]] > anMap[s[p]]) {
                break;
            }
            p++;
        }
        if (p === s.length) {
            return anLength;
        }
    }
    return s.length;
};
```