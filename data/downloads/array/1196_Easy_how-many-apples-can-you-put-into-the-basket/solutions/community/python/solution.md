# 2 solution | Easy to Understand | Faster | Greedy | Simple | Python Solution

**Author:** Mrmagician
**Votes:** 1
**Link:** [https://leetcode.com/problems/how-many-apples-can-you-put-into-the-basket/solutions/569640/](https://leetcode.com/problems/how-many-apples-can-you-put-into-the-basket/solutions/569640/)

---

```
    def using_heap(self, arr):
        heapq.heapify(arr)
        out = 0
        m = 5000 # as per the question
        while m >= 0 and len(arr):
            m -= heapq.heappop(arr)
            if m >= 0: out += 1
        return out
        
        
    
    def greedy(self, arr):  
        m = 5000
        arr.sort(reverse=True)
        out = 0
        while m > 0 and len(arr):
            m = m - arr.pop()
            if m >= 0: out += 1
        return out
```

**I hope that you've found the solution useful.**
*In that case, please do upvote and encourage me to on my quest to document all leetcode problems\uD83D\uDE03*
PS: Search for **mrmagician** tag in the discussion, if I have solved it, You will find it there\uD83D\uDE38