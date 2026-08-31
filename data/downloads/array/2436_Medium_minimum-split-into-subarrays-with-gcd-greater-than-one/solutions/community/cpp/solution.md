# C++ solution

**Author:** OleksaM
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-split-into-subarrays-with-gcd-greater-than-one/solutions/5917861/](https://leetcode.com/problems/minimum-split-into-subarrays-with-gcd-greater-than-one/solutions/5917861/)

---

```
// Please, upvote if you like it. Thanks :-)
int minimumSplits(vector<int>& nums) {
	int res = 1;
	for (int i = 1, curGCD = nums[0]; i < nums.size(); i++) {
		curGCD = __gcd(curGCD, nums[i]);
		if (curGCD == 1) {
			curGCD = nums[i];
			res++;
		}
	}
	return res;
}
```