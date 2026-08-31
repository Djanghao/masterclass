# Naive Brute Force kotlin solution

**Author:** wilko98
**Votes:** 1
**Link:** [https://leetcode.com/problems/beautiful-towers-i/solutions/4086863/](https://leetcode.com/problems/beautiful-towers-i/solutions/4086863/)

---

# Complexity
- Time complexity:
O(n^2)

- Space complexity:
O(1)

# Code
```
class Solution {
    fun maximumSumOfHeights(maxHeights: List<Int>): Long {
        
        fun calculateForMaxIndex(mIndex: Int, m: Int): Long {
            var tempMax = m
            var res = 0L
            for(i in mIndex - 1 downTo 0) {
                if(maxHeights[i] < tempMax) {
                    tempMax = maxHeights[i]
                }
                res += tempMax
            }
            tempMax = m
            for(i in mIndex + 1 until maxHeights.size) {
                if(maxHeights[i] < tempMax) {
                    tempMax = maxHeights[i]
                }
                res += tempMax
            }
            return res + m
        }
        

        var ans = 0L
        maxHeights.forEachIndexed { index, it ->
            ans = maxOf(ans, calculateForMaxIndex(index, it))
        }
        
        return ans
    }
}
```