# 🟢🔴🟢 Beats 100.00%👏 Easiest Solution 🟢🔴🟢

**Author:** HelloSajib
**Votes:** 0
**Link:** [https://leetcode.com/problems/construct-the-minimum-bitwise-array-i/solutions/6039828/](https://leetcode.com/problems/construct-the-minimum-bitwise-array-i/solutions/6039828/)

---

```
class Solution {
  List<int> minBitwiseArray(List<int> nums) {

    List<int> ans = [];
    for(int i = 0; i < nums.length; i++){
      int prime = -1;  
      for(int j = 1; j < nums[i]; j++){
        if(j | (j + 1) == nums[i]){
            prime = j;
            break;
        }
      }
      ans.add(prime);
    }
    return ans;
    
  }
}
```