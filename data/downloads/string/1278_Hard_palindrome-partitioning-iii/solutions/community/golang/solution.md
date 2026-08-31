# Go Dynamic Programming Deatil Explanation with Example: beats 100%

**Author:** zf6cag5dpe71czpk
**Votes:** 0
**Link:** [https://leetcode.com/problems/palindrome-partitioning-iii/solutions/6114663/](https://leetcode.com/problems/palindrome-partitioning-iii/solutions/6114663/)

---

# Palindrome Partitioning III - Detailed Explanation

## Short Summary
The goal is to partition a string `s` into `k` palindromic substrings with the minimum number of character changes. The solution involves:
1. Precomputing the cost of turning any substring into a palindrome (`pld[i][j]`).
2. Using dynamic programming to calculate the minimum cost of partitioning the string into `k` palindromic substrings (`ret[i][kk]`).
3. Efficiently combining subproblems to achieve optimal results in `O(k * n^2)`.

---

# Detailed Explanation of Key Concepts

## 1. Calculating the Cost to Make s[i:j+1] a Palindrome

When computing `pld[i][j]`, we calculate the minimum number of character changes needed to make the substring `s[i:j+1]` a palindrome:
- If `s[i] == s[j]`, no change is needed for these characters, and the cost is the same as the inner substring `s[i+1:j]`:
  ```
  pld[i][j] = pld[i+1][j-1]
  ```
- If `s[i] != s[j]`, we need to change one of the characters `s[i]` or `s[j]` to make them equal. The cost is `pld[i+1][j-1] + 1`:
  ```
  pld[i][j] = pld[i+1][j-1] + 1
  ```

### Example:
For `s = "abc"`, the substring `s[0:2] = "abc"`:
- Inner substring `s[1:1] = "b"` is already a palindrome (`pld[1][1] = 0`).
- Since `s[0] = 'a'` and `s[2] = 'c'` differ, one change is needed. Thus:
  ```
  pld[0][2] = pld[1][1] + 1 = 0 + 1 = 1
  ```

---

## 2. Calculating the Minimum Cost to Partition s[:i+1] into kk+1 Palindromic Groups

The dynamic programming state `ret[i][kk]` represents the minimum cost to partition the substring `s[:i+1]` into `kk+1` palindromic substrings. The formula is:
```
ret[i][kk] = min(ret[j][kk-1] + pld[j+1][i]) for all j < i
```

### Explanation:
1. **Split Position j**:
   - Split `s[:i+1]` at `j`, dividing it into:
     - `s[:j+1]`: The prefix, which is partitioned into `kk` groups (`ret[j][kk-1]`).
     - `s[j+1:i+1]`: The suffix, which is turned into a palindrome (`pld[j+1][i]`).
2. **Minimizing Cost**:
   - For each split position `j`, calculate the total cost and take the minimum.

### Example:
For `s = "abc", k = 2`:
1. **Precompute pld**:
   - `pld[1][2] = 1`: Change `"bc"` to `"bb"`.
   - `pld[0][2] = 1`: Change `"abc"` to `"aba"`.

2. **Compute ret[2][1]**:
   - Split `s[:3] = "abc"` into 2 groups:
     - Split at `j = 0`: Prefix `s[:1] = "a"`, suffix `s[1:3] = "bc"`:
       ```
       ret[0][0] + pld[1][2] = 0 + 1 = 1
       ```
     - Split at `j = 1`: Prefix `s[:2] = "ab"`, suffix `s[2:3] = "c"`:
       ```
       ret[1][0] + pld[2][2] = 1 + 0 = 1
       ```
   - Take the minimum:
     ```
     ret[2][1] = min(1, 1) = 1
     ```

---

## Summary
- `pld[i][j]`: The cost to make `s[i:j+1]` a palindrome.
- `ret[i][kk]`: The minimum cost to partition `s[:i+1]` into `kk+1` palindromic groups.
- Dynamic programming ensures efficient computation by reusing subproblem results.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(k * n^2)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(n^2)

# Code
```golang []
func palindromePartition(s string, k int) int {
	n := len(s)
	pld := make([][]int, n)
	for i := range pld {
		pld[i] = make([]int, n)
	}

	for i := 0; i < n; i++ {
		pld[i][i] = 0
	}
	for i := 0; i < n-1; i++ {
		if s[i] == s[i+1] {
			pld[i][i+1] = 0
		} else {
			pld[i][i+1] = 1
		}
	}

	for l := 3; l <= n; l++ {
		for i := 0; i+l-1 < n; i++ {
			if s[i] == s[i+l-1] {
				pld[i][i+l-1] = pld[i+1][i+l-2]
			} else {
				pld[i][i+l-1] = pld[i+1][i+l-2] + 1
			}
		}
	}

	ret := make([][]int, n)
	for i := range ret {
		ret[i] = make([]int, k)
	}
	for i := range ret {
		ret[i][0] = pld[0][i]
	}

	for kk := 1; kk < k; kk++ {
		for i := 0; i < n; i++ {
			ret[i][kk] = n - 1
			for j := 0; j+1 <= i; j++ {
				ret[i][kk] = min(ret[i][kk], ret[j][kk-1]+pld[j+1][i])
			}
		}
	}
	return ret[n-1][k-1]
}

```