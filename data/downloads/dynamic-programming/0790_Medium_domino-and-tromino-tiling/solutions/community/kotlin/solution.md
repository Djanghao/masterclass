# Simplest kotlin solution I've seen yet

**Author:** YaroslavPanasiuk
**Votes:** 3
**Link:** [https://leetcode.com/problems/domino-and-tromino-tiling/solutions/3914569/](https://leetcode.com/problems/domino-and-tromino-tiling/solutions/3914569/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
It turns out that the sequence of answers to the problem looks like this:
```
ans = [1, 2, 5, 11, 24, 53, 117, ...]
```
where `ans[n]` is the answer to the problem with length of board equal to `n`

# Approach
Trying to find dependency, I found out that `ans[n] == ans[n-1]*2 + ans[n-3]` for each `n >= 3`. Suddenly an impossible problem became just slightly harder than a fibonacci sequence

The solution, indeed looks very similar to a regular solution of the `n-th` fibonacci number problem with dynamic programming
# Complexity
- Time complexity:
O(n)
- Space complexity:
O(n)
# Code
```
class Solution {
    fun numTilings(n: Int): Int {
        if(n < 3){return n}
        var array = longArrayOf(1, 2, 5)
        for(i in 3 until n){
            val temp = array[0]
            array[0] = array[1]
            array[1] = array[2]
            array[2] = ((array[2]*2+temp)%1000000007)
        }
        return array[2].toInt()
    }
}
```