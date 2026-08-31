# O(n log n + k^2 * m)

**Author:** dinar
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-area-rectangle-with-point-constraints-i/solutions/6140772/](https://leetcode.com/problems/maximum-area-rectangle-with-point-constraints-i/solutions/6140772/)

---

We sort points, we go through X coordinates and check all other X coordiantes higher than current one. X coordiantes are sorted. Within X coordinates Y coordinates are also sorted and we can loop throgh them untill we find two Y coordinates that are in both X coordiantes. Important to keep a set y_exclude that when we move to the next x coordinate on the nested loop we check that previous Y coordianates are skipped because they might be inside of rectangular. 

```
class Solution:
    def maxRectangleArea(self, points: List[List[int]]) -> int:
        # Sort points by x-coordinate, then y-coordinate
        points.sort()
        
        # Group points by x-coordinate
        X = defaultdict(list)
        for x, y in points:
            X[x].append(y)
        
        sorted_keys = list(X.keys())
        ans = -1
        
        # Iterate over pairs of x-coordinates
        for i in range(len(sorted_keys)):
            x1 = sorted_keys[i]
            y_list1 = X[x1]
            if len(y_list1) <= 1:
                continue
            
            y_exclude = set()
            for j in range(i + 1, len(sorted_keys)):
                x2 = sorted_keys[j]
                y_list2 = X[x2]
                if len(y_list2) <= 1:
                    y_exclude.update(y_list2)
                    continue
                
                # Find common y-coordinates between y_list1 and y_list2
                y1_i, y2_i = 0, 0
                while y1_i < len(y_list1) - 1 and y2_i < len(y_list2) - 1:
                    if y_list2[y2_i] in y_exclude:
                        y2_i += 1
                        continue
                    if y_list1[y1_i] == y_list2[y2_i]:
                        if y_list1[y1_i + 1] == y_list2[y2_i + 1]:
                            excluded = any(y_list2[y2_i] <= e <= y_list2[y2_i + 1] for e in y_exclude)
                            if not excluded:
                                area = (x2 - x1) * (y_list1[y1_i + 1] - y_list1[y1_i])
                                ans = max(ans, area)
                            y_exclude.add(y_list2[y2_i + 1])
                        y_exclude.add(y_list2[y2_i])
                        y1_i += 1
                        y2_i += 1
                    elif y_list1[y1_i] < y_list2[y2_i]:
                        y1_i += 1
                    else:
                        y_exclude.add(y_list2[y2_i])
                        y2_i += 1
                y_exclude.update(y_list2)
        
        return ans
```


Time Complexity:
- Sorting the points: O(n log n), where n is the number of points.
- Grouping points by x-coordinate: O(n).
- Nested loop over unique x-coordinates: O(k^2), where k is the number of unique x-coordinates.
- Comparing y-coordinates for each pair of x-coordinates: O(m1 + m2) in the worst case for each pair, where m1 and m2 are the lengths of the y-lists.
Overall time complexity: O(n log n + k^2 * m), where m is the average number of points per x-coordinate.

Space Complexity:
- Storing grouped y-coordinates in a dictionary: O(n).
- Temporary sets and variables: O(n) in total.
Overall space complexity: O(n).
"""

Idea:
1. Group points by their x-coordinates and sort the y-coordinates for each x.
2. Iterate over pairs of x-coordinates to find potential rectangles.
3. Use a two-pointer technique on y-coordinates to check if a valid rectangle exists.
4. Exclude points that would invalidate the rectangle using a set.
5. Keep track of the maximum area found.