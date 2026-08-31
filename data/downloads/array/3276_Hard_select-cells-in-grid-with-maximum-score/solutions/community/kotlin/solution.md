# Kotlin | 100% (no competition) | explained

**Author:** JaninBV
**Votes:** 0
**Link:** [https://leetcode.com/problems/select-cells-in-grid-with-maximum-score/solutions/5723339/](https://leetcode.com/problems/select-cells-in-grid-with-maximum-score/solutions/5723339/)

---

This is an interesting problem because it looks easy!  My initial solution didn't take the rows into account, and so got the wrong answer.  I then used a priority queue, but that did not work with the recursion.  So here I will describe my final solution.  It could probably be made more efficient if memorization is added (I don't agree that it should be called memoization - why make up a new word?).

One could call this a greedy algorithm, where it tries the largest numbers first, but you have to also try without the largest numbers because of the issue with the rows.  I decided to use an array and then sort it.  Arrays are efficient when it comes to accessing items.  Into the array, I put the value from the grid and the row that it is on.  The column of the item doesn't matter.  I also decided to use an IntArray for each item in the array, although a pair could have been used.

Once all the items have been added to the array, I sort it in descending order by the value ([0]).  Recursion is nice because you can do each step, one at a time.  Here, I start with the highest value, which is in position 0 in the nums array.  Each call to next will process all of the same values.  Since we cannot use any row more than once, a boolean array is used to mark that row as used.  Following the call, it is returned to false since another item from that row may be selected.

Function next looks through nums for all values that are the same, and passes the index of the following numbers to the next call of next.  Since no duplicate numbers can be used, only one of them is tried at a time.

Recursion ends when either we have selected all the numbers we can (count = 0) or there are no more numbers to choose from.  This can happen if there are many duplicate numbers, for example.

Lastly, it's worth mentioning the two global variables.  nums is global since it doesn't change once it's set up, and max, since that can be set at the end of each recursion, and easily returned.

Here is my solution:

```
class Solution {
    
    var nums = Array<IntArray>(0) { IntArray(0) }
    var max = 0
    
    fun maxScore(grid: List<List<Int>>): Int {
        var numsNdx = 0
        nums = Array<IntArray>(grid.size * grid[0].size) { IntArray(2) }
        for (row in 0..grid.lastIndex) {
            for (col in 0..grid.get(row).lastIndex) {
                nums[numsNdx++] = intArrayOf(grid.get(row).get(col), row)                
            }
        }
        nums.sortByDescending { it[0] }
        var rowUsed = BooleanArray(grid.size)
        next(grid.size, 0, 0, rowUsed)
        return max
    }
    
    fun next(count: Int, sum: Int, numsNdx: Int, rowUsed: BooleanArray) {
        if (count == 0 || numsNdx == nums.size) {
            if (sum > max) {
                max = sum
            }
            return
        }
        
        var startNdx = numsNdx
        var endNdx = numsNdx
        var last = nums[numsNdx][0]
        var found = false
        var cand : IntArray
        while (endNdx <= nums.lastIndex && nums[endNdx][0] == last) {
            endNdx++
        }
        for (ndx in startNdx..endNdx - 1) {
            cand = nums[ndx]
            if (!rowUsed[cand[1]]) {
                found = true
                rowUsed[cand[1]] = true
                next(count - 1, sum + last, endNdx, rowUsed)
                rowUsed[cand[1]] = false
            }
            if (count == 1 && found) {
                break
            }
        }
        if (!found) {
            next(count, sum, endNdx, rowUsed)
        }
    }
}
```

Thanks for reading.  Please upvote if you like the solution and/or the explanation.
