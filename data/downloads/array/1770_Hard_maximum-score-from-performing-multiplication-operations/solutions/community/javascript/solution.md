# JavaScript Bottom-Up DP

**Author:** ektegjetost
**Votes:** 28
**Link:** [https://leetcode.com/problems/maximum-score-from-performing-multiplication-operations/solutions/1077080/](https://leetcode.com/problems/maximum-score-from-performing-multiplication-operations/solutions/1077080/)

---

Best way to explain it is by example I guess.

We create a 2D DP array which represents the greatest product we can make by either picking from the start of nums (columns) versus the end of nums (rows).

In the below example:
- the first row is what we'd get if we only chose from the beginning of nums
- the first column is what we'd get if we only chose from the end of nums
```
nums = [1, 2, 3]
multipliers = [3, 2, 1]
m = multipliers.length
n = nums.length
[
  [ 0,  3,  7, 10],
  [ 9,  0,  0,  -],
  [13,  0,  -,  -],
  [14,  -,  -,  -],
]
```

Why only half a table? Because we only have ```m``` moves we can make, so snake a path from the origin to anywhere on the table in ```m``` moves to see how much of the table will be used for our calculations.

So how do we fill out the rest of the table:
- we could have gotten to ```[1, 1]``` from either ```[1, 0]``` or ```[0, 1]```, meaning we picked from the end of the array, then the beginning, or vise versa
- So our best at ```[1, 1]``` will be the max of
	- ```[1, 0] (9) + multipliers[1] * nums[0] (beginning of nums)```, which is ```9 + (1 * 2) === 11```
	- ```[0, 1] (3) + multipliers[1] * nums[2] (end of nums)```, which is ```3 + (3 * 2) === 9```
- Then at ```[1, 2]``` it's
	- ```[1, 1] (11) + multipliers[2] * nums[1] (beginning of nums)```, which is ```11 + (1 * 2) === 13```
	- ```[0, 2] (7) + multipliers[2] * nums[2] (end of nums)```, which is ```7 + (1 * 3) === 10```
- Finally at ```[2, 1]```
	- ```[2, 0] (13) + multipliers[2] * nums[0] (beginning of nums)```, which is ```13 + (1 * 1) === 14```
	- ```[1, 1] (11) + multipliers[2] * nums[1] (end of nums)```, which is ```11 + (1 * 2) === 13```

And our table looks like
```
[
  [ 0,  3,  7, 10],
  [ 9, 11, 13,  -],
  [13, 14,  -,  -],
  [14,  -,  -,  -],
]
```

So just pick the max number along the diagonal, and you're done.

```
var maximumScore = function(nums, multipliers) {
  const n = nums.length;
  const m = multipliers.length;
  const best = new Array(m + 1).fill(0).map(() => new Array(m + 1).fill(0));
  
  for (let i = 1; i <= m; i += 1) {
    best[i][0] += best[i-1][0] + nums[n-i] * multipliers[i-1];
    best[0][i] += best[0][i-1] + nums[i-1] * multipliers[i-1];
  }
  
  let max = Math.max(best[m][0], best[0][m]);
  
  
  for (let i = 1; i <= m; i += 1) {
    for (let j = 1; j <= m - i; j += 1) {
      best[i][j] = Math.max(
        best[i-1][j] + nums[n - i] * multipliers[i + j - 1],
        best[i][j-1] + nums[j - 1] * multipliers[i + j - 1],
      );
    }
    max = Math.max(max, best[i][m-i]);
  }
  
  return max;
};
```