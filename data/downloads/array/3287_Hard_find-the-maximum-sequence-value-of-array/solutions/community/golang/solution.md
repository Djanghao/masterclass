# Go solution

**Author:** fvadev
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-maximum-sequence-value-of-array/solutions/5789750/](https://leetcode.com/problems/find-the-maximum-sequence-value-of-array/solutions/5789750/)

---

# Intuition

<!-- Describe your first thoughts on how to solve this problem. -->
By the limitaion - each value is less than 128. So it is make an idea to use set/hash some how.

Another part of problem - the subsequence should be the same order it may lead to thin about prefixes.


# Approach
<!-- Describe your approach to solving the problem. -->

So, solution uses left and right prefix of OR subsequences. So `prefixLeft[i]` stores flags for all possable 127 variants that are exists in combinations of k elements left from index. The same idea for `prefixRight`. 

For preparing `prefix(Left|Right)` slices `dp(Left|Right)` are used. These slices store information about all possible subset from k elements. So for some position `i` on the string `dpLeft[j]` - stores all possible subsets from k-elements which till the `i`-th letter in the string. The same idea for `dpRight[j]` but it stores subsets from the tail to `len(s)-i` position.

It is possible to use map instead of `[128]bool` here, but seems it will be slower.

# Complexity
- Time complexity:
-   $$O(n*k)$$, n - length of array 
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
-   $$O(n)$$, n - length of array 
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```golang []
func maxValue(nums []int, k int) int {
	n := len(nums)

	prefixLeft, dpLeft := newPrefix(n), newPrefix(k)
	prefixRight, dpRight := newPrefix(n), newPrefix(k)
	for i, val := range nums {
		for j := k; j > 0; j-- {
			dpLeft.add(j, val)
			dpRight.add(j, nums[n-1-i])
            prefixLeft.set(i+1, dpLeft.get(k))
            prefixRight.set(i+1, dpRight.get(k))
		}
	}

	result := 0
	for i := k; i < n-k+1; i++ {
		for left, ok1 := range prefixLeft.data[i] {
			for right, ok2 := range prefixRight.data[n-i] {
				if ok1 && ok2 {
					result = max(result, left^right)
				}
			}
		}
	}

	return result
}

const maxVal = 128

type setSubsequences = [maxVal]bool

type prefix struct {
	data []setSubsequences
}

func newPrefix(n int) *prefix {
	data := make([]setSubsequences, n+1)
    data[0][0] = true // allow to add each elements to subset[1]
	return &prefix{data: data}
}

func (p *prefix) get(k int) setSubsequences {
	return p.data[k]
}

func (p *prefix) add(j int, val int) {
	for x := 0; x < maxVal; x++ {
		if p.data[j-1][x] {
			p.data[j][x|val] = true
		}
	}
}

func (p *prefix) set(j int, set setSubsequences) {
	for key, ok := range set {
        p.data[j][key] = ok
    }
}
```