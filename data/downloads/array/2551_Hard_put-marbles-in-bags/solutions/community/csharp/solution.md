# C# Solution for Put Marbles In Bags Problem

**Author:** Aman_Raj_Sinha
**Votes:** 3
**Link:** [https://leetcode.com/problems/put-marbles-in-bags/solutions/3734549/](https://leetcode.com/problems/put-marbles-in-bags/solutions/3734549/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The intuition behind the solution is to maximize and minimize the scores by distributing the marbles in the bags based on certain rules. The goal is to find the difference between the maximum and minimum scores.

# Approach
<!-- Describe your approach to solving the problem. -->
- Calculate the weight of each pair of marbles and store them in the pairWeights array.
- Sort the pairWeights array in non-decreasing order.
- Calculate the maximum score by adding the weights of the first and last marble and the sum of the k - 1 largest pair weights.
- Calculate the minimum score by adding the weights of the first and last marble and the sum of the k - 1 smallest pair weights.
- Return the difference between the maximum and minimum scores as the answer.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
The time complexity of the solution is determined by the sorting step, which takes O((n-1)log(n-1)) time, where n is the length of the weights array. The rest of the operations, such as calculating the scores, take O(1) time. Therefore, the overall time complexity is O(nlogn).

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
The space complexity is O(n) since we create an additional array pairWeights of size n-1 to store the weights of each pair of marbles.

# Code
```
public class Solution {
    public long PutMarbles(int[] weights, int k) {
         int n = weights.Length;
    int[] pairWeights = new int[n - 1];

    for (int i = 1; i < n; i++)
        pairWeights[i - 1] = weights[i] + weights[i - 1];

    Array.Sort(pairWeights);

    long maxScore = weights[0] + weights[n - 1];
    long minScore = weights[0] + weights[n - 1];

    for (int i = n - k; i < n - 1; i++)
        maxScore += pairWeights[i];

    for (int i = 0; i < k - 1; i++)
        minScore += pairWeights[i];

    return maxScore - minScore;
    }
}
```