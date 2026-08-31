# 💡JavaScript Solution

**Author:** AminiCK
**Votes:** 7
**Link:** [https://leetcode.com/problems/wiggle-sort-ii/solutions/430314/](https://leetcode.com/problems/wiggle-sort-ii/solutions/430314/)

---

### The Idea
1. Sort the array
2. Split the array from middle, left part(smaller #s), right part(bigger #s)
3. Update nums from left part and right part in turns
``` javascript
var wiggleSort = function(nums) {
    nums.sort((b,a)=>b-a);
    let mid = Math.floor(nums.length/2)
    mid+=nums.length%2==0?0:1;
    let even = nums.slice(0, mid);
    let odd = nums.slice(mid);
    for(let i=0;i<nums.length;i++) {
        if (i%2==0) {
            nums[i] = even.pop();
        } else {
            nums[i] = odd.pop();
        }
    }
};
```