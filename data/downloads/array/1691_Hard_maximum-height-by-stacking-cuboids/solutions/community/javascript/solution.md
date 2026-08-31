# Javascript | Simple DP Solution w/ Explanation | beats 100%

**Author:** sgallivan
**Votes:** 2
**Link:** [https://leetcode.com/problems/maximum-height-by-stacking-cuboids/solutions/1014472/](https://leetcode.com/problems/maximum-height-by-stacking-cuboids/solutions/1014472/)

---

***Idea:***

The trick to solving this problem lies in realizing that if one box can be stacked on another, then you can always rotate both boxes such that the longest sides are the depth and the boxes will still stack. At that point, it makes sense to sort each box in order by its dimensions, then sort all the boxes in order of their smallest to largest values.

After that, it should be a fairly straightfoward **DP solution** where **dp[j]** represents the best possible height obtainable with **C[j]** as the base. We can then run through the list of boxes and attempt to stack each previous box atop the new one and find the max value for **dp[j]**.

The best result for the code below is **76ms / 42.5MB**.

` `
***Implementation:***

First, we need to sort each box in **C** by their dimensions, then sort **C** itself. When sorting **C**, we want to want to sort in order of smallest to longest dimension. So if the smallest dimension of two boxes is the same, compare the next larger dimension, and if those are the same, compare the largest dimensions.

Next, we'll iterate through the boxes (**b = C[j]**) and set the intial "best" value for the height of the stack (**dp[j]**) as just the height of the box (**b[2]**). After that, we can just check each previous box (**a = C[i]**) and see if it will fit atop **b**. If it does, we can update **dp[j]** if the height of that previous stack (**dp[i]**) plus the height of **b** (**b[2]**) is greater than than the current value of **dp[j]**. By the end of the inner **for** loop, we will have found the best possible value for **dp[j]** and can iterate to the next **j** value.

Once all values in our DP array are complete, we can simply return whichever value is the highest.

` `
***Code:***
```
var maxHeight = function(C) {
    let len = C.length, dp = new Array(len)
    for (let i = 0; i < len; i++) C[i].sort((a,b) => a - b)     // Sort each box's dimensions, small to large
    C.sort(([a,b,c],[d,e,f]) => a-d ? a-d : b-e ? b-e : c-f)    // Sort all boxes by dimensions, small to large
    for (let j = 0, b = C[0]; j < len; b = C[++j]) {            // Iterate through the boxes
        dp[j] = b[2]                                            // Store the box height as the initial best value
        for (let i = 0, a = C[0]; i < j; a = C[++i])            // Then check each previous stack of boxes
            if (a[0] <= b[0] && a[1] <= b[1] && a[2] <= b[2])   // To see which ones can fit on the current box
                dp[j] = Math.max(dp[j] || b[2], dp[i] + b[2])   // And set the best value for the current box
    }
    return Math.max(...dp)                                      // Return the best possible stack
};
```