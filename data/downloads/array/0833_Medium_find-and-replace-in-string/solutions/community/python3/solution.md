# [Python] SIMPLE Forward O(N) Solution (32ms / 97%)

**Author:** kevinhynes
**Votes:** 59
**Link:** [https://leetcode.com/problems/find-and-replace-in-string/solutions/315827/](https://leetcode.com/problems/find-and-replace-in-string/solutions/315827/)

---

First, create a dictionary that maps the index in `indexes` to its pair of strings in `sources` and `targets`.

Iterate through `S`, looking up the current index `i` to see if we can perform a replacement.  Take a slice of `S` at our current index to see if it `.startswith()` the source string.  If so, we perform a "replacement" by adding the target string to our `result` and incrementing `i` by the length of the source string.

If `i` isn't in `indexes` then just add a single character to `result` and move on.

```
def findReplaceString(self, S: str, indexes: List[int], sources: List[str], targets: List[str]) -> str:
	lookup = {i: (src, tgt) for i, src, tgt in zip(indexes, sources, targets)}
	i, result = 0, ""
	while i < len(S):
		if i in lookup and S[i:].startswith(lookup[i][0]):
			result += lookup[i][1]
			i += len(lookup[i][0])
		else:
			result += S[i]
			i += 1
	return result
```

### Time Complexity
* Let `N = len(S)` and `M = len(indexes)`
* Building `lookup` ---> `O(M)`
* Building `result` ---> `O(N)`

### Space Complexity
* Building `lookup` ---> `O(M)`
* Building `result` ---> `O(N)`