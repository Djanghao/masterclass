# C# solution beats 100

**Author:** Obose
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-time-to-remove-all-cars-containing-illegal-goods/solutions/5171308/](https://leetcode.com/problems/minimum-time-to-remove-all-cars-containing-illegal-goods/solutions/5171308/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
When I first thought about solving this problem, I realized that the key was to understand that flipping bits in a binary string can be achieved by flipping the entire string or by flipping segments of the string. My initial thought was to calculate the cost of flipping the entire string and the cost of flipping segments of the string, and then combine these costs to find the minimum total cost.


# Approach
<!-- Describe your approach to solving the problem. -->
I started by computing two arrays, left and right, representing the prefix and suffix costs respectively. The prefix cost at each position i is the minimum cost to flip all bits from the start of the string to position i, including the bit at position i. The suffix cost at each position i is the minimum cost to flip all bits from position i to the end of the string, including the bit at position i.

The prefix cost is computed by iterating from left to right, updating the cost at each position based on the previous cost and the current bit. The suffix cost is computed similarly but in reverse, iterating from right to left.

After computing the prefix and suffix costs, I calculated the minimum combined cost by comparing the cost of flipping the entire string (the minimum of the last prefix cost and the first suffix cost) with the cost of flipping segments of the string (the minimum of the sum of prefix and suffix costs for each segment).
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
The time complexity of this solution is O(n), where n is the length of the string. This is because the algorithm iterates through the string twice to compute the prefix and suffix costs, and then iterates through the string again to calculate the minimum combined cost.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
The space complexity is also O(n), as the algorithm uses two arrays of size n to store the prefix and suffix costs.

# Code
```
public class Solution {
    public int MinimumTime(string s) {
        int n = s.Length;
        int[] left = new int[n];
        int[] right = new int[n];
        
        // Compute the left prefix costs
        for (int i = 0; i < n; i++) {
            if (i == 0) {
                left[i] = s[i] == '1' ? 2 : 0;
            } else {
                left[i] = left[i - 1] + (s[i] == '1' ? 2 : 0);
            }
            left[i] = Math.Min(left[i], i + 1);
        }
        
        // Compute the right suffix costs
        for (int i = n - 1; i >= 0; i--) {
            if (i == n - 1) {
                right[i] = s[i] == '1' ? 2 : 0;
            } else {
                right[i] = right[i + 1] + (s[i] == '1' ? 2 : 0);
            }
            right[i] = Math.Min(right[i], n - i);
        }
        
        // Calculate the minimum combined cost
        int minTime = Math.Min(left[n - 1], right[0]);
        for (int i = 0; i < n - 1; i++) {
            minTime = Math.Min(minTime, left[i] + right[i + 1]);
        }
        
        return minTime;
    }
}

```