# Python Dijkstras

**Author:** Wogger
**Votes:** 5
**Link:** [https://leetcode.com/problems/minimum-cost-to-reach-city-with-discounts/solutions/1990334/](https://leetcode.com/problems/minimum-cost-to-reach-city-with-discounts/solutions/1990334/)

---

```
class Solution:
    def minimumCost(self, n: int, highways: List[List[int]], discounts: int) -> int:
        
        
        h = defaultdict(list)
        
        # create the graph
        for src, dst, toll in highways:
            h[src].append((dst,toll))
            h[dst].append((src,toll))
            
        # mark visited nodes
        visited = set()
        
        # create a priority queue
        # cost | city | num discounts remaining
        pq = [(0,0, discounts)]
        
        # dijkstras algorithm
        while pq:
            currCost,  currCity,numDisc = heapq.heappop(pq)     
            
            # if a city / discount combo has been visited already, then it is already optimized for min cost because the priority queue
            if (numDisc,currCity) in visited:
                continue
            
            # if you reached the end, then you are already optimized for cost due to the PQ / heap
            if currCity == n-1:
                return currCost
            
            # mark discount / city combo as visited
            visited.add((numDisc,currCity))
            
            # need to consider both a case where a discount no applied and applied (if applicable)
            for nei, toll in h[currCity]:
                
                # consider no discount
                if (numDisc,nei) not in visited:
                    heapq.heappush(pq,(currCost+toll,nei, numDisc))
                    
                # with discount, if available
                if numDisc>0 and (numDisc-1,nei) not in visited:
                    heapq.heappush(pq,(currCost+int(toll/2),nei,numDisc-1))
                    
        return -1

```