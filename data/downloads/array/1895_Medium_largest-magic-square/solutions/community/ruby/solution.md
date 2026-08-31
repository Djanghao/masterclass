# Ruby

**Author:** umairabid
**Votes:** 0
**Link:** [https://leetcode.com/problems/largest-magic-square/solutions/4152878/](https://leetcode.com/problems/largest-magic-square/solutions/4152878/)

---

# Intuition

Using the prefix sum we can easily calculate the sums for a k x k matrix. To find out the k, we start with maximum value of k and then graduly try every k between 0..k

# Approach

It is a two part solution, first we calculate the required prefix sum matrices. Then for each element we try all possible values of k to find the magical matrix. 

# Complexity
- Time complexity: 4 * (m * n) + m * n * min(m, n) * min(m, n)

- Space complexity: 4 * (m * n)

# Code
```
def largest_magic_square(grid)
    ans = 0
    m = grid.size
    n = grid.first.size
    
    col_prefix_sum = Array.new(m) { [] }
    row_prefix_sum = Array.new(m) { [] }
    d1_prefix_sum = Array.new(m) { [] }
    d2_prefix_sum = Array.new(m) { [] }
    
    0.upto(m-1) do |i|
        0.upto(n-1) do |j|
            col_prefix_sum[i][j] = grid[i][j] + (i-1 > -1 ? col_prefix_sum[i-1][j] : 0)
            row_prefix_sum[i][j] = grid[i][j] + (j-1 > -1 ? row_prefix_sum[i][j-1] : 0)
            d1_prefix_sum[i][j] = grid[i][j] + (i-1 > -1 && j-1 > -1 ? d1_prefix_sum[i-1][j-1] : 0)
            d2_prefix_sum[i][j] = grid[i][j] + (i-1 > -1 && j+1 < n ? d2_prefix_sum[i-1][j+1] : 0)
        end
    end
    
    0.upto(m-1) do |i|
        0.upto(n-1) do |j|
            max_k = [m-1-i, n-1-j].min
            max_k.downto(0) do |k|
                d1_sum = d1_prefix_sum[i+k][j+k]
                d2_sum = d2_prefix_sum[i+k][j]
        
                d1_sum -= d1_prefix_sum[i-1][j-1] if i-1 > -1 && j-1 > -1
                d2_sum -= d2_prefix_sum[i-1][j+k+1] if i-1 > -1 && j+k+1 <= n-1

                # puts "d1_sum: #{d1_sum}, d2_sum: #{d2_sum}" 
                next if d1_sum != d2_sum
                
                col_sums = []
                row_sums = []
                
                0.upto(k) do |l|
                    col_sum = col_prefix_sum[i+k][j+l]
                    col_sum -= col_prefix_sum[i-1][j+l] if i-1 > -1
                    col_sums << col_sum
                    
                    row_sum = row_prefix_sum[i+l][j+k]
                    row_sum -= row_prefix_sum[i+l][j-1] if j-1 > -1
                    row_sums << row_sum
                end
              
                if d1_sum == d2_sum && row_sums.all? { |s| s == d1_sum } && col_sums.all? { |s| s == d1_sum }
                    ans = [k, ans].max
                    next
                end
            end
        end
    end
    ans + 1
end
```