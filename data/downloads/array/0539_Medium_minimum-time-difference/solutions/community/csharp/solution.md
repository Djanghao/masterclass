# C# Solution for Minimum Time Difference Problem

**Author:** Aman_Raj_Sinha
**Votes:** 4
**Link:** [https://leetcode.com/problems/minimum-time-difference/solutions/5792528/](https://leetcode.com/problems/minimum-time-difference/solutions/5792528/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The problem asks for the minimum difference between any two time points on a 24-hour clock. Since the total number of possible minutes in a day is fixed at 1440 (60 minutes * 24 hours), we can optimize the solution by using a bucket sort-like approach. This approach leverages a boolean array to track which time points are present without needing to explicitly sort the list, making the solution faster.

# Approach
<!-- Describe your approach to solving the problem. -->
1.	Boolean Array Representation:
We create a boolean array of size 1440, where each index corresponds to a minute of the day (from 00:00 to 23:59). Each time point is converted into the number of minutes since midnight, and the corresponding index in the array is marked true.
2.	Handle Duplicate Times:
If any time point appears more than once, the minimum difference is 0 because the difference between identical times is 0. We handle this case early by checking if a time is already marked in the boolean array.
3.	Calculate Minimum Difference:
After processing all the time points:
	\u2022	We scan the boolean array to find the minimum difference between consecutive time points that are marked as true.
	\u2022	We also need to account for the circular nature of the clock, so we calculate the difference between the first and last time points.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
1.	Time conversion and marking the boolean array:
	\u2022	Each time point is processed in constant time to convert to minutes and mark it in the boolean array. This step takes O(n) time, where n is the number of time points.
2.	Scanning the boolean array:
	\u2022	After marking the times, we scan the 1440-sized array to find the minimum difference between consecutive times. This step takes O(1440) time, which is constant, as the size of the array is fixed.

Thus, the overall time complexity is O(n), dominated by the input size.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
1.	Boolean array:
	\u2022	We use a boolean array of size 1440 to represent each possible minute of the day. This requires O(1440) = O(1) space because the array size is fixed regardless of the input size.
2.	Auxiliary space for variables:
	\u2022	We use a few integer variables (prevTime, firstTime, lastTime, and minDifference) for tracking time points and differences, which also takes constant space.

Thus, the space complexity is O(1) in terms of additional space, since the boolean array has a fixed size and we use only a few extra variables.

# Code
```csharp []
public class Solution {
    public int FindMinDifference(IList<string> timePoints) {
        // If we have more than 1440 time points, there must be duplicates.
        if (timePoints.Count > 1440) {
            return 0;
        }
        
        // Step 1: Create a boolean array to represent each minute of the day
        bool[] timeSeen = new bool[1440];
        
        // Step 2: Convert each time to minutes since midnight and mark in the boolean array
        foreach (var time in timePoints) {
            int minutes = ConvertToMinutes(time);
            // If the same time already exists, return 0 (since duplicate times give min diff of 0)
            if (timeSeen[minutes]) {
                return 0;
            }
            timeSeen[minutes] = true;
        }
        
        // Step 3: Find the minimum difference
        int prevTime = -1; // Variable to keep track of previous time point
        int firstTime = -1; // First time point of the day
        int lastTime = -1; // Last time point of the day
        int minDifference = int.MaxValue;

        for (int i = 0; i < 1440; i++) {
            if (timeSeen[i]) {
                if (prevTime != -1) {
                    // Calculate the difference between consecutive times
                    minDifference = Math.Min(minDifference, i - prevTime);
                }
                prevTime = i;
                
                // Record the first and last time points
                if (firstTime == -1) {
                    firstTime = i;
                }
                lastTime = i;
            }
        }
        
        // Step 4: Handle the circular case (difference between the first and last time of the day)
        minDifference = Math.Min(minDifference, 1440 + firstTime - lastTime);
        
        return minDifference;
    }

    // Helper function to convert "HH:MM" to minutes since midnight
    private int ConvertToMinutes(string time) {
        int hours = int.Parse(time.Substring(0, 2));
        int minutes = int.Parse(time.Substring(3, 2));
        return hours * 60 + minutes;
    }
}
```