# Go Solution, DP Tabulation - O(m*n) - Annotated

**Author:** hjrand1005
**Votes:** 9
**Link:** [https://leetcode.com/problems/regular-expression-matching/solutions/3103833/](https://leetcode.com/problems/regular-expression-matching/solutions/3103833/)

---

#### Tabulation

```go
func isMatch(s string, p string) bool {
	// 1.
    table := make([][]bool, len(s)+1)
    for i := 0; i < len(table); i++ {
        table[i] = make([]bool, len(p)+1)
    }
    table[0][0] = true
    
	// 2.
    for j := 2; j < len(p)+1; j++ {
        if p[j-1] == '*' {
            table[0][j] = table[0][j-2]
        }
    }
    
	// 3.
    for i := 1; i < len(s)+1; i++ {
        for j := 1; j < len(p)+1; j++ {
            if s[i-1] == p[j-1] || p[j-1] == '.' {
				// 4.
                table[i][j] = table[i-1][j-1]
            } else if p[j-1] == '*' { 
                // 5.
				empty := table[i][j-2]
                nonempty := (s[i-1] == p[j-2] || p[j-2] == '.') && table[i-1][j]
                table[i][j] = empty || nonempty
            }
        }
    }
    
	// 6.
    return table[len(s)][len(p)]
}
```

1. Allocate a 2D boolean matrix with `len(s)+1` rows and `len(p)+1` columns. Throughout the solution, let `i` represent the row index and `j` represent the column index. The motivation for using this matrix is to compose (tabulate) our solution. We want to enforce the rule that for some `i` and some `j`, `table[i][j]` represents the answer to whether string `s[:i]` matches pattern `p[:j]`. `table[0][0]` represents the valid matching of the empty string `""` and the empty pattern `""`, thus we can set `table[0][0] = true`. 


2. We'd like to iterate through each row and determine which patterns match the string at row index `i`. However, we must first determine which patterns match the empty string (represented by row 0). It's only possible for patterns ending wtih `*` to match the empty string, becuase for some pattern  `x*` where `x` is some valid character, the empty string `""` is also a match. At each index `j` where `p[j-1] == '*'` (remember that the 0 index represents the empty string, thus `j` is one greater than typical string indexing) we can set `table[0][j]` to the result found for `table[0][j-2]`, which is what remains after removing the empty representation of the pattern.


3.  Now we may iterate through our substrings, and for each iterate through each possible sub-pattern. Note that it is unnecessary to iterate through column `0` because no non-empty string matches an empty pattern, nor do we need to iterate through row `0` since we did this in step 2. There are two possible cases at each string-pattern combination: 4. and 5.


4.  Case A: The last character in the string `s[i-1]` matches the last character in the pattern `p[j-1]` -- this can occur when the characters are equivalent or the last pattern character is `.`. In this case, we the result of this comparison must equal to the already computed result for the substring / subpattern `s[:i-1]` and `p[:j-1]`. Thus `table[i][j]` is assigned the result at `table[i-1][j-1]`.   


5.  Case B: The last character in the pattern `p[j-1]` is equal to `'*'`. In this case, the pattern may be considered a match when `'*'` and its preceding character represent the empty set `""` (already computed at `table[i][j-2]`) or some non-empty set, in which case the last character in our substring must match the preceding character `p[j-2]` AND the substring `s[:i-1]` must be a valid match to the same pattern. Thus `table[i][j]` is valid if either the empty or nonempty matched pattern matches the substring.


6.  The result is the dynamically computed result for our full input string and pattern at `table[len(s)][len(p)]`.

#### Memoization

```go
type pair struct {
    s, p string
}

func isMatch(s string, p string) bool {
	// 1. 
    cache := map[pair]bool{
        pair{"", ""}: true,
    }
    
	// 2. 
    var matches func(s, p string) bool
    matches = func(s, p string) bool {
		// 3. 
        if cache[pair{s, p}] {
            return true
        }
        if p == "" {
            return false
        }
        
        match := false
        if p[len(p)-1] == '*' {
			// 4. 
            match = match || matches(s, p[:len(p)-2])
            idx := len(s)-1
            for 0 <= idx && (s[idx] == p[len(p)-2] || p[len(p)-2] == '.') {
                match = match || matches(s[:idx], p[:len(p)-2])
                idx--
            }
        } else if s != "" && (s[len(s)-1] == p[len(p)-1] || p[len(p)-1] == '.') {
			// 5. 
            match = match || matches(s[:len(s)-1], p[:len(p)-1])
        }
        
		// 6. 
        cache[pair{s, p}] = match
        return match
    }
    
	// 7.
    return matches(s, p)
}
```

1. Define a cache that can be used to lookup whether a given pair is a valid match. We know that the empty string - empty pattern pair is a valid match, so set it to `true`. This will also serve as our initial base case. 

2. Define a nested function `matches` that can be called recursively. By nesting the function we give it access to the `isMatch()` scoped `cache` map.

3. Check the base cases. If the validity for pair `s, p` has already been computed, return it. If the pattern `p` is empty but `s` is not, we can be certain that the pattern is invalid, and return `false`.  

4. If the last character in our pattern is `*`, we must compute the validity of each substring for which `x*` matches its suffix, where `x` is the second to last character in pattern `p`. Start by computing the case where `x*` represents the empty suffix, and then try every valid non-empty suffix in for loop.  

5. Check the last characters of `s` and `p`. If they are a match, i.e. the last character of `p` is either equivalent to the last character of `s` or the special character `.`, then compute the match for the substring up to the last characters of both `s` and `p`.
6. Finally, store the result of the pair `s, p` in the cache.

7. Call matches on the full length string and pattern `s` and `p`.