# [ Go Solution ] Great explanation and Full Description

**Author:** sansaian
**Votes:** 1
**Link:** [https://leetcode.com/problems/max-sum-of-a-pair-with-equal-sum-of-digits/solutions/4244756/](https://leetcode.com/problems/max-sum-of-a-pair-with-equal-sum-of-digits/solutions/4244756/)

---

# Function: maximumSum
The `maximumSum` function finds the maximum sum of two numbers such that they have the same digit sum.

## Parameters
- `nums` ([]int): An array of integers to evaluate.

## Return Value
- (int): The maximum sum of any two numbers with the same digit sum. If no such pair exists, returns -1.

## Methodology
The function uses a hash map to store the maximum two numbers for each possible sum of digits. It iterates through the given array, calculates the digit sum of each number, and updates the map accordingly to always hold the two largest numbers for each digit sum. It also keeps track of the current maximum sum of such a pair.

### Steps
1. Initialize a hash map `store` that maps an integer (sum of digits) to a slice of integers (the numbers with that digit sum).
2. Initialize an integer `result` to `-1` to store the maximum sum found.
3. Iterate through each number in `nums`.
4. For each number, calculate the sum of its digits by calling the helper function `calculateSum`.
5. Check if the digit sum already exists in the map:
    - If it does not exist, add the number to the map.
    - If it exists, add the current number to the slice, sort the slice in descending order, and retain only the top two numbers.
6. Update the map with the latest two largest numbers for the current digit sum.
7. If at least two numbers exist for the current digit sum, calculate their sum and update `result` if this sum is greater than the current `result`.
8. Return `result` after iterating through all numbers.

## Auxiliary Functions
### calculateSum
Calculates the sum of digits of an integer `n`.
- **Parameters**: `n` (int) - The number whose digits will be summed.
- **Return Value**: (int) - The sum of the digits of `n`.

### max
Finds the maximum of two integers `a` and `b`.
- **Parameters**: `a` (int), `b` (int) - The two integers to compare.
- **Return Value**: (int) - The larger of `a` and `b`.

## Complexity Analysis
- **Time Complexity**: O(n * k * log k), where `n` is the number of elements in `nums` and `k` is the maximum number of elements with the same digit sum. `k * log k` is due to the sorting operation for each digit sum.
- **Space Complexity**: O(n), where `n` is the number of elements in `nums`, used by the hash map to store the values.


## Code
```go
func maximumSum(nums []int) int {
	// Map to store the maximum two numbers for each digit sum
	store := make(map[int][]int)
	result := -1

	for _, n := range nums {
		digitSum := calculateSum(n)

		// Check if there are already values for this digit sum
		values, exists := store[digitSum]
		if !exists {
			// If not, just add the number to the store
			store[digitSum] = []int{n}
		} else {
			// Otherwise, update the existing values
			values = append(values, n) // Add the current number to the values

			// Sort the values to have the largest numbers at the beginning
			sort.Sort(sort.Reverse(sort.IntSlice(values)))

			// Keep only the two largest numbers if there are more than two
			if len(values) > 2 {
				values = values[:2]
			}

			// Save back to the store
			store[digitSum] = values

			// Also, update the result if we have at least two numbers
			if len(values) > 1 {
				result = max(result, values[0]+values[1])
			}
		}
	}

	return result
}

// Helper function to calculate the sum of digits of a number
func calculateSum(n int) int {
	sum := 0
	for n != 0 {
		sum += n % 10
		n /= 10
	}
	return sum
}

// Helper function to find the maximum of two integers
func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}
```
