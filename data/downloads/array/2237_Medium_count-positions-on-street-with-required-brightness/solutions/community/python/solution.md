# Python Line Sweep

**Author:** WangQiuc
**Votes:** 4
**Link:** [https://leetcode.com/problems/count-positions-on-street-with-required-brightness/solutions/1954514/](https://leetcode.com/problems/count-positions-on-street-with-required-brightness/solutions/1954514/)

---

Have a counter `ctr` to track each `IN` event and `OUT` event. 
Basically `ctr[light_left_range] += 1`, `ctr[light_right_range+1] -= 1`
Then the prefix sum array of this `ctr` just indicates the number of light covering at each index. 
```
def meetRequirement(n, lights, requirement: List[int]) -> int:
	ctr = [0] * (n+1)
	for c, r in lights:
		ctr[max(0,c-r)] += 1
		ctr[min(c+r+1,n)] -= 1
	return sum(cnt>=req for cnt, req in zip(accumulate(ctr), requirement))
```

Updated: as [@KC19920313](https://leetcode.com/KC19920313/) points out, sorting is not required.