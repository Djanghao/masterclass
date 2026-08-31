# Intuitive JavaScript Solution with Backgracking

**Author:** DawChihLiou
**Votes:** 7
**Link:** [https://leetcode.com/problems/partition-to-k-equal-sum-subsets/solutions/608396/](https://leetcode.com/problems/partition-to-k-equal-sum-subsets/solutions/608396/)

---

```
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var canPartitionKSubsets = function(nums, k) {
  const total = nums.reduce((sum, num) => sum + num, 0);
  // return false right away when there's no equal sum among k subsets
  if (total % k !== 0) {
    return false;
  } 
  
  const target = total / k;
  const visited = new Array(nums.length).fill(false);
  
  const canPartition = (start, numberOfSubsets, currentSum) => {
    // base case
    if (numberOfSubsets === 1) {
      return true;
    }
    // when a subset is found, we launch another search to find the 
    // remaining subsets from the unvisited elements. 
    if (currentSum === target) {
      return canPartition(0, numberOfSubsets - 1, 0);
    }
    for (let i = start; i < nums.length; i++) {
      if (!visited[i]) {
        visited[i] = true;
        // launch a search to find other elements that will sum up to 
        // the target with the current element.
        if (canPartition(i + 1, numberOfSubsets, currentSum + nums[i])) {
          return true;
        }
        // reset to enable backtracking
        visited[i] = false;
      }
    }
    return false;
  };
  
  return canPartition(0, k, 0);
};
```