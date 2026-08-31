# Easy bitmask and backtracking

**Author:** 2pac_shakur
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-compatibility-score-sum/solutions/1361633/](https://leetcode.com/problems/maximum-compatibility-score-sum/solutions/1361633/)

---

**Why backtracking**
The contraints are only till 8, so we can explore all the paths.
**Why bitmask**
Recursive call consumes less space, so, it is easy to keep track of which mentor is assigned and which isn't.

```
    /**
        Find compatablilty scores for each student to each mentor.
        
        Try to explore all the possibilites of assigning a student to a mentor.
        Start with "mask = 0", means, all bits are 0 in 0, means all mentors are free.
        "mask and (1 shl j) == 0", means, is 'jth' bit in the mask is '0'?, means, 'jth' mentor is free.
            - assign the mentor and explore other paths
            - new mask will be updated as "mask or (1 shl j)", means, we have to set the 'jth' bit in mask
    **/
    
    fun maxCompatibilitySum(A: Array<IntArray>, B: Array<IntArray>): Int {
        val n = A.size
        val compat = Array(n) { IntArray(n) }
        var ans = 0
        for ((i, row1) in A.withIndex()) {
            for ((j, row2) in B.withIndex()) {
                var score = 0
                for (k in 0 until row1.size)
                    score += if (row1[k] == row2[k]) 1 else 0 // if both are same, score increases
                compat[i][j] = score // ith student with jth mentor
            }
        }
        fun dfs(i: Int, mask: Int, total: Int) {
            if (i == n) { // all students are explored
                ans = maxOf(ans, total)
                return
            }
            for (j in 0 until n) { // explore all mentors for 'ith' student
                if (mask and (1 shl j) == 0) // is 'jth' mentor free?
                    dfs(i + 1, mask or (1 shl j), total + compat[i][j])
            }
        }
        
        dfs(0, 0, 0)
        return ans
    }
```