# Using Binary Search

**Author:** pratik1707
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-a-peak-element-ii/solutions/5233053/](https://leetcode.com/problems/find-a-peak-element-ii/solutions/5233053/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:O(nlogm)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
# @param {Integer[][]} mat
# @return {Integer[]}
def find_peak_grid(mat)
    m = mat.length
    n = mat[0].length

    low = 0 
    high = n-1

    while(low <= high) do 
        mid = low + (high-low)/2

        row = get_max(mid, mat, m)

        left , right = -1, -1

        if mid-1 >= 0
            left = mat[row][mid-1]
        end 

        if mid+1 < n
            right = mat[row][mid+1]
        end 

        if mat[row][mid] > left and mat[row][mid] > right
            return [row, mid]
        elsif mat[row][mid] < left
            high = mid-1
        else
            low = mid+1
        end 
    end 
end

def get_max(mid, mat, m)
    max = -Float::INFINITY
    row_n = -1

    for row in (0...m) do 
        if max < mat[row][mid]
            max = mat[row][mid]
            row_n = row 
        end 
    end 

    return row_n
end 
```