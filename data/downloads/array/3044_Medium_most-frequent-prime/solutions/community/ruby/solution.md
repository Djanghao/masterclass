# Ruby | DFS

**Author:** azusa152
**Votes:** 0
**Link:** [https://leetcode.com/problems/most-frequent-prime/solutions/4758242/](https://leetcode.com/problems/most-frequent-prime/solutions/4758242/)

---

# Intuition
To use DFS to generate the path for each move, then store it into the hash if the path is more than 10 and is prime.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(m * n)

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(m * n)

# Code
```
require 'prime'
# @param {Integer[][]} mat
# @return {Integer}
def most_frequent_prime(mat)
    m = mat.length
    n = mat[0].length
    res = Hash.new(0)
    
    for i in 0...m do
        for j in 0...n do
            dfs(mat, i, j, mat[i][j],res, nil)
        end
    end
    
    max_count = -1
    max = -1

    res.each do|k,v|
        if v > max_count
            max_count = v
            max = k
        elsif v == max_count && k > max
            max = k
        end
    end

    max
end


def dfs(mat, row, col, path, res, fixed_direction)
    m=mat.size
    n=mat[0].size
    res[path] += 1 if path > 10 && Prime.prime?(path)
    
    if fixed_direction == nil    
        dir = [[0,1], [1,1], [1,0], [1,-1],[0,-1], [-1,-1], [-1,0], [-1,1]]
        dir.each do|d|
            new_row = row + d[0]
            new_col = col + d[1]

            if new_row >= 0 && new_row < m && new_col >= 0 && new_col < n
                dfs(mat, new_row, new_col, path*10 + mat[new_row][new_col], res, d)
            end
        end
    else
        new_row = row + fixed_direction[0]
        new_col = col + fixed_direction[1]
        
        if new_row >= 0 && new_row < m && new_col >= 0 && new_col < n
            dfs(mat, new_row, new_col, path*10 + mat[new_row][new_col], res, fixed_direction)
        end
    end
end


```