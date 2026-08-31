# 907. Sum of Subarray Minimums - Stack

**Author:** VladimirEliseev
**Votes:** 4
**Link:** [https://leetcode.com/problems/sum-of-subarray-minimums/solutions/4507676/](https://leetcode.com/problems/sum-of-subarray-minimums/solutions/4507676/)

---

# Approach
Stack

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
func sumSubarrayMins(arr []int) int {
// \u0418\u043D\u0438\u0446\u0438\u0430\u043B\u0438\u0437\u0438\u0440\u0443\u0435\u043C \u0441\u0442\u0435\u043A \u0438 \u043F\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0435
	// \u0418\u043D\u0438\u0446\u0438\u0430\u043B\u0438\u0437\u0438\u0440\u0443\u0435\u043C \u0441\u0442\u0435\u043A \u0438 \u043F\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0435
	stack, res, mod := []int{}, 0, 1000000007

	// \u041F\u0440\u043E\u0445\u043E\u0434\u0438\u043C \u043F\u043E \u043C\u0430\u0441\u0441\u0438\u0432\u0443
	for j := 0; j < len(arr); j++ {
		// \u041F\u043E\u043A\u0430 \u0441\u0442\u0435\u043A \u043D\u0435 \u043F\u0443\u0441\u0442 \u0438 \u0442\u0435\u043A\u0443\u0449\u0438\u0439 \u044D\u043B\u0435\u043C\u0435\u043D\u0442 \u043C\u0435\u043D\u044C\u0448\u0435 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430 \u043D\u0430 \u0432\u0435\u0440\u0448\u0438\u043D\u0435 \u0441\u0442\u0435\u043A\u0430,
		// \u0442\u043E \u0443\u0434\u0430\u043B\u044F\u0435\u043C \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u044B \u0438\u0437 \u0441\u0442\u0435\u043A\u0430
		for len(stack) > 0 && arr[j] < arr[stack[len(stack)-1]] {
			// \u0412\u044B\u0447\u0438\u0441\u043B\u044F\u0435\u043C \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u043F\u043E\u0434\u043C\u0430\u0441\u0441\u0438\u0432\u043E\u0432, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0437\u0430\u043A\u0430\u043D\u0447\u0438\u0432\u0430\u044E\u0442\u0441\u044F \u043D\u0430 \u0442\u0435\u043A\u0443\u0449\u0438\u0439 \u044D\u043B\u0435\u043C\u0435\u043D\u0442
			mid := stack[len(stack)-1]
			stack = stack[:len(stack)-1]
			left := -1
			if len(stack) > 0 {
				left = stack[len(stack)-1]
			}
			right := j
			count := (mid - left) * (right - mid) % mod
			res += (arr[mid] * count) % mod
			res %= mod
		}

		// \u0414\u043E\u0431\u0430\u0432\u043B\u044F\u0435\u043C \u0442\u0435\u043A\u0443\u0449\u0438\u0439 \u044D\u043B\u0435\u043C\u0435\u043D\u0442 \u0432 \u0441\u0442\u0435\u043A
		stack = append(stack, j)
	}

	// \u041E\u0431\u0440\u0430\u0431\u0430\u0442\u044B\u0432\u0430\u0435\u043C \u043E\u0441\u0442\u0430\u0432\u0448\u0438\u0435\u0441\u044F \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u044B \u0432 \u0441\u0442\u0435\u043A\u0435
	right := len(arr)
	for len(stack) > 0 {
		mid := stack[len(stack)-1]
		stack = stack[:len(stack)-1]
		left := -1
		if len(stack) > 0 {
			left = stack[len(stack)-1]
		}
		count := (mid - left) * (right - mid) % mod
		res += (arr[mid] * count) % mod
		res %= mod
	}

	return res
}
```