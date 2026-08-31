# Python3 Iterative Solution

**Author:** deleted_user
**Votes:** 62
**Link:** [https://leetcode.com/problems/detect-pattern-of-length-m-repeated-k-or-more-times/solutions/819288/](https://leetcode.com/problems/detect-pattern-of-length-m-repeated-k-or-more-times/solutions/819288/)

---

```python
def containsPattern(self, arr: List[int], m: int, k: int) -> bool:
	i = 0
	while i <= len(arr)-1:
		p = arr[i:i+m]
		if p * k == arr[i:i+m*k]:
			return True

		i += 1

	return False
```

trungnguyen276's solution (optimized)

```python
def containsPattern(self, arr: List[int], m: int, k: int) -> bool:
    streak = 0
    for i in range(len(arr)-m):
        streak = streak + 1 if arr[i] == arr[i+m] else 0
        if streak == (k-1)*m: return True
    return False
```