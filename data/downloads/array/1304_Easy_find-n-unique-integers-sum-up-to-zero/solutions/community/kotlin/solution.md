# My kotlin solution with time O(n) and Space O(1)

**Author:** hj-core
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-n-unique-integers-sum-up-to-zero/solutions/2476692/](https://leetcode.com/problems/find-n-unique-integers-sum-up-to-zero/solutions/2476692/)

---

Below is my solution in kotlin.
```
class Solution {
    /* Complexity:
     * Time O(n) and Space O(1) that space for output is not considered;
     */
    fun sumZero(n: Int): IntArray {
        var value = n / 2
        val ans = IntArray(n)
        for (index in 0 until n - 1 step 2) {
            ans[index] = value
            ans[index + 1] = -value
            value--
        }
        return ans
    }
}
```