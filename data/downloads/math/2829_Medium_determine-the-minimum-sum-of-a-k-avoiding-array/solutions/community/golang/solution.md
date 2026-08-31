# Using Set Golang

**Author:** thinkchar
**Votes:** 0
**Link:** [https://leetcode.com/problems/determine-the-minimum-sum-of-a-k-avoiding-array/solutions/3967450/](https://leetcode.com/problems/determine-the-minimum-sum-of-a-k-avoiding-array/solutions/3967450/)

---



# Code
```
func minimumSum(n int, k int) int {
   set := hashset.New()
	for i := 1; set.Size() != n; i++ {
		if !set.Contains(k - i) {
			set.Add(i)
		}
	}
	var a int
	for _, v := range set.Values() {
		a += v.(int)
	}
  return a
}
```