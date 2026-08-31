# Better GoLang Support?

**Author:** FreddieMercy
**Votes:** 1
**Link:** [https://leetcode.com/problems/strobogrammatic-number-ii/solutions/67278/](https://leetcode.com/problems/strobogrammatic-number-ii/solutions/67278/)

---

I have the following GoLang code TLE when the input is "13". However I ran it locally and it only costed milliseconds. I couldn't figure out why so I re-wrote the code in Java and it just passed all test cases with no itch. 

```
func findStrobogrammatic(n int) []string {
	ans := []string{""}
	if n%2 == 1 {
		ans = []string{"0", "1", "8"}
	}
	for i := n%2 + 2; i <= n; i += 2 {
		var tmp []string
		for _, j := range ans {
			if i != n {
				tmp = append(tmp, []string{"0" + j + "0", "1" + j + "1", "8" + j + "8", "9" + j + "6", "6" + j + "9"}...)
			} else {
				tmp = append(tmp, []string{"1" + j + "1", "8" + j + "8", "9" + j + "6", "6" + j + "9"}...)
			}

		}
		ans = tmp
	}
	return ans
}
```