# Go: solution and explaination with amortized O(1)

**Author:** oskarsh
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-uploaded-prefix/solutions/3351059/](https://leetcode.com/problems/longest-uploaded-prefix/solutions/3351059/)

---

# Complexity
- Time complexity: every `obj.Longest` call is $$O(1)$$, `obj.Upload` call can be up to $$O(n)$$. However, in summary $$m$$ (even if $$m > n$$) calls of `obj.Upload` can't do more than $$O(n)$$ iterations. Because of it we can say that a time complexity of `obj.Upload` is amortized $$\\frac{O(n)}{O(n)} = O(1)$$.

- Space complexity: $$O(n)$$.

# Code
```golang
type LUPrefix struct {
	longestPrefix int
	uploaded      []bool
}

func Constructor(n int) (obj LUPrefix) {
	obj.uploaded = make([]bool, n)
	return
}

func (this *LUPrefix) updateLongestPrefix() {
	// Shift this.longestPrefix to the first non-uploaded video.
	// Multiple calls of this function won't do more than `len(this.uploaded)` operations.

	for this.longestPrefix < len(this.uploaded) && this.uploaded[this.longestPrefix] {
		this.longestPrefix++
	}
}

func (this *LUPrefix) Upload(video int) {
	this.uploaded[video-1] = true
	this.updateLongestPrefix()
}

func (this *LUPrefix) Longest() int {
	// That variable is an answer as every `obj.Upload` triggers `obj.updateLongestPrefix`.
	return this.longestPrefix
}