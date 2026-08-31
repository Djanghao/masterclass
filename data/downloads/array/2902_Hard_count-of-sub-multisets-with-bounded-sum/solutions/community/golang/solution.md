# Go - Dynamic Programming Knapsack + Prefix Sum Solution

**Author:** erni27
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-of-sub-multisets-with-bounded-sum/solutions/4248491/](https://leetcode.com/problems/count-of-sub-multisets-with-bounded-sum/solutions/4248491/)

---

# Intuition
The problem equals to slightly modified *Knapsack*. It can be solved using the *Dynamic Programming* approach, very similar to *Coin Change* problem(s).
```
func countSubMultisets(nums []int, l int, r int) int {
	multiset := make(map[int]int)
	for _, num := range nums {
		multiset[num]++
	}
	mem := make([]int, r+1)
	mem[0] = 1
	for num, occ := range multiset {
		for sum := r; sum >= 0; sum-- {
			var ways int
			for c := 0; c <= occ && sum-num*c >= 0; c++ {
				ways = (ways + mem[sum-num*c]) % mod
			}
			mem[sum] = ways
		}
	}
	var result int
	for sum := l; sum <= r; sum++ {
		result = (result + mem[sum]) % mod
	}
	return result
}

var mod int = 1e9 + 7
```
The above solution yields pseudo-polynomial time complexity $$O(r \\cdot n)$$, where $$n$$ is the length of the input array. It results in TLE though for last test case(s).
One can improve the running time by relying on the problem constraint saying: $$sum(nums) \\le 2\\cdot 10^4$$. Since the nums consists of non-negative integers, we expect the limited number of unique elements, hence a lot of duplicates.

# Approach
1. Store all unique elements and their frequency in the *HashMap*.
2. Initialize the cache $$mem$$, where $$mem[sum]$$ equals to the number of sub-multisets summing up to the $$sum$$.
3. Base Case: $$mem[0]=1$$ (there is at least 1 sub-multisets summing up to 0, empty one).
4. Iterate through all unique elements.
4.1. Calculate the *Prefix Sum* based on the current cache state.
4.2. Calculate the number of sub-multisets summing up to each $$sum \\in <0, r>$$ based on the *Prefix Sum*. Be careful with 0 element(s)!

# Complexity
- Time complexity:
$$O(r\\cdot u)$$, where $$u$$ is the number of unique elements in the input array.

- Space complexity:
$$O(r+u)$$.

# Code
```
func countSubMultisets(nums []int, l int, r int) int {
	multiset := make(map[int]int)
	for _, num := range nums {
		multiset[num]++
	}
	mem := make([]int, r+1)
	mem[0] = 1
	prefix := make([]int, len(mem))
	for num, occ := range multiset {
		copy(prefix, mem)
		for sum := num; sum <= r; sum++ {
			prefix[sum] = (prefix[sum] + prefix[sum-num]) % mod
		}
		for sum := r; sum >= 0; sum-- {
			if num > 0 {
				mem[sum] = prefix[sum]
				if sum >= num*(occ+1) {
					mem[sum] = (mem[sum] - prefix[sum-num*(occ+1)] + mod) % mod
				}
			} else {
				mem[sum] = (mem[sum] * (occ + 1)) % mod
			}
		}
	}
	var result int
	for sum := l; sum <= r; sum++ {
		result = (result + mem[sum]) % mod
	}
	return result
}

var mod int = 1e9 + 7
```