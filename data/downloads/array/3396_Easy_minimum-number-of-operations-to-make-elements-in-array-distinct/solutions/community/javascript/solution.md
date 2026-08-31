# 3396. Minimum Number of Operations to Make Elements in Array Distinct

**Author:** KondalDurgam
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-operations-to-make-elements-in-array-distinct/solutions/6179878/](https://leetcode.com/problems/minimum-number-of-operations-to-make-elements-in-array-distinct/solutions/6179878/)

---

```
var minimumOperations = function(nums) {
    let seen = Array(101).fill(false)
    for (let i = nums.length-1; i >=0; i--) {
        if (seen[nums[i]]){
            return Math.floor(i/3)+1;
        }
        seen[nums[i]] = true;
    }
    return 0;
};
```

```
var minimumOperations = function(nums) {
    let set = new Set();
    for (let i = nums.length-1; i >= 0; i--) {
        if (set.has(nums[i])) {
            return Math.floor(i/3)+1;
        }
        set.add(nums[i]);
    }
    return 0;
};
```
```
var minimumOperations = function(nums) {
    let operations = 0;
    while (new Set(nums).size !== nums.length) {
        operations++;
        nums.splice(0,3);
    }
    return operations;
};
```

```
var minimumOperations = function(nums) {
    let operations = 0;
    while (new Set(nums).size !== nums.length) {
        operations++;
        nums = nums.slice(3);
    }
    return operations;
};
```