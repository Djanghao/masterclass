# javascript solution| Stack & DP |

**Author:** pudiyang
**Votes:** 2
**Link:** [https://leetcode.com/problems/steps-to-make-array-non-decreasing/solutions/2100083/](https://leetcode.com/problems/steps-to-make-array-non-decreasing/solutions/2100083/)

---

```
var totalSteps = function(nums) {
	let stack = [],
		dp = new Array(nums.length).fill(0),
		max = 0

	for (let i = nums.length - 1; i >= 0; i--) {
		while (stack.length > 0 && nums[i] > nums[stack[stack.length - 1]]) {
			dp[i] = Math.max(++dp[i], dp[stack.pop()])
			max = Math.max(dp[i], max)
		}
		stack.push(i)
	}
	return max
};
```
Complement Lee's solution in javascript