# My kotlin solution with time O(kLogk) and space O(k)

**Author:** hj-core
**Votes:** 9
**Link:** [https://leetcode.com/problems/find-k-pairs-with-smallest-sums/solutions/3688696/](https://leetcode.com/problems/find-k-pairs-with-smallest-sums/solutions/3688696/)

---

The idea is to view all possible pair sums in a matrix form. Let's draw a matrix that has a size of nums1.size * nums2.size, where the value at each cell (index1, index2) equals nums1[index1] + nums2[index2].

The most straightforward approach is to sort all pair sums and pick the first k pairs. However, this approach does not take advantage of the fact that both nums1 and nums2 are sorted, and it will result in a TLE error.

Since nums2 is sorted, we know that the pair sum at cell (index1, index2+1) will be at least as large as the pair sum at cell (index1, index2). This means that until we pick the pair at cell (index1, index2), we can ignore the pair at cell (index1, index2+1) and so on. In other words, we need to consider the next column of a row only when we have picked the current column of that row.

Since nums1 is sorted, we know that the pair sum at cell (index1+1, 0) will be at least as large as the pair sum at cell (index1, 0). This means that until we pick the pair at cell (index1, 0), we can ignore the pair at cell (index1+1, 0) and so on. In other words, we need to consider the next row only when we have picked the first column of the current row.

Based on the above idea, below is my solution in kotlin,
```
class Solution {
    /* Complexity:
     * Time O(kLogk) and Space O(k);
     */
    fun kSmallestPairs(nums1: IntArray, nums2: IntArray, k: Int): List<List<Int>> {
        // pq of pair(index1, index2) where the pairs are compared by nums1[index1] + nums2[index2]
        val pq = PriorityQueue<Pair<Int, Int>>(compareBy { nums1[it.first] + nums2[it.second] })
        val result = mutableListOf<List<Int>>()
        pq.offer(Pair(0, 0))
        while (result.size < k && pq.isNotEmpty()) {
            val (index1, index2) = pq.poll()
            result.add(listOf(nums1[index1], nums2[index2]))
            if (index2 + 1 < nums2.size) {
                pq.offer(Pair(index1, index2 + 1))
            }
            if (index2 == 0 && index1 + 1 < nums1.size) {
                pq.offer(Pair(index1 + 1, 0))
            }
        }
        return result
    }
}
```