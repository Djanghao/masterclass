# Easy to read from code

**Author:** EXisTAnZ
**Votes:** 0
**Link:** [https://leetcode.com/problems/remove-adjacent-almost-equal-characters/solutions/4382708/](https://leetcode.com/problems/remove-adjacent-almost-equal-characters/solutions/4382708/)

---

# Intuition
if we have two or three adjacent almost-equal chars we need to change only one char. For any two adjacents we can choose letter that not almost-equal to them.

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(1)$$

# Code
```
function removeAlmostEqualCharacters(word: string): number {
let ans = 0;
  for (let i = 0; i < word.length - 1; i++) {
    if (isAlmostEqual(word[i], word[i+1])){ 
      i++;
      ans++;
    }
  }

  function isAlmostEqual(letter1: string, letter2: string): boolean {
    return Math.abs(letter1.charCodeAt(0) - letter2.charCodeAt(0)) <= 1
  }
  return ans;
};
```