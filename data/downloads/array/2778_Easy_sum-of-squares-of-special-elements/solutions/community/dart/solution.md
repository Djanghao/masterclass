# easy peasy

**Author:** Alto-b
**Votes:** 1
**Link:** [https://leetcode.com/problems/sum-of-squares-of-special-elements/solutions/4445438/](https://leetcode.com/problems/sum-of-squares-of-special-elements/solutions/4445438/)

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
  int sumOfSquares(List<int> nums) {
    int l = nums.length;
    int sum = 0;
    for(int i=1;i<=l;i++){
        if(l%i==0){
            sum = sum + (nums[i-1]*nums[i-1]);
        }
    }
    return sum;
  }
}
```