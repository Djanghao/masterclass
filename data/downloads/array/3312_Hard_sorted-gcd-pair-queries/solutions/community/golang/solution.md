# Go Solution | Inclusion-exclusion Principle | Prefix Sum | Binary Search

**Author:** ConstantineJin
**Votes:** 0
**Link:** [https://leetcode.com/problems/sorted-gcd-pair-queries/solutions/5884446/](https://leetcode.com/problems/sorted-gcd-pair-queries/solutions/5884446/)

---

# Intuition
Preprocess to find the number of times each GCD occurs. Then get the answer by using binary search.

# Complexity
- Time complexity: $O(U\	ext{log}U), U=max(nums)$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $O(U)$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```golang []
func gcdValues(nums []int, queries []int64) []int {
	mx := slices.Max(nums)
	freq := make([]int, mx+1)
	for _, v := range nums {
		freq[v]++
	}
	cntGcd := make([]int, mx+1)
	for i := mx; i > 0; i-- {
		var c int
		for j := i; j <= mx; j += i {
			c += freq[j]
			cntGcd[i] -= cntGcd[j]
		}
		cntGcd[i] += c * (c - 1) / 2 // select two numbers from c numbers
	}
	for i := 2; i <= mx; i++ {
		cntGcd[i] += cntGcd[i-1] // prefix sum
	}
	ans := make([]int, len(queries))
	for i, query := range queries {
		ans[i] = sort.SearchInts(cntGcd, int(query)+1)
	}
	return ans
}
```