# [cpp] O(N) solution with detailed explanation

**Author:** insomniacat
**Votes:** 9
**Link:** [https://leetcode.com/problems/longest-well-performing-interval/solutions/334790/](https://leetcode.com/problems/longest-well-performing-interval/solutions/334790/)

---

This problem is similar to lc [525](https://leetcode.com/problems/contiguous-array/), and here's a [visual Explanation](https://leetcode.com/problems/contiguous-array/discuss/99655/Python-O(n)-Solution-with-Visual-Explanation). 
Every time we meet an hour <= 8, we decrease tmp by 1, and increase tmp by 1 when we meet an hour > 8. 
The only difference between this problem and 525 is that we can immediately update the interval value if our hours(```tmp```) from the beginning is positive. If the ```tmp``` is negative, we find the previous leftmost (```tmp - 1```)'s index ```prev``` to update the max value of interval. Because counting from index ```prev``` to `now`,  hours' sum = 1 and that's a valid interval.

**Complexity**
* Time: O(N)
* Space : O(N)

```
int longestWPI(vector<int>& hours) {
	int tmp = 0, ans = 0;
	unordered_map<int, int> hash;
	hash[0] = -1;
	for(int i = 0; i < hours.size(); ++i) {
		tmp += hours[i] > 8 ? 1 : -1;
		if(tmp > 0)
			ans = max(ans, i + 1);
		else {
			//We only need the previous negative tmp values' indexes since the postive ones can be calculated directly.
			if(hash.find(tmp - 1) != hash.end()) {
				int prev = hash[tmp - 1];
				ans = max(ans, i - prev);
			}
			if(hash.find(tmp) == hash.end())
				hash[tmp] = i;
		}
	}
	return ans;
}
```