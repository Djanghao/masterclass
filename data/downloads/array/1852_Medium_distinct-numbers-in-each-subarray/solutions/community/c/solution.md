# C++ solution Sliding window

**Author:** OleksaM
**Votes:** 0
**Link:** [https://leetcode.com/problems/distinct-numbers-in-each-subarray/solutions/3672851/](https://leetcode.com/problems/distinct-numbers-in-each-subarray/solutions/3672851/)

---

```
vector<int> distinctNumbers(vector<int>& nums, int k) {
	int n = nums.size();
	vector<int> res(n - k + 1);
	map<int, int> freq;
	for (int i = 0; i < k; i++)
		freq[nums[i]]++;
	res[0] = freq.size();
	for (int i = k; i < n; i++) {
		freq[nums[i]]++;
		if (--freq[nums[i - k]] == 0)
			freq.erase(nums[i - k]);
		res[i - k + 1] = freq.size();
	}
	return res;
}
```