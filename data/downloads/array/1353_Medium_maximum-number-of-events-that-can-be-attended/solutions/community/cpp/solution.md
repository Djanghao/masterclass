# C++ | Intuition explained | Short | Multiset

**Author:** mehul170104047
**Votes:** 44
**Link:** [https://leetcode.com/problems/maximum-number-of-events-that-can-be-attended/solutions/896131/](https://leetcode.com/problems/maximum-number-of-events-that-can-be-attended/solutions/896131/)

---

Intuition:
* Let's say you are on day `i` right now. What is the best option you have? See what all events are on, and choose the one that ends the earliest so that you can attend the later ending event afterwards. Think of it like, why would you leave an event of short duration. It'll anyways get over soon. You can attend the later ending event after this if possible. Right?
* How to see which event is on? Maintain a multiset and store the end days of the events as you iterate. So sort the events by the start days.
* Do not forget to remove the events which have got over on `ith` day.

PS: This is really a nice problem. Not difficult, but the idea is nice.

```
class Solution {
public:
	static const bool mySort(vector<int> &a, vector<int> &b) {
		if (a[0] != b[0]) {
			return a[0] < b[0];
		}
		return a[1] < b[1];
	}

	int maxEvents(vector<vector<int>>& events) {
		sort(events.begin(), events.end(), mySort);

		int n = events.size();
		int ans = 0;
		int i = 0;

		multiset<int> s;
		for (int d = 1; d < 100001; ++d) {
			while (!s.empty() && *(s.begin()) < d) {
				s.erase(s.begin());
			}

			while (i < n && events[i][0] == d) {
				s.insert(events[i][1]);
				i++;
			}

			if (s.size() > 0) {
				ans++;
				s.erase(s.begin());
			}
		}

		return ans;

	}
};
```