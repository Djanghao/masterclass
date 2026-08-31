# 3392. Count Subarrays of Length Three With a Condition

**Author:** KondalDurgam
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-subarrays-of-length-three-with-a-condition/solutions/6180230/](https://leetcode.com/problems/count-subarrays-of-length-three-with-a-condition/solutions/6180230/)

---

```
var countSubarrays = function(nums) {
    let count = 0;
    for (let i = 0; i <= nums.length-3; i++) {
        if (nums[i] + nums[i+2] === nums[i+1]/2) {
            count+=1;
        }
    }
    return count;
};
```

```
var countSubarrays = function(nums) {
    let count = 0;
    for (let i = 0; i <= nums.length - 3; i++) {
        let first = nums[i];
        let middle = nums[i + 1];
        let third = nums[i + 2];
        if (first + third === middle / 2) {
            count++;
        }
    }

    return count;
};
```
```
var countSubarrays = function(nums) {
    let count = 0;
    for (let i = 0; i < nums.length-2; i++) {
        if (nums[i] + nums[i+2] === nums[i+1]/2) {
            count+=1;
        }
    }
    return count;
};
```