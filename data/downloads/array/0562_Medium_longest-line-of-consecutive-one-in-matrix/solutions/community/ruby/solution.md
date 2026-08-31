# Beats 100% in time and memory

**Author:** neodelf
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-line-of-consecutive-one-in-matrix/solutions/3443922/](https://leetcode.com/problems/longest-line-of-consecutive-one-in-matrix/solutions/3443922/)

---

# Intuition
Go to brute force

# Approach
Brute force

# Complexity
- Time complexity:
$$O(mn)$$?

- Space complexity:
$$O(1)$$

# Code
```
# @param {Integer[][]} mat
# @return {Integer}
def longest_line(mat)
  longest = 0

  mat.each_with_index do |row, ri|
    row.each_with_index do |col, ci|
      if col == 1
        cur_long = 1
        cur_row = ri
        cur_col = ci

        # if left cell has 1 value we skip going to the right
        unless (cur_col-1 >= 0 && mat[cur_row][cur_col-1] == 1)
          # go right
          while (cur_col+1 <= mat[0].size-1) && mat[cur_row][cur_col+1] == 1
            cur_col += 1
            cur_long += 1
          end
          longest = cur_long if cur_long > longest
        end

        cur_long = 1
        cur_row = ri
        cur_col = ci
        # if upper cell has 1 value we skip going to the down
        unless (cur_row-1 >= 0 && mat[cur_row-1][cur_col] == 1)
          # down
          while (cur_row+1 <= mat.size-1) && mat[cur_row+1][cur_col] == 1
            cur_row += 1
            cur_long += 1
          end
          longest = cur_long if cur_long > longest
        end

        cur_long = 1
        cur_row = ri
        cur_col = ci
        # if left && upper cell has 1 value we skip going to the right && down diagonal
        unless (cur_col-1 >= 0 && cur_row-1 >= 0 && mat[cur_row-1][cur_col-1] == 1)
          # right && down diagonal
          while (cur_row+1 <= mat.size-1) && (cur_col+1 <= mat[0].size-1) && mat[cur_row+1][cur_col+1] == 1
            cur_row += 1
            cur_col += 1
            cur_long += 1
          end
          longest = cur_long if cur_long > longest
        end

        cur_long = 1
        cur_row = ri
        cur_col = ci
        # if left && down cell has 1 value we skip going to the right && up diagonal
        unless (cur_row+1 <= mat.size-1 && cur_col-1 >= 0 && mat[cur_row+1][cur_col-1] == 1)
          # right && up diagonal
          while (cur_row-1 >= 0) && (cur_col+1 <= mat[0].size-1) && mat[cur_row-1][cur_col+1] == 1
            cur_row -= 1
            cur_col += 1
            cur_long += 1
          end
          longest = cur_long if cur_long > longest
        end
      end
    end
  end

  longest
end
```