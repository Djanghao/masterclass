# Simple Solution

**Author:** MinxinSU
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-replacements-to-sort-the-array/solutions/3978707/](https://leetcode.com/problems/minimum-replacements-to-sort-the-array/solutions/3978707/)

---

# Intuition
make sure every element is smaller than next

# Approach
- need to know how many times should a element split
- get the smallest number after split

# Code
```
function minimumReplacement(nums: number[]): number {
    let ans = 0;
    const n = nums.length;
    // start from the second to last
    for(let i = n-2; i >= 0; i--) {
        let curr = nums[i];
        let next = nums[i+1];
        if(curr > next) {
            // count split times
            let split = Math.ceil(curr/next) - 1;
            ans += split;
            // keep minimum number that will be the "next" nunmber
            nums[i] =  Math.floor(curr/(split+1));
        }
    }
    return ans;
};
```