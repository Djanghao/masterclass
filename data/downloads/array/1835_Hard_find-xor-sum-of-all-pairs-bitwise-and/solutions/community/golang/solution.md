# Examine each bit for result

**Author:** kaiphan
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-xor-sum-of-all-pairs-bitwise-and/solutions/5439866/](https://leetcode.com/problems/find-xor-sum-of-all-pairs-bitwise-and/solutions/5439866/)

---

# Intuition
- For XOR operation, result will be 1 if the number of 1 bits is **odd**, and 0 if that is **even**

# Approach
- We can calculate the number of 1 bit at each position for result, if it is odd, set bit at that position 1
- Here, input in range `1 to 10^9`, which means it fits into 32 bits integer (30 for more specific), so we use a loop to evaluate each bit
- The number of 1 bits will be `count1*count2`, with `count1` is number of 1 in `i-th` bit in arr1 and `count2` is that in arr2. Note that here i use `c1 ^= 1` with each 1 bit found to imply that 1 is odd and 0 is even, use can use `c1++` and then check odd by `c1*c2`

# Complexity
- Time complexity: O(n+m)

- Space complexity: O(1)

# Code
```
func getXORSum(arr1 []int, arr2 []int) int {
	var xor int
	for i := 0; i < 30; i++ {
		var c1, c2 int
		for _, n := range arr1 {
			if n&(1<<i) != 0 {
				c1 ^= 1
			}
		}
		for _, n := range arr2 {
			if n&(1<<i) != 0 {
				c2 ^= 1
			}
		}
		if c1&c2 == 1 {
			xor ^= 1 << i
		}
	}
	return xor
}
```