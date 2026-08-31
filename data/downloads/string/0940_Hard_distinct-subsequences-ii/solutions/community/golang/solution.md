# O(n) DP with explanation

**Author:** sebnyberg
**Votes:** 0
**Link:** [https://leetcode.com/problems/distinct-subsequences-ii/solutions/2800389/](https://leetcode.com/problems/distinct-subsequences-ii/solutions/2800389/)

---

# Intuition

The problem description, in particular the modulo, tells us that we can't keep track of the contents of substrings. We must find a way a simpler way to represent the distinct substrings.

When it "clicked" for me was when I considered the second `a` in a really long string with two `a`s:

```
****a*****a****...
```

It's clear that any substring formed **at or after** the prevous `a` must be valid for `a` to append to.

Similarly, any substring formed **before** the first `a` is not valid to append to. Why? Because the prevous `a` has already formed those substrings.

Finally, there's a special case in the first instance of any character where it forms a new unique substring of length 1.

# Approach

Keep track of how many unique substrings existed before the previous occurrence of a certain character.

We append the current character to all prior substrings **except** those that existed prior to the previous occurrence.

To solve the special case of the first occurrence forming a new string, we can use a sentinel `-1` value.

# Complexity

- Time complexity: $$\\mathrm{O}(n)$$
- Space complexity: $$\\mathrm{O}(1)$$

# Code

```go
func distinctSubseqII(s string) int {
	var prevCount [26]int
	for i := range prevCount {
		prevCount[i] = -1
	}
	const mod = 1e9 + 7
	var prev int
	var res int
	for _, ch := range s {
		res = (res*2 - prevCount[ch-'a'] + mod) % mod
		prevCount[ch-'a'] = prev
		prev = res
	}
	return res % mod
}
```