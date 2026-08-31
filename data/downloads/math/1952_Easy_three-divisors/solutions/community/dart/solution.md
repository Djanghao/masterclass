# isThree solution using dart

**Author:** berhili098
**Votes:** 0
**Link:** [https://leetcode.com/problems/three-divisors/solutions/6071470/](https://leetcode.com/problems/three-divisors/solutions/6071470/)

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
```dart []
class Solution {
  bool isThree(int n) {
     int sqrtN = sqrt(n).toInt();
  if (sqrtN * sqrtN != n) {
    return false;
  }
  for (int i = 2; i * i <= sqrtN; i++) {
    if (sqrtN % i == 0) {
      return false; 
    }
  }

  return sqrtN > 1;
  }
}
```