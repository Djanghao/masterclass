# My kotlin solution with time O(1) and space O(1)

**Author:** hj-core
**Votes:** 2
**Link:** [https://leetcode.com/problems/sequential-digits/solutions/4665489/](https://leetcode.com/problems/sequential-digits/solutions/4665489/)

---

Since there are only 36 possible values, I prefer not to be fancy and just list them out, returning those within the specified range.

Below is my solution in kotlin,
```
class Solution {
    /* Complexity:
     * Time O(1) and Space O(1);
     */
    fun sequentialDigits(low: Int, high: Int): List<Int> {
        if (low > 123_456_789) {
            return emptyList()
        }

        val fullList = buildList {
            addAll(12..89 step 11)
            addAll(123..789 step 111)
            addAll(1_234..6_789 step 1_111)
            addAll(12_345..56_789 step 11_111)
            addAll(123_456..456_789 step 111_111)
            addAll(1_234_567..3_456_789 step 1_111_111)
            addAll(12_345_678..23_456_789 step 11_111_111)
            add(123_456_789)
        }
        val start = fullList.indexOfFirst { low <= it }
        val endInclusive = fullList.indexOfLast { it <= high }
        return fullList.slice(start..endInclusive)
    }
}
```