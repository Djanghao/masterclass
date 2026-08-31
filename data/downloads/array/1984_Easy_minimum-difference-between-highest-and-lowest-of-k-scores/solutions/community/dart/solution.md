# Dart solution. Easy one

**Author:** subruZz
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-difference-between-highest-and-lowest-of-k-scores/solutions/4677171/](https://leetcode.com/problems/minimum-difference-between-highest-and-lowest-of-k-scores/solutions/4677171/)

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
import 'dart:math';

class Solution {
  int minimumDifference(List<int> nums, int k) {
List<int> count=[];
nums.sort();
if(k==1){
    return 0;
}
for(int i=0;i<nums.length;i++){
    if(i+(k-1)>=nums.length)break;
count.add(nums[i+(k-1)]-nums[i]);

}
count.sort();
return count.first;

} 
 }


```