# JavaScript Solution - TopDown

**Author:** Deadication
**Votes:** 14
**Link:** [https://leetcode.com/problems/target-sum/solutions/733276/](https://leetcode.com/problems/target-sum/solutions/733276/)

---

```
var findTargetSumWays = function(nums, S) {
    const memo = new Map();
    const n = nums.length;
    
    return countWaysToSum(n - 1, S);
    
    function countWaysToSum(index, rem) {
        const key = `${index}#${rem}`;
        
        // base case         
        if (index < 0) {
			if (rem === 0) return 1;
			return 0;
        }
        if (memo.has(key)) return memo.get(key);
        
        const plus = countWaysToSum(index - 1, rem + nums[index]) 
		const minus = countWaysToSum(index - 1, rem - nums[index]);
	    const count = plus + minus;
	
        memo.set(key, count);
        
        return count;
    }
};
```