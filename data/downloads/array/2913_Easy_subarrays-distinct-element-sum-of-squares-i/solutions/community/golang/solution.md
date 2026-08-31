# Python3/GoLang Solution - Sliding Window using Sets or Maps to track unique elements

**Author:** aaron_mathis
**Votes:** 0
**Link:** [https://leetcode.com/problems/subarrays-distinct-element-sum-of-squares-i/solutions/6012376/](https://leetcode.com/problems/subarrays-distinct-element-sum-of-squares-i/solutions/6012376/)

---

# Approach
Initialize a variable **arrayLength** for the length of the list/slice as well as a variable **squareCountSums** to track the total sum of the squares of all distinct values.

Use a sliding window approach to iterate throught he slice/list. You will use nested loops with two pointers, **start** and **end** to calculate the sliding window (subarray) of numbers.

For each window, you will use either a set(python) or a map struct(go) to track unique elements in the subarray. You will set **distinctCount** to the length of each unique element and then add the value of **distinctCount** squared to the **squareCountSums** total.

Finally, return **squareCountSums** as the answer.
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $$O(n ^ 2)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```golang []
func sumCounts(nums []int) int {

	// Calculate length of the nums list
	var arrayLength int = len(nums)

	// Initialize a variable to track the sum of the squares of all distinct counts of subarrays
	var squareCountSums int

	// Iterate over each possible starting point of subarrays
	for start := 0; start < arrayLength; start++ {
		// Use a map[int]struct to keep track of unique elements in the current subarray
		uniqueElements := map[int]struct{}{}

		// For each starting point, extend the subarray by moving the `end` pointer
		for end := start; end < arrayLength; end++ {
			// Add the current element to the set of unique elements
			uniqueElements[nums[end]] = struct{}{}

			// Calculate the distinct count by measuring the size of the unique elements set
			var distinctCount int = len(uniqueElements)

			// Square the distinct count and add it to the total sum
			squareCountSums += distinctCount * distinctCount
		}
	}

	// Return the accumulated sum of squares of distinct counts for all subarrays
	return squareCountSums
}
```
```python3 []
class Solution:
    def sumCounts(self, nums: List[int]) -> int:
        # Calculate length of the nums list
        arrayLength = len(nums)

        # Initialize a variable to track the sum of the squares of all distinct counts of subarrays
        squareCountSums = 0

        # Iterate over each possible starting point of subarrays
        for start in range(arrayLength):
            # Use a set to keep track of unique elements in the current subarray
            uniqueElements = set()
            
            # For each starting point, extend the subarray by moving the `end` pointer
            for end in range(start, arrayLength):
                # Add the current element to the set of unique elements
                uniqueElements.add(nums[end])
                
                # Calculate the distinct count by measuring the size of the unique elements set
                distinctCount = len(uniqueElements)
                
                # Square the distinct count and add it to the total sum
                squareCountSums += distinctCount ** 2

        # Return the accumulated sum of squares of distinct counts for all subarrays
        return squareCountSums
```
