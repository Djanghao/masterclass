# Kotlin solution with separation for left and right parts. Complexity: time O(N), space O(1)

**Author:** vylgin
**Votes:** 7
**Link:** [https://leetcode.com/problems/trapping-rain-water/solutions/3737619/](https://leetcode.com/problems/trapping-rain-water/solutions/3737619/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
I thought of maximum of heights for input array. And how I can separate solution for left and right parts.

# Approach
<!-- Describe your approach to solving the problem. -->
For example, input array = [0,1,0,2,1,0,1,3,2,1,2,1]. Let's try to draw this array where # is block and ~ is water

```
            #
    # ~ ~ ~ # # ~ #
# ~ # # ~ # # # # # #
0 1 2 3 4 5 6 7 8 9 10
```

---



### **1 Step.** Find index of max heights in this array. 
maxHeightIndex = 6; with height = 3

---

### **2 Step.** Find left part trap sum of water. 
Move iterator from 0 index to maxHeightIndex. 
0 --> maxHeightIndex

Left part of height array:
```
trapSum = 0
curMaxHeight = 0

            #
    # ~ ~ ~ #
# ~ # # ~ # #
0 1 2 3 4 5 6
```
1. Take first element (i = 0)
    ```
    trapSum = 0
    curMaxHeight = 0

    i = 0
    height[i] = 1

    // update curMaxHeight and trapSum
    curMaxHeight = /* height[i] > curMaxHeight */ height[i] = 1
    trapSum = trapSum + curMaxHeight - height[i] = 0 + 1 - 1 = 0

                #
        # ~ ~ ~ #
    # ~ # # ~ # #
    0 1 2 3 4 5 6
    i
    ```
2. Take 2th element (i = 1)
    ```
    trapSum = 0
    curMaxHeight = 1

    i = 1
    height[i] = 0

    // update curMaxHeight and trapSum
    curMaxHeight = /* height[i] < curMaxHeight, take previous curMaxHeight */ = 1
    trapSum = trapSum + curMaxHeight - height[i] = 0 + 1 - 0 = 1

                #
        # ~ ~ ~ #
    # ~ # # ~ # #
    0 1 2 3 4 5 6
      i
    ```
3. Take 3th element (i = 2)
    ```
    trapSum = 1
    curMaxHeight = 1

    i = 2
    height[i] = 2

    // update curMaxHeight and trapSum
    curMaxHeight = /* height[i] > curMaxHeight */ height[i] = 2
    trapSum = trapSum + curMaxHeight - height[i] = 1 + 2 - 2 = 1

                #
        # ~ ~ ~ #
    # ~ # # ~ # #
    0 1 2 3 4 5 6
        i
    ```
4. Take 4th element (i = 3)
    ```
    trapSum = 1
    curMaxHeight = 2

    i = 3
    height[i] = 1

    // update curMaxHeight and trapSum
    curMaxHeight = /* height[i] < curMaxHeight */ curMaxHeight = 2
    trapSum = trapSum + curMaxHeight - height[i] = 1 + 2 - 1 = 2

                #
        # ~ ~ ~ #
    # ~ # # ~ # #
    0 1 2 3 4 5 6
          i
    ```
5. Take 5th element (i = 4)
    ```
    trapSum = 2
    curMaxHeight = 2

    i = 4
    height[i] = 0

    // update curMaxHeight and trapSum
    curMaxHeight = /* height[i] < curMaxHeight */ curMaxHeight = 2
    trapSum = trapSum + curMaxHeight - height[i] = 2 + 2 - 0 = 4

                #
        # ~ ~ ~ #
    # ~ # # ~ # #
    0 1 2 3 4 5 6
            i
    ```
6. Take 6th element (i = 5)
    ```
    trapSum = 4
    curMaxHeight = 2

    i = 5
    height[i] = 1

    // update curMaxHeight and trapSum
    curMaxHeight = /* height[i] < curMaxHeight */ curMaxHeight = 2
    trapSum = trapSum + curMaxHeight - height[i] = 4 + 2 - 1 = 5

                #
        # ~ ~ ~ #
    # ~ # # ~ # #
    0 1 2 3 4 5 6
              i
    ```

In this case, **5** units of rain water (symbol ~) are being trapped in left part of array, in index's interval **[0; 6)**.

---


### **3 Step.** Find right part trap sum of water. 
Move iterator from last element to maxHeightIndex.
maxHeightIndex <-- last index in height array

1. Take 11st element (last element in height array) (i = 10)
    ```
    trapSum = 0
    curMaxHeight = 0

    i = 10
    height[i] = 1

    // update curMaxHeight and trapSum
    curMaxHeight = /* height[i] > curMaxHeight */ height[i] = 1
    trapSum = trapSum + curMaxHeight - height[i] = 0 + 1 - 1 = 0

    # 
    # # ~ #  
    # # # # # 
    6 7 8 9 10 
            i
    ```

2. Take 10th element (i = 9)
    ```
    trapSum = 0
    curMaxHeight = 1

    i = 9
    height[i] = 2

    // update curMaxHeight and trapSum
    curMaxHeight = /* height[i] > curMaxHeight */ height[i] = 2
    trapSum = trapSum + curMaxHeight - height[i] = 0 + 2 - 2 = 0

    # 
    # # ~ #  
    # # # # # 
    6 7 8 9 10 
          i
    ```

3. Take 9th element (i = 8)
    ```
    trapSum = 0
    curMaxHeight = 2

    i = 8
    height[i] = 1

    // update curMaxHeight and trapSum
    curMaxHeight = /* height[i] < curMaxHeight */ curMaxHeight = 2
    trapSum = trapSum + curMaxHeight - height[i] = 0 + 2 - 1 = 1

    # 
    # # ~ #  
    # # # # # 
    6 7 8 9 10 
        i
    ```
4. Take 8th element (i = 7)
    ```
    trapSum = 1
    curMaxHeight = 2

    i = 7
    height[i] = 2

    // update curMaxHeight and trapSum
    curMaxHeight = /* height[i] == curMaxHeight */ curMaxHeight = 2
    trapSum = trapSum + curMaxHeight - height[i] = 1 + 2 - 2 = 1

    # 
    # # ~ #  
    # # # # # 
    6 7 8 9 10 
      i
    ```

In this case, **1** units of rain water (symbol ~) are being trapped in right part of array, in index's interval **(6; 10]**.


---


### **Answer**
Answer is sum of traps in left part plus sum of of traps in right part of height array.
```
answer = trapSumOfLeftPart + trapSumOfRightPart = 5 + 1 = 6
```

# Complexity
- Time complexity: O(N)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    fun trap(height: IntArray): Int {
        // 1 step. Find max index of heights
        val maxHeightIndex = height.withIndex().maxBy { it.value }?.index ?: 0 

        // 2 step. Compute left part trap sum of water
        val leftPartTrapSum = trapForInterval(height, 0, maxHeightIndex)
        
        // 3 step. Compute right part trap sum of water
        val rightPartTrapSum = trapForInterval(height, height.size - 1, maxHeightIndex)
        
        return leftPartTrapSum + rightPartTrapSum
    }

    /**
    * Compute how much water it can trap after raining for interval of heights
    * @param height whole array of heights
    * @param startIndex start index for part of heights array
    * @param endIndex end index for part of heights array
    * @return Sum of traps for input interval in height array
    */
    private fun trapForInterval(height: IntArray, startIndex: Int, endIndex: Int): Int {
        var trapSum = 0
        var curMaxHeight = 0

        for(i in 
            if (startIndex < endIndex) startIndex .. endIndex 
            else startIndex downTo endIndex
        ) {
            if (height[i] > curMaxHeight) curMaxHeight = height[i]
            trapSum += curMaxHeight - height[i]
        }

        return trapSum
    }
}
```