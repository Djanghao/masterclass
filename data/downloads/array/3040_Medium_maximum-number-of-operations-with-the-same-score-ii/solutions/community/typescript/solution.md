# Dynamic programming Approach with typescript!

**Author:** AashutoshShrivastav
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-operations-with-the-same-score-ii/solutions/4742862/](https://leetcode.com/problems/maximum-number-of-operations-with-the-same-score-ii/solutions/4742862/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
For a given sum value each array(or sub array) we have 3 condtion to increment score. Tree seems to be forming. Can we cache score in a dp?
# Approach
<!-- Describe your approach to solving the problem. -->
Since tree was forming for each sum from the 3 inital operations.
We can cache the score for each sub array with start index i and end index j.
we can have a dp for each unique sum. We return the maximum score out of possible scores for the unique sums.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(n^2)$$
$$n^2$$: as i need to iterate for each valid combination of i and j.
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(n^2*log(n))$$
$$n^2$$ : for dp array.
$$log(n)$$: for stack memory for recursion.

NOTE : Please let me know if i am making any error for space and time complexity in comments, would be grat if you can provide explanation. 

# Code
```
function maxOperations(nums: number[]): number {
  let maxScore = 1;
  const l = nums.length;
  const sumSet = new Set<number>();
  
  //take distinct sums
  sumSet.add(nums[0] + nums[1]);
  sumSet.add(nums[l - 2] + nums[l - 1]);
  sumSet.add(nums[0] + nums[l - 1]);
  
  //for each sum find score, store max
  sumSet.forEach(sum => {
    const dp =  Array(l).fill(Array(l).fill(-1));
    const score = computeScoreForSum(0, l - 1, sum, nums, dp);
    maxScore = score > maxScore ? score : maxScore;
  })

  return maxScore;
};

function computeScoreForSum(i: number, j: number, sum: number, nums: number[], dp: Array<Array<number>>): number {
  if (i < j && i >= 0 && j < nums.length) {
    //DP hit case
    if (dp[i][j] !== -1) {
      return dp[i][j];
    }
    let sc1 = 0, sc2 = 0, sc3 = 0;
    //Recursively find down the tree
    if (functionOP1Score(i, nums) === sum) {
      sc1 = 1 + computeScoreForSum(i + 2, j, sum, nums, dp);
    }
    if (functionOP2Score(i, j, nums) === sum) {
      sc2 = 1 + computeScoreForSum(i + 1, j - 1, sum, nums, dp);
    }
    if (functionOP3Score(j, nums) === sum) {
      sc3 = 1 + computeScoreForSum(i, j - 2, sum, nums, dp);
    }
    //cache maximum as score
    dp[i][j] = Math.max(sc1, sc2, sc3);
    return dp[i][j];
  }
  return 0;
}
function functionOP1Score(i: number, nums: number[]): number {
  return nums[i] + nums[i + 1];
}
function functionOP2Score(i: number, j: number, nums: number[]): number {
  return nums[i] + nums[j];
}
function functionOP3Score(j: number, nums: number[]): number {
  return nums[j - 1] + nums[j];
}
```