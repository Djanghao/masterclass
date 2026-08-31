# 🔥 GO XOR  🔥 || Simple Fast and Easy || with Explanation 😈

**Author:** ayoubzulfiqar
**Votes:** 7
**Link:** [https://leetcode.com/problems/single-number-ii/solutions/3715772/](https://leetcode.com/problems/single-number-ii/solutions/3715772/)

---

# \uD83D\uDD25 GO XOR \uD83D\uDD25 || Simple Fast and Easy || with Explanation \uD83D\uDE08


#### Algorithm Explanation
The given algorithm is used to find a single number in a list of integers where all other numbers appear twice except for the single number. It uses bitwise operations to achieve this.

The algorithm maintains two variables, `ones` and `twos`, to keep track of the occurrences of the numbers in the list. The `ones` variable represents the bits that have appeared once, while the `twos` variable represents the bits that have appeared twice.

The algorithm iterates through the list of numbers. For each number, it performs bitwise operations to update the `ones` and `twos` variables. The specific operations used are XOR (^) and bitwise negation (~).

At the end of the iteration, the value of `ones` will represent the single number that appeared only once in the list.

#### Space Complexity

The algorithm uses a constant amount of extra space. It only requires two integer variables (`ones` and `twos`) to keep track of the bit occurrences. Therefore, the space complexity is O(1).

#### Time Complexity

The algorithm iterates through the entire list of numbers once, performing constant time operations for each number. Thus, the time complexity is O(n), where n is the length of the input list.

The algorithm's time complexity is linear, making it an efficient solution for finding the single number in the given context.

```go
func singleNumber(nums []int) int {
	var ones int = 0
	var twos int = 0

	for i := 0; i < len(nums); i++ {
		var number int = nums[i]
		ones ^= (number & ^twos)
		twos ^= (number & ^ones)
	}

	return ones
}
```
## [GitHub](https://github.com/ayoubzulfiqar/leetcode)