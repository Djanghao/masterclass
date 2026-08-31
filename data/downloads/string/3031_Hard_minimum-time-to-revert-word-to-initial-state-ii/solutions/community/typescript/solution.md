# Easy solution

**Author:** EXisTAnZ
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-time-to-revert-word-to-initial-state-ii/solutions/4674047/](https://leetcode.com/problems/minimum-time-to-revert-word-to-initial-state-ii/solutions/4674047/)

---

# Intuition
If we can add as a suffix any chars, we can just compare substrings without suffixes 

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
$$O(n^2)$$

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
function minimumTimeToInitialState(word: string, k: number): number {
    for (let i = k; i < word.length; i+=k) {
    if (word.substring(0,word.length-i) == word.substring(i)) {
      return i / k
    }
  }
  return Math.ceil(word.length / k)
};
```