# 🟢🔴🟢 Beats 100.00%👏 Best Approach 🟢🔴🟢

**Author:** HelloSajib
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-pairs-in-array/solutions/5975886/](https://leetcode.com/problems/maximum-number-of-pairs-in-array/solutions/5975886/)

---

```
class Solution {
  List<int> numberOfPairs(List<int> nums) {

    Map<int,int> map = {};
    int pairs = 0;

    for(int i = 0; i < nums.length; i++){
        map.update(nums[i],(value)=> value+1, ifAbsent: ()=> 1);
    }
    
    map.forEach((key,value){
        if(value >= 2){
            pairs += value ~/ 2;
            map[key] = value % 2;
        }
    });

    int leftOver = map.values.fold(0,(a,b)=> a + b);
    return [pairs,leftOver];

  }
}
```