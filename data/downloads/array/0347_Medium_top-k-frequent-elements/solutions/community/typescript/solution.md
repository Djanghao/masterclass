# [TypeScript]: Frequency count and then sort (Runtime 97%, Memory 70%)

**Author:** luzede
**Votes:** 9
**Link:** [https://leetcode.com/problems/top-k-frequent-elements/solutions/3551664/](https://leetcode.com/problems/top-k-frequent-elements/solutions/3551664/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
First we count the frequency of unique items, and then we return the most frequent ones.

# Complexity
- Time complexity: $$O(n*logn)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```TypeScript
function topKFrequent(nums: number[], k: number): number[] {
    const freq: { [key: number]: number } = {};
    for (const n of nums) {
        if (freq[n] === undefined) freq[n] = 0;
        freq[n] += 1;
    }
    return Object.entries(freq)
        .sort((a, b) => b[1] - a[1])
        .slice(0, k)
        .map(v => Number(v[0]));
};
```