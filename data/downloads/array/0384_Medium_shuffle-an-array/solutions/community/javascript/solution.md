# Intuitive Javascript Solution

**Author:** DawChihLiou
**Votes:** 17
**Link:** [https://leetcode.com/problems/shuffle-an-array/solutions/85975/](https://leetcode.com/problems/shuffle-an-array/solutions/85975/)

---

```
var Solution = function(nums) {
    // hold nums in Solution
    this.nums = nums;
};

Solution.prototype.reset = function() {
    return this.nums;
};

Solution.prototype.shuffle = function() {
    // create a copy of this.nums, shuffle it, and return it
    const shuffled = this.nums.slice();
    const n = shuffled.length;
    const swap = (arr, i, j) => {
        let tmp = arr[i];
        arr[i] = arr[j];
        arr[j] = tmp;
    }

    // swap elements with random elements
    for (let i = 0; i < n; i++) 
        swap(shuffled, i, Math.floor(Math.random() * n));
    
    return shuffled;
};
```