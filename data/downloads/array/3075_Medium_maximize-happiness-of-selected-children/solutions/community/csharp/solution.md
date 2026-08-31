# C# Solution for Maximise Happiness of Selected Children Problem

**Author:** Aman_Raj_Sinha
**Votes:** 6
**Link:** [https://leetcode.com/problems/maximize-happiness-of-selected-children/solutions/5132912/](https://leetcode.com/problems/maximize-happiness-of-selected-children/solutions/5132912/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The solution aims to maximize the total sum of happiness values by selecting children in each round based on their happiness values. It iterates through the sorted array and selects the maximum happiness value that hasn\u2019t been fully selected yet.

# Approach
<!-- Describe your approach to solving the problem. -->
1.	Sort the happiness array in descending order to prioritize selecting children with higher happiness values first.
2.	Iterate through the sorted array for each selection round (up to k rounds or the length of the array).
3.	For each round, pick the ith biggest happiness score and subtract the number of rounds passed from it. If the result is positive, add it to the total sum of happiness and increment the rounds.
4.	Return the total sum of happiness achieved.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
\u2022	Sorting the array takes O(nlogn) time.
\u2022	The iteration through the array for each selection round takes O(n) time.
\u2022	Overall, the time complexity is O(nlogn), dominated by the sorting operation.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
The space complexity is O(1) as the algorithm uses only a constant amount of extra space for variables regardless of the input size.

# Code
```
public class Solution {
    public long MaximumHappinessSum(int[] happiness, int k) {
        Array.Sort(happiness, (a, b) => b - a); // Sort in descending order
        
        int rounds = 0;
        long totalHappySum = 0;
        
        for (int i = 0; i < k && i < happiness.Length; i++) {
            int selected = happiness[i] - rounds;
            if (selected > 0) {
                totalHappySum += selected;
                rounds++;
            }
        }
        
        return totalHappySum;
    }
}
```