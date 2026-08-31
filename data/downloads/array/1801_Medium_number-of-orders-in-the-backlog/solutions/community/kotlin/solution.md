# Using Priority Queue

**Author:** usernamectrlc
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-orders-in-the-backlog/solutions/5029289/](https://leetcode.com/problems/number-of-orders-in-the-backlog/solutions/5029289/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Implement two priority queues to manage orders: one for buy orders sorted in descending order and another for sell orders sorted in ascending order. When both buy and sell conditions are satisfied, begin removing the order from the respective priority queue.
# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    private val MODULO = 1_000_000_007
    fun getNumberOfBacklogOrders(orders: Array<IntArray>): Int {
        val buy = PriorityQueue<IntArray>(compareBy {-it[0]})
        val sell = PriorityQueue<IntArray>(compareBy {it[0]})

        orders.forEach{
            if(it[2] == 0){
                if(sell.isEmpty()) buy.offer(it)
                else{
                    if (it[0] >= sell.peek()[0]){
                        var quantities = it[1]
                        while( quantities > 0 && sell.isNotEmpty() && it[0] >= sell.peek()[0]){
                            val sellOrder = sell.poll()
                            if( quantities < sellOrder[1]){
                                sell.offer(intArrayOf(sellOrder[0], sellOrder[1] - quantities, sellOrder[2]))
                                quantities = 0
                            } else{
                                quantities -= sellOrder[1]
                            }
                        }
                        if( quantities > 0) buy.offer(intArrayOf(it[0], quantities, it[2]))
                    } else  buy.offer(it)
                }
            } else{
                if( buy.isEmpty()) sell.offer(it)
                else{
                    if(it[0] <= buy.peek()[0]){
                        var quantities = it[1]
                        while( quantities > 0 && buy.isNotEmpty() && it[0] <= buy.peek()[0]){
                            val buyOrder = buy.poll()
                            if( quantities < buyOrder[1]){
                                buy.offer(intArrayOf(buyOrder[0], buyOrder[1] - quantities, buyOrder[2]))
                                quantities = 0
                            } else quantities -= buyOrder[1]
                        }
                        if(quantities > 0) sell.offer(intArrayOf(it[0], quantities, it[2]))


                    } 
                    else {
                        sell.offer(it)
                    } 

                }


            }



        }

        var res = 0 

        while(buy.isNotEmpty()){
            res += buy.poll()[1]
            res %= MODULO
        }

        while(sell.isNotEmpty()){
            res += sell.poll()[1]
            res %= MODULO
        }

        return res
    }

}
```