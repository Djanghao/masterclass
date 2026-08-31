# [Python3] Greedy

**Author:** ye15
**Votes:** 36
**Link:** [https://leetcode.com/problems/sell-diminishing-valued-colored-balls/solutions/927674/](https://leetcode.com/problems/sell-diminishing-valued-colored-balls/solutions/927674/)

---

Algo 
First, it should be clear that we want to sell from the most abundant balls as much as possible as it is valued more than less abundant balls. In the spirit of this, we propose the below algo 
1) sort inventory in reverse order and append 0 at the end (for termination); 
2) scan through the inventory, and add the difference between adjacent categories to answer. 

Assume `inventory = [2,8,4,10,6]`. Then, we traverse inventory following 10->8->6->4->2->0. The evolution of inventory becomes 
```
10 | 8 | 6 | 4 | 2
 8 | 8 | 6 | 4 | 2
 6 | 6 | 6 | 4 | 2
 4 | 4 | 4 | 4 | 2
 2 | 2 | 2 | 2 | 2 
 0 | 0 | 0 | 0 | 0 
```
Of course, if in any step, we have enough order, return the answer. 

```
class Solution:
    def maxProfit(self, inventory: List[int], orders: int) -> int:
        inventory.sort(reverse=True) # inventory high to low 
        inventory += [0]
        ans = 0
        k = 1
        for i in range(len(inventory)-1): 
            if inventory[i] > inventory[i+1]: 
                if k*(inventory[i] - inventory[i+1]) < orders: 
                    ans += k*(inventory[i] + inventory[i+1] + 1)*(inventory[i] - inventory[i+1])//2 # arithmic sum 
                    orders -= k*(inventory[i] - inventory[i+1])
                else: 
                    q, r = divmod(orders, k)
                    ans += k*(2*inventory[i] - q + 1) * q//2 + r*(inventory[i] - q)
                    return ans % 1_000_000_007
            k += 1
```

Edited on 10/08/2020
Adding binary serach solution 
```
class Solution:
    def maxProfit(self, inventory: List[int], orders: int) -> int:
        fn = lambda x: sum(max(0, xx - x) for xx in inventory) # balls sold 
    
        # last true binary search 
        lo, hi = 0, 10**9
        while lo < hi: 
            mid = lo + hi + 1 >> 1
            if fn(mid) >= orders: lo = mid
            else: hi = mid - 1
        
        ans = sum((x + lo + 1)*(x - lo)//2 for x in inventory if x > lo)
        return (ans - (fn(lo) - orders) * (lo + 1)) % 1_000_000_007
```