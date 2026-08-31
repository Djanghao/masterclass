# Easy Solution In Golang (Single Loop, Two-pointer, Fast)

**Author:** maxchagin
**Votes:** 2
**Link:** [https://leetcode.com/problems/valid-mountain-array/solutions/6031675/](https://leetcode.com/problems/valid-mountain-array/solutions/6031675/)

---

# Intuition
Two pointers, i and j, can be used to simulate the climb and descent of the mountain from both ends of the array.

# Approach
### 1. Initial Checks:

If the array has fewer than 3 elements, it cannot be a mountain array, so we immediately return false.

### 2. Two-pointer Technique:

Initialize two pointers: i starting from the beginning, and j from the end of the array.
Move i to the right until the elements are no longer strictly increasing.
Similarly, move j to the left until the elements are no longer strictly decreasing.
Both pointers should move at least one step away from their start points to avoid immediate false positives where i or j doesn\u2019t move at all, indicating no peak.

### 3. Check for Valid Peak:

Ensure that both pointers have converged at the same peak point, i == j, which confirms the existence of a valid mountain array.

### 4. Edge Cases:

Ensure that i is not at the start and j is not at the end, which would indicate no valid peak exists.

### 5. Time Complexity:

Since we traverse the array at most twice linearly, the time complexity is O(n), where n is the number of elements in the array.


# Code
```golang []
func validMountainArray(arr []int) bool {
	if len(arr) <= 2 {
		return false
	}
	i := 0
	j := len(arr) - 1
	for c := 0; c < len(arr); c++ {
		if arr[i] < arr[i+1] {
			i++
		}
		if arr[j] < arr[j-1] {
			j--
		}
		if j == len(arr)-1 || i == 0 {
			return false
		}
		if i == j {
			return true
		}

	}
	return false
}
```