# Sorted by right

**Author:** sav20011962
**Votes:** 0
**Link:** [https://leetcode.com/problems/remove-covered-intervals/solutions/5381349/](https://leetcode.com/problems/remove-covered-intervals/solutions/5381349/)

---

# Approach
I just sort the array by increasing right border, while the left border is sorted by decreasing (in case of equal right borders). 
Then I simply loop through the array in two nested loops in search of a "spanning" interval. 
Maybe I should try a binary search here, so that it is not n^2, but n*log(n).
I used only 1 "trick" - I memorize the last interval that was "covered" and start from it in the next search loop.
# Complexity
![image.png](./images/0.png)
```
class Solution {
    fun removeCoveredIntervals(intervals: Array<IntArray>): Int {
        intervals.sortWith(Comparator 
            { first, second ->
                if (first[1]==second[1]) second[0] - first[0]
                else first[1]-second[1]
            }
        )
        // intervals.forEachIndexed {key,entry ->
        //     println("$key: \	${entry.joinToString("\	")}")
        // }
        var j0 = 0
        val len = intervals.size
        var rez = len
        for (i in 0 until len-1) {
            j0 = maxOf(i+1,j0)
            for (j in j0 until len) {
                if (intervals[i][0]>=intervals[j][0]) {
                    rez--
                    j0 = j
                    break
                }
            }
        }
        return rez
    }
}
```