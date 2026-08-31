# [Python] Simple Example

**Author:** rowe1227
**Votes:** 15
**Link:** [https://leetcode.com/problems/rotate-function/solutions/837477/](https://leetcode.com/problems/rotate-function/solutions/837477/)

---

```html5
<b>Time Complexity: O(N)
Space Complexity: O(1)</b>
```
**Simple Example:**

Suppose we have array: ```A = [a, b, c, d, e]```

First try with no rotation:
```html5
[0&middot;a, 1&middot;b, 2&middot;c, 3&middot;d, 4&middot;e] <b># No rotation = 1&middot;b + 2&middot;c + 3&middot;d + 4&middot;e</b>
```
Next, try with 1 rotation:
```html5
[4&middot;a, 0&middot;b, 1&middot;c, 2&middot;d, 3&middot;e] <b># 1 Rotation = 4&middot;a + 1&middot;c + 2&middot;d + 3&middot;e</b>
```
Now observe how the array total changed:
```html5
(1 rotation) - (no rotation) = 4&middot;a - 1&middot;b - 1&middot;c - 1&middot;d - 1&middot;e
                             = 5&middot;a - 1&middot;a - 1&middot;b - 1&middot;c - 1&middot;d - 1&middot;e
							 = 5&middot;a - (1&middot;a + 1&middot;b + 1&middot;c + 1&middot;d + 1&middot;e)
							 = N&middot;a - sum(A)
							 <b>= N&middot;A[i] - sum(A)</b>
		  <b>&there4; (i + 1 rotation) = N&middot;A[i] - sum(A) + (i rotation)</b>
```
Where N is the length of array A.  Now, we can calculate the total once **(#1)**.  And find the total for the next rotation in **O(1) time** using the equation above **(#2)**.  

```python
def maxRotateFunction(self, A: List[int]) -> int:

	sum_A = sum(A)
	N = len(A)
	res = sum(i*a for i,a in enumerate(A)) # 1
	total = res                            # 1

	for i in range(len(A)):
		total += N*A[i] - sum_A # 2
		res = max(res, total)

	return res
```