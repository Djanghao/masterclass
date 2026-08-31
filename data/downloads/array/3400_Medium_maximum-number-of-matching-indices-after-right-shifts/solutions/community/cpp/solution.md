# C++ solution

**Author:** OleksaM
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-number-of-matching-indices-after-right-shifts/solutions/6188546/](https://leetcode.com/problems/maximum-number-of-matching-indices-after-right-shifts/solutions/6188546/)

---

```
// Please, upvote if you like it. Thanks :-)
// TC - O(n * n)
// SC  - O(1)
int maximumMatchingIndices(vector<int>& nums1, vector<int>& nums2) {
	int res = 0, n = nums1.size();
	for (int shift = 0; shift < n; shift++) {
		int curNumMatching = 0;
		for (int i = 0; i < n; i++)
			if (nums1[i] == nums2[(i + shift) % n])
				curNumMatching++;
		res = max(res, curNumMatching);
	}
	return res;
}
```