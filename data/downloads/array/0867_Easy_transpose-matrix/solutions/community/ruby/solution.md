# Transpose

**Author:** pratik1707
**Votes:** 2
**Link:** [https://leetcode.com/problems/transpose-matrix/solutions/4384296/](https://leetcode.com/problems/transpose-matrix/solutions/4384296/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:O(mn)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:O(mn)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
# @param {Integer[][]} matrix
# @return {Integer[][]}
def transpose(matrix)
    #matrix.transpose   
    m = matrix.length 
    n = matrix[0].length 

    t_matrix = Array.new(n){Array.new(m)}

    matrix.each_with_index do |row, i|
        row.each_with_index do |col, j|
            t_matrix[j][i] = col 
        end 
    end 

    t_matrix 

end
```