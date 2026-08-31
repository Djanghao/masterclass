# [Kotlin] Beats 100% space/time, O(n^2)

**Author:** entangledloops_old
**Votes:** 2
**Link:** [https://leetcode.com/problems/3sum-with-multiplicity/solutions/547336/](https://leetcode.com/problems/3sum-with-multiplicity/solutions/547336/)

---

The short explanation: Math. The intuition behind the formulas is all basic combinatorics.

The long explanation:
1. Sort the numbers - **O(n log n)**.
2. Memoize the counts of each distinct integer - **O(n)**.
3. Solve number of solutions for i, j, k using derived formulas = `count(A[i], A[j], A[k])`- **O(log A[x])**. 
4. Using a loop with binary search, iterate over all distinct integers from left to right, using our `count` function as we go - **O(n^2)**.
(*Note: Steps 1 and 2 could be done simultaneosly. An array of distinct values could then be constructed in place by shifting left for better performance on some inputs.*)

Notice that after sorting, `A[i] <= A[j] <= A[k]`, which gives 4 possible cases when `A[i] + A[j] + A[k] == target`:
*(Note: We don't need to compare A[i] and A[k] explicitly because of transitivity after sorting.)*
* `A[i] == A[j],  A[j] == A[k]`
* `A[i] == A[j], A[j] != A[k]`
* `A[i] != A[j], A[j] == A[k]`
* `A[i] != A[j], A[j] != A[k]`
For each of these 4 situations, I've derived formulas (see comments in code). 
Three of these are O(1) and one is O(# of A[i]). They use the memoized counts to compute solutions directly.

For our final loop (#4), we'll prove bounds by considering the two extreme inputs, as any other cases hit our O(1) time formulas:
1. All numbers are the same and they sum to a solution - **O(log A[x])**
Sounds the most difficult, but turns out to be the easiest in practice. Since we only consider distinct combinations, there is only 1 case and it can be solved directly.
The bounds come from standard multiplication / division algorithms.
Example:
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ...]
target: 0

2. All numbers are unique and the maximum number of possible solutions exist as subsets - **O(n^2)**.
*(A mixture of cases 1 and 2 produces some O(1) situations and some O(n) solutions, so is also O(n)).*
The maximum number of unique subsets sum to the target.
Example:
[0, 1, 74, 2, 3, 70, 4, 5, 66, 6, 7, 62, 8, 9, 58, 10, 11, 54, 12, 13, 50, 14, 15, 46, 16, 17, 42, 18, 19, 38, 20, 21, 34, 22, 23, 30, 24, 25, 26]
target: 75

This handmade problem instance has 94 unique solutions for only 39 unique numbers.
In this case, memoization doesn't help us, since there are no duplicates. 
However, sorting does help, since we can use binary search to maintain our worst case O(n^2) bounds.
Overall, this algorithm does really well on the average. The number of iterations is usually much less than the size of our input.

```
class Solution {
    fun threeSumMulti(A: IntArray, target: Int): Int {
        A.sort()
        val memo = mutableMapOf<Int, Int>().apply { A.forEach { put(it, getOrDefault(it, 0) + 1) } }

        // count the total number of solutions for the provided values of A[i], A[j], A[k]
        fun count(xi: Int, xj: Int, xk: Int): Long {
            val count_xi = memo[xi]!!
            var count = 0L

            if (xi == xj && xj == xk) {
                // target: 3
                // 1, 1, 1, 1, 1, 1, 1
                // i  j  5
                //       j 4
                //          j 3
                //             j  2
                //                j  1
                //    i  j  4
                //          j 3
                //             j  2
                //                j  1
                //       i  j 3
                //             j  2
                //                j  1
                count += ((count_xi - 2L) * (count_xi - 1L) * count_xi) / 6L
            } else if (xi == xj && xj != xk) {
                // target: 3
                // 1, 1, 1, 1, 2, 2, 2
                // i  j        3
                //       j     3
                //          j  3
                //    i  j     3
                //          j  3
                //       i  j  3
                val count_xk = memo[xk]!!
                val sum = ((count_xi - 1L) * count_xi) / 2L
                count += sum * count_xk
            } else if (xi != xj && xj == xk) {
                // target: 5
                // 1, 1, 1, 2, 2, 2, 2
                // i        j  3
                //             j  2
                //                j  1
                //    i     j  3
                //             j  2
                //                j  1
                //       i  j  3
                //             j  2
                //                j  1
                val count_xj = memo[xj]!!
                val sum = ((count_xj - 1L) * count_xj) / 2L
                count += count_xi * sum
            } else { //if (xi != xj && xj != xk)
                // target: 5
                // 1, 1, 1, 2, 2, 2, 3, 3, 3, 3
                // i        j        4
                //             j     4
                //                j  4
                //    i     j        4
                //             j     4
                //                j  4
                //       i  j        4
                //             j     4
                //                j  4
                val count_xj = memo[xj]!!
                val count_xk = memo[xk]!!
                count += count_xi * count_xj * count_xk
            }
            
            return count
        }
        
        // find the next unique position in A from i
        fun nextIndex(i: Int): Int {
            val x = A[i]
            var ret = i + 1
            while (ret < A.size && A[ret] == A[i]) ++ret
            return ret
        }
        // binary search for missing value
        fun nextIndex(target: Int, from: Int): Int {
            val ret = A.binarySearch(target, from)
            return if (ret < 0 || A[ret] != target) A.size else ret
        }
        
        var total = 0L
        var i = 0
        var j = 1
        var k = 2
        while (i < A.size-2 && j < A.size-1 && k < A.size) {
            // add new solutions to total
            val xi = A[i]
            val xj = A[j]
            val xk = A[k]
            if (xi+xj+xk == target) {
                total += count(xi, xj, xk)
                j = nextIndex(j)
                k = j + 1
                if (j >= A.size || k >= A.size) {
                    i = nextIndex(i)
                    j = i + 1
                    k = j + 1
                }
            } else {
                k = nextIndex(target - (xi+xj), k+1)
                if (k >= A.size) {
                    j = nextIndex(j)
                    k = j + 1
                }
                if (j >= A.size-1) {
                    i = nextIndex(i)
                    j = i + 1
                    k = j + 1
                }
            }
        }

        return (total % 1_000_000_007L).toInt()
    }
}
```