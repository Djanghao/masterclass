# 🟢🔴🟢 Beats 100.00%👏 Most Easiest Solution 🟢🔴🟢

**Author:** HelloSajib
**Votes:** 0
**Link:** [https://leetcode.com/problems/most-frequent-number-following-key-in-an-array/solutions/5977054/](https://leetcode.com/problems/most-frequent-number-following-key-in-an-array/solutions/5977054/)

---

```
class Solution {
  int mostFrequent(List<int> nums, int key) {    
    Map<int,int> map = {};
    for(int i = 0; i < nums.length-1; i++){
        if(nums[i] == key){
          map.update(nums[i+1],(value)=> value+1, ifAbsent: ()=> 1);
        }
    }
    int res =  map.entries.reduce((prev,next)=> prev.value > next.value ? prev : next).key;
    return res;
  }
}
```