# Scala - 100%

**Author:** AnishKumar5811
**Votes:** 0
**Link:** [https://leetcode.com/problems/shopping-offers/solutions/5323140/](https://leetcode.com/problems/shopping-offers/solutions/5323140/)

---


```
import scala.collection.mutable

object Solution {
    def shoppingOffers(price: List[Int], special: List[List[Int]], needs: List[Int]): Int = {
        val memo = mutable.Map.empty[List[Int], Int]
        
        def dfs(curNeeds: List[Int]): Int = {
            if (memo.contains(curNeeds)) return memo(curNeeds)
            
            // Calculate the cost without any special offers
            var minCost = (curNeeds zip price).map(_ * _).sum
            
            // Try every special offer
            for (offer <- special) {
                val updatedNeeds = (curNeeds zip offer.init).map(_ - _)
                if (updatedNeeds.forall(_ >= 0)) {
                    minCost = math.min(minCost, offer.last + dfs(updatedNeeds))
                }
            }
            
            memo(curNeeds) = minCost
            minCost
        }
        
        dfs(needs)
    }
}

```