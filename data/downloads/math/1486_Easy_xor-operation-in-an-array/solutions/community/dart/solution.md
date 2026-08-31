# easy approach

**Author:** Akshay_velur
**Votes:** 0
**Link:** [https://leetcode.com/problems/xor-operation-in-an-array/solutions/5744553/](https://leetcode.com/problems/xor-operation-in-an-array/solutions/5744553/)

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
  int xorOperation(int n, int start) {
    int sum=0;
    for(int i=0;i<n;i++){
    sum^=start+2*i;
    }
  return sum;
  }
}
```