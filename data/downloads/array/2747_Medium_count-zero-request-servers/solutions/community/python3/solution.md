# [Sorting][Sliding window][Hash table] Python3 solution easy to understand

**Author:** Berthouille
**Votes:** 5
**Link:** [https://leetcode.com/problems/count-zero-request-servers/solutions/3677742/](https://leetcode.com/problems/count-zero-request-servers/solutions/3677742/)

---

# Approach
Keep a dictionary with the number of requests for each server, and a variable countNull tracking the number of servers with no request. 

Then, sort the queries table and the logs table according to the time of the requests.

For each query, using your sliding window, keep only the requests between query-x and query, updating your left and right pointers to maintain the sliding window.

Finally, update your result in the correct position (since queries is sorted and you need to return a result that matches the indices prior to the sorting).

# Complexity
With p=len(logs) and q=len(queries) :

- Time complexity:
O(p log(p)+q log(q))

- Space complexity:
O(n+q)

# Code
```
class Solution:
    def countServers(self, n: int, logs: List[List[int]], x: int, queries: List[int]) -> List[int]:
        dico={i:0 for i in range (1,n+1)}
        logs=sorted(logs,key=lambda x:x[1])
        queries=sorted([query,i] for i,query in enumerate(queries))
        p=len(logs)
        right,left=0,-1
        countNull=n
        res=[0]*len(queries)
        for query,i in queries:
            while right <p and logs[right][1]<=query:
                serv=logs[right][0]
                if dico[serv]==0:
                    countNull-=1
                dico[serv]+=1
                right+=1
            while left+1<p and logs[left+1][1]<query-x:
                left+=1
                serv=logs[left][0]
                dico[serv]-=1
                if dico[serv]==0:
                    countNull+=1
            res[i]=countNull
        return res
            
```