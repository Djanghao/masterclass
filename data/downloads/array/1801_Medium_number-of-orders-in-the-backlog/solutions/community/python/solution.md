# Heap/PQ solution with logic [Python]

**Author:** _nyctophiliac_
**Votes:** 10
**Link:** [https://leetcode.com/problems/number-of-orders-in-the-backlog/solutions/1119714/](https://leetcode.com/problems/number-of-orders-in-the-backlog/solutions/1119714/)

---

Logic is:
* Since we need to do a lot of **find min/max** operations: use 2 heaps:
	* max-heap `b` for buy, min-heap `s` for sell
	* So, max buy offer is on top of heap `b`
	* Min sell offer is on top of heap `s`
* Each element of heap is an array: `[price, amount]`
* *For* each buy/sell order:
	* Check for the **good** condition
		* Good condition is when:
			* Both `b` and `s` are non-empty
			* Top elements satisfy: `s[0][0] <= -b[0][0]` - means `sell price <= buy price`
			* If **good** condition is true: a *sale* will definitely happen
	* *While* condition stays **good**, keep performing *sales*
		* A *sale* means:
			* Pick the top element of both heaps
			* Call their amounts `a1` and `a2`
			* Reduce `a1` and `a2` until one of them becomes `0`
			* If either `a1` or `a2` becomes `0`, pop the heap to which it belongs
		* Check if the new top of the heap satisfies **good** condition
* Count the sum of amounts in each heap

```
class Solution:
    def getNumberOfBacklogOrders(self, orders):
        b, s = [], []
        heapq.heapify(b)
        heapq.heapify(s)
        
        for p,a,o in orders:
            if o == 0:
                heapq.heappush(b, [-p, a])
                
            elif o == 1:
                heapq.heappush(s, [p, a])
            
            # Check "good" condition
            while s and b and s[0][0] <= -b[0][0]:
                a1, a2 = b[0][1], s[0][1]
                
                if a1 > a2:
                    b[0][1] -= a2
                    heapq.heappop(s)
                elif a1 < a2:
                    s[0][1] -= a1
                    heapq.heappop(b)
                else:
                    heapq.heappop(b)
                    heapq.heappop(s)
                    
        count = sum([a for p,a in b]) + sum([a for p,a in s])
        return count % (10**9 + 7)
 ```               
