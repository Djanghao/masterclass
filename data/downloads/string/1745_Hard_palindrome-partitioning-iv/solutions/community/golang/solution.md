# [Go] 1D DP, O(n^2) time, O(n) memory

**Author:** sebnyberg
**Votes:** 0
**Link:** [https://leetcode.com/problems/palindrome-partitioning-iv/solutions/3599478/](https://leetcode.com/problems/palindrome-partitioning-iv/solutions/3599478/)

---

Other solutions here use 2d DP, so I'll post my version which uses O(n) space rather than O(n^2).

The idea is to reverse the string, then do string comparisons to pre-compute `left[l]` and `right[r]`, where each signifies whether the segment `s[:l]` and `s[r:]` are palindromes, respectively.

Then for each valid center segment, test whether the segment and left/right are valid palindromes.



# Code

```go
func checkPartitioning(s string) bool {
	// If we split the string into three valid palindromes, one must be at the
	// center. Figuring out whether s[:l] is a palindrome is relatively easy.
	// Same with right side. If we memoize both (O(n)) we can test every
	// possible middle string against its sides to see if the three are valid.
	//
	buf := []byte(s)
	for l, r := 0, len(s)-1; l < r; l, r = l+1, r-1 {
		buf[l], buf[r] = buf[r], buf[l]
	}
	rev := string(buf)
	n := len(s)

	// isPalindrome(i, j) returns whether s[i:j] is a palindrome
	isPalindrome := func(i, j int) bool {
		m := j - i
		k := m / 2
		l := s[i : i+k]
		r := rev[n-j : n-j+k]
		return l == r
	}

	left := make([]bool, n)
	for i := 1; i < n; i++ {
		left[i] = isPalindrome(0, i)
	}

	right := make([]bool, n)
	for i := n - 1; i >= 2; i-- {
		right[i] = isPalindrome(i, n)
	}

	for l := 1; l < n-1; l++ {
		for r := n - 1; r > l; r-- {
			if left[l] && right[r] && isPalindrome(l, r) {
				return true
			}
		}
	}

	return false
}

```