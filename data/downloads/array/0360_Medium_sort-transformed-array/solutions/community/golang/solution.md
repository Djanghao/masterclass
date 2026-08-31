# Go Intuitive Solution

**Author:** xakjhd
**Votes:** 0
**Link:** [https://leetcode.com/problems/sort-transformed-array/solutions/3107191/](https://leetcode.com/problems/sort-transformed-array/solutions/3107191/)

---

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(n)

# Code
```
func sortTransformedArray(nums []int, a int, b int, c int) []int {
	transformed := make([]int, len(nums))

	if a > 0 {
		start, end, maxIndex := 0, len(nums)-1, len(nums)-1

		for start <= end {
			startTransformed := transform(nums[start], a, b, c)
			endTransformed := transform(nums[end], a, b, c)

			if startTransformed > endTransformed {
				transformed[maxIndex] = startTransformed
				start++
			} else {
				transformed[maxIndex] = endTransformed
				end--
			}
			maxIndex--
		}
	} else if a < 0 {
		start, end, minIndex := 0, len(nums)-1, 0

		for start <= end {
			startTransformed := transform(nums[start], a, b, c)
			endTransformed := transform(nums[end], a, b, c)

			if startTransformed < endTransformed {
				transformed[minIndex] = startTransformed
				start++
			} else {
				transformed[minIndex] = endTransformed
				end--
			}
			minIndex++
		}
	} else {
        if b > 0 {
		    for i := 0; i < len(nums); i++ {
			    transformed[i] = transform(nums[i], a, b, c)
		    }
        } else {
            for i := len(nums) - 1; i >= 0; i-- {
			    transformed[len(nums) - 1 - i] = transform(nums[i], a, b, c)
		    }
        }
	}
	return transformed
}

func transform(num, a, b, c int) int {
	return a*num*num + b*num + c
}
```