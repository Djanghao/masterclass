# Easy To Understand

**Author:** sumit_dhandale
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-operations-to-write-the-letter-y-on-a-grid/solutions/4814482/](https://leetcode.com/problems/minimum-operations-to-write-the-letter-y-on-a-grid/solutions/4814482/)

---


# Code
```
def minimum_operations_to_write_y(grid)
    n = grid.length
    mid = n / 2
    y_val = []

    (0...n).each do |i|
        (0...n).each do |j|
            if (i == j && i <= mid && j <= mid) || (i + j == n - 1 && j > mid && i < mid) || (j == mid && i > mid)
                y_val << grid[i][j]
            end
        end
    end
    
    count = Hash.new(0)
    count1 = Hash.new(0)
    
    y_val.each { |elem| count[elem] += 1 }
    
    grid.each { |row| row.each { |elem| count1[elem] += 1 } }

    count.each_key { |key| count1[key] -= count[key] }

    ans = []
    
    [0, 1, 2].permutation(2).each do |x, y|
        ans << (count.values.sum - count[x]) + (count1.values.sum - count1[y])
    end
    
    ans.min
end

```