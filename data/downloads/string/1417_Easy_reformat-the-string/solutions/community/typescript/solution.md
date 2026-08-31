# easy solution in typescript-1417. Reformat The String

**Author:** Chandvanibharat
**Votes:** 0
**Link:** [https://leetcode.com/problems/reformat-the-string/solutions/5309196/](https://leetcode.com/problems/reformat-the-string/solutions/5309196/)

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
function reformat(s: string): string {
  const letters: string[] = [];
  const digits: string[] = [];

  // Separate letters and digits
  for (const char of s) {
    if (isNaN(Number(char))) {
      letters.push(char);
    } else {
      digits.push(char);
    }
  }

  // Check if lengths are incompatible
  if (Math.abs(letters.length - digits.length) > 1) {
    return ""; // Reformatting is impossible
  }

  // Build the result string with alternating letters and digits
  let result = "";
  const longerArray = letters.length > digits.length ? letters : digits;
  const shorterArray = letters.length > digits.length ? digits : letters;

  for (let i = 0; i < longerArray.length; i++) {
    result += longerArray[i];
    if (i < shorterArray.length) {
      result += shorterArray[i];
    }
  }

  return result;
}

```