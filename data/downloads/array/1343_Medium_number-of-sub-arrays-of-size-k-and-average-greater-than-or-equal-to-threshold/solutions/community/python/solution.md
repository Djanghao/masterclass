# [Python] Sliding window, beats 90%, simple

**Author:** manasswami
**Votes:** 12
**Link:** [https://leetcode.com/problems/number-of-sub-arrays-of-size-k-and-average-greater-than-or-equal-to-threshold/solutions/608393/](https://leetcode.com/problems/number-of-sub-arrays-of-size-k-and-average-greater-than-or-equal-to-threshold/solutions/608393/)

---

```
def numOfSubarrays(self, arr, k, threshold):``
	s, res = 0, 0
	for i in range(0, k-1):
		s += arr[i] 

	for i in range(k-1, len(arr)):
		s += arr[i]
		if s / k >= threshold: res += 1
		s -= arr[i - k + 1]

	return res
```
