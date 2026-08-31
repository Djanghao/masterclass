# JavaScript - Filter & Loop

**Author:** rjwilliams87
**Votes:** 8
**Link:** [https://leetcode.com/problems/count-hills-and-valleys-in-an-array/solutions/1868487/](https://leetcode.com/problems/count-hills-and-valleys-in-an-array/solutions/1868487/)

---

By removing side-by-side duplicates, we can shorten the array and remove the need for code that would tell us if a number was part of a previous valley or hill. We then have our loop ignore the edges of the array, as our code tests each number against the one before & after it.

```
var countHillValley = function(nums) {
    let answer = 0;
    nums = nums.filter((a, i, b) => a !== b[i + 1]); // Remove Flatlands
    for (let i = 1; i < nums.length - 1; i++) {
        if (nums[i - 1] > nums [i] && nums[i] < nums[i + 1]) answer++; // Valley
        if (nums[i - 1] < nums [i] && nums[i] > nums[i + 1]) answer++; // Hill
    }
    return answer;
};
```