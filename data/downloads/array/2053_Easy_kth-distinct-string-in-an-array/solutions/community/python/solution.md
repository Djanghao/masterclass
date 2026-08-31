# Python simple 2 lines solution

**Author:** TovAm
**Votes:** 28
**Link:** [https://leetcode.com/problems/kth-distinct-string-in-an-array/solutions/1550617/](https://leetcode.com/problems/kth-distinct-string-in-an-array/solutions/1550617/)

---

**Python :**

```
def kthDistinct(self, arr: List[str], k: int) -> str:
	arr = [i for i in arr if arr.count(i) == 1]
	return "" if k > len(arr) else arr[k - 1]
```

**Like it ? please upvote !**