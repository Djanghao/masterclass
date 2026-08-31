# Typescript Version of Editoral.

**Author:** NexRX
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-substring-with-at-most-two-distinct-characters/solutions/5023944/](https://leetcode.com/problems/longest-substring-with-at-most-two-distinct-characters/solutions/5023944/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
function lengthOfLongestSubstringTwoDistinct(s: string): number {
    const n = s.length;
    let idx: Map<string, number> = new Map();
    let l = 0, r = 0, ans = 0;

    while (r < n) {
        const a = s[r];
        idx.set(a, r++)

        if (idx.size === 3) {
            let min = getEarliestIndex(idx)
            idx.delete(s[min])
            l = min + 1
        }
        
        ans = Math.max(ans, (r-l))
    }

    return ans
};

function getEarliestIndex(idx: Map<string, number>): number {
    let num = Infinity;
    idx.forEach(a => num = Math.min(a, num))
    return num === Infinity ? 0 : num
}
```