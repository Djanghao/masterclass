# Easy to understand JavaScript solution (reduce)

**Author:** tzuyi0817
**Votes:** 3
**Link:** [https://leetcode.com/problems/maximum-ascending-subarray-sum/solutions/1430104/](https://leetcode.com/problems/maximum-ascending-subarray-sum/solutions/1430104/)

---

	var maxAscendingSum = function(nums) {
		const subarray = nums.reduce((acc, curr, index) => {
			curr > nums[index - 1] ? acc[acc.length - 1] += curr : acc.push(curr);
			return acc;
		}, []);

		return Math.max(...subarray);
	};