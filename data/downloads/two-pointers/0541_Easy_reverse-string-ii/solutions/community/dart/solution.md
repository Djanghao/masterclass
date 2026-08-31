# Dart Solution

**Author:** Caypoh23
**Votes:** 0
**Link:** [https://leetcode.com/problems/reverse-string-ii/solutions/5729733/](https://leetcode.com/problems/reverse-string-ii/solutions/5729733/)

---

# Approach
Split the string into list of characters and reverse the first k characters for every 2k characters

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```dart []

class Solution {
  String reverseStr(String s, int k) {
    List<String> result = s.split('');
    for (int i = 0; i < s.length; i += 2 * k) {
      int start = i;
      int end = (i + k - 1 < s.length) ? i + k - 1 : s.length - 1;
      while (start <= end) {
        String temp = result[start];
        result[start] = result[end];
        result[end] = temp;
        start++;
        end--;
      }
    }

    return result.join();
  }
}
```