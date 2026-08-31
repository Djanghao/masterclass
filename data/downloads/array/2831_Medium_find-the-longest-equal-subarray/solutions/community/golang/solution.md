# Golang : Sliding Window

**Author:** harshawasthi90
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-the-longest-equal-subarray/solutions/3934039/](https://leetcode.com/problems/find-the-longest-equal-subarray/solutions/3934039/)

---

```
func longestEqualSubarray(nums []int, k int) int {
	dict := map[int][]int{}

	for i, num := range nums {
		dict[num] = append(dict[num], i)
	}

	ans := 1
	for _, arr := range dict {
		k1 := k
		l := 0

		for r := 1; r < len(arr); r++ {
			k1 -= arr[r] - arr[r-1] - 1

			for k1 < 0 {
				k1 += arr[l+1] - arr[l] - 1
				l++
			}

			ans = maxI(ans, r-l+1)
		}
	}

	return ans
}
```