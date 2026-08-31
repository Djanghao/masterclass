# go. 0ms. Math. Easy and clean

**Author:** sobik
**Votes:** 2
**Link:** [https://leetcode.com/problems/mirror-reflection/solutions/2380220/](https://leetcode.com/problems/mirror-reflection/solutions/2380220/)

---

```
func gcd(a, b int) int {
	if a == 0 || a == b { return b }
	if b == 0 { return a }
	if a > b {
		return gcd(a - b, b)
	} else {
		return gcd(a, b - a)
	}
}

func lcm(a, b int) int {
	return a*b / gcd(a, b)
}

func mirrorReflection(p int, q int) int {
	lcm := lcm(p, q)
	m := lcm / p
	n := lcm / q
	return 1 + m % 2 - n % 2
}
```