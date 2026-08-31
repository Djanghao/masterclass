# javascript O(N) easy understand faster than 70%

**Author:** sindyxin
**Votes:** 13
**Link:** [https://leetcode.com/problems/max-consecutive-ones-ii/solutions/688147/](https://leetcode.com/problems/max-consecutive-ones-ii/solutions/688147/)

---

	var findMaxConsecutiveOnes = function(nums) {
		let left = 0, right = 0, K = 1;

		while(right < nums.length) {
			if(nums[right] === 0) K--;
			if(K < 0) {
				if(nums[left] === 0) K++;
				left++;
			}
			right++;
		}
		return right-left;
	};