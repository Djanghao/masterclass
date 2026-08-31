# JavaScript O( log N ) solution, well commented, beats 100%

**Author:** Hurmit
**Votes:** 9
**Link:** [https://leetcode.com/problems/maximum-count-of-positive-integer-and-negative-integer/solutions/3021327/](https://leetcode.com/problems/maximum-count-of-positive-integer-and-negative-integer/solutions/3021327/)

---

## \u2B06\uFE0F .........your upvote means a lot to me..... \u2B06\uFE0F

# Code
```

var maximumCount = function(nums) {
  return Math.max(upper_bound(nums), lower_bound(nums));
};

// binary search for the index of largest(in value) negative number
function upper_bound(nums) { 
    if(nums[0] >= 0 ) return 0;
    let left = 0, right = nums.length - 1;
    while (left < right) {
      let mid = Math.ceil((left + right) / 2);
      if (nums[mid] < 0) left = mid;
      else right = mid - 1;
    }
    return left + 1;
}

// binary search for the index of smallest positive number
function lower_bound(nums) {
    if(nums[nums.length - 1] <= 0) return 0
    let left = 0, right = nums.length - 1;
    while (left < right) {
      let mid = Math.floor((left + right) / 2);
      if (nums[mid] > 0) right = mid;
      else left = mid + 1;
    }
    return nums.length - left;
}
```