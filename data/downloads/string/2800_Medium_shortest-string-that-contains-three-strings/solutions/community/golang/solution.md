# Go solution

**Author:** Ari09
**Votes:** 1
**Link:** [https://leetcode.com/problems/shortest-string-that-contains-three-strings/solutions/3836720/](https://leetcode.com/problems/shortest-string-that-contains-three-strings/solutions/3836720/)

---


# Code
```

// This function takes two strings 'a' and 'b' as input and returns a string that
// is formed by merging 'a' and 'b' in such a way that if 'b' is a substring of 'a',
// then 'a' is returned as the result. Otherwise, it tries to find the longest common
// suffix of 'a' and prefix of 'b' and merges them accordingly.
func mergeStrings(a, b string) string {
	// Check if 'b' is a substring of 'a'
	if strings.Contains(a, b) {
		return a
	}
	
	// Find the length of the shortest string among 'a' and 'b'
	for i := min(len(a), len(b)); i >= 0; i-- {
		// Check if the suffix of 'a' and prefix of 'b' match
		if a[len(a)-i:] == b[:i] {
			// If there is a match, merge 'a' and 'b' accordingly and return the result
			return a + b[i:]
		}
	}
	
	// If there is no common suffix and prefix, simply concatenate 'a' and 'b' and return
	return a + b
}

// This function takes three strings 'a', 'b', and 'c' as input and tries to find the
// minimum length string that can be formed by merging these three strings together.
func minimumString(a, b, c string) string {
	// Create a slice containing the three input strings
	arr := []string{a, b, c}
	n := len(arr)
	ans := ""
	
	// Iterate through all possible combinations of 'a', 'b', and 'c'
	for i := 0; i < n; i++ {
		for j := 0; j < n; j++ {
			for k := 0; k < n; k++ {
				// Ensure that 'a', 'b', and 'c' are all distinct
				if i != j && j != k && i != k {
					// Merge 'a' and 'b' first
					s1 := mergeStrings(arr[i], arr[j])
					// Then merge the result with 'c'
					s2 := mergeStrings(s1, arr[k])
					
					// Check if the merged string 's2' is smaller than the current minimum
					// If it is smaller or equal in length and lexicographically smaller, update the answer
					if ans == "" || len(s2) < len(ans) || (len(s2) == len(ans) && strings.Compare(s2, ans) < 0) {
						ans = s2
					}
				}
			}
		}
	}
	
	// Return the minimum length string formed by merging 'a', 'b', and 'c'
	return ans
}

// This function returns the minimum of two integers 'a' and 'b'.
func min(a, b int) int {
	if a < b {
		return a
	}
	return b
}

```