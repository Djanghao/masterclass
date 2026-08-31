# Two pointers, explained

**Author:** sebnyberg
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-number-of-moves-to-make-palindrome/solutions/1822101/](https://leetcode.com/problems/minimum-number-of-moves-to-make-palindrome/solutions/1822101/)

---

Use a left pointer `l` and right pointer `r`.

Each iteration we move both pointers one step inwards.

If `s[l] == s[r]`, then continue.

If `s[l] != s[r]`, then some number of swaps must happen to bring the right character in place.

How do we know that there isn't some other character that is not in the first or last position that is optimal?

Well, wherever that character may be, it must be *inside* the interval`[l,r]`. 
Also, it must have a matching (or be the odd one out), and that matching is also *inside* `[l,r]`.
Matching the character later must therefore be better than swapping the character out towards `l`, and `r`

```go
func minMovesToMakePalindrome(s string) int {
	n := len(s)
	bs := []byte(s)
	var swaps int
	for l, r := 0, n-1; l < r; l, r = l+1, r-1 {
		if bs[l] == bs[r] {
			continue
		}
		// ll is l's closest counterpart on the right side
		var ll int
		for ll = r; ll > l && bs[ll] != bs[l]; ll-- {
		}
		// rr is r's closest counterpart on the left side
		var rr int
		for rr = l; rr < r && bs[rr] != bs[r]; rr++ {
		}
		if r-ll < rr-l {
			// Keep bs[l], move bs[ll] into position
			swaps += r - ll
			copy(bs[ll:], bs[ll+1:])
		} else {
			// Keep bs[r], move bs[rr] into position
			swaps += rr - l
			copy(bs[1:], bs[:rr])
		}
	}

	return swaps
}
```
