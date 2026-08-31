# 🟢🔴🟢 Beats 100.00%👏 Easiest Solution 🟢🔴🟢

**Author:** HelloSajib
**Votes:** 0
**Link:** [https://leetcode.com/problems/split-the-array/solutions/6075547/](https://leetcode.com/problems/split-the-array/solutions/6075547/)

---

```
class Solution {
  bool isPossibleToSplit(List<int> nums) {

    nums.sort();
    List<int> nums1 = [];
    List<int> nums2 = [];
    for(int i = 0; i < nums.length; i++){
        if(i.isEven){
          nums1.add(nums[i]);  
        }else{
          nums2.add(nums[i]);
        }
    }
    return nums1.length == nums1.toSet().length && nums2.length == nums2.toSet().length; 
    
  }
}
```