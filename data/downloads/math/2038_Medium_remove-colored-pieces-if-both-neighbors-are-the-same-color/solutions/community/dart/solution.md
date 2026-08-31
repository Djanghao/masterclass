# Dart Solution

**Author:** Friendlygecko
**Votes:** 0
**Link:** [https://leetcode.com/problems/remove-colored-pieces-if-both-neighbors-are-the-same-color/solutions/4924650/](https://leetcode.com/problems/remove-colored-pieces-if-both-neighbors-are-the-same-color/solutions/4924650/)

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
  bool winnerOfGame(String colors) {
    if (colors.length < 3) {
        return false;
    }

    var A = 0;
    var B = 0;
    for (int i = 1; i < colors.length - 1; i++) {
        if (colors[i] == 'A') {
            if (colors[i] == colors[i - 1] && colors[i] == colors[i + 1]) {
                A++;
            }
        }
    }

    for (int i = 1; i < colors.length - 1; i++) {
        if (colors[i] == 'B') {
            if (colors[i] == colors[i - 1] && colors[i] == colors[i + 1]) {
                B++;
            }
        }
    }

    return A > B;
  }
}
```