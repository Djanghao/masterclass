# Golang solution

**Author:** nathannaveen
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-number-of-operations-to-reinitialize-a-permutation/solutions/1253694/](https://leetcode.com/problems/minimum-number-of-operations-to-reinitialize-a-permutation/solutions/1253694/)

---

```
func reinitializePermutation(n int) int {
	perm := make([]int, n)
	res := 0

	for i := 0; i < n; i++ { perm[i] = i }
	
	arr := perm

	for res == 0 || !reflect.DeepEqual(arr, perm) {
		temp := make([]int, n)
		for i := 0; i < len(arr); i++ {
			if i % 2 == 1 { temp[i] = arr[n / 2 + (i - 1) / 2] } else { temp[i] = arr[i / 2] }
		}
		arr = temp
		res++
	}
	return res
}
```