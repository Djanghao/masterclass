# Kotlin Solution

**Author:** InsaneHybrid
**Votes:** 0
**Link:** [https://leetcode.com/problems/array-transformation/solutions/5152316/](https://leetcode.com/problems/array-transformation/solutions/5152316/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->
Recurssion + array traversing

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(k*n) [k = times the recurssion ran & n = no. of elements]

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(n)

# Code
```
class Solution {
    fun transformArray(arr: IntArray): List<Int> {
        if(arr.size < 3 ) return arr.toList()
        val resultArray = getTransformedArray(arr)

        println("array at end : ${resultArray.contentToString()}")

        return resultArray.toList() 
    }

    fun getTransformedArray(arr:IntArray) : IntArray{
        val returnArray = IntArray(arr.size)

        returnArray[0] = arr[0]

        for(i in 1 until arr.size-1) {
            var element = arr[i]
            if(element < arr[i-1] && element < arr[i+1]){
                element++
            } else if(element > arr[i-1] && element > arr[i+1]){
                element--
            }

            returnArray[i] = element
        }

        returnArray[arr.size-1] = arr[arr.size-1]

        println("returnArray : ${returnArray.contentToString()}")
        println("arr : ${arr.contentToString()}")

        if(returnArray.contentEquals(arr)) {
           return returnArray
        }

        println("array before return : ${returnArray.contentToString()}")
        return getTransformedArray(returnArray)
    }
}
```