# JavaScript || Simple and Easy to Understand

**Author:** Ladoxer
**Votes:** 5
**Link:** [https://leetcode.com/problems/number-of-distinct-averages/solutions/3777785/](https://leetcode.com/problems/number-of-distinct-averages/solutions/3777785/)

---

```
var distinctAverages = function(nums) {
    nums.sort((a,b) => a-b);
    let res = new Set();
    while(nums.length>0){
        res.add((nums.pop()+nums.shift())/2);
    }
    return res.size;
};
```