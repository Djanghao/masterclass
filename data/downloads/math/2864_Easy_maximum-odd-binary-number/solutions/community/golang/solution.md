# Go one-liner

**Author:** dxxxdk
**Votes:** 4
**Link:** [https://leetcode.com/problems/maximum-odd-binary-number/solutions/4804041/](https://leetcode.com/problems/maximum-odd-binary-number/solutions/4804041/)

---

# Approach
We need an odd number => the [LSB](https://en.wikipedia.org/wiki/Bit_numbering#Least_significant_bit) must be a `1`. The constrains guarantee its existance.
We need the maximum number => the string should start with all  other `1` characters. We can fill the in-between with `0`.

# Complexity
- Time complexity: `O(n)`
But, yes, we could optimize it by computing the counts in a single loop.

- Space complexity: `O(n)`

# Code
```
func maximumOddBinaryNumber(s string) string {
	return strings.Repeat("1", strings.Count(s, "1")-1) + strings.Repeat("0", strings.Count(s, "0")) + "1"
}

```