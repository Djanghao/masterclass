# Easy JavaScript solution using Set() beats 99.46%

**Author:** singh_swetabh
**Votes:** 16
**Link:** [https://leetcode.com/problems/continuous-subarray-sum/solutions/1329183/](https://leetcode.com/problems/continuous-subarray-sum/solutions/1329183/)

---

```
var checkSubarraySum = function (nums, k) {

	let sum = 0
	
	let prefix = 0;
	
	const hash = new Set();
	
	for (let i = 0; i < nums.length; i++) {
		sum += nums[i]

		if (k != 0) sum %= k

		if(hash.has(sum)) return true

		hash.add(prefix);
		prefix = sum;
	}
	return false
};
```
