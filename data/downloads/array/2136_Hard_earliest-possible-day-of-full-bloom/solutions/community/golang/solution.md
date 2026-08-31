# Python and Golang Greedy

**Author:** hong_zhao
**Votes:** 2
**Link:** [https://leetcode.com/problems/earliest-possible-day-of-full-bloom/solutions/2754098/](https://leetcode.com/problems/earliest-possible-day-of-full-bloom/solutions/2754098/)

---

```python
class Solution:
    def earliestFullBloom(self, plantTime: List[int], growTime: List[int]) -> int:
        times = sorted(zip(growTime, plantTime), reverse=True)
        day = res = 0
        for g, p in times:
            day += p
            res = max(res, day + g)
        return res
```
```go
func earliestFullBloom(plantTime []int, growTime []int) int {
	type pair struct {
		plant, grow int
	}
	ts := make([]pair, len(plantTime))
	for i := range plantTime {
		ts[i] = pair{plantTime[i], growTime[i]}
	}
	sort.Slice(ts, func(i, j int) bool {
		return ts[i].grow > ts[j].grow
	})
	day, res := 0, 0
	for _, t := range ts {
		day += t.plant
		n := day + t.grow
		if n > res {
			res = n
		}
	}
	return res
}
```