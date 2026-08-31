# Efficient Divisor Counting: A Square Root Approach

**Author:** yalexaner
**Votes:** 0
**Link:** [https://leetcode.com/problems/four-divisors/solutions/5193368/](https://leetcode.com/problems/four-divisors/solutions/5193368/)

---

# Approach
Initially, the algorithm I came up with tried to iterate through every number from 2 to `num - 1` and check if it is a divisor of `num`. But it can be optimized to iterate much less.

If a number `num` is divided by a divisor `i`, the resulting quotient `num/i` is also a divisor of `num`. These divisors are symmetrical, with `i` being the current divisor and `num/i` being the divisor at the same position from the end.

Based on this, we only need to iterate up to the square root of `num`. This way we can find all divisors in pairs. As soon as the current divisor exceeds the square root of `num`, there are no more divisors to check and we can stop the iteration.

If it is clear that there will be more than four divisors for the current `num`, we shouldn't find more divisors for this `num` and break the loop.


# Complexity
- Time complexity: $$O(n * sqrt(m))$$
- Space complexity: $$O(1)$$

# Code
```
func sumFourDivisors(nums []int) int {
	var result int

	for _, num := range nums {
		if num < 6 {
			continue
		}

		sum := 1 + num
		divisors := 2

		for i := 2; i < num; i++ {
			start := i
			end := num / i

			if start > end {
				break
			}

			if num%i != 0 {
				continue
			}

			if start == end {
				sum += start
				divisors++
			} else {
				sum += start + end
				divisors += 2
			}

			if divisors > 4 {
				break
			}
		}

		if divisors == 4 {
			result += sum
		}
	}

	return result
}
```