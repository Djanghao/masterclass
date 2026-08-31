# TypeScript/JavaScript One Liner

**Author:** halshar
**Votes:** 2
**Link:** [https://leetcode.com/problems/truncate-sentence/solutions/4120392/](https://leetcode.com/problems/truncate-sentence/solutions/4120392/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $$O(N)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(N)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
function truncateSentence(s: string, k: number): string {
  return s.split(" ").slice(0,k).join(" ")
};
```