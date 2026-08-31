# 🔄✨ Dart Solution: Check Strobogrammatic Number with Explanations ✨🔄

**Author:** magnito232
**Votes:** 0
**Link:** [https://leetcode.com/problems/strobogrammatic-number/solutions/5121809/](https://leetcode.com/problems/strobogrammatic-number/solutions/5121809/)

---

# Approach
First, we create a mapping (rotations) of digits that are valid in a strobogrammatic number, where each key maps to its strobogrammatic counterpart.
We initiate two pointers, start and end, to the beginning and end of the string, respectively.
We iterate until start surpasses end:
For each position, check if the digit at start has a valid strobogrammatic pair and if it matches the digit at end after supposed rotation.
If any condition fails, the number is not strobogrammatic.
If all checks pass, the number is strobogrammatic.

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(1)$$

# Code
```
class Solution {
  bool isStrobogrammatic(String num) {
    final Map<String, String> rotations = {
        '0': '0',
        '1': '1',
        '8': '8',
        '6': '9',
        '9': '6',
    };

    int start = 0, end = num.length - 1;
    while (start <= end) {
        if (!rotations.containsKey(num[start]) || rotations[num[start]]! != num[end]) return false;
        start++;
        end--;
    }

    return true;
  }
}
```