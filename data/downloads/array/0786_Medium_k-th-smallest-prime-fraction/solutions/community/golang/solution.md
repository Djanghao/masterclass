# GO

**Author:** mrbaloch555
**Votes:** 1
**Link:** [https://leetcode.com/problems/k-th-smallest-prime-fraction/solutions/5137519/](https://leetcode.com/problems/k-th-smallest-prime-fraction/solutions/5137519/)

---


# Code
```
func kthSmallestPrimeFraction(arr []int, k int) []int {
	fractionsArray := [][]float64{}

	for i := 0; i < len(arr); i++ {
		for j := i; j < len(arr); j++ {
			if j > i {
				frac := float64(float64(arr[i]) / float64(arr[j]))
				fractionsArray = append(fractionsArray, []float64{float64(arr[i]), float64(arr[j]), float64(frac)})
			}
		}
	}
	sort.Slice(fractionsArray, func(i, j int) bool {
		return fractionsArray[i][2] < fractionsArray[j][2]
	})
	res := []int{}
	for _, val := range fractionsArray[k-1][:2] {
		res = append(res, int(val))
	}
	return res
}
```