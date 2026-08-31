# FIRST SOLUTION IN DART 100%

**Author:** sarath7916
**Votes:** 0
**Link:** [https://leetcode.com/problems/reconstruct-original-digits-from-english/solutions/4622490/](https://leetcode.com/problems/reconstruct-original-digits-from-english/solutions/4622490/)

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
class Solution {
  String originalDigits(String s) {
   List<int> count = List.filled(10, 0);

  // Count the frequency of each letter
  for (int i = 0; i < s.length; i++) {
    if (s[i] == 'z') count[0]++;
    if (s[i] == 'w') count[2]++;
    if (s[i] == 'u') count[4]++;
    if (s[i] == 'x') count[6]++;
    if (s[i] == 'g') count[8]++;
    if (s[i] == 'o') count[1]++;
    if (s[i] == 't') count[3]++;
    if (s[i] == 'f') count[5]++;
    if (s[i] == 's') count[7]++;
    if (s[i] == 'i') count[9]++;
  }

  // Adjust counts based on unique letters
  count[1] -= count[0] + count[2] + count[4];
  count[3] -= count[2] + count[8];
  count[5] -= count[4];
  count[7] -= count[6];
  count[9] -= count[5] + count[6] + count[8];

  // Construct the result string
  StringBuffer result = StringBuffer();
  for (int i = 0; i <= 9; i++) {
    for (int j = 0; j < count[i]; j++) {
      result.write('$i');
    }
  }

  return result.toString();
}
}
```