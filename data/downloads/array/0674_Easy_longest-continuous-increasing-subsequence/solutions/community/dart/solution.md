# easy to understand || simple

**Author:** sana_123
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-continuous-increasing-subsequence/solutions/6041007/](https://leetcode.com/problems/longest-continuous-increasing-subsequence/solutions/6041007/)

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
  int findLengthOfLCIS(List<int> nums) {
    if(nums.isEmpty)
    return 0;
    int len=1,a=1;
    for(int i=1;i<nums.length;i++){
        if(nums[i]>nums[i-1]){
            a++;
        }
        else{
            len=max(len,a);
            a=1;
        }
    }
    return max(len,a);
  }
  int max(int x,int y){
    return x>y?x:y;
  }
}
```