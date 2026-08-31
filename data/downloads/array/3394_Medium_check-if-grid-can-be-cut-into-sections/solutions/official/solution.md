# Official Solution

**Link:** [https://leetcode.com/problems/check-if-grid-can-be-cut-into-sections/solution/](https://leetcode.com/problems/check-if-grid-can-be-cut-into-sections/solution/)

---

[TOC]

## Solution 
    
---

### Approach: Line Sweep

#### Intuition

We are given an integer `n` representing the dimensions of an `n x n` grid, along with a set of non-overlapping rectangles placed within this grid. We need to find whether we can make either two horizontal or two vertical cuts such that the grid is divided into three distinct sections. Each section must contain at least one rectangle, and no rectangle should span across multiple sections. Since the rectangles do not overlap, we can take advantage of their structure to find natural divisions in the grid. Instead of considering every possible cut position, we can focus on gaps between rectangles, as valid cuts can only occur in those spaces.

A natural way to do this is by scanning the grid along one dimension at a time. If we examine vertical cuts, for instance, we can sort the rectangles based on their `startx` coordinate (the x-coordinate of their bottom-left corner). As we scan from left to right, we track the furthest `endx` encountered so far. If a rectangle's `startx` is greater than the maximum `endx` we’ve seen, this indicates an empty vertical space where a cut can be made. If we can find at least two such gaps, we can make two vertical cuts, successfully dividing the grid into three sections.

For example, consider the following rectangles sorted by their `startx`:

1. `[1,1,3,3]`
2. `[4,2,5,5]`
3. `[6,0,8,4]`
   
Here, there is a gap between `endx = 3` (of the first rectangle) and `startx = 4` (of the second rectangle), as well as between `endx = 5` (of the second rectangle) and `startx = 6` (of the third rectangle). Since we have at least two such gaps, we can place two vertical cuts, ensuring that all three resulting sections contain at least one rectangle.

The same logic applies if we want to explore horizontal cuts. In this case, we sort the rectangles by their `starty` coordinate (the y-coordinate of their bottom-left corner) and scan the grid from bottom to top. We track the furthest `endy` coordinate encountered and look for gaps between consecutive rectangles. If we find at least two such gaps, we can make two horizontal cuts, successfully dividing the grid into three sections.

To implement this, we define a helper function that checks for valid cuts along a given dimension. This function sorts the rectangles based on their starting coordinate and scans through them while maintaining the furthest ending coordinate seen so far. Each time a gap is detected, we increment a counter. If this counter reaches at least two, we confirm that two cuts can be made along that dimension.

The following slideshow shows how the algorithm works for horizontal cuts in Example 2 of the problem description:

!?!../Documents/3394/slideshow.json:760,1062!?!

We then apply this function to both dimensions - checking first for vertical cuts and then for horizontal cuts. If either approach succeeds, we return true; otherwise, we return false.

> Note: This approach is very similar to the well-known problem [Merge Intervals](https://leetcode.com/problems/merge-intervals/description/). We recommend solving that problem as well to gain a deeper understanding of this concept.

#### Algorithm

Main method `checkValidCuts`:

- Return the result of checking for valid cuts in both horizontal (dimension 0) and vertical (dimension 1) directions using a logical OR operation.

Helper method `checkCuts(rectangles, dim)`:

- Initialize a variable `gapCount` to `0` to track the number of gaps between rectangles.
- Sort the `rectangles` array based on the starting coordinate in the specified dimension.
- Initialize a variable `furthestEnd` to the ending coordinate of the first rectangle in the sorted array.
- Iterate through the remaining rectangles starting from index `1`. For each rectangle:
  - Check if its starting coordinate in the given dimension is greater than or equal to the current `furthestEnd`.
    - If a gap is found, increment the `gapCount`.
  - Update `furthestEnd` to be the maximum of the current `furthestEnd` and the ending coordinate of the current rectangle.
- After processing all rectangles, return true if the `gapCount` is at least 2, indicating that we can make two cuts to create three sections.

#### Implementation

> Interview Tip: In-Place Algorithms   
> In-place algorithms overwrite the input to save space, but sometimes this can cause problems. Here are a couple of situations where an in-place algorithm might not be suitable:   
> 1. The algorithm needs to run in a multi-threaded environment without exclusive access to the array. Other threads might need to read the array as well and may not expect it to be modified.   
> 2. Even if there is only a single thread or the algorithm has exclusive access to the array while running, the array might need to be reused later or by another thread once the lock has been released.   
> In an interview, always check whether the interviewer is okay with you overwriting the input. Be prepared to explain the pros and cons of doing so if asked!  

<iframe src="https://leetcode.com/playground/EDqj5veQ/shared" frameBorder="0" width="100%" height="500" name="EDqj5veQ"></iframe>

#### Complexity Analysis

Let $n$ be the number of rectangles.

- Time complexity: $O(n \log n)$

    The time complexity is dominated by the sorting operation, which takes $O(n \log n)$ time. We call the `checkCuts` function twice (once for horizontal cuts and once for vertical cuts), and each call performs sorting and a linear scan through the rectangles. This gives us $2 \cdot (O(n \log n) + O(n))$, which simplifies to $O(n \log n)$.

- Space complexity: $O(S)$

    The space taken by the sorting algorithm ($S$) depends on the language of implementation:
    - In Java, `Arrays.sort()` is implemented using a variant of the Quick Sort algorithm which has a space complexity of $O( \log n)$.
    - In C++, the `sort()` function is implemented as a hybrid of Quick Sort, Heap Sort, and Insertion Sort, with a worst-case space complexity of $O(\log n)$.
    - In Python, the `sort()` method sorts a list using the Timsort algorithm which is a combination of Merge Sort and Insertion Sort and has a space complexity of $O(n)$ .

    Other than this, we're only using a few variables (`gapCount`, `furthestEnd`, loop indices) that don't scale with the input size. Therefore, the overall space complexity remains $O(S)$.

---