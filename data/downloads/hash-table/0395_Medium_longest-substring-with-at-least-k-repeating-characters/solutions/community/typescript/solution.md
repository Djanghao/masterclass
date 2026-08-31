# Divide and Conquer JavaScript/TypeScript solution

**Author:** Arkadiy1
**Votes:** 1
**Link:** [https://leetcode.com/problems/longest-substring-with-at-least-k-repeating-characters/solutions/4775779/](https://leetcode.com/problems/longest-substring-with-at-least-k-repeating-characters/solutions/4775779/)

---


```
const longestSubstring = (s, k) => {
    const map = {};

    for (let i = 0; i < s.length; i++) {
        map[s[i]] = [(map[s[i]]?.[0] || 0) + 1, i];
    }

    let maxSubstring = 0;

    for (const char in map) {
        const [cnt, i] = map[char];

        if (cnt >= k) {
            maxSubstring += cnt;
        } else {
            return Math.max(longestSubstring(s.slice(0, i), k), longestSubstring(s.slice(i + 1), k));
        }
    } 

    return maxSubstring;
};
```