# Two loops

**Author:** sleight42
**Votes:** 0
**Link:** [https://leetcode.com/problems/toeplitz-matrix/solutions/5369506/](https://leetcode.com/problems/toeplitz-matrix/solutions/5369506/)

---

# Intuition
The tricky part is computing each diagonal. Then it's comparing values within a diagonal

# Approach
Two loops, one over column diagonals and then one over rows starting from 1 to avoid needless repetition.


# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(1)$$

# Code
```
# @param {Integer[][]} matrix
# @return {Boolean}
def is_toeplitz_matrix(matrix)
    @num_rows = matrix.length
    @num_cols = matrix.first.length

    (0...@num_cols).each do |col|
        return false unless compare_diagonal(matrix, 0, col)
    end

    (1...@num_rows).each do |row|
        return false unless compare_diagonal(matrix, row, 0)
    end            
    true
end

def compare_diagonal(matrix, i, j)
    while i < @num_rows && j < @num_cols
        v ||= matrix[i][j]
        return false unless matrix[i][j] == v
        i += 1
        j += 1
    end
    true
end
```