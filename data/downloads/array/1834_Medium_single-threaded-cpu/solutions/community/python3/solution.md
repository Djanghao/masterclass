# 📌📌Python3 || 2007 ms, faster than 90.49% of Python3 || Clean and Easy to Understand

**Author:** harshithdshetty
**Votes:** 8
**Link:** [https://leetcode.com/problems/single-threaded-cpu/solutions/2966143/](https://leetcode.com/problems/single-threaded-cpu/solutions/2966143/)

---

```
def getOrder(self, tasks: List[List[int]]) -> List[int]:
        arr = []
        prev = 0
        output  = [] 
        tasks= sorted((tasks,i) for i,tasks in enumerate(tasks))
        for (m,n), i in tasks:
            while arr and prev < m:
                p,j,k = heappop(arr)
                prev = max(k,prev)+p
                output.append(j)
            heappush(arr,(n,i,m))
        return output+[i for _, i, _ in sorted(arr)]
```