# Kotlin Beats 100% + DP + Stack

**Author:** FastTurtle97
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-books-you-can-take/solutions/4572615/](https://leetcode.com/problems/maximum-number-of-books-you-can-take/solutions/4572615/)

---

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(n)

# Code
```
class Solution {
    fun maximumBooks(books: IntArray): Long {
        fun getSum(n: Long): Long{
            if(n <= 0) return 0
            return n * (n+1) / 2
        }

        val stack = Stack<Int>()
        val dp = LongArray(books.size) { 0 }
        var max = 0L
        for(i in 0 until books.size){
            while(stack.isNotEmpty()){
                val j = stack.peek()
                if(books[j] <= books[i] - i + j) break
                stack.pop()
            }

            val j = if(stack.isEmpty()) -1 else stack.peek()
            val dpJ = if(j >= 0) dp[j] else 0
            
            dp[i] = dpJ + getSum(books[i].toLong()) - getSum((books[i] - i + j).toLong())
            max = maxOf(max, dp[i])
            stack.push(i)
        }
        return max
    }
}
```