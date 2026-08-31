# Kotlin beats 100%(O(N))

**Author:** shubhammaheshwariy
**Votes:** 0
**Link:** [https://leetcode.com/problems/smallest-missing-non-negative-integer-after-operations/solutions/5916443/](https://leetcode.com/problems/smallest-missing-non-negative-integer-after-operations/solutions/5916443/)

---

# Intuition
we need to get the mod of num values with value and store them with operation of addition and subtraction as amny times we want, we can generate values of num * i + mod
as long we have the mod of that value

# Approach
we will create a map or array to store modular values num % value(keep negative values in mind)
then we will go from 0 to n - 1 as anwser has to be inbetween them as in in a array of size n where we want to maximmize the minumium non negative missing value we can have from 0 to n - 1
we loop through 0 to n - 1 maintain a pointer j for current mod value from 0 to value - 1 ,if we find a mod value which does not exit this is our first missing non negative value else we decreasse the mod value in map
# Complexity
- Time complexity:
O(n) 
- Space complexity:
O(n)
# Code
```kotlin []
class Solution {
    fun findSmallestInteger(nums: IntArray, value: Int): Int {
        val n = nums.size

        val map = IntArray(value)

        nums.forEach{
            map[Math.floorMod(it,value)] = (map.get(Math.floorMod(it,value))?:0) + 1
        }
      
        var j = 0
        for(i in 0..n - 1){
            if((map[j]?:0) > 0){
                map[j] = (map[j++]?:0) - 1
                if(j == value)j = 0
            }else{
                return i
            }
        }

        return n
    }
}
```