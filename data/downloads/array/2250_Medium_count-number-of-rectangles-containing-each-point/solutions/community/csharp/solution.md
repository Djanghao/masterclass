# C# Divide and Conquer with Search Optimization Solution

**Author:** GetRid
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-number-of-rectangles-containing-each-point/solutions/5927669/](https://leetcode.com/problems/count-number-of-rectangles-containing-each-point/solutions/5927669/)

---

# Intuition
- <!-- Describe your first thoughts on how to solve this problem. -->The intuition for solving this problem comes from the observation that the height (hi) of each rectangle and the y-coordinate (yj) of each point are both bounded by a relatively small value (100). This allows us to divide the problem into manageable subproblems by height. By grouping rectangles by height and sorting them, we can efficiently determine whether a point lies within any rectangle at that height using binary search. This approach significantly reduces the time needed to determine the answer compared to a naive solution that checks each point against every rectangle.
- The idea is to minimize redundant calculations by leveraging pre-processing and categorization. Grouping by height reduces the number of rectangles we need to consider for each point, and sorting allows us to quickly find the relevant rectangles through binary search. This combination of grouping, sorting, and efficient querying leads to an optimal solution given the problem constraints.
___
# Approach
<!-- Describe your approach to solving the problem. -->//  Grouping Rectangles by Height: We create an array of lists (heightGroups) to group rectangles by their height. Since heights are at most 100, we use an array of size 101 (index 0 to 100).
//  Sorting Lengths: For each height group, we sort the rectangle lengths to enable efficient binary search.
//  Counting Rectangles for Each Point: For each point, we iterate over possible rectangle heights that can contain the point (h >= y). We use binary search to count how many rectangles at that height have a length greater than or equal to the x-coordinate of the point.
//  Binary Search: The BinarySearch function finds the first index in the sorted list where the length is greater than or equal to the target (x).
___

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->O((R + P) * log R).
Pre-processing:
Grouping rectangles by height takes O(R) time, where R is the number of rectangles.
Sorting each height group takes O(R * log R) in total.
Query Processing:
For each point, iterating over possible heights takes O(P * H) time, where P is the number of points and H is the number of height levels (at most 100).
For each height level, we perform a binary search, which takes O(log R'), where R' is the number of rectangles at that height.
Combining these factors, the overall time complexity is: O(R * log R + P * H * log R'), which can be simplified to approximately O((R + P) * log R), considering H is a small constant (100).
___

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->O(R + P),
The space complexity is primarily due to storing the height groups, which takes O(R) space.
Additionally, the result array takes O(P) space.
Thus, the overall space complexity is O(R + P).
___
# Code
```csharp []
using System;
using System.Collections.Generic;
using System.Linq;

public class Solution {
    public int[] CountRectangles(int[][] rectangles, int[][] points) {
        // Create an array of lists to store rectangles by height.
        List<int>[] heightGroups = new List<int>[101];
        for (int i = 0; i <= 100; i++) {
            heightGroups[i] = new List<int>();
        }
        
        // Group rectangles by height.
        foreach (var rect in rectangles) {
            int length = rect[0];
            int height = rect[1];
            heightGroups[height].Add(length);
        }
        
        // Sort each height group for efficient binary search later.
        for (int i = 0; i <= 100; i++) {
            if (heightGroups[i].Count > 0) {
                heightGroups[i].Sort();
            }
        }
        
        int[] result = new int[points.Length];
        
        // For each point, determine how many rectangles contain it.
        for (int i = 0; i < points.Length; i++) {
            int x = points[i][0];
            int y = points[i][1];
            int count = 0;
            
            // Iterate over possible heights that can contain the point.
            for (int h = y; h <= 100; h++) {
                if (heightGroups[h].Count > 0) {
                    // Use binary search to find the number of rectangles with length >= x.
                    int idx = BinarySearch(heightGroups[h], x);
                    count += heightGroups[h].Count - idx;
                }
            }
            
            result[i] = count;
        }
        
        return result;
    }
    
    // Custom binary search to find the first index with value >= target.
    private int BinarySearch(List<int> list, int target) {
        int left = 0;
        int right = list.Count;
        while (left < right) {
            int mid = left + (right - left) / 2;
            if (list[mid] >= target) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }
        return left;
    }
}
```