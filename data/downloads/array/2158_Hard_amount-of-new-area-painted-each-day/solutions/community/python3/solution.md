# Python Solution with bisect (binary search) + Complexity

**Author:** ChenAmos
**Votes:** 4
**Link:** [https://leetcode.com/problems/amount-of-new-area-painted-each-day/solutions/2162824/](https://leetcode.com/problems/amount-of-new-area-painted-each-day/solutions/2162824/)

---



```
import bisect
class Solution:
    def amountPainted(self, paint: List[List[int]]) -> List[int]:
        
        # we can implement add, and query (return the diff and then call add)
        
        self.ranges = []
        self.ranges.append(0)
        self.ranges.append(0)
        
        def add_range(start, end):
            left = bisect.bisect_left(self.ranges, start)
            right = bisect.bisect_right(self.ranges, end)
            
            tmp_range = []
            if left % 2 == 0:
                tmp_range.append(start)
            if right % 2 == 0:
                tmp_range.append(end)
            
            self.ranges[left:right] = tmp_range
        
        def query_range(start, end):
            paint_part = 0
            left = bisect.bisect_right(self.ranges, start)
            right = bisect.bisect_left(self.ranges, end)
            
            if left == right and left % 2 == 0:
                paint_part += end - start
            if left % 2 == 0 and left != right:
                paint_part += self.ranges[left] - start
            if right % 2 == 0 and left != right:
                paint_part += end - self.ranges[right-1]
            
            # find paint_part between ranges 
            left = left+1 if left % 2 == 0 else left
            for i in range(left, right-1, 2):
                paint_part += self.ranges[i+1]-self.ranges[i]
                
            add_range(start,end)
            return paint_part
        
        paint_per_day = []
        
        for start, end in paint:
            paint_part = query_range(start,end)
            paint_per_day.append(paint_part)
            
        return paint_per_day
```
n= len(paint)
Runtime: O(n * log n) 
for each paint we use bisect to update and query

Space: O(n) 
worst case can be that each paint is one part and different from the others
