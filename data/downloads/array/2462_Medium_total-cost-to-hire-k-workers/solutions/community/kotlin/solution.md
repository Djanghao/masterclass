# Kotlin solution- PriorityQueue easy

**Author:** makarandThakare
**Votes:** 1
**Link:** [https://leetcode.com/problems/total-cost-to-hire-k-workers/solutions/4216984/](https://leetcode.com/problems/total-cost-to-hire-k-workers/solutions/4216984/)

---


# Code
```
class Solution {
    fun totalCost(costs: IntArray, k: Int, candidates: Int): Long {
        
        // We store IntArray of size 2
        // first index- store value of costs
        // second index- store its index
       val pq = PriorityQueue<IntArray>{cost1: IntArray, cost2: IntArray-> 
            // If values are same
            if(cost1[0] == cost2[0]){
                // Sort by ascending index
                cost1[1] - cost2[1]
            }else {
                // Else sort by values
                cost1[0] - cost2[0]
            }
       }
 
        var cost: Long = 0
        var startindex = 0
        var endindex = costs.size - 1

        var startMax = startindex + candidates
        var endMax = endindex - candidates

        for(i in 0 until k){ 

            if(startMax <= endMax){
                while(startindex < startMax){
                    pq.add(intArrayOf(costs[startindex], startindex)) 
                    startindex++ 
                }

                while(endMax < endindex){ 
                    pq.add(intArrayOf(costs[endindex], endindex)) 
                    endindex--
                }
            }else {
                while(startindex <= endindex){
                    pq.add(intArrayOf(costs[startindex], startindex))
                    startindex++
                }
            }  

            val minvalue = pq.poll()

            if(minvalue[1] < startindex){
                 startMax = startindex + 1
            }else{
                endMax = endindex - 1
            }

            cost += minvalue[0]
        } 
        return cost
    }
}
```