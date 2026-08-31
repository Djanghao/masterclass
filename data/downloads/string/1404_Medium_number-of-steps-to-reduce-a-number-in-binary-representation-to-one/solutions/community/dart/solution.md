# Dart Simple

**Author:** Krishnapriya_MP
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-steps-to-reduce-a-number-in-binary-representation-to-one/solutions/5224007/](https://leetcode.com/problems/number-of-steps-to-reduce-a-number-in-binary-representation-to-one/solutions/5224007/)

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
  int numSteps(String s) {
    int steps = 0;
    List<int> num = s.split('').map(int.parse).toList();

    while (num.length > 1) {
      if (num.last == 0) {
        // If the number is even, remove the last digit (divide by 2)
        num.removeLast();
      } else {
        // If the number is odd, add 1
        int carry = 1;
        for (int i = num.length - 1; i >= 0 && carry > 0; i--) {
          if (num[i] == 1) {
            num[i] = 0;
          } else {
            num[i] = 1;
            carry = 0;
          }
        }
        if (carry == 1) {
          num.insert(0, 1);
        }
      }
      steps += 1;
    }

    return steps;
  }
}

```