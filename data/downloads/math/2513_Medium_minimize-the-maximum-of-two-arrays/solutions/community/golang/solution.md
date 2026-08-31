# 😊Runtime 1 ms  Beats 90.00% of users with Go

**Author:** pvt2024
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimize-the-maximum-of-two-arrays/solutions/5141539/](https://leetcode.com/problems/minimize-the-maximum-of-two-arrays/solutions/5141539/)

---

# Code
```
func gcd(n1, n2 int64) int64 {
	if n1 == 0 {
		return n2
	}
	if n2 == 0 {
		return n1
	}
	return gcd(n2, n1%n2)
}

func lcm(n1, n2 int64) int64 {
	return (n1 * n2) / gcd(n1, n2)
}

func minimizeSet(d1, d2, c1, c2 int) int {
	s, e := int64(1), int64(math.Pow(10, 10))
	var m1, m2, m3 int64

	for s < e {
		mid := (s + e) / 2
		m1 = mid - mid/int64(d1)
		m2 = mid - mid/int64(d2)
		m3 = mid - mid/lcm(int64(d1), int64(d2))

		if m1 >= int64(c1) && m2 >= int64(c2) && m3 >= int64(c1+c2) {
			e = mid
		} else {
			s = mid + 1
		}
	}

	return int(s)
}
```