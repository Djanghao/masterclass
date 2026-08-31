# C++ solution

**Author:** OleksaM
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-operations-to-make-array-values-equal-to-k/solutions/6128679/](https://leetcode.com/problems/minimum-operations-to-make-array-values-equal-to-k/solutions/6128679/)

---

```
// Please, upvote if you like it. Thanks :-)
// TC - O(n)
// SC - O(n)
int minOperations(vector<int>& nums, int k) {
	vector<int> v(101, 0);
	for (const int& n : nums)
		v[n]++;
	int res = 0;
	for (int i = 100; i >= 1; i--) {
		if (v[i] > 0) {
			if (i > k)
				res++;
			else if (i < k)
				return -1;
		}
	}
	return res;
}
```