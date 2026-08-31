# Dart solution using bitwise manipulation

**Author:** suatozkaya
**Votes:** 2
**Link:** [https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/solutions/2971862/](https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/solutions/2971862/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->
Using bitwise opeators in Dart as stated in official solution.

# Complexity
- Time complexity: O(logN)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->


- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->


# Code
```
class Solution {
  int numberOfSteps(int num) {
    int counter = 0;

    while (num > 0) {
      // checking even number, using 1 as bitmask
      if (num & 1 == 0) {
        num = num >> 1; // halving the num by shifting bits to right 1 step
      } else {
        num--;
      }
      counter++;
    }
    return counter;
  }
}
```