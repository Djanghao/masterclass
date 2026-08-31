# 💥💥TypeScript | 100% beats runtime and memory [EXPLAINED]

**Author:** r9n
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-height-by-stacking-cuboids/solutions/5809869/](https://leetcode.com/problems/maximum-height-by-stacking-cuboids/solutions/5809869/)

---

# Intuition
I start by thinking about how I can stack these boxes to make the tallest tower. Since I can rotate the boxes, I first sort each box so that its dimensions are in a consistent order. Then, I sort all boxes so that they are organized by width and length. This way, when I check if a box can be stacked on top of another, I only need to consider boxes that are potentially smaller or the same size.


# Approach
Normalize Dimensions: Sort each box's dimensions so that they\u2019re consistently ordered (e.g., width \u2264 length \u2264 height).


Sort Boxes: Sort all boxes by width, then by length, and finally by height. This helps in systematically comparing each box with potential boxes it can sit on.


Dynamic Programming: Use a dp array where dp[i] represents the maximum height of a tower ending with the i-th box. For each box, check all previous boxes to see if it can be placed on top, and update the height accordingly.

# Complexity
- Time complexity:
O(n2). This is because, for each box, I compare it with all previously considered boxes, where n is the number of boxes.

- Space complexity:
O(n). This is due to the dp array which stores the maximum height for each box.

# Code
```typescript []
function maxHeight(box: number[][]): number {
    // Normalize the dimensions of each box by sorting their dimensions
    box.forEach(b => b.sort((a, b) => a - b));
    
    // Sort the boxes first by width, then by length, then by height
    box.sort((a, b) => a[0] - b[0] || a[1] - b[1] || a[2] - b[2]);

    const n = box.length;
    // Initialize DP array where dp[i] represents the maximum height ending with box[i]
    const dp = Array(n).fill(0);

    // Calculate the maximum possible height for each box as the base
    for (let i = 0; i < n; i++) {
        dp[i] = box[i][2]; // Start with the height of the current box
        
        // Check all previous boxes to see if the current box can be placed on top
        for (let j = 0; j < i; j++) {
            // A box can be placed on top if its dimensions are not larger in any direction
            if (box[i][0] >= box[j][0] && box[i][1] >= box[j][1] && box[i][2] >= box[j][2]) {
                // Update the maximum height by placing box[i] on top of box[j]
                dp[i] = Math.max(dp[i], dp[j] + box[i][2]);
            }
        }
    }

    // The result is the maximum height among all possible heights for each box as the base
    return Math.max(...dp);
}

```