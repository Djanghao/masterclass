# linear ^^

**Author:** andrii_khlevniuk
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-positions-on-street-with-required-brightness/solutions/2037191/](https://leetcode.com/problems/count-positions-on-street-with-required-brightness/solutions/2037191/)

---

![image](./images/0.png)

The algo reminds delta-functions technique in physics.

**time: `O(N)`; space: `O(N)`**
```
int meetRequirement(int n, vector<vector<int>>& l, vector<int>& r)
{
	int t[100001]{};
	for(const auto & i : l)
		++t[max(0, i[0]-i[1])], --t[min(100000, i[0]+i[1]+1)];

	int out{};
	for(int i{}, b{}; i<n; ++i)
		out += (b+=t[i])>=r[i];
	return out;
}
```
[Here's](https://leetcode.com/problems/brightest-position-on-street/discuss/2037354/sorting) similar problem.