# Dart 1ms

**Author:** Muhammed_Shebin
**Votes:** 0
**Link:** [https://leetcode.com/problems/running-sum-of-1d-array/solutions/6059521/](https://leetcode.com/problems/running-sum-of-1d-array/solutions/6059521/)

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
  List<int> runningSum(List<int> nums) {
    List<int> result=[];
    int sum=0;
    for(int i in nums){
     sum+=i;
     result.add(sum);
    }
    return result;
  }
}
```