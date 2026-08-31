# Simple, intuitive Python (no complex edge case handling!), O(n)

**Author:** boris17
**Votes:** 26
**Link:** [https://leetcode.com/problems/missing-ranges/solutions/1960167/](https://leetcode.com/problems/missing-ranges/solutions/1960167/)

---

```
	def stringify(a,b):
		if a == b:
			return str(a)
		else:
			return str(a) + "->" + str(b)

	nums = [lower-1] + nums + [upper+1] # that's the trick to avoid edge cases

	ans = [] 
	for i in range(1,len(nums)):
		if nums[i] - nums[i-1] > 1:
			ans.append(stringify(nums[i-1]+1,nums[i]-1))
	return ans
```