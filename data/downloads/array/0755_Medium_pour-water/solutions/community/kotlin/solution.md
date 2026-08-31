# Simple Kotlin solution beats 100%

**Author:** varungujarathi9
**Votes:** 0
**Link:** [https://leetcode.com/problems/pour-water/solutions/3469157/](https://leetcode.com/problems/pour-water/solutions/3469157/)

---



# Complexity
- Time complexity: (volume * heights.size) i.e O(n) * m
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    fun pourWater(heights: IntArray, volume: Int, k: Int): IntArray {
        for( i in 0 until volume)
        {
            var lastIndex = check(heights, k, true)
            if(lastIndex==k) {
                lastIndex = check(heights, k, false)
            }
            heights[lastIndex]++

        }
        return heights
    }

    private fun check(heights : IntArray, k : Int, moveLeft : Boolean) : Int
    {
        var temp = k
        var lastIndex = k
        while((temp>=0 && temp<heights.size) && !(heights[temp]>heights[lastIndex]))
        {
            if(heights[temp]<heights[lastIndex]){
                lastIndex = temp
            }
            if(moveLeft) temp-- else temp++
        }
        return lastIndex   
    }
}
```