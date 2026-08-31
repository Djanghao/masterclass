# scala solution (min and max priority queue)

**Author:** tusharora19
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-orders-in-the-backlog/solutions/3306061/](https://leetcode.com/problems/number-of-orders-in-the-backlog/solutions/3306061/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
import scala.collection.mutable.PriorityQueue

case class Order(price: Int, var amount: Int, isBuy: Boolean)

object Solution {

    def handleBuyOrder(orderObj: Order, buyHeap: PriorityQueue[Order], sellHeap: PriorityQueue[Order]): Unit = {
        // if sellHeap is empty or top of heap price > orderObj.price then ignore
        if (sellHeap.isEmpty || sellHeap.head.price > orderObj.price) {
            // add orderObj to buy heap
            buyHeap.enqueue(orderObj)
        } else {
            var topOfSell = sellHeap.head
            while (!sellHeap.isEmpty && orderObj.amount > 0 && topOfSell.price <= orderObj.price && topOfSell.amount > 0) {
                // handle if top has more amount than order or vice versa
                if (orderObj.amount >= topOfSell.amount) {
                    orderObj.amount -= topOfSell.amount
                    topOfSell.amount = 0
                } else {
                    topOfSell.amount = topOfSell.amount - orderObj.amount
                    orderObj.amount = 0
                }

                if (topOfSell.amount == 0) {
                    sellHeap.dequeue()
                    if (!sellHeap.isEmpty)
                        topOfSell = sellHeap.head
                }
            }
            if (orderObj.amount > 0) {
                // add remainder to buy heap
                buyHeap.enqueue(orderObj)
            }
        }
    }

    def handleSellOrder(orderObj: Order, buyHeap: PriorityQueue[Order], sellHeap: PriorityQueue[Order]): Unit = {
        // if buyHeap is empty or top of heap price < orderObj.price then ignore
        if (buyHeap.isEmpty || buyHeap.head.price < orderObj.price) {
            // add orderObj to buy heap
            sellHeap.enqueue(orderObj)
        } else {
            var topOfBuy = buyHeap.head
            while (!buyHeap.isEmpty && orderObj.amount > 0 && topOfBuy.price >= orderObj.price && topOfBuy.amount > 0) {
                
                // handle if top has more amount than order or vice versa
                if (orderObj.amount >= topOfBuy.amount) {
                    orderObj.amount -= topOfBuy.amount
                    topOfBuy.amount = 0
                } else {
                    topOfBuy.amount -= orderObj.amount
                    orderObj.amount = 0
                }

                // if top is empty, remove from queue and update with another top 
                if (topOfBuy.amount == 0) {
                    buyHeap.dequeue()
                    if (!buyHeap.isEmpty)
                        topOfBuy = buyHeap.head
                }
            }
            if (orderObj.amount > 0) {
                // add remainder to buy heap
                sellHeap.enqueue(orderObj)
            }
        }
    }

    def buyHeapOrdering(order: Order) = order.price

    def sellHeapOrdering(order: Order) = -order.price

    def getNumberOfBacklogOrders(orders: Array[Array[Int]]): Int = {
        
        // this is max heap
        var buyHeap = new PriorityQueue[Order]()(Ordering.by(buyHeapOrdering))
        
        // this is min heap
        var sellHeap = new PriorityQueue[Order]()(Ordering.by(sellHeapOrdering))

        for (order <- orders) {
            val price = order.head
            val amount = order(1)
            val isBuy = if (order.last == 0) true else false
            val orderObj = Order(price, amount, isBuy)

            isBuy match {
                case true => handleBuyOrder(orderObj, buyHeap, sellHeap)
                case false => handleSellOrder(orderObj, buyHeap, sellHeap)
            }
        }
        // This is imp below to take % mod for each entry as well as total sum else if sum goes out of bound of Int, it becomes -ve
        val mod = Math.pow(10, 9) + 7
        ((buyHeap.map(x => x.amount % mod).sum % mod + sellHeap.map(_.amount % mod).sum) % mod).toInt
    }
}
```