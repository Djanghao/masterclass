# 5ms O(n) Java solution explained (beats 96%)

**Author:** anton4
**Votes:** 1328
**Link:** [https://leetcode.com/problems/largest-rectangle-in-histogram/solutions/28902/](https://leetcode.com/problems/largest-rectangle-in-histogram/solutions/28902/)

---

For any bar `i` the maximum rectangle is of width `r - l - 1` where r - is the last coordinate of the bar to the **right** with height `h[r] >= h[i]` and l - is the last coordinate of the bar to the **left** which height `h[l] >= h[i]`

So if for any `i` coordinate we know his utmost higher (or of the same height) neighbors to the right and to the left, we can easily find the largest rectangle:

    int maxArea = 0;
    for (int i = 0; i < height.length; i++) {
        maxArea = Math.max(maxArea, height[i] * (lessFromRight[i] - lessFromLeft[i] - 1));
    }

The main trick is how to effectively calculate `lessFromRight` and `lessFromLeft` arrays. The trivial solution is to use **O(n^2)** solution and for each `i` element first find his left/right heighbour in the second inner loop just iterating back or forward:

    for (int i = 1; i < height.length; i++) {              
        int p = i - 1;
        while (p >= 0 && height[p] >= height[i]) {
            p--;
        }
        lessFromLeft[i] = p;              
    }

The only line change shifts this algorithm from **O(n^2)** to **O(n)** complexity: we don't need to rescan each item to the left - we can reuse results of previous calculations and "jump" through indices in quick manner:

    while (p >= 0 && height[p] >= height[i]) {
          p = lessFromLeft[p];
    }

Here is the whole solution:

    public static int largestRectangleArea(int[] height) {
        if (height == null || height.length == 0) {
            return 0;
        }
        int[] lessFromLeft = new int[height.length]; // idx of the first bar the left that is lower than current
        int[] lessFromRight = new int[height.length]; // idx of the first bar the right that is lower than current
        lessFromRight[height.length - 1] = height.length;
        lessFromLeft[0] = -1;

        for (int i = 1; i < height.length; i++) {
            int p = i - 1;

            while (p >= 0 && height[p] >= height[i]) {
                p = lessFromLeft[p];
            }
            lessFromLeft[i] = p;
        }

        for (int i = height.length - 2; i >= 0; i--) {
            int p = i + 1;

            while (p < height.length && height[p] >= height[i]) {
                p = lessFromRight[p];
            }
            lessFromRight[i] = p;
        }

        int maxArea = 0;
        for (int i = 0; i < height.length; i++) {
            maxArea = Math.max(maxArea, height[i] * (lessFromRight[i] - lessFromLeft[i] - 1));
        }

        return maxArea;
    }