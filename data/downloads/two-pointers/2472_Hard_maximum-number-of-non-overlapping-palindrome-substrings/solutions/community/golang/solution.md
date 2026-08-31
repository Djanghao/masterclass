# DP solution in Go

**Author:** mesge
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-non-overlapping-palindrome-substrings/solutions/5086634/](https://leetcode.com/problems/maximum-number-of-non-overlapping-palindrome-substrings/solutions/5086634/)

---

# Intuition
1. Find all the valid palindromes i.e. any palindromic sequence that is at least as long as k
2. Expressed as intervals along a line we can greedily find those that do not overlap. Greedy algorithm means we optimise space along the line to allow room for more palindromes.
3. Count them

# Approach
Used a 2D matrix where x,y positions map to positions in the string where a palindrome starts and ends. Matrix lets us look at previously computed palindromes to assert palindrome when s[x] (start) and s[y] (end) chars are the same, and s[x-1] and s[y-1] are also the same, with special conditions for palindromes of length 1 (always palindromic) or 2 (only when both chars are the same).

# Code
```
import (
	"sort"
)

type interval struct {
	start, end int
}

// disjointIntervals is a greedy algorithm to find non-overlapping intervals along a line.
func disjointIntervals(intervals []interval) []interval {
	// First we sort the intervals by their end positions
	sort.Slice(intervals, func(a, b int) bool { return intervals[a].end < intervals[b].end })
	// Now we can walk over the sorted intervals discarding those that overlap with the next.
	// If the start of the interval is less than the end of the last we can be sure they do not overlap.
	// By picking early we've also optimised space along the line to find more non-overlapping intervals.
	var res []interval
	lastEnd := -1
	for _, i := range intervals {
		if i.start > lastEnd {
			res = append(res, i)
			lastEnd = i.end
		}
	}
	return res
}

// validPalindromicIntervals returns intervals along string s that represent
// start and end positions of a palindrome that is at least length k.
func validPalindromicIntervals(s string, k int) []interval {
	n := len(s)
	// Store valid palindromes as intervals
	var valid []interval

	// Make a square table to store start and end positions for all palindromes
	table := make([][]bool, n)
	for i := range table {
		table[i] = make([]bool, n)
	}

	// Now walk over the string and find all palindromes for all possible lengths,
    // marking their positions and appending to the valid list if they're longer than k.
	for pLength := 1; pLength <= n; pLength++ {
		for y := 0; y <= n-pLength; y++ {
			x := y + pLength - 1
			if pLength == 1 {
				table[y][x] = true
			} else if pLength == 2 {
				table[y][x] = (s[y] == s[x])
			} else {
				table[y][x] = (s[y] == s[x]) && table[y+1][x-1]
			}

			if table[y][x] && pLength >= k {
				valid = append(valid, interval{y, x})
			}
		}
	}
	return valid
}

func maxPalindromes(s string, k int) int {
	// We want to find the maximum number of non-overlapping palindromic
	// sequences in a string that are at least length k.
	//
	// It's in 3 parts
	// 1. We find all the palindromes of at least length k expressed as intervals along the sequences of chars in s
	// 2. We greedily find those that do not overlap
	// 3. We count the result
	return len(
		disjointIntervals(
			validPalindromicIntervals(s, k),
		),
	)
}
```