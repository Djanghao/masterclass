# ✅ Python | Clear and Concise + Explanation

**Author:** kamoloff
**Votes:** 22
**Link:** [https://leetcode.com/problems/removing-minimum-number-of-magic-beans/solutions/1766998/](https://leetcode.com/problems/removing-minimum-number-of-magic-beans/solutions/1766998/)

---

If you want to make all the numbers the same inside an array (only decreasing is allowed)
you need to make `sum(arr) - len(arr) * min(arr)` operations overall as you need to decrease all elements by `arr[i] - min(arr)` where `0<=i<len(arr)`

As described in problem statement we can decrease number of beans in the bag and when it becomes `0` we dont need to make all other bags `0` to make them equal (We just ignore `0` bags, which simply means length of array also decreases).


Approach:
-
- Sort beans
- Calculate number of operations for every element in beans

```
def minimumRemoval(self, beans: List[int]) -> int:
	beans.sort()
	s = sum(beans)
	l = len(beans)
	res = float('inf')

	for i in range(len(beans)):
		res = min(res, s - l * beans[i])
		l -= 1
		
	return res
```