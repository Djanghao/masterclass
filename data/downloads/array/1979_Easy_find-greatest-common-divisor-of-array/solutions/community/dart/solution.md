# Best Solution for dart

**Author:** abiinavvv
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-greatest-common-divisor-of-array/solutions/6064745/](https://leetcode.com/problems/find-greatest-common-divisor-of-array/solutions/6064745/)

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
  int findGCD(List<int> nums) {
    int max =nums[0];
    int min = nums[0];
    int gcdMax ;
    for(int arr in nums){
        if(arr > max){
            max = arr;
        }
      if(arr<min){
            min = arr;
        }
    }
    gcdMax =1;
    for(int i = 1;i<=min;i++){
        if(max % i == 0 && min % i == 0){
          gcdMax =i;
        }
    }
    return gcdMax;
  }
}
```