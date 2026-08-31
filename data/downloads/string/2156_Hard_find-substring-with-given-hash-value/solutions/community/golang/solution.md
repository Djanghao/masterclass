# [Go] Sliding window & Be careful about modular arithmatic

**Author:** YUFENGWANG0
**Votes:** 2
**Link:** [https://leetcode.com/problems/find-substring-with-given-hash-value/solutions/1732709/](https://leetcode.com/problems/find-substring-with-given-hash-value/solutions/1732709/)

---

Make sure you can answer the following questions:
- What is the behavior of taking modulo of negative numbers?
	- i.e., a % m =? when a is a negative integer
- Does the result change when multiplying before and after taking a modulo?
	- i.e., p*(a % m) % m ==? (p*a) % m
- Can we do division with modulo?
	- i.e., (p*a) % m / p ==? a % m

```go
func subStrHash(s string, power int, m int, k int, hashValue int) string {
	n := len(s)
	h := (int(s[n-1]) - 96) % m
	p := 1
	ans := ""
	for i := n - 1; i-k+1 >= 0; i-- {
		if i == n-1 {
			for j := 1; j < k; j++ {
				h = (h*power%m + int(s[i-j]) - 96) % m
				p = p * power % m
			}
		} else {
			h = ((h-(int(s[i+1])-96)*p%m+m)*power + int(s[i-k+1]) - 96) % m
		}
		if h == hashValue {
			ans = s[i-k+1 : i+1]
		}
	}
	return ans
}
```