# Kotlin, Priority Queue (time : n(Log(n), space: (O(n))

**Author:** ivv135uk
**Votes:** 0
**Link:** [https://leetcode.com/problems/sell-diminishing-valued-colored-balls/solutions/2079947/](https://leetcode.com/problems/sell-diminishing-valued-colored-balls/solutions/2079947/)

---

The first solution is used for initial illustration, it is actually TLE, but it helped to get the idea further : 

```

    private val modulo = Math.pow(10.0, 9.0).toInt() + 7
    
    fun maxProfit(inventory: IntArray, orders: Int): Int {

        var result = 0L
        val queue = PriorityQueue<Long>(Comparator<Long>{first, second -> (second - first).toInt() })
        
        inventory.forEach{queue.offer(it.toLong())}
        
        var remOrders = orders.toLong()
        
        while(remOrders > 0){
            
            val item = queue.poll()
            
            var count = 1
            while(queue.size > 0 && queue.peek() == item){
                queue.poll()
                count++
            }
            
            val nextItem = if(queue.size == 0) 0 else {queue.peek()}
            
            /**
             * If at any point we are left with the case such as : 
             *
             * priority queue : [10,10,10,10,10,10,10,10,10,10]
             * remOrders = 3
             *
             * then the result = result +  remOrders * 10 = 30
             */
            if(remOrders <= count){
                result+=remOrders * item
                break
            }

            /**
             * We have two cases here:
             *
             * Case1
             * [10, 10, 10, 2]
             * remOrders = 5
             *
             * or
             *
             * Case 2
             * [10,10,8]
             * remOrders = 5
             *
             * In the first case we will take
             * 5/3 = 1
             * which means that we are taking into account [1] 3 times
             * and then the follow up priority queue will look like:
             * [9,9,9,2]
             *
             * In the second case
             * (10 - 8) = 2
             *
             * Basically we will take [2] 2 times
             * and then priority queue will look like:
             * [8,8,8]
             *
             */
            
            val diff1 = (remOrders/count).toLong()
            val diff2 = Math.max(1L,((item - nextItem)/count).toLong())
            val diff = Math.min(diff1,diff2)
            val bottom = item - diff
            
			//Sum of Natural Numbers 
            val cost = (item * (item + 1))/2 - (bottom* (bottom + 1)/2)
            val fullCost = cost * count
            result+=fullCost
            
            remOrders -= (count * diff)
            
            for(index in 1 .. count) {
                queue.offer(bottom)
            }
        }
        
        return (result % modulo).toInt()
    }
}
```


Now, Let's pay attention how we are modifying the priority queue and let's forget about `remOrders` for a moment. For example: 
`
[10,8,6,4,2] -> [8,8,6,4,2] -> [6,6,6,4,2]->[4,4,4,4,2] -> [2,2,2,2,2] 
`

The key point here is the more we go towards the array end (priortity queue in the first solution),  in reality we simply increase the count of items. In other words instead of re-adding [bottoms] to priority queue:

```
 for(index in 1 .. count) {
                queue.offer(bottom)
            }
```

 we can simply have a **counter** which keeps track of how many items we processed. 


```

class SolutionV2 {

    private val modulo = Math.pow(10.0, 9.0).toInt() + 7
    
    //Time : N(log(n))
    //space: O(n)
    fun maxProfit(inventory: IntArray, orders: Int): Int {

        var result = 0L
        val queue = PriorityQueue<Long>(Comparator<Long> { first, second -> (second - first).toInt() })
        inventory.forEach { queue.offer(it.toLong()) }
        
        var remOrders = orders.toLong()
        
        var count = 1
        var item = queue.poll()
        
        while(remOrders > 0){
            
            while(queue.size > 0 && queue.peek() == item){
                queue.poll()
                count++
            }
            
            val nextItem = if(queue.size == 0) 0 else {queue.peek()}

            /**
             * If at any point we are left with the case
             *
             * priority queue : [10,10,10,10,10,10,10,10,10,10]
             * remOrders = 3
             *
             * then the result is remOrders = remOrders * 10 = 30
             */
            if(remOrders <= count){
                result+=remOrders * item
                break
            }

            val diff1 = (remOrders/count).toLong()

            val diff2 = Math.max(1L,((item - nextItem)/count).toLong())
            
            val diff = Math.min(diff1,diff2)

            val bottom = item - diff

            val cost = (item * (item + 1))/2 - (bottom* (bottom + 1)/2)
            val fullCost = cost * count

            result+=fullCost
            remOrders -= (count * diff)
            
            item = bottom
        }
        
        return (result % modulo).toInt()
        
    }
}
```
