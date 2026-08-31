# Python - Runtime O(N) and O(1) space [ACCEPTED]

**Author:** jankit
**Votes:** 20
**Link:** [https://leetcode.com/problems/number-of-rectangles-that-can-form-the-largest-square/solutions/1021483/](https://leetcode.com/problems/number-of-rectangles-that-can-form-the-largest-square/solutions/1021483/)

---

This can be done just by tracking the max length and its count.

```
def countGoodRectangles(rectangles):
	max_len = float('-inf')
	count = 0
	for item in rectangles:
		min_len = min(item)
		if min_len == max_len:
			count += 1
		elif min_len > max_len:
			max_len = min_len
			count = 1

	return count