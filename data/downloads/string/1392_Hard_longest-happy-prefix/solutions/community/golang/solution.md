# Go Solution

**Author:** Adamska1008
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-happy-prefix/solutions/3006968/](https://leetcode.com/problems/longest-happy-prefix/solutions/3006968/)

---

# Intuition
Obviously it's part of kmp algorithm. We do it in a dp way: get the "longest happy prefix" of each prefix.

# Approach
Define `next[]` array: the biggest `j` in prefix `s[:i+1]`(include `s[i]` and not include `s[i+1]`) that matches `s[:j+1]==s[i-j+1:i+1]` is `next[i]=j`. Basically it's the length of "longest happy prefix" of `s[:j+1]`.

We do it in a dp way:
1. In the beginning, we define `next[0]=-1`, because the prefix cannot be the string itself.
2. for each `i`, we got `j` in last iteration, which matches `s[i-1]==s[j]`, `next[i-1]=j`. 
    * We now sure that `s[:j+1]==s[i-j+1:i]`, if in the new iteration `s[j+1]==s[i]`, we get `next[i]=j+1`, fresh `j` and move to next iteration.
    * Chances are that `s[j+1]!=s[i]`, we need to shrink `j`, find smaller prefix that is the "happy prefix" of `s[:i+1]`.  
    * The "longest happy prefix" of `s[:i+1]` must shorter than `s[:j+1]`, actually, it is the same as "longest happy prefix" of `s[:j+1]`. Why? 
        * First it is the "happy prefix": combine `s[:j+1]==s[i-j+1:i]` and `s[:next[j]+1]==s[:j-next[j]+1]`, we get `s[:next[j]+1]==s[i-next[j]+1]`. 
        * Second it is the "longest", because it is the definition of `next`.
    * Then let `j = next[j]` and see if `s[i]==s[j+1]`, if not, do it again, until `j==-1` which means there's no more "happy prefix".
    * Whatever `j==-1`, `next[i]=j`.
    * If `s[i]==s[j+1]`, we should do `j++` first since we've been comparing `s[j+1]` all the time.

After the iteration, return `s[:next[n-1]+1]`. 

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
func longestPrefix(s string) string {
	n := len(s)
	next := make([]int, n)
	next[0] = -1
	for i, j := 1, -1; i < n; i++ {
		for j != -1 && s[i] != s[j+1] {
			j = next[j]
		}
		if s[i] == s[j+1] {
			j++
		}
		next[i] = j
	}
	return s[0 : next[n-1]+1]
}
```