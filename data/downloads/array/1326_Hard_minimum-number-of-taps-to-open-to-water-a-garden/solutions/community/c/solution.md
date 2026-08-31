# ✅ Simple 7 line solution w/ explanation ⬆️ BEST🧠

**Author:** trishitchar
**Votes:** 53
**Link:** [https://leetcode.com/problems/minimum-number-of-taps-to-open-to-water-a-garden/solutions/3983582/](https://leetcode.com/problems/minimum-number-of-taps-to-open-to-water-a-garden/solutions/3983582/)

---

# small request - please give an upvote if it helps \uD83D\uDC31\u267B\uFE0F\uD83D\uDC31

# Code
```CPP []
class Solution {
int minTaps(int n, vector<int>& ranges) {
        int min=0, max=0, count=0;  // Initialize variables to keep track of the minimum and maximum reach, and the number of taps used.
        while (max < n) {  // Continue looping until we cover the entire range from 0 to n.
            for (int i = 0; i < ranges.size(); i++) {
                // Check if tap i can cover the current minimum position (min) and reach the current maximum position (max).
                if (i - ranges[i] <= min && i + ranges[i] >= max)
                    max = i + ranges[i];  // Update the maximum reach if this tap can cover the current range.
            }
            if (max == min) return -1;  // If max is not updated in this loop, it means we can't extend the reach further. Return -1 as it's not possible.
            count++;  // Increment the count of taps used.
            min = max;  // Update the minimum reach to the newly reached maximum position.
        }
        return count;  // Return the count of taps used to cover the entire range.
    }
};
```
```JAVA []
class Solution {
    public int minTaps(int n, int[] ranges) {
        int min = 0, max = 0, count = 0; // Initialize variables to keep track of the minimum and maximum reach, and the number of taps used.
        while (max < n) { // Continue looping until we cover the entire range from 0 to n.
            for (int i = 0; i < ranges.length; i++) {
                // Check if tap i can cover the current minimum position (min) and reach the current maximum position (max).
                if (i - ranges[i] <= min && i + ranges[i] >= max) {
                    max = i + ranges[i]; // Update the maximum reach if this tap can cover the current range.
                }
            }
            if (max == min) return -1; // If max is not updated in this loop, it means we can't extend the reach further. Return -1 as it's not possible.
            count++; // Increment the count of taps used.
            min = max; // Update the minimum reach to the newly reached maximum position.
        }
        return count; // Return the count of taps used to cover the entire range.
    }
}
```
```Python []
class Solution:
    def minTaps(self, n: int, ranges: List[int]) -> int:
        min_pos = 0
        max_pos = 0
        count = 0  # Initialize variables to keep track of the minimum and maximum reach, and the number of taps used.
        
        while max_pos < n:  # Continue looping until we cover the entire range from 0 to n.
            for i in range(len(ranges)):
                # Check if tap i can cover the current minimum position (min_pos) and reach the current maximum position (max_pos).
                if i - ranges[i] <= min_pos and i + ranges[i] >= max_pos:
                    max_pos = i + ranges[i]  # Update the maximum reach if this tap can cover the current range.
                    
            if max_pos == min_pos:
                return -1  # If max_pos is not updated in this loop, it means we can't extend the reach further. Return -1 as it's not possible.
            
            count += 1  # Increment the count of taps used.
            min_pos = max_pos  # Update the minimum reach to the newly reached maximum position.
            
        return count  # Return the count of taps used to cover the entire range.
```

# Intuition && Approach

1. Initialize variables: min to keep track of the minimum reach, max to keep track of the maximum reach, and count to count the number of taps used.

2. Start a while loop that continues until the entire range from 0 to n is covered.

3. Inside the loop, iterate through all the taps represented by the ranges vector.

4. For each tap at position i, check if it can cover the current minimum position (min) and reach the current maximum position (max). This is done by comparing i - ranges[i] with min (to check if it covers the left side) and i + ranges[i] with max (to check if it covers the right side).

5. If the tap can cover the current range, update max to be the maximum reach achieved by this tap.

6. After iterating through all the taps, check if max is still equal to min. If they are equal, it means no tap can extend the reach further, so return -1 to indicate that it's not possible to cover the entire range.

7. Increment the count to keep track of the number of taps used.

8. Update min to be equal to the newly reached max because we have covered the range up to max.

9. Repeat steps 3-8 until max is greater than or equal to n, which means the entire range is covered.

10. Finally, return the count which represents the minimum number of taps needed to cover the entire range.


# small request - please give an upvote if it helps \uD83D\uDC31\u267B\uFE0F\uD83D\uDC31

