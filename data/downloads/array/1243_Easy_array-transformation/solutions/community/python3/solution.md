# Simple python simulation

**Author:** mxmb
**Votes:** 3
**Link:** [https://leetcode.com/problems/array-transformation/solutions/1338352/](https://leetcode.com/problems/array-transformation/solutions/1338352/)

---

```python
def transformArray(self, arr: List[int]) -> List[int]:
        while True:
            prev = deepcopy(arr)
            for i in range(1,len(arr)-1):
				arr[i] -= prev[i-1] < prev[i] > prev[i+1]
                arr[i] += prev[i-1] > prev[i] < prev[i+1]
            if prev == arr:
                return arr
```