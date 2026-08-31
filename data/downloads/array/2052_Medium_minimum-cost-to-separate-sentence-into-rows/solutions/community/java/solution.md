# Java memoization

**Author:** namansharma5555
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-cost-to-separate-sentence-into-rows/solutions/4570033/](https://leetcode.com/problems/minimum-cost-to-separate-sentence-into-rows/solutions/4570033/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
public class Solution {
    private static final int INFINITY = Integer.MAX_VALUE;
    private int[] memoization;
    private int[] prefixSumLengths;
    private int totalWords;

    // Calculates the minimum cost of formatting a sentence into lines with width <= k
    public int minimumCost(String sentence, int k) {
        // Split the sentence into words
        String[] words = sentence.split(" ");
        totalWords = words.length;
        prefixSumLengths = new int[totalWords + 1];

        // Compute the prefix sum of word lengths to enable O(1) length calculation later
        for (int i = 0; i < totalWords; ++i) {
            prefixSumLengths[i + 1] = prefixSumLengths[i] + words[i].length();
        }

        // Initialize memoization array with INFINITY to indicate uncomputed subproblems
        memoization = new int[totalWords];
        Arrays.fill(memoization, INFINITY);

        // Start the Depth-First Search from the first word
        return depthFirstSearch(0, k);
    }

    // Recursive function with memoization to minimize cost
    private int depthFirstSearch(int index, int k) {
        // If the cost for the current index is already computed, return it
        if (memoization[index] != INFINITY) {
            return memoization[index];
        }

        // If all remaining words fit within a single line, there is no cost
        if (prefixSumLengths[totalWords] - prefixSumLengths[index] + totalWords - index - 1 <= k) {
            memoization[index] = 0;
            return 0;
        }

        int minCost = INFINITY;
        // Try placing each following word on the same line and calculate the cost
        for (int j = index + 1; j < totalWords; ++j) {
            int totalLengthWithSpaces = prefixSumLengths[j] - prefixSumLengths[index] + j - index - 1;
            // If the total length fits within the given width `k`
            if (totalLengthWithSpaces <= k) {
                // Calculate and update the minimum cost
                minCost = Math.min(
                    minCost,
                    (k - totalLengthWithSpaces) * (k - totalLengthWithSpaces) + depthFirstSearch(j, k)
                );
            }
        }

        // Memoize the result for the current index
        memoization[index] = minCost;
        return minCost;
    }
}
```