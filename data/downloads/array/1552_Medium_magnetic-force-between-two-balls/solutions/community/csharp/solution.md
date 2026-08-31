# C# Solution for Magnetic Force Between Two Balls Problem

**Author:** Aman_Raj_Sinha
**Votes:** 4
**Link:** [https://leetcode.com/problems/magnetic-force-between-two-balls/solutions/5339609/](https://leetcode.com/problems/magnetic-force-between-two-balls/solutions/5339609/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The problem of maximizing the minimum magnetic force between balls can be approached effectively using a binary search strategy. The core idea is to find the largest possible minimum distance (force) between any two balls when placed in the baskets. The problem can be reduced to a decision problem: for a given distance, check if it\u2019s possible to place all balls such that no two balls are closer than this distance.

# Approach
<!-- Describe your approach to solving the problem. -->
1.	Sort the Positions: Sorting the positions of the baskets helps in sequentially checking feasible placements.
2.	Binary Search Setup: Use binary search to find the maximum possible minimum magnetic force:
	\u2022	Set low to 1 (the smallest possible distance between any two positions).
	\u2022	Set high to the difference between the maximum and minimum positions (the largest possible distance between any two positions).
3.	Feasibility Check: Implement a helper function to determine if it\u2019s possible to place m balls such that the minimum distance between any two balls is at least a given value:
	\u2022	Start by placing the first ball in the first position.
	\u2022	For each subsequent position, check if it can accommodate a ball placed at least the given minimum distance away from the last placed ball.
	\u2022	If it\u2019s possible to place all m balls this way, the distance is feasible.
4.	Adjust Search Range: Based on the feasibility check:
	\u2022	If the current distance is feasible, update the result and try a larger distance (increase low).
	\u2022	If not feasible, try a smaller distance (decrease high).
5.	Return the Result: The highest feasible distance found during the binary search is the solution.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
1.	Sorting: The sorting step takes O(n log n), where n is the number of positions.
2.	Binary Search: The binary search operates within the range from 1 to d (difference between the maximum and minimum positions). The binary search itself takes O(log d) iterations.
3.	Feasibility Check: Each feasibility check involves a single pass through the positions array, taking O(n) time.

Combining these, the overall time complexity is: O(nlog n + nlog d) 

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
The space complexity is dominated by the space required for the sorted array. Given that the input array itself is used, the space complexity is:
 O(1) 
Additional space usage is constant since we only use a few extra variables for the binary search and feasibility checks

# Code
```
public class Solution {
    public int MaxDistance(int[] position, int m) {
        Array.Sort(position);
        int n = position.Length;

        int low = 1, high = position[n - 1] - position[0];
        int result = 0;

        while (low <= high) {
            int mid = low + (high - low) / 2;
            if (CanPlaceBalls(position, m, mid)) {
                result = mid;
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }

        return result;
    }
    private bool CanPlaceBalls(int[] position, int m, int minDist) {
        int count = 1;
        int lastPos = position[0];

        for (int i = 1; i < position.Length; i++) {
            if (position[i] - lastPos >= minDist) {
                count++;
                lastPos = position[i];
                if (count == m) {
                    return true;
                }
            }
        }

        return false;
    }
}
```