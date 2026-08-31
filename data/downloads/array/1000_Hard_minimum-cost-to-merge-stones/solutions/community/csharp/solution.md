# O(n(n - k)^2) time, O(n^2) space, dynamic programming solution, beats 100%

**Author:** StanleyDodds
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-cost-to-merge-stones/solutions/5447775/](https://leetcode.com/problems/minimum-cost-to-merge-stones/solutions/5447775/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
For any (non-empty) subarray starting at index $x$ and ending at index $y$ (so that $y-x$ is its length), there is a unique minimal number of piles $p$ in the range $1\\le p\\lt k$ that this subarray can be reduced to. Specifically, it is the unique $p$ in the above range satisfying $p\\equiv y-x\\mod k-1$

Then, for each (non-empty) subarray, there is also a minimal cost associated with any reduction to this minimal number of piles. In this algorithm, we store these minimal costs for each subarray to compute the costs for larger subarrays.
# Approach
<!-- Describe your approach to solving the problem. -->
Firstly, we can immediately check if we will be able to reduce to 1 pile by reducing $n\\mod k-1$. If we cannot, we return -1, otherwise we proceed (and no longer need to worry about the final result not being 1 pile). Create an $n\	imes n$ dp array to store costs for each pair of start and end indices in the original array, representing each subarray. Then iterate over all (start, end) index pairs in some order that means for any subarray we reach, we will have already computed the costs for all subarrays of this subarray, and also an order that allows easy iterative computing of the sum of each subarray.

Firstly, if the subarray has length less than k, then its minimal reduced size is equal to its current size, and there is no cost to performing this trivial reduction, so we can write 0 in the dp array (or simply not do anything if we ignore these subarrays completely).

Otherwise, compute the final reduced length $p$ by (roughly) reducing $y-x\\mod k-1$. If the final reduced length is 1, we actually "pretend" that the final reduced length is k instead. We know that the final step of the reduction will be merging everything into 1 pile, where the associated cost will be the sum of the whole subarray. So at the end, we can simply add this subarray sum to the computed minimal cost for length k to get the actual minimal cost to reduce to length 1.

Then, we want to consider how to split the subarray, and number of piles, into two so that we can use previously computed results (without doing more work than needed). The easiest way to visualise and do this is to notice that at some point in any reduction of this subarray, the leftmost element of the subarray is merged for the final time. We treat all elements merged into the final left element as the "left" subarray, and the remaining elements as the "right" subarray. This reduces the problem to proper subarrays, unless the right subarray is empty (note that left subarray cannot be empty, as it always contains the leftmost element of the original non-empty subarray). The only way that the right subarray can be empty is if the final step merged everything into 1 pile, i.e. if the final reduced length is 1. But remember from before, for now we are ignoring the final step if the final step reduces to 1 pile, as we will correct the cost at the end. So in this case, ignoring the final step, not everything will be merged into the leftmost element, and so the right subarray will not be empty, hence both subarrays are proper.

So, we know that at some point the left subarray will be merged for the final time into some $q$ piles. And as the right subarray cannot merge with anything from the left, all remaining merges must only affect and reduce the right subarray to the remaining $p-q$ piles exactly. We know neither subarray is empty, so in fact $1\\le q\\lt p$. Note that all such $q$ are less than $k$ at least, so are all minimal reductions. In the algorithm, we simply iterate over these allowed values of $q$, and for each such $q$, we iterate over all splitting indices between the start and end of the subarray that are compatible with the left subarray reducing to exactly $q$ elements (which are the lengths congruent to $q\\mod k-1$ as explained before). Note that this checks each split at most once, because each left subarray has exactly 1 possible minimal reduced length (and in fact several splits do not even need to be checked, because the number of piles required in the left would equal or exceed $p$ leading to a contradiction in minimality or the above construction of the left subarray). For each split, we compute the total cost as the cost from the left subarray plus the cost from the right subarray, using our saved values, and update a minimum cost as we iterate. Finally, we remember that if we were reducing to length k, we actually need to add that subarray sum, and then in any case we save our newly computed minimal cost to the dp array.

At the end, we return the minimal cost computed for the subarray that is the entire original array.
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$O(n(n-k)^2)$
Or to be independent of $k$, this can be weakened to $O(n^3)$

We ignore subarrays of length less than k (as we know their minimal cost to fully reduce is 0). So we only iterate over end indices from k through n (totaling $O(n-k)$ indices), and within that iterate over start indices from 0 to the current end minus k (again, maxing out at $O(n-k)$ as the end gets large), and within that, to compute the dp values, we iterate over *some subset* of the indices between the start and end of this subarray, of which there are at most $O(n)$. Multiplying all of these dominant terms together gives $O(n(n-k)^2)$. Note that creating the dp array in theory takes $O(n^2)$ time; if it concerns you that this might dominate the time complexity, note that we could very easily reduce the size of the dp array to $(n-k)\	imes(n-k)$ instead, and include a small bounds check so that when trying to read the cost of a subarray that is too short, we instead just return the value 0 as it should be.
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$O(n^2)$

We only create one new array, so there is not much to say. Everything else is constant space.
# Code
```
public class Solution {
    public int MergeStones(int[] stones, int k) {
        int n = stones.Length;
        if ((n - 1) % (k - 1) != 0) return -1;
        int[,] dp = new int[n, n];
        int outerSum = 0;
        for (int i = 0; i < k - 1; i++) outerSum += stones[i];
        for (int y = k; y <= n; y++) {
            outerSum += stones[y - 1];
            int innerSum = dp[y - k, y - 1] = outerSum;
            outerSum -= stones[y - k];
            for (int x = y - k - 1; x >= 0; x--) {
                innerSum += stones[x];
                int p = (y - x - 2) % (k - 1) + 2;
                int minCost = int.MaxValue;
                for (int q = 1; q < p; q++) for (int z = x + q; z < y; z += k - 1) minCost = Math.Min(minCost, dp[x, z - 1] + dp[z, y - 1]);
                dp[x, y - 1] = (p == k ? innerSum : 0) + minCost;
            }
        }
        return dp[0, n - 1];
    }
}
```