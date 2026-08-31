# Detailed explanation

**Author:** sebnyberg
**Votes:** 1
**Link:** [https://leetcode.com/problems/numbers-at-most-n-given-digit-set/solutions/2781084/](https://leetcode.com/problems/numbers-at-most-n-given-digit-set/solutions/2781084/)

---

# Approach

Most of the approach is in the code, but I'll give a short rundown here, too.

## Numbers with fewer digits than n

Given a number `n`, there exists a set of numbers `x <= n` such that `len(x) < len(n)` and it consists only of valid digits.

For example, with `n = 786` and `digits = {1, 7}`, we have:

$$
\	exttt{x} \\Rightarrow  \\{ 1, 7 \\}
\\\\
\	exttt{xx} \\Rightarrow \\{ 11, 17, 71, 77 \\}
$$

These are easily counted by summing up `len(digits)^i` for each `i` where `i = 1, ..., len(n)-1`

## Numbers with the same amount of digits as n

Consider each digit `n[i]` from left to right.

For each valid digit smaller than `n[i]`, fix that digit in place and count valid numbers with that prefix.

Given `n = 786` and `digits = {1, 7}`. The only valid digit smaller than `7` is `1`, so we count values starting with 1:

$$
1\	exttt{xx} \\Rightarrow \\{ 111, 117, 171, 177 \\}
$$

Any other valid numbers must start with `7`, so we fix it in place (`7xx`) and continue to the second digit.

There are two valid digits smaller than `8`: `1` and `7`. So we count valid numbers starting with the prefixes `71x` and `77x`:

$$
71\	exttt{x} \\Rightarrow \\{ 711, 717 \\} \\\\
77\	exttt{x} \\Rightarrow \\{ 771, 777 \\}
$$

Now, because the digit in the second position is not a valid digit, then we must've counted all valid numbers. This is the stopping criteria.

# Complexity
- Time complexity: $$\	extrm{O}(\\log_{10}(n))$$ (length of n)
- Space complexity: $$\	extrm{O}(\\log_{10}(n))$$ (length of n)

# Code

```go
func atMostNGivenDigitSet(digits []string, n int) int {
	ds := strings.Join(digits, "")
	s := fmt.Sprint(n)
	var res int

	// Add all valid numbers with length < len(n)
	// For example, with n = 783 and digits = {1, 7} that would include
	// 1, 7, 11, 17, 71, 77
	combs := 1
	for j := len(s) - 1; j >= 1; j-- {
		combs *= len(ds)
		res += combs
	}

	// For each position i in s, calculate the number of valid numbers for which
	// the first digit is less than s[i]
	//
	// If the first digit is not a valid number, then it will have to be
	// reduced, in which case we are done.
	//
	// For example, with n = 783 and digits = {1, 7}
	//
	// add 1xx
	// continue with 7 fixed in place (7xx)
	//
	// add 71x
	// add 77x
	// 8 is not a valid number, so we stop
	//
	for i := 0; i < len(s); i++ {
		var j int
		for j < len(ds) && ds[j] < s[i] {
			res += combs
			j++
		}
		if j == len(ds) || s[i] != ds[j] {
			return res
		}
		combs /= len(ds)
	}
	// If we reached this far, then the entire number is valid
	// Count it, too
	return res + 1
}

```