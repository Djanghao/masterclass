# Beats 100% Explanation with code comments.

**Author:** DominickDA
**Votes:** 0
**Link:** [https://leetcode.com/problems/diet-plan-performance/solutions/6083221/](https://leetcode.com/problems/diet-plan-performance/solutions/6083221/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Sum the first window then increment through subtracting the number leaving the window and adding the numbers entering the window.
# Approach
<!-- Describe your approach to solving the problem. -->
Use a small loop to do the initial calculation of the window. Then slide the window through the array adding/subtracting from the sum to move the window. Then sum the values of the window to determine if the score should go up or down.
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(N)

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(1)


# Code
```csharp []
public class Solution {
    public int DietPlanPerformance(int[] calories, int k, int lower, int upper) {
    // Initialize a counter for the sliding window, a sum to track calorie intake, and a score variable.
    int counter = 0;
    int sum = 0;
    int score = 0;

    // Calculate the initial sum of calories for the first 'k' days.
    for (int i = 0; i < k; i++) {
        sum += calories[i];
    }
    // Update the score based on the initial sum.
    if (sum < lower) {
        score--;
    } else if (sum > upper) {
        score++;
    }

    // Slide the window of 'k' days through the remaining calorie data.
    while (counter + k < calories.Length) {
        // Subtract the calories from the day leaving the window and add the calories from the day entering the window.
        sum -= calories[counter];
        sum += calories[counter + k];

        // Update the score based on the current window's sum.
        if (sum < lower) {
            score--;
        } else if (sum > upper) {
            score++;
        }
        counter++;
    }
    // Return the final calculated score.
    return score;
}
}
```