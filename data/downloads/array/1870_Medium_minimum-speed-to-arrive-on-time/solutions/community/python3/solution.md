# ✅ Beats 100% users ⬆️ Proved 🧠Detailed, Easy to understand with comments in each line  ♻️

**Author:** trishitchar
**Votes:** 37
**Link:** [https://leetcode.com/problems/minimum-speed-to-arrive-on-time/solutions/3818862/](https://leetcode.com/problems/minimum-speed-to-arrive-on-time/solutions/3818862/)

---

![Screenshot 2023-07-26 165541.png](./images/0.png)
# Intuition & Approach
```Described in code segments each line by line with comments details```
- If it helped please do **upvote**.
# Complexity
- Time complexity : O(n * log(1e7))

- Space complexity : O(1)


# Code 
```CPP []

class Solution {
public:
    int minSpeedOnTime(vector<int>& dist, double hour) {
        int n = dist.size(); // Get the size of the input vector 'dist' (number of distances to travel)
        int minSpeed = 1, maxSpeed = 1e7 + 1; // Initialize the minimum and maximum possible speeds
        int answer = -1; // Initialize the variable to store the final answer

        while (minSpeed < maxSpeed) { // Binary search loop to find the minimum required speed
            int midSpeed = minSpeed + (maxSpeed - minSpeed) / 2; // Calculate the middle speed

            double totalHours = 0.0; // Initialize total travel time to 0

            // Calculate the total hours required to travel each distance at the current middle speed
            for (int i = 0; i < n - 1; ++i) {
                // Add the time taken to travel distance at index i using current midSpeed to totalHours
                totalHours += std::ceil(static_cast<double>(dist[i]) / midSpeed);
            }
            // Add the time taken to travel the last distance using current midSpeed to totalHours
            totalHours += static_cast<double>(dist[n - 1]) / midSpeed;

            if (totalHours > hour) {
                // If the total hours exceed the given hour, update minSpeed to consider higher speeds
                minSpeed = midSpeed + 1;
            } else {
                // If the total hours are within the given hour, update the answer to the current speed
                // and search for a potentially smaller speed in the lower half of the range.
                answer = midSpeed;
                maxSpeed = midSpeed;
            }
        }

        return answer; // Return the minimum speed required to reach the destination on time
    }
};

```
```python []
class Solution:
    def minSpeedOnTime(self, dist, hour):
        n = len(dist)  # Get the size of the input list 'dist' (number of distances to travel)
        minSpeed, maxSpeed = 1, 10**7 + 1  # Initialize the minimum and maximum possible speeds
        answer = -1  # Initialize the variable to store the final answer

        while minSpeed < maxSpeed:  # Binary search loop to find the minimum required speed
            midSpeed = minSpeed + (maxSpeed - minSpeed) // 2  # Calculate the middle speed

            totalHours = 0.0  # Initialize total travel time to 0

            # Calculate the total hours required to travel each distance at the current middle speed
            for i in range(n - 1):
                # Add the time taken to travel distance at index i using current midSpeed to totalHours
                totalHours += (dist[i] + midSpeed - 1) // midSpeed

            # Add the time taken to travel the last distance using current midSpeed to totalHours
            totalHours += dist[n - 1] / midSpeed

            if totalHours > hour:
                # If the total hours exceed the given hour, update minSpeed to consider higher speeds
                minSpeed = midSpeed + 1
            else:
                # If the total hours are within the given hour, update the answer to the current speed
                # and search for a potentially smaller speed in the lower half of the range.
                answer = midSpeed
                maxSpeed = midSpeed

        return answer  # Return the minimum speed required to reach the destination on time

```