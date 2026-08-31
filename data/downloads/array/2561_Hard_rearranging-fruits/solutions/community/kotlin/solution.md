# Kotlin 100%

**Author:** pegasus_1
**Votes:** 0
**Link:** [https://leetcode.com/problems/rearranging-fruits/solutions/5176110/](https://leetcode.com/problems/rearranging-fruits/solutions/5176110/)

---

# Intuition
You can use min , for swapping any element again and again, Try to find the final state , we will be able to get the add elements and use this min to swap

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
O(N) + klog(k) , where k is the newly added elements size

- Space complexity:
O(N)

# Code
```
class Solution {

    var b1map = mutableMapOf<Int, Int>()
    var b2map = mutableMapOf<Int, Int>()

    var tMap = mutableMapOf<Int, Int>()


    fun minCost(basket1: IntArray, basket2: IntArray): Long {
        var min = Integer.MAX_VALUE
        for(i in basket1) {
         b1map[i] = b1map.getOrDefault(i, 0) + 1
         tMap[i] = tMap.getOrDefault(i, 0) + 1
         min = Math.min(min, i)
        }

        for(i in basket2) {
         b2map[i] = b2map.getOrDefault(i, 0) + 1
         tMap[i] = tMap.getOrDefault(i, 0) + 1
         min = Math.min(min, i)
        }



        for((key, value) in tMap) {
            if(value%2!=0)return -1
        }
        
        var fMap = mutableMapOf<Int, Int>()
        for((key, value) in tMap) {
            fMap[key] = value/2
        }

        var keys = mutableListOf<Int>()
        var keys2 = mutableListOf<Int>()

        for((key, value) in fMap) {
            val diff = value - b1map.getOrDefault(key, 0)
            if(diff > 0) {
              for(i in 0..diff-1) {
                 keys.add(key)
              }
            } else if (diff < 0) {
              for(i in 0..Math.abs(diff) - 1) {
                 keys2.add(key)
              }
            }
        }

        keys.sort()
        keys2.sort()
        keys2.reverse()

        var cost = 0L
        for(i in 0..keys.size-1) {
            val t =  Math.min(keys[i], keys2[i])
            if(t == min) {
                cost = cost + min.toLong()
            } else {
                cost = cost + Math.min(t, 2 * min).toLong()
            }
        }
        return cost
    }
}
```