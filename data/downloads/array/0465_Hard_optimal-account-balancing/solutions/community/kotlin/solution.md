# Kotlin backtracking

**Author:** lavruk
**Votes:** 0
**Link:** [https://leetcode.com/problems/optimal-account-balancing/solutions/2764921/](https://leetcode.com/problems/optimal-account-balancing/solutions/2764921/)

---

# Code
```
class Solution {
    fun minTransfers(transactions: Array<IntArray>): Int {
        var debt = IntArray(12) // in contraints
        for ((from, to, amount) in transactions){
            debt[from] -= amount
            debt[to] += amount
        }

        fun backtrack(curId: Int): Int {
            var curId = curId
            while (curId < debt.size && debt[curId] == 0) curId++
            // Base case.
            if (curId == debt.size) return 0
            // Recursive case.
            var minTransactions = Int.MAX_VALUE
            for (i in curId + 1 until debt.size) {
                if (debt[i] * debt[curId] < 0) {
                    debt[i] += debt[curId]
                    minTransactions = minOf(minTransactions, backtrack(curId + 1) + 1)
                    debt[i] -= debt[curId]
                }
            }
            return minTransactions
        }

        return backtrack(0)
    }
}
```