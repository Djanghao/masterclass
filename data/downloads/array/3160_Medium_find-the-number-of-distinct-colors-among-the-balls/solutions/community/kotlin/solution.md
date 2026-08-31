# Kotlin | HashMap & Set |

**Author:** subhag-dev
**Votes:** 2
**Link:** [https://leetcode.com/problems/find-the-number-of-distinct-colors-among-the-balls/solutions/5207067/](https://leetcode.com/problems/find-the-number-of-distinct-colors-among-the-balls/solutions/5207067/)

---

# Intuition
- Keeping a map of number to color:
```val numToColor = mutableMapOf<Int, Int>()```
- Also, keeping a reverse map of color to numbers: 
```val colorToNums = mutableMapOf<Int, HashSet<Int>>()```

# Approach
<!-- Describe your approach to solving the problem. -->

For each query:
1. Check if the number was already having a previous color
2. If yes, remove that previous color
3. Due to 2. check if the set corresponding to previous color is empty, if so reduce the colors map size
4. Finally, apply the update operation
5. Our colorToNums.size will always equal currently present distinct colors 

# Complexity
- Time complexity: $$O(N)$$, assuming average case accesses for Map and Set to be $$O(1)$$

- Space complexity: $$O(N)$$

# Code
```
class Solution {
    
    val numToColor = mutableMapOf<Int, Int>()
    val colorToNums = mutableMapOf<Int, HashSet<Int>>()
    
    fun queryResults(limit: Int, queries: Array<IntArray>): IntArray {
        return queries.map { evalQuery(it) }.toIntArray()
    }
    
    private fun evalQuery(query: IntArray): Int {
        val (number, newColor) = query
        if (numToColor.contains(number)) {
            val prevColor = numToColor[number]!!
            colorToNums[prevColor]!!.remove(number)
            if (colorToNums[prevColor]!!.isEmpty()) colorToNums.remove(prevColor)
        }
        numToColor[number] = newColor
        colorToNums.getOrPut(newColor) { HashSet<Int>() }.add(number)
        return colorToNums.size
    }
    
}
```