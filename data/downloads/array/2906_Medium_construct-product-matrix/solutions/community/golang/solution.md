# ✅ Easy to understand | GO | Prefix and Sufix product | Beats 100% Time and space

**Author:** sd04
**Votes:** 0
**Link:** [https://leetcode.com/problems/construct-product-matrix/solutions/4170256/](https://leetcode.com/problems/construct-product-matrix/solutions/4170256/)

---

##### TL;DR
- We will be using Prefix and Suffix product

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
- Using brute force time complexity will be $$O(n^2*m^2 )$$, so we will need to use already calculated product
- Similar to Prefix sum problem, here we can use prefix sum as well as Suffix sum



# Approach
<!-- Describe your approach to solving the problem. -->
##### Steps:
- Create a prod matrix to store the product
- First traverse from left top element to right bottom element. (left to right in any row & after row is completly traversed go to next row which is just below current row.)
    - Store previous product in current position
- Then traverse from right bottom element to left top element. (right to left in any row & after row is completly traversed go to next row which is just above current row.)
    - Store previous product in current position


# Complexity
- Time complexity: $$O(m*n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(m*n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
func constructProductMatrix(grid [][]int) [][]int {
    rows := len(grid)
    cols := len(grid[0])
    
    // Generate product from left top element to right bottom element
    prevProd := 1
    prod := make([][]int, rows)
    for i, _ := range prod {
        prod[i] = make([]int, cols)
        
        for j, _ := range prod[i] {
            prod[i][j] = prevProd
            prevProd = ((prevProd)%12345 * (grid[i][j])%12345)%12345
        }
    }
    
    // Generate product from right bottom element to left top element
    prevProd = 1
    for i := rows-1 ; i >= 0 ; i-- {
        for j := cols-1 ; j >= 0 ; j-- {
            prod[i][j] = ((prod[i][j])%12345 * prevProd)%12345
            prevProd = ((prevProd)%12345 * (grid[i][j])%12345)%12345
        }
    }
    
    return prod
}

```