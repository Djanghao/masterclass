# O(n) Javascript/Typescript Solution (beats 100%)

**Author:** wentland
**Votes:** 0
**Link:** [https://leetcode.com/problems/sum-game/solutions/4077907/](https://leetcode.com/problems/sum-game/solutions/4077907/)

---

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
const sumGame = (num: string): boolean => {
  let sum = 0;
  let spots = 0;
  for (let i = 0; i < num.length; i++) {
    const digit = +num[i];
    const mult = i < num.length / 2 ? -1 : 1;
    if (isNaN(digit)) spots += mult;
    else sum += digit * mult;
  }
  if ((sum < 0 && spots < 0) || (sum > 0 && spots > 0)) return true;
  if (sum === 0) return spots !== 0;
  if (spots % 2 !== 0) return true;
  return -sum !== (9 * spots) / 2;
};

```