# C# Solution for Minimum Number of Days To Make m Bouquets Problem

**Author:** Aman_Raj_Sinha
**Votes:** 4
**Link:** [https://leetcode.com/problems/minimum-number-of-days-to-make-m-bouquets/solutions/5334886/](https://leetcode.com/problems/minimum-number-of-days-to-make-m-bouquets/solutions/5334886/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The problem requires determining the minimum number of days needed to make a specified number of bouquets from an array of bloom days. Each bouquet needs a fixed number of adjacent flowers. The key observation is that we can use binary search to efficiently determine the minimum day, leveraging a helper function to check if it\u2019s feasible to make the required bouquets by that day.

# Approach
<!-- Describe your approach to solving the problem. -->
1.	Initial Checks:
	\u2022	Before starting the binary search, check if it\u2019s possible to make m bouquets given the total number of flowers (n). If m * k exceeds the number of flowers (n), it\u2019s impossible to make the bouquets, so return -1.
2.	Binary Search:
	\u2022	Initialize start to 0 and end to the maximum value in the bloomDay array.
	\u2022	Use binary search to find the minimum day. The midpoint (mid) of the search space is calculated, and the feasibility of making the required bouquets by day mid is checked using the helper function.
	\u2022	If it\u2019s possible to make at least m bouquets by day mid, update the potential answer and search the left half of the search space. Otherwise, search the right half.
3.	Helper Function:
	\u2022	The helper function GetNumOfBouquets iterates through the bloomDay array and counts contiguous segments of length k where all flowers have bloomed by the given day. This count is then used to determine if the required number of bouquets can be made.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
\u2022	Binary Search: The binary search runs in O(log D) time, where D is the range of days (difference between the minimum and maximum values in bloomDay).
\u2022	Feasibility Check: Each feasibility check (invoking GetNumOfBouquets) involves iterating through the bloomDay array, which takes O(n) time.

Thus, the overall time complexity is O(n * log D), where n is the length of bloomDay and D is the range of days.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
The space complexity is O(1) because the solution uses a constant amount of extra space irrespective of the input size. We only use a few variables for the binary search and the feasibility check.

# Code
```
public class Solution {
    public int MinDays(int[] bloomDay, int m, int k) {
        int n = bloomDay.Length;
        
        // If there are not enough flowers to make m bouquets, return -1
        if (m * k > n) {
            return -1;
        }
        
        // Initialize start to 0 and end to the maximum value in the array bloomDay
        int start = 0;
        int end = 0;
        foreach (int day in bloomDay) {
            end = Math.Max(end, day);
        }
        
        int ans = -1;
        
        // Binary search
        while (start <= end) {
            int mid = start + (end - start) / 2;
            if (GetNumOfBouquets(bloomDay, mid, k) >= m) {
                ans = mid;
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        }
        
        return ans;
    }

      // Helper function to get the number of bouquets possible by day "day"
    private int GetNumOfBouquets(int[] bloomDay, int day, int k) {
        int numOfBouquets = 0;
        int flowers = 0;
        
        foreach (int bloom in bloomDay) {
            if (bloom <= day) {
                flowers++;
                if (flowers == k) {
                    numOfBouquets++;
                    flowers = 0;
                }
            } else {
                flowers = 0;
            }
        }
        
        return numOfBouquets;
    }
}
```