# Using depth first search (recursion) to get the answer

**Author:** amit_upadhyay
**Votes:** 8
**Link:** [https://leetcode.com/problems/the-earliest-moment-when-everyone-become-friends/solutions/1992928/](https://leetcode.com/problems/the-earliest-moment-when-everyone-become-friends/solutions/1992928/)

---

The solution can be optimized, but this is what I used to solve the question at first thought. It worked and passed all test cases. 

Method:  Suppose we have a set ( in code ,its self.visited) . We want to keep growing our friend circle and add people in the set. As soon as we find a new relation ( by iterating through logs),we want to check if this new relation will bring every member in set. 

Code:

```
class Solution:
    def earliestAcq(self, A: List[List[int]], n: int) -> int:
        A=sorted(A,key=lambda x:x[0])
        
        def recur(i):
            self.visited.add(i)
            for a in dic[i]:
                if a not in self.visited:
                    recur(a)
            return
        
        dic=collections.defaultdict(list)
        for a,b,c in A:
            self.visited=set()
            dic[b].append(c)
            dic[c].append(b)
            recur(b)
            #print(self.visited)
            if len(self.visited)==n:
                return a
        return -1
```

Run time : O(n*logs.length)
Let me know if  I am wrong :)

Ask doubts