# Easy javascript

**Author:** singh_swetabh
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-number-of-special-subsequences/solutions/1385146/](https://leetcode.com/problems/count-number-of-special-subsequences/solutions/1385146/)

---

Reference : https://leetcode.com/problems/count-number-of-special-subsequences/discuss/1375380/Easy-DP-solution-with-explanation-Python3-C%2B%2B

```
var countSpecialSubsequences = function (nums) {

	let mod = Math.pow(10,9) + 7;

	let dp = [1,0,0,0];
	for(let item of nums){
		dp[item+1] += (dp[item+1] + dp[item]);
		dp[item+1]%= mod
	}
	return dp[dp.length-1]
}
```