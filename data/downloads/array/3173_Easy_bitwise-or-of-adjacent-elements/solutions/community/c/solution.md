# C++ solution

**Author:** OleksaM
**Votes:** 0
**Link:** [https://leetcode.com/problems/bitwise-or-of-adjacent-elements/solutions/5268721/](https://leetcode.com/problems/bitwise-or-of-adjacent-elements/solutions/5268721/)

---

```
// Please, upvote if you like it. Thanks :-)
vector<int> orArray(vector<int>& nums) {
	vector<int> res(nums.size() - 1);
	for (int i = 0; i < nums.size() - 1; i++)
		res[i] = nums[i] | nums[i + 1];
	return res;
}
```