# 21-lines Python greedy solution

**Author:** bobby569
**Votes:** 14
**Link:** [https://leetcode.com/problems/maximum-number-of-non-overlapping-substrings/solutions/743402/](https://leetcode.com/problems/maximum-number-of-non-overlapping-substrings/solutions/743402/)

---

```python
def maxNumOfSubstrings(self, s: str) -> List[str]:
	tmp = {c: [s.index(c), s.rindex(c)+1] for c in set(s)}
	# find all the correct boundries
	pairs = []
	for c in set(s):
		l = tmpl = tmp[c][0]
		r = tmpr = tmp[c][1]
		while True:
			t = set(s[tmpl:tmpr])
			for k in t:
				tmpl = min(tmpl, tmp[k][0])
				tmpr = max(tmpr, tmp[k][1])
			if (tmpl, tmpr) == (l, r):
				break
			l, r = tmpl, tmpr
		pairs.append([l, r])

	# greedily find the optimal solution
	# similar to find the maximum number of meetings
	pairs.sort(key=lambda x: x[1])
	res, last = [], 0
	for b, e in pairs:
		if b >= last:
			res.append(s[b:e])
			last = e
	return res
```

Thanks @iamlockon for suggestions.