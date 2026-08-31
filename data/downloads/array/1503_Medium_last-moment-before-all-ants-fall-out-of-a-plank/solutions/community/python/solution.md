# 🔥More than one way |🔥Detailed Explanations | Java | C++ | Python | JavaScript | C# |

**Author:** Akhilesh21
**Votes:** 79
**Link:** [https://leetcode.com/problems/last-moment-before-all-ants-fall-out-of-a-plank/solutions/4246129/](https://leetcode.com/problems/last-moment-before-all-ants-fall-out-of-a-plank/solutions/4246129/)

---

### The first method is the best, while the second method is just for your curiosity.

>If you want to understand How to think for this solution ? 
After explaining 2nd mehtod i had explained below at last

# 1st Method :- Two Passes\uD83D\uDD25

## Intuition \uD83D\uDE80
The problem involves ants moving on a wooden plank. The goal is to find the time when the last ant(s) fall off the plank. Ants can be moving in either direction, and they change direction when they meet another ant. To solve this problem, we need to determine the moment in time when the last ant(s) fall off the plank.

## Approach \uD83D\uDE80
1. **Variable Initialization**: We start by initializing a variable `time` to keep track of the maximum time it takes for the last ant(s) to fall off the plank. We set it to 0 initially.

2. **Handling Ants Moving to the Left**:
   - We iterate through the positions of ants moving to the left (specified by the `left` array).
   - For each left-moving ant, we check its position.
   - If the current left-moving ant's position is greater than the previously recorded maximum time (`time`), we update `time` with the current ant's position.
   - This step ensures that we keep track of the ant moving to the left that falls last.

3. **Handling Ants Moving to the Right**:
   - Next, we iterate through the positions of ants moving to the right (specified by the `right` array).
   - For each right-moving ant, we calculate its position relative to the right end of the plank by subtracting its position from the total length of the plank, which is `n`.
   - We compare this calculated position with the previously recorded maximum time (`time`) and update `time` if the calculated position is greater.
   - This step ensures that we account for the ant moving to the right that falls last.

4. **Return Result**:
   - Finally, the `time` variable contains the maximum time, which represents when the last ant(s) fall off the plank, whether they are moving to the left or the right.
   - We return this maximum time as the result of the function.

The key insight here is that the last ant(s) to fall off the plank will either be the one farthest to the left among left-moving ants or the one farthest to the right among right-moving ants. By keeping track of the maximum position reached by ants from both directions, we can determine the moment when the last ant(s) fall off the plank, and this approach simplifies the problem considerably.

## \u2712\uFE0FCode
``` Java []
class Solution {
    public int getLastMoment(int n, int[] left, int[] right) {
        // Initialize a variable to keep track of the maximum time
        int time = 0;

        // Iterate through the positions of ants moving to the left
        for (int pos : left) {
            // Update the maximum time if the current left-moving ant's position is greater
            // than the previously recorded maximum time
            time = Math.max(time, pos);
        }

        // Iterate through the positions of ants moving to the right
        for (int pos : right) {
            // Update the maximum time if the current right-moving ant's position (relative to
            // the right end of the plank) is greater than the previously recorded maximum time
            time = Math.max(time, n - pos);
        }

        // The final 'time' variable contains the maximum time, which is when the last ant(s)
        // fall off the plank, so return it as the result.
        return time;
    }

}
```
``` C++ []
class Solution {
public:
    int getLastMoment(int n, vector<int>& left, vector<int>& right) {
        // Initialize a variable to keep track of the maximum time
        int time = 0;

        // Iterate through the positions of ants moving to the left
        for (int pos : left) {
            // Update the maximum time if the current left-moving ant's position is greater
            // than the previously recorded maximum time
            time = max(time, pos);
        }

        // Iterate through the positions of ants moving to the right
        for (int pos : right) {
            // Update the maximum time if the current right-moving ant's position (relative to
            // the right end of the plank) is greater than the previously recorded maximum time
            time = max(time, n - pos);
        }

        // The final 'time' variable contains the maximum time, which is when the last ant(s)
        // fall off the plank, so return it as the result.
        return time;
    }
};
```
``` Python []
class Solution:
    def getLastMoment(self, n: int, left: List[int], right: List[int]) -> int:
        # Initialize a variable to keep track of the maximum time
        time = 0

        # Iterate through the positions of ants moving to the left
        for pos in left:
            # Update the maximum time if the current left-moving ant's position is greater
            # than the previously recorded maximum time
            time = max(time, pos)

        # Iterate through the positions of ants moving to the right
        for pos in right:
            # Update the maximum time if the current right-moving ant's position (relative to
            # the right end of the plank) is greater than the previously recorded maximum time
            time = max(time, n - pos)

        # The final 'time' variable contains the maximum time, which is when the last ant(s)
        # fall off the plank, so return it as the result.
        return time

```
``` JavaScript []
var getLastMoment = function(n, left, right) {
    // Initialize a variable to keep track of the maximum time
    let time = 0;

    // Iterate through the positions of ants moving to the left
    for (let pos of left) {
        // Update the maximum time if the current left-moving ant's position is greater
        // than the previously recorded maximum time
        time = Math.max(time, pos);
    }

    // Iterate through the positions of ants moving to the right
    for (let pos of right) {
        // Update the maximum time if the current right-moving ant's position (relative to
        // the right end of the plank) is greater than the previously recorded maximum time
        time = Math.max(time, n - pos);
    }

    // The final 'time' variable contains the maximum time, which is when the last ant(s)
    // fall off the plank, so return it as the result.
    return time;
}

```
``` C# []
public class Solution {
    public int GetLastMoment(int n, int[] left, int[] right) {
        // Initialize a variable to keep track of the maximum time
        int time = 0;

        // Iterate through the positions of ants moving to the left
        foreach (int pos in left) {
            // Update the maximum time if the current left-moving ant's position is greater
            // than the previously recorded maximum time
            time = Math.Max(time, pos);
        }

        // Iterate through the positions of ants moving to the right
        foreach (int pos in right) {
            // Update the maximum time if the current right-moving ant's position (relative to
            // the right end of the plank) is greater than the previously recorded maximum time
            time = Math.Max(time, n - pos);
        }

        // The final 'time' variable contains the maximum time, which is when the last ant(s)
        // fall off the plank, so return it as the result.
        return time;
    }

}
```

## Complexity \uD83D\uDE81
### \uD83C\uDFF9Time complexity: O(N)
- The time complexity of this code is O(N), where N is the length of the plank. This is because we iterate through the positions of ants moving to the left and right once, comparing each ant's position with the current maximum time. Both loops iterate through the left and right ant positions separately, but they do not depend on each other or nest within each other, so the time complexity remains linear.

### \uD83C\uDFF9Space complexity: O(1)
- The space complexity of this code is O(1). It uses a constant amount of additional space regardless of the input size. The only extra space used is for the `time` variable and the loop control variables (`pos`), which do not depend on the input size. The input arrays `left` and `right` are not creating additional space in proportion to the input size, so they do not contribute to the space complexity.


![vote.jpg](./images/0.jpeg)

---

# 2nd Method :- Two Passes with Stream and Math Operations\uD83D\uDD25

## Approach \uD83D\uDE80
The approach used in this code is based on the "Two Passes" approach.

1. **Finding the Farthest Position Among Ants Moving to the Left**:
   - In the first step, the code calculates the farthest position that any ant moving to the left can reach before falling off the plank.
   - It does this by finding the maximum value in the `left` array using `Arrays.stream(left).max()`. This operation finds the ant with the highest position among all ants moving to the left.
   - The `orElse(0)` part is used as a default value in case the `left` array is empty, ensuring that the code returns 0 if there are no ants moving to the left.

2. **Finding the Nearest Position Among Ants Moving to the Right**:
   - In the second step, the code calculates the nearest position that any ant moving to the right can reach before falling off the plank.
   - It does this by finding the minimum value in the `right` array using `Arrays.stream(right).min()`. This operation finds the ant with the lowest position among all ants moving to the right.
   - The code then calculates the distance from the right end of the plank (`n`) to the nearest ant moving to the right by subtracting the minimum position from `n`.
   - The `orElse(n)` part is used as a default value in case the `right` array is empty, ensuring that the code returns the full length of the plank (`n`) if there are no ants moving to the right.

3. **Calculating the Time When the Last Ant(s) Fall**:
   - Finally, the code calculates the time when the last ant(s) fall by taking the maximum of two values:
     - `maxLeft`: The farthest position among ants moving to the left.
     - `minRight`: The distance from the right end to the nearest ant moving to the right.
   - This maximum value represents the time it takes for the last ant(s) to fall out of the plank.

The "Two Passes" approach is used here because it makes two passes through the ant positions, first to find the farthest left position and second to find the nearest right position. It efficiently determines the time when the last ant(s) fall without the need for simulating the motion of individual ants or sorting the positions. This code leverages Java's stream and mathematical functions to achieve an elegant and efficient solution to the problem.


## \u2712\uFE0FCode
``` Java []
class Solution {
    public int getLastMoment(int n, int[] left, int[] right) {
        // Find the farthest position among ants moving to the left.
        int maxLeft = Arrays.stream(left).max().orElse(0);
        
        // Find the nearest position among ants moving to the right.
        int minRight = n - Arrays.stream(right).min().orElse(n);
        
        // Calculate the time when the last ant(s) fall.
        return Math.max(maxLeft, minRight);
    }
}

```
``` C++ []
class Solution {
public:
    int getLastMoment(int n, std::vector<int>& left, std::vector<int>& right) {
        // Find the farthest position among ants moving to the left.
        // If 'left' is empty, set maxLeft to 0.
        int maxLeft = left.empty() ? 0 : *std::max_element(left.begin(), left.end());

        // Find the nearest position among ants moving to the right.
        // If 'right' is empty, set minRight to the right end of the plank (n).
        int minRight = right.empty() ? n : *std::min_element(right.begin(), right.end());

        // Calculate the time when the last ant(s) fall.
        // The last ant(s) to fall will be at the maximum position from the left or
        // the maximum position from the right end of the plank.
        return std::max(maxLeft, n - minRight);
    }
};

```
``` Python []
class Solution:
    def getLastMoment(self, n: int, left: List[int], right: List[int]) -> int:
        # Find the farthest position among ants moving to the left.
        maxLeft = max(left, default=0)

        # Find the nearest position among ants moving to the right.
        minRight = n - min(right, default=n)

        # Calculate the time when the last ant(s) fall.
        return max(maxLeft, minRight)
```
``` JavaScript []
var getLastMoment = function(n, left, right) {
    // Find the farthest position among ants moving to the left.
    const maxLeft = Math.max(...left, 0);
    
    // Find the nearest position among ants moving to the right.
    const minRight = n - Math.min(...right, n);
    
    // Calculate the time when the last ant(s) fall.
    return Math.max(maxLeft, minRight);
}

```
``` C# []
public class Solution {
    public int GetLastMoment(int n, int[] left, int[] right) {
        // Find the farthest position among ants moving to the left.
        int maxLeft = left.Length > 0 ? left.Max() : 0;
        
        // Find the nearest position among ants moving to the right.
        int minRight = right.Length > 0 ? right.Min() : n;
        
        // Calculate the time when the last ant(s) fall.
        return Math.Max(maxLeft, n - minRight); // Corrected this line
    }

}
```

## Complexity \uD83D\uDE81
### \uD83C\uDFF9Time complexity: O(n_left + n_right)
- Finding the maximum position among ants moving to the left using `Arrays.stream(left).max()` takes O(n_left) time, where `n_left` is the number of ants moving to the left.
- Finding the minimum position among ants moving to the right using `Arrays.stream(right).min()` takes O(n_right) time, where `n_right` is the number of ants moving to the right.
- The time complexity of the `Math.max()` operation is O(1), and the same applies to the subtraction and addition operations.
- The overall time complexity of the code is O(n_left + n_right), where `n_left` and `n_right` are the sizes of the `left` and `right` arrays, respectively.

### \uD83C\uDFF9Space complexity: O(n_left + n_right)
- The space complexity is primarily determined by the additional space used for the streams and variables.
- The space required for the stream created from the `left` and `right` arrays is O(n_left + n_right), as it effectively stores a copy of these arrays.
- The space used for the `maxLeft` and `minRight` variables is O(1) because they are single integers.
- Therefore, the overall space complexity is O(n_left + n_right).

![vote.jpg](./images/1.jpeg)

---
---
---
### UnderStand How to think for this solution
**Problem Description:** You are given an integer n, representing the length of a wooden plank, and an array of integers representing the positions of ants on the plank. Ants can move to the left or right. The goal is to find the last moment when all ants have fallen off the plank. You need to return the earliest possible time (in seconds) when this occurs.

>2nd & 4th step is important to understand
below i had explaned with an example

**Steps to Solve:**

1. **Understand the Problem:** Carefully read and understand the problem statement. Note that the ants can move in both directions, and you need to determine the earliest time when all ants have fallen off the plank.

2. **Encode Ant Directions:** First, you need to understand the importance of ant directions. If two ants collide, they will pass through each other without changing direction. This means that you can treat each ant as if it's facing a specific direction (left or right) and calculate the time it takes for that ant to fall off the plank.

3. **Determine Maximum and Minimum Times:** To find the earliest possible time when all ants have fallen off, you can determine the maximum and minimum times for each ant. For an ant at position `x`, the maximum time is the maximum of `x` and `n - x`, and the minimum time is the minimum of `x` and `n - x`.

4. **Find the Maximum of Minimums:** To get the earliest time when all ants have fallen off, you need to find the maximum of the minimum times for all ants. This is because the ant that takes the longest to fall off will determine the time for all ants.

5. **Write the Code:** Implement the above steps in code. Iterate through the ant positions, calculate the maximum and minimum times for each ant, and keep track of the maximum of the minimum times.

6. **Return the Result:** Finally, return the maximum of the minimum times as the earliest time when all ants have fallen off.

# Example:

Suppose you have a plank of length `n = 10`, and you have two ants with positions:

- Ant 1 at position 2 (moving to the right).
- Ant 2 at position 6 (moving to the left).

Here's how you can calculate the earliest moment when all ants have fallen off:

1. **Encode Ant Directions:** Since ant 1 is moving to the right and ant 2 is moving to the left, we can treat them as if they are both moving in one direction. We'll choose a common direction, which in this case will be to the right. We'll calculate the time it takes for each ant to fall off the plank while moving to the right.

2. **Calculate Maximum and Minimum Times:**

   - For Ant 1 at position 2:
     - Maximum time = max(2, 10 - 2) = max(2, 8) = 8
     - Minimum time = min(2, 10 - 2) = min(2, 8) = 2

   - For Ant 2 at position 6:
     - Maximum time = max(6, 10 - 6) = max(6, 4) = 6
     - Minimum time = min(6, 10 - 6) = min(6, 4) = 4

3. **Find the Maximum of Minimums:**
   - The maximum of the minimum times is max(2, 4) = 4.

So, in this example, the earliest moment when all ants have fallen off the plank while moving in one direction (to the right) is 4 seconds.

see The 1st Method's code


![upvote.png](./images/2.png)
# Up Vote Guys
