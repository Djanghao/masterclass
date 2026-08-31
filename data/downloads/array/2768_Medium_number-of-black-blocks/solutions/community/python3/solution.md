# Python3 Solution

**Author:** Motaharozzaman1996
**Votes:** 4
**Link:** [https://leetcode.com/problems/number-of-black-blocks/solutions/3739885/](https://leetcode.com/problems/number-of-black-blocks/solutions/3739885/)

---


```
class Solution:
    def countBlackBlocks(self, m: int, n: int, coordinates: List[List[int]]) -> List[int]:
        counts=defaultdict(int)
        for x,y in coordinates:
            for i in range(max(0,x-1),min(m-1,x+1)):
                for j in range(max(0,y-1),min(n-1,y+1)):
                    counts[(i,j)]+=1


        ans=[0]*5 
        for count in counts.values():
            ans[count]+=1

        ans[0]=(m-1)*(n-1)-sum(ans)
        return ans               
```