# An organic first-principles Center Expansion approach

**Author:** andrew86
**Votes:** 0
**Link:** [https://leetcode.com/problems/palindrome-partitioning-ii/solutions/5871126/](https://leetcode.com/problems/palindrome-partitioning-ii/solutions/5871126/)

---

# Intuition

Center Expansion always seemed like the most intuitive way to approach this problem when you think about the definition of a palindrome.

We know 1 letter strings are palindromes

Let's try to organically build the solution from first principles, using only the facts we know.

We can initialize our solutions array to describe solutions from 0..i at each index -- i.e. the minimum number of cuts if the string were to end at the current index.

For the string `aab` our solutions matrix would look like: 

`0, 1, 2` which maps to `a | a | b`

Let's say we know for the string `aa` - the minimum number of cuts is 0.

Our solutions matrix would be `0, 0, 2`

And then we throw in a new letter `b` into the mix.

If the palindrome `b` is part of the final solution; then the minimum number of cuts here at index 2 would be: `1 + cuts[start-1]`

`solutions[2] = 1 + solutions[2 - 1] = 1` which describes the final answer - `a a | b`

# Approach

There are two ways to check if something is a palindrome in a manner where we are "building it up" 

A

B A B

C B A B C

If we know `substr[left-1..right-1]` is a substring & `substr[left] == substr[right]`; then `substr[left..right]` is a palindrome!

But you will also realize that the above only approach only captures odd-length palindromes. What about even numbered ones? 

A B B A

For even numbered palindromes; the center **two** have to match. 

E.g. We can't start with AB as the center; and add characters on either end and end up with a palindrome. It must be AA or BB or CC etc.

With the facts that we know; we can start to build the solution.

This approach cuts the unintuitive parts of the other solutions -- i.e. the `-1` at `dp[0]`, the counterintuitive indexing.

# Complexity
- Time complexity:

O(n^2)

- Space complexity:

O(n)

# Code
```golang []
func minCut(s string) int {
	// solutions holds min cuts from 0..i
	// inclusive; we start off assuming the worst;
	// nothing is a palindrome; max cuts
	cuts := make([]int, len(s))
	for i := 0; i < len(s); i++ {
		cuts[i] = i
	}

	// let's assume that each index is the center
	// of a palindrome, and expand it outwards
	for center := 0; center < len(s); center++ {
		// for odd length palindromes
		expandOut(s, center, center, cuts)

		// for even length palindromes
		if center > 0 && s[center-1] == s[center] {
			expandOut(s, center-1, center, cuts)
		}
	}

	return cuts[len(cuts)-1]
}

func expandOut(s string, centerLeft int, centerRight int, cuts []int) {
	for k := 0; k < len(s); k++ {
		start := centerLeft - k
		end := centerRight + k

		if start < 0 || end >= len(s) || s[start] != s[end] {
			return
		}

		if s[start] == s[end] {
			// we need this!
			// because 1 + cuts[start-1] will panic
			// b/c of cuts[-1].
            // it's kinda a base case? because if 
            // start == 0 & the whole thing is a palindrome
            // 0 cuts!
			if start == 0 {
				cuts[end] = 0
				continue
			}

			cuts[end] = min(cuts[end], 1+cuts[start-1])
		}
	}
}
```