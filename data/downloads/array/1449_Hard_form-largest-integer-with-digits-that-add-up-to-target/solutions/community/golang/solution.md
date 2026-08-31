# Golang simple recursive + memo

**Author:** ylz-at
**Votes:** 1
**Link:** [https://leetcode.com/problems/form-largest-integer-with-digits-that-add-up-to-target/solutions/636639/](https://leetcode.com/problems/form-largest-integer-with-digits-that-add-up-to-target/solutions/636639/)

---

```
func largestNumber(cost []int, target int) string {
	data := map[int]string{}
	var dfs func(t int) string
	dfs = func(t int) string {
		if s, ok := data[t]; ok {
			return s
		} else {
			var res string
			for i := 0; i < len(cost); i++ {
				if cost[i] < t {
					next := dfs(t - cost[i])
					if len(next) > 0 {
						res = max(res, string('0'+i+1)+next)
					}
				} else if cost[i] == t {
					res = max(res, string('0'+i+1))
				}
			}
			data[t] = res
			return res
		}
	}
	res := dfs(target)
	if res == "" {
		return "0"
	}
	return res
}
func max(i, j string) string {
	if len(i) > len(j) {
		return i
	}
	if len(j) > len(i) {
		return j
	}
	if i > j {
		return i
	}
	return j
}
```