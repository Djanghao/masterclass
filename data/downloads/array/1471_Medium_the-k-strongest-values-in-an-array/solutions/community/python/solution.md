# Python solution (2 lines) 100% faster runtime

**Author:** it_bilim
**Votes:** 8
**Link:** [https://leetcode.com/problems/the-k-strongest-values-in-an-array/solutions/675115/](https://leetcode.com/problems/the-k-strongest-values-in-an-array/solutions/675115/)

---


```
    def getStrongest(self, arr: List[int], k: int) -> List[int]:
        med = sorted(arr[(len(arr)-1)//2])
 \xA0 \xA0 \xA0 \xA0return sorted(array, key=lambda x:(abs(x-med),x))[-k:]
```