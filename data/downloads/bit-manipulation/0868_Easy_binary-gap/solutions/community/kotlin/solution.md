# My kotlin solution with time O(1) and space O(1)

**Author:** hj-core
**Votes:** 1
**Link:** [https://leetcode.com/problems/binary-gap/solutions/2437228/](https://leetcode.com/problems/binary-gap/solutions/2437228/)

---

Below is my solution in kotlin, it preprocess the n with it right most bit and calculate the gap through shift right.
```
class Solution {
    /* Complexity:
     * Time O(1) & Space O(1);
     */
    fun binaryGap(n: Int): Int {
        tailrec fun process(num: Int, gap: Int = 0, maxGap: Int = 0): Int =
            when {
                num == 0 -> maxGap
                num and 1 == 0 -> process(num shr 1, gap + 1, maxGap)
                else -> process(num shr 1, 1, maxOf(gap, maxGap))
            }

        val rightMostBit = n - (n and (n - 1))
        return if (rightMostBit == 0) 0 else process(num = n / rightMostBit)
    }
}
```