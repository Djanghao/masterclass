# JavaScript constant space and single O(n) time solution- easy and simple 97% faster and 100% space

**Author:** Jin150Job
**Votes:** 6
**Link:** [https://leetcode.com/problems/random-pick-index/solutions/370797/](https://leetcode.com/problems/random-pick-index/solutions/370797/)

---

```
/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
    this.nums = nums;
    this.len = nums.length;
};

/** 
 * @param {number} target
 * @return {number}
 */
Solution.prototype.pick = function(target) {
    if (this.len == 1) return 0;
    var result = 0;
    var count = 0;
    for (var i = 0; i < this.len; i++) {
        if (this.nums[i] == target) {
            if (Math.floor(Math.random() * (++count)) == 0) result = i;
        }
    }
    return result;
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.pick(target)
 */
```