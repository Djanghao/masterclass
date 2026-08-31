# Typescript top down memoization

**Author:** eugbyte
**Votes:** 1
**Link:** [https://leetcode.com/problems/partition-equal-subset-sum/solutions/3836230/](https://leetcode.com/problems/partition-equal-subset-sum/solutions/3836230/)

---

**Steps**
1. The question can be simplified as, find the combinations in the array that give you `(sum of array) / 2`
2. Find out the target sum, which is half of the total sum of the `nums` array
2. With recursion, we can explore the combinations that will lead us to the target sum. 
3. When recursing, need to take care to not revisit the already visited nodes. This can be addressed with an index argument to make sure we choose numbers after then index.

**Spotting the repeated work for caching**
Visualise [1, 5, 6, 7, \u2026]. 
Let\u2019s say we choose 1, 5 and skip 6, and then 7 for the first path. We then choose 6 and then 7 for the second path. For both paths, we are at 7 (index 3) with an accumulated sum of 13. The second path is a repeated work of the first path.
We can use a cache to avoid repeated work.

We can use a matrix as the cache. We can let the rows of the cache represent the index, and the col represent the target sum.

```
function canPartition(nums: number[]): boolean {
    const total = nums.reduce((a, b) => a + b);
    if (total % 2 != 0) {
        return false;
    }
    
    const target = total / 2;
    
    const cache: (boolean | null)[][] = [];
    for (let row = 0; row < nums.length; row++) {
        cache.push([]);
        for (let col = 0; col <= target; col++) {
            cache[row].push(null);
        }
    }
        
    return _canPartition(nums, cache, target);
};

function _canPartition(nums: number[], cache: boolean[][], target: number, index = 0): boolean {
    // base cases
    // if statement to check for `target == 0` must come before `index <= nums.length` check,
    // in case the previous iteration was called with the last index
    if (target == 0) {
        return true;
    }
    if (target < 0 || index >= nums.length) {
        return false;
    }
    if (cache[index][target] != null) {
        return cache[index][target];
    }
    
    let result = false;
    
	// choose
    for (let i = index; i < nums.length; i++) {
        // explore
        const isValid = _canPartition(nums, cache, target - nums[i], i + 1);
        if (isValid) {
            result = true;
            break;
        }
    }
    
    cache[index][target] = result;
    return result;
}
```