# My kotlin solution with time O(N) and space O(N)

**Author:** hj-core
**Votes:** 0
**Link:** [https://leetcode.com/problems/push-dominoes/solutions/2630282/](https://leetcode.com/problems/push-dominoes/solutions/2630282/)

---

Below is my solution in kotlin,
```
class Solution {
    /* Complexity:
     * Time O(N) and Space O(N) where N is the length of dominoes;
     */
    fun pushDominoes(dominoes: String): String {
        val pushed = StringBuilder(dominoes)
        var leftBound = 0

        loop@ for (rightBound in 1..dominoes.lastIndex) {
            val fallDirection = getFallDirection(dominoes, leftBound, rightBound)
            val range = leftBound..rightBound

            when (fallDirection) {
                FallDirection.Left -> fallToLeft(pushed, range)
                FallDirection.Right -> fallToRight(pushed, range)
                FallDirection.Inward -> fallInward(pushed, range)
                FallDirection.Unchanged -> {}
                FallDirection.Unknown -> continue@loop
            }
            leftBound = rightBound
        }
        return pushed.toString()
    }

    private fun getFallDirection(dominoes: String, leftBound: Int, rightBound: Int): FallDirection {
        return when (dominoes[leftBound]) {
            '.' -> when (dominoes[rightBound]) {
                '.' -> FallDirection.Unknown
                'L' -> FallDirection.Left
                'R' -> FallDirection.Unchanged
                else -> throw IllegalStateException()
            }
            'L' -> FallDirection.Unchanged
            'R' -> when (dominoes[rightBound]) {
                '.' -> if (rightBound == dominoes.lastIndex) FallDirection.Right else FallDirection.Unknown
                'L' -> FallDirection.Inward
                'R' -> FallDirection.Right
                else -> throw IllegalStateException()
            }
            else -> throw IllegalStateException()
        }
    }

    private enum class FallDirection { Left, Right, Inward, Unchanged, Unknown }

    private fun fallToLeft(dominoes: StringBuilder, range: IntRange) {
        fall(dominoes, range, 'L')
    }

    private fun fall(dominoes: StringBuilder, range: IntRange, directionSymbol: Char) {
        for (index in range) {
            dominoes[index] = directionSymbol
        }
    }

    private fun fallToRight(dominoes: StringBuilder, range: IntRange) {
        fall(dominoes, range, 'R')
    }

    private fun fallInward(dominoes: StringBuilder, range: IntRange) {
        val width = range.last - range.first + 1
        val halfWidth = width shr 1

        val rangeToRight = range.first until range.first + halfWidth
        fallToRight(dominoes, rangeToRight)

        val rangeToLeft = range.last - halfWidth + 1..range.last
        fallToLeft(dominoes, rangeToLeft)
    }
}
```