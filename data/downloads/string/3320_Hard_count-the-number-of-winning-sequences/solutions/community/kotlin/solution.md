# Kotlin, bottom-up DP, beats 100% by run time, 20 ms

**Author:** user7581dN
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-the-number-of-winning-sequences/solutions/6028186/](https://leetcode.com/problems/count-the-number-of-winning-sequences/solutions/6028186/)

---

# Intuition
Let's refer to Bob's score as the difference between Bob's and Alice's points gained throughout the game. Obviously, it starts with 0 and can increase by 1, decrease by 1, or stay unchanged after every round (i.e. every character in the string).
Therefore, at the end of the game Bob can have any score from `-n` to `n`, where `n` is the number of rounds (i.e. string length).

We have to count all sequences that lead to positive final score. This can be achieved with bottom-up dynamic programming.

# Approach
We will use the array `count` to track the number of sequences leading to every possible score. Since score can be negative, we'll map score to index by adding `n` to it: `count[n - 1]` will store the number of sequences for the score of -1, `count[n]` - for the score of 0, and so on.
We'll track score separately for the three possible options of Bob's last move ('F', 'W', and 'E'). They correspond to indices from 0 to 2 for the 2nd dimension of the array.

The first move will be the base of DP. Depending on Alice's move, we assign 1 to the `count` cells corresponding to Bob's move (one for the score of -1, one for 0, and one for 1).

Starting from the second move, Bob cannot repeat his previous choice. Therefore, the count for every option (win, loss, draw) will be the sum of previous counts of two other options. We'll use another array `prev` to keep the counts from the previous round.

After reaching the end of the string, we need to sum up all counts for positive scores - that is, for indices greater than `n`.

The solution can be further optimized by not processing negative scores that cannot lead to positive final score (i.e. there are not enough rounds left).

# Complexity
- Time complexity:
$$O(n^2)$$

- Space complexity:
$$O(n)$$

# Code
```kotlin []
class Solution {
    fun countWinningSequences(s: String): Int {
        val n = s.length
        val size = (n shl 1) + 1
        var prev = Array(3) { IntArray(size) }
        var count = Array(3) { IntArray(size) }

        // Trick to quickly determine the moves to lose, draw, and win:
        // ASCII codes of 'E', 'F', 'W' are 69, 70, and 87;
        // their last 2 bits are 01, 10, and 11, respectively
        val order = orders[s[0].code and 3]
        count[order[0]][n - 1] = 1
        count[order[1]][n] = 1
        count[order[2]][n + 1] = 1

        for (i in 1 until n) {
            val temp = prev
            prev = count
            count = temp
            val (lose, draw, win) = orders[s[i].code and 3]
            // Note that we don't need to look at scores less than
            // n - i or greater than n + i, since they all have 0
            // counts before the current round
            for (score in n - i..n + i) {
                val prevLose = prev[lose][score]
                val prevDraw = prev[draw][score]
                val prevWin = prev[win][score]
                count[lose][score - 1] = (prevDraw + prevWin) % MOD
                count[draw][score] = (prevLose + prevWin) % MOD
                count[win][score + 1] = (prevLose + prevDraw) % MOD
            }
        }

        var sum = 0L
        for (cnt in count) for (i in n + 1 until size) sum += cnt[i]
        return (sum % MOD).toInt()
    }

    companion object {
        val orders = arrayOf(intArrayOf(-1, -1, -1), intArrayOf(1, 2, 0), intArrayOf(2, 0, 1), intArrayOf(0, 1, 2))
        val MOD = 1000000007
    }
}
```