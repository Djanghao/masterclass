# Go (golang) nice and simple

**Author:** amirashad
**Votes:** 3
**Link:** [https://leetcode.com/problems/print-words-vertically/solutions/484375/](https://leetcode.com/problems/print-words-vertically/solutions/484375/)

---




```
func printVertically(s string) (res []string) {
	arr := strings.Split(s, " ")
	for i, a := range arr {
		for t, c := range a {
			if t > len(res)-1 {
				res = append(res, "")
			}
			res[t] += strings.Repeat(" ", i-len(res[t])) + string(c)
		}
	}

	return
}
```