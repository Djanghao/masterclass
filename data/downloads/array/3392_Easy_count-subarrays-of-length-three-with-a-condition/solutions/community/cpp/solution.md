# C++ simple and short solution

**Author:** OleksaM
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-subarrays-of-length-three-with-a-condition/solutions/6171309/](https://leetcode.com/problems/count-subarrays-of-length-three-with-a-condition/solutions/6171309/)

---

```
// Please, upvote if you like it. Thanks :-)
// Note: we are interested only in even numbers in the middle.
// TC - O(n)
// SC - O(1)
int countSubarrays(vector<int>& nums) {
	int res = 0, n = nums.size();
	for (int i = 1; i + 1 < n; i++)
		if (nums[i - 1] + nums[i + 1] == nums[i] / 2 && nums[i] % 2 == 0)
			res++;
	return res;
}
```