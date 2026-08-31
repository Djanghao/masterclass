# C++ solution binary search

**Author:** OleksaM
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-seconds-to-make-mountain-height-zero/solutions/5844966/](https://leetcode.com/problems/minimum-number-of-seconds-to-make-mountain-height-zero/solutions/5844966/)

---

```
// Please, upvote if you like it. Thanks :-)
long long minNumberOfSeconds(int mntHeight, vector<int>& workerTimes) {
	long long l = 1, r = 100000000000LL * mntHeight / workerTimes.size();
	while (l < r) {
		long long mid = l + (r - l) / 2, height = 0;
		for (const int& t : workerTimes) {
			height += (sqrt(mid / t * 2 + 0.25) - 0.5);
		}
		if (height < mntHeight)
			l = mid + 1;
		else
			r = mid;
	}
	return l;
}
```