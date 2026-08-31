# [Kotlin] Recursive DP solution.

**Author:** Hibbah
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-ways-of-cutting-a-pizza/solutions/3412823/](https://leetcode.com/problems/number-of-ways-of-cutting-a-pizza/solutions/3412823/)

---

# Complexity
- Time complexity: O(M * N * k * (M + N))
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(M * N * k)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
private val MOD = (1e9 + 7).toInt()
private var ROW = 0
private var COL = 0
private lateinit var count: Array<IntArray>

fun ways(pizza: Array<String>, k: Int): Int {
    ROW = pizza.size
    COL = pizza[0].length
    calcSubSumTable(pizza)

    return ways(0, 0, k, Array(ROW) { Array(COL) { IntArray(k + 1) { -1 } } })
}

// pre-processing
private fun calcSubSumTable(pizza: Array<String>) {
    count = Array(ROW) { IntArray(COL) { 0 } }

    for (i in 0 until ROW) {
        for (j in 0 until COL) {
            count[i][j] = count[i, j - 1] + count[i - 1, j] - count[i - 1, j - 1]
            if (pizza[i][j] == 'A') count[i][j]++
        }
    }
}

// Kotlin - operator function
// using 'count[i, j]'
private operator fun Array<IntArray>.get(i: Int, j: Int): Int {
    return if (i !in (0 until ROW) || j !in (0 until COL)) 0
           else this[i][j]
}

private fun ways(startRow: Int,
                 startCol: Int,
                 k: Int,
                 cache: Array<Array<IntArray>>): Int {
    // already calcated before
    if (cache[startRow][startCol][k] != -1) 
        return cache[startRow][startCol][k]

    // basecase
    if (count[startRow to startCol, ROW to COL] <= 0) return 0
    if (k == 1) return 1

    var result = 0

    // cutting horizontal
    for (i in startRow + 1 until ROW) {
        if (count[startRow to startCol, i to COL] > 0) {
            result += ways(i, startCol, k - 1, cache)
            result %= MOD
        }
    }

    // cutting vertical
    for (j in startCol + 1 until COL) {
        if (count[startRow to startCol, ROW to j] > 0) {
            result += ways(startRow, j, k - 1, cache)
            result %= MOD
        }
    }

    // return & memoization
    return result.also { cache[startRow][startCol][k] = it }
}

// Kotlin - operator function
// using 'count[(r1 to c1), (r2 to c2)]'
private operator fun Array<IntArray>.get(start: Pair<Int, Int>, end: Pair<Int, Int>): Int {
    // Kotlin - Destructuring declaration
    val (startRow, startCol) = start
    val (endRow, endCol) = end.first - 1 to end.second - 1
    
    return this[endRow, endCol] - (this[startRow - 1, endCol] + this[endRow, startCol - 1]) + this[startRow - 1, startCol - 1]
}

```