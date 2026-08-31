# The fastest in dart

**Author:** ahmed___
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-score-from-removing-substrings/solutions/5463443/](https://leetcode.com/problems/maximum-score-from-removing-substrings/solutions/5463443/)

---

# Approach
String Traversal:

The function traverses the input string s character by character.
It maintains two counters, aCount and bCount, to keep track of the counts of 'a' and 'b' characters respectively.
Comparing 'a' and 'b' Counts:

For each character, based on its value, different actions are performed:
If the character is greater than 'b', it means the current substring of interest (composed of 'a' and 'b') has ended, and the intermediate result is calculated based on the lesser of the counts of 'a' and 'b'.
If the character is 'a':
If x < y and bCount is greater than 0, it means we can form an "ab" pair and increase the result by y.
Otherwise, increment the count of 'a'.
If the character is 'b':
If x > y and aCount is greater than 0, it means we can form a "ba" pair and increase the result by x.
Otherwise, increment the count of 'b'.
Final Calculation:

After the loop ends, any remaining 'a' and 'b' counts are used to calculate the final result by considering the lesser value of the counts and multiplying it by lesser.
# Complexity
- Time complexity:
O(n)
- Space complexity:
O(1)
# Code
```
class Solution {
  int maximumGain(String s, int x, int y) {
    int aCount = 0;
    int bCount = 0;
    int lesser = x < y ? x : y;
    int result = 0;

    for (int i = 0; i < s.length; i++) {
      var c = s[i];
      if (c.compareTo('b') > 0) {
        result += (aCount < bCount ? aCount : bCount) * lesser;
        aCount = 0;
        bCount = 0;
      } else if (c == 'a') {
        if (x < y && bCount > 0) {
          bCount--;
          result += y;
        } else {
          aCount++;
        }
      } else {
        if (x > y && aCount > 0) {
          aCount--;
          result += x;
        } else {
          bCount++;
        }
      }
    }

    result += (aCount < bCount ? aCount : bCount) * lesser;

    return result;
  }
}

```