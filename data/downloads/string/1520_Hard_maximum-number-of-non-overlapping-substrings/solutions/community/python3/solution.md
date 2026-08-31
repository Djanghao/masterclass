# Python Easy to Read solution with explanation

**Author:** sexylol
**Votes:** 33
**Link:** [https://leetcode.com/problems/maximum-number-of-non-overlapping-substrings/solutions/744726/](https://leetcode.com/problems/maximum-number-of-non-overlapping-substrings/solutions/744726/)

---

This is a slightly modified version based on the discussion here
https://leetcode.com/problems/maximum-number-of-non-overlapping-substrings/discuss/743402/21-lines-Python-greedy-solution

[Explanation]
1. Get the first and last occurance of each characters
2. For the range of each letter, we need to update the range according to all the characters within the range. For example: `abab` we would have the initial range as `a: [0,2], b: [1:3]`. Since the range of `a` which is `[0,2]` will include `b`, we need to update the range of `a` to also include all occurances of `b` as well. 
3. Finally, we sort all the ranges according to it's `end` (since we want to take smallest range possible) and take as much as we can as long as the `start` of the current range is `>=` the `end` of the previous range.

[Time/Space]
**This is a bit tricky, but I'll try my best. Please correct me if I made any mistakes below.**
1. Loop through `s` once, so `O(N)` where N is the length of `s`
2. Loop through all ranges, and there could be at most `26` ranges so `O(26)`. Depending on how many other characters included in each range, we would be spending another `26` loops within the loop, so total `O(26*26)`
3. We are basically looping through the dictionary `ranges` which could have at most `26` items that was generated from #1, so it's `O(26)`. We also spent `O(26log26)` to sort it

Overall, I personally think it's `O(N)` for time and `O(26)` at most to store ranges for all letters.
Again, please correct me if I am wrong. Much appreciated. 

```Python
def maxNumOfSubstrings(self, s: str) -> List[str]:
	ranges = collections.defaultdict(list)
	# 1
	for idx, ch in enumerate(s):
		ranges[ch].append(idx)
	# 2
	for r in ranges:
		left, right = ranges[r][0], ranges[r][-1]+1
		templ, tempr = left, right
		while True:
			for ch in set(s[templ:tempr]):
				templ = min(templ, ranges[ch][0])
				tempr = max(tempr, ranges[ch][-1]+1)
			if (templ, tempr) == (left, right): break
			left, right = templ, tempr
		ranges[r] = (templ, tempr)
	# 3	
	sorted_ranges = sorted(ranges.values(), key=lambda pair: pair[1])
	ans, prev = [], 0
	for start, end in sorted_ranges:
		if start >= prev:
			ans.append(s[start:end])
			prev = end
	return ans