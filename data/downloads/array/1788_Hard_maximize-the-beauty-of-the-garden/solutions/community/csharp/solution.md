# 💥💥 Beats 100% on runtime and memory [EXPLAINED]

**Author:** r9n
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximize-the-beauty-of-the-garden/solutions/5924204/](https://leetcode.com/problems/maximize-the-beauty-of-the-garden/solutions/5924204/)

---

# Intuition
Maximize the beauty of the garden by ensuring that if we see the same flower value again, we can calculate the beauty of the flowers between the first and last occurrences, considering both positive and negative contributions.

# Approach
Track the cumulative sum of positive flower values while storing the first occurrence of each flower value; when a flower value repeats, compute the beauty using the cumulative sum and update the maximum beauty found.

# Complexity
- Time complexity:
O(n) because we go through the list of flowers once.

- Space complexity:
O(m) where m is the number of unique flower values stored in the dictionary.

# Code
```csharp []
public class Solution {
    public int MaximumBeauty(int[] flowers) {
        var firstAppearance = new Dictionary<int, int>(); // To track first appearance
        int cumulativeSum = 0, maxBeauty = int.MinValue;

        foreach (var flower in flowers) {
            cumulativeSum += Math.Max(flower, 0); // Accumulate only positive flowers
            
            if (firstAppearance.TryGetValue(flower, out int previousSum)) {
                // Calculate current beauty based on previous sum
                int currentBeauty = cumulativeSum - previousSum + (flower < 0 ? 2 * flower : flower);
                maxBeauty = Math.Max(maxBeauty, currentBeauty); // Update maximum beauty
            } else {
                firstAppearance[flower] = cumulativeSum; // Store first appearance sum
            }
        }

        return maxBeauty;
    }
}


```