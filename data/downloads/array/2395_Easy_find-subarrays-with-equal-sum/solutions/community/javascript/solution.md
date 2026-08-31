# Clean and Fast Javascript Solution -- Set

**Author:** King_Pin
**Votes:** 6
**Link:** [https://leetcode.com/problems/find-subarrays-with-equal-sum/solutions/2533839/](https://leetcode.com/problems/find-subarrays-with-equal-sum/solutions/2533839/)

---

```
var findSubarrays = function(nums) {
    const sums = new Set()
    for( let i = 0 ; i < nums.length ; i++ ){
        let tot = nums[i] + nums[i+1]
        if( sums.has(tot) )
            return true
        sums.add(tot)
        // console.log(sums)
    }
    return false
};
```