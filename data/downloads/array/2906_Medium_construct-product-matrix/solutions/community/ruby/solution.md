# Create prefix array and Suffix Array

**Author:** pratik1707
**Votes:** 0
**Link:** [https://leetcode.com/problems/construct-product-matrix/solutions/4176560/](https://leetcode.com/problems/construct-product-matrix/solutions/4176560/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:O(n^2)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:O(n^2)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
# @param {Integer[][]} grid
# @return {Integer[][]}
def construct_product_matrix(grid)
    product = 1  
    m = grid.length
    n = grid[0].length
    mod = 12345
    answer = Array.new(m){Array.new(n)}    

    for i in (0...m) do 
        for j in (0...n) do 
            answer[i][j] = product%mod
            product = (product*grid[i][j])%mod
        end 
    end 

    product = 1
    (m-1).downto(0).each do |i|
        (n-1).downto(0).each do |j|
            answer[i][j] = (answer[i][j] * product)%mod
            product = (product * grid[i][j])%mod
        end 
    end    

    answer 
end
```