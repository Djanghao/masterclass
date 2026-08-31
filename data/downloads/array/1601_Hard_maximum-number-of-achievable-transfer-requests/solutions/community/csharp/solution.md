# C# Solution for Maximum Number of Achievable Transfer Requests Problem

**Author:** Aman_Raj_Sinha
**Votes:** 3
**Link:** [https://leetcode.com/problems/maximum-number-of-achievable-transfer-requests/solutions/3708337/](https://leetcode.com/problems/maximum-number-of-achievable-transfer-requests/solutions/3708337/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The intuition behind the solution is to use bitmasking to generate all possible combinations of requests and check if each combination results in a valid distribution of employees among the buildings.

# Approach
<!-- Describe your approach to solving the problem. -->
- Iterate through all possible combinations of requests using bitmasking.
- For each combination, calculate the net change in employee transfers for each building by decrementing the employee count for the "from" building and incrementing it for the "to" building.
- Check if the net change is zero for all buildings, indicating a valid distribution of employees.
- If the distribution is valid, count the number of requests in the current combination and update the maximum achievable requests if necessary.
- Finally, return the maximum achievable requests.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
The time complexity of the solution is O(2^m * n), where m is the number of requests and n is the number of buildings. This is because the solution involves iterating through all possible combinations of requests, which is 2^m, and for each combination, calculating the net change in employee transfers for each building, which takes O(n) time.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
The space complexity of the solution is O(n), where n is the number of buildings. This is because the solution uses an array of size n to track the net change in employee transfers for each building.

# Code
```
public class Solution {
    public int MaximumRequests(int n, int[][] requests) {
        int m = requests.Length; // Number of requests
        int maxAchievable = 0; // Maximum achievable requests

        // Iterate through all possible combinations of requests using bitmasking
        for (int mask = 0; mask < (1 << m); mask++) {
            int[] buildings = new int[n]; // Array to track the net change in employee transfers for each building

            // Calculate the net change for each request based on the bitmask
            for (int i = 0; i < m; i++) {
                if ((mask & (1 << i)) != 0) {
                    int from = requests[i][0];
                    int to = requests[i][1];
                    buildings[from]--;
                    buildings[to]++;
                }
            }

            // Check if the net change is zero for all buildings
            bool isValid = true;
            for (int j = 0; j < n; j++) {
                if (buildings[j] != 0) {
                    isValid = false;
                    break;
                }
            }

            // Update the maximum achievable requests if the current combination is valid
            if (isValid) {
                int count = CountSetBits(mask);
                maxAchievable = Math.Max(maxAchievable, count);
            }
        }

        return maxAchievable;
    }
    private int CountSetBits(int num) {
        int count = 0;
        while (num > 0) {
            count += num & 1;
            num >>= 1;
        }
        return count;
    }
}
```