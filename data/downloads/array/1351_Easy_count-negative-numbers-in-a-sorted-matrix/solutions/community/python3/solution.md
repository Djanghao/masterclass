# 4 Python Solutions

**Author:** pearl_veronica
**Votes:** 104
**Link:** [https://leetcode.com/problems/count-negative-numbers-in-a-sorted-matrix/solutions/514468/](https://leetcode.com/problems/count-negative-numbers-in-a-sorted-matrix/solutions/514468/)

---

**O(n^2) solution**
The Brute Force approach by iterating through matrix row-wise and column wise: 
```
    def countNegatives(self, grid):
        count = 0
        for i in range(len(grid)-1, -1,-1):
            for j in range(len(grid[0])-1,-1, -1):
                if grid[i][j]<0:
                    count +=1
        return(count)
```
**O(n^2) solution using sum()**
Same as Brute Force but more "condensed" 1-liner code: 
```
    def countNegatives(self, grid):
        return sum(a<0 for i in grid for a in i)
```

**O(m+n) solution**
Counting the negatives in each row:
```
class Solution(object):
    def countNegatives(self, grid):
        i = len(grid)-1
        j = 0
        count = 0
        while i>=0 and j< len(grid[0]):
            print(i,j)
            if grid[i][j] < 0:
                count +=len(grid[0])-j
                i -= 1
            else:
                j +=1
        return(count)
```

**O(mlogn) solution using binary search**
(referred - https://leetcode.com/problems/count-negative-numbers-in-a-sorted-matrix/discuss/510303/Java-solution-%3A-n(log-n) )
```
class Solution(object):
    def countNegatives(self, grid):
        def bin(row):
            start, end = 0, len(row)
            while start<end:
                mid = start +(end -start) // 2
                if row[mid]<0:
                    end = mid
                else:
                    start = mid+1
            return len(row)- start
        
        count = 0
        for row in grid:
            count += bin(row)
        return(count)
```

Hope this helps! :)