# [Dart] Optimize O(N) Solution

**Author:** shinewanna97
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-additions-to-make-valid-string/solutions/3433779/](https://leetcode.com/problems/minimum-additions-to-make-valid-string/solutions/3433779/)

---

# Complexity
- Time complexity:
O(N)

- Space complexity:
O(1)

# Code
```
class Solution {
  int addMinimum(String word) {
    word += '  ';
    int ans = 0;

    for (var i = 0; i < word.length - 1; i++) {
      String c = word[i];

      if (c == 'a') {
        if (word[i + 1] == 'b') {
          i++;
          if (word[i + 1] == 'c') {
            i++;
          } else {
            ans++;
          }
        } else if (word[i + 1] == 'c') {
          i++;
          ans++;
        } else {
          ans += 2;
        }
      } else if (c == 'b') {
        ans++;
        if (word[i + 1] == 'c') {
          i++;
        } else {
          ans++;
        }
      } else if (c == 'c') {
        ans += 2;
      }
    }

    return ans;
  }
}
```