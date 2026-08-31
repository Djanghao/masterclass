# Ruby solution with medians, explained (100%/33%)

**Author:** dtkalla
**Votes:** 0
**Link:** [https://leetcode.com/problems/best-meeting-point/solutions/4205273/](https://leetcode.com/problems/best-meeting-point/solutions/4205273/)

---

# Intuition
From all the houses, find the median row and median column.  This will be the optimal point, so find the distance of each house from this point and add.

# Approach
1. Create arrays for row and column indices.
2. Iterate through the grid.  For each house, add its indices to the row and column matrices.
3. Call a helper function to find the cost of row and column movements, and add them together.

**Helper function**: given a 1D array of indices, find the minimum distance from one point to each of them
1. Sort the array.
2. Find the middle value of the array.  (If there are two, we can take either one, or even the average!  Anywhere in the range between them would have an equal cost, since moving toward half the values is moving away from the other half.)
3. Total the difference (in absolute value) between each element and the middle value, and return.

# Complexity
- Time complexity:
$$O(m * n + k * log(k))$$, where *k* is the number of houses.

- Space complexity:
$$O(k)$$

# Code
```
def min_total_distance(grid)
    rows = []
    cols = []
    
    grid.each_with_index do |row,r|
        row.each_with_index do |val,c|
            if val == 1
                rows << r
                cols << c
            end
        end
    end

    cost(rows) + cost(cols)
end

def cost(arr)
    arr.sort!
    mid = arr[arr.length / 2]
    total = 0
    arr.each { |val| total += (val - mid).abs }
    total
end
```