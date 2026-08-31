# Go Solution | O(n) | Explanation

**Author:** zell_dev
**Votes:** 6
**Link:** [https://leetcode.com/problems/minimum-number-of-operations-to-make-array-empty/solutions/4501972/](https://leetcode.com/problems/minimum-number-of-operations-to-make-array-empty/solutions/4501972/)

---

**Step 1: Create a Frequency Map**
Initialize a map occurMap to keep track of the occurrences of each number in the nums array.
Iterate through the nums array, incrementing the count of each number in occurMap.

**Step 2: Iterate and Calculate Operations**
Initialize a variable "operations" to count the minimum number of operations required.
Loop through the values in occurMap. For each value (number of occurrences of a number in nums):
- If any value equals 1, return -1 immediately, as it's impossible to satisfy the problem's conditions.
- Otherwise, increment operations by the ceiling of the division of the value by 3. 
 (This is done to count how many times a group of 3 can be formed from the occurrences of each number.)

**Step 3: Return the Total Number of Operations**
After iterating through all values in occurMap, operations contains the total minimum number of operations required to satisfy the condition. Return the value of the "operations".

```
func minOperations(nums []int) int {
	occurMap := make(map[int]int)

	for _, val := range nums {
		occurMap[val]++
	}

	operations := 0
	for _, val := range occurMap {
		if val == 1 {
			return -1
		}
		operations += int(math.Ceil(float64(val) / 3.0))
	}

	return operations
}
```

If you found it helpful, please consider giving it an upvote! It'll motivate me to share more solutions in the future. If you have any questions or suggestions, please let me know. Happy coding!