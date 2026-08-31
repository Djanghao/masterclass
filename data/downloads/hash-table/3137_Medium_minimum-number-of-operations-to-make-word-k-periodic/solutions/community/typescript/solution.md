# Use Map to accumulate the frequency of substring.

**Author:** HawtinZeng
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-operations-to-make-word-k-periodic/solutions/5114002/](https://leetcode.com/problems/minimum-number-of-operations-to-make-word-k-periodic/solutions/5114002/)

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
function minimumOperationsToMakeKPeriodic(word: string, k: number): number {
  // copy-paste pattern
  const freq = new Map<string, number>();
  let m = 0, count = 0;
  for (let i = 0; i <= word.length - k; i+=k) {
    console.log(i)
    const sub = word.slice(i, i+k);
    const exist = freq.get(sub) || 0;
    freq.set(sub, exist+1);
    m = Math.max(exist+1, m);
    count++;
  }
  console.log(freq)
  return count - m;
};
```