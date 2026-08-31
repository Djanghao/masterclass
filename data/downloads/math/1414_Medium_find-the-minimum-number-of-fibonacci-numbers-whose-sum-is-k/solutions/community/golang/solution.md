# Golang solution faster than 100% with explanation

**Author:** nathannaveen
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-the-minimum-number-of-fibonacci-numbers-whose-sum-is-k/solutions/1073249/](https://leetcode.com/problems/find-the-minimum-number-of-fibonacci-numbers-whose-sum-is-k/solutions/1073249/)

---

The idea of this solution is to get the fibonacci sequence and then subtract the greatest numbers of the sequence from `k` until `k == 0`.

Someone might not understand why I only have one `1` in the array `arr`. We don't need two `1`'s because they are both the same value.

I have a variable called `index` and it is for getting the `index` of the greatest fibonacci numbers that are smaller than `k`.

```
func findMinFibonacciNumbers(k int) int {
	res, a, b := 0, 1, 1
	arr := []int{1}
	for b <= k {
		a, b = b, a+b
		arr = append(arr, b)
	}
	index := len(arr) - 1
	for k > 0 {
		if k >= arr[index] {
			res++
			k -= arr[index]
			continue
		}
		index--
	}

	return res
}
```