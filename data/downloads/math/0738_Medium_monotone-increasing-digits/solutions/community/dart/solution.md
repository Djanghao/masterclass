# Dart Solution

**Author:** Friendlygecko
**Votes:** 0
**Link:** [https://leetcode.com/problems/monotone-increasing-digits/solutions/5286450/](https://leetcode.com/problems/monotone-increasing-digits/solutions/5286450/)

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
  int monotoneIncreasingDigits(int n) {
    final str = n.toString().split('');
    while (!monotoneIncreasing(str)) {
        for (int i = 1; i < str.length; i++) {
            if (int.parse(str[i]) < int.parse(str[i - 1])) {
                str[i] = '9';
                str[i - 1] = (int.parse(str[i - 1]) - 1).toString();
            }
        }
    }

    var firstIndex = -1;
    for (int i = 0; i < str.length; i++) {
        if (int.parse(str[i]) < int.parse(n.toString()[i])) {
            firstIndex = i;
            break;
        }
    }

    if (firstIndex == -1) {
        return int.parse(str.join(''));
    }

    for (int i = firstIndex + 1; i < str.length; i++) {
        str[i] = '9';
    }

    return int.parse(str.join(''));
  }

  bool monotoneIncreasing(List<String> str) {
    for (int i = 1; i < str.length; i++) {
        if (int.parse(str[i]) < int.parse(str[i - 1])) {
            return false;
        }
    }

    return true;
  }
}
```