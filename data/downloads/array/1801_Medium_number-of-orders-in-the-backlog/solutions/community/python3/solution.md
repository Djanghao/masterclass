# Python 3   ||   9 lines,  w/ explanation

**Author:** Spaulding_
**Votes:** 10
**Link:** [https://leetcode.com/problems/number-of-orders-in-the-backlog/solutions/2994427/](https://leetcode.com/problems/number-of-orders-in-the-backlog/solutions/2994427/)

---

Here's the plan:
1. Establish maxheap `buy` for buy orders and minheap `sell` for sell orders.
2. Iterate through `orders`. Push each element onto the appropriate heap.
3. During each iteration, peak at the heads of each list and determine whether they allow a transaction. If so, pop both heads, and if one has a positive amount after the transaction, push it back on its heap, and check the new heads (lather, rinse, repeat... `while`)
4. After the iteration,`return`the sum of`amt`in the heaps.

```
class Solution:
    def getNumberOfBacklogOrders(self, orders: List[List[int]]) -> int:

        buy,sell  = [], []                                                              # <-- 1

        for price,amt,order in orders:                                                  # <-- 2
            if order: heappush(sell, ( price, amt))                                     #
            else    : heappush(buy , (-price, amt))                                     #
            
            while buy and sell and -buy[0][0] >= sell[0][0]:                            # <-- 3
                                                                                        #
                (buyPrice,buyAmt), (sellPrice,sellAmt) = heappop(buy), heappop(sell)    #
                                                                                        #
                if   buyAmt > sellAmt: heappush(buy , (buyPrice , buyAmt -sellAmt))     #
                elif buyAmt < sellAmt: heappush(sell, (sellPrice, sellAmt- buyAmt))     #

        return sum(amt for _,amt in buy+sell)% (1000000007)                             # <-- 4
```
[https://leetcode.com/problems/number-of-orders-in-the-backlog/submissions/870707453/](http://)

I could be wrong, but I think that time complexity is *O*(*N*) and space complexity is *O*(*N*).