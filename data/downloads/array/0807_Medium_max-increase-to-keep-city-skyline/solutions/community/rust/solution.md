# 0ms beats 100% Super readable code with comments

**Author:** tdf56f756bg56r8iohgwexu
**Votes:** 2
**Link:** [https://leetcode.com/problems/max-increase-to-keep-city-skyline/solutions/2989343/](https://leetcode.com/problems/max-increase-to-keep-city-skyline/solutions/2989343/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
This shit is super difficult i will never be able to solve this but i'll try anyways.
# Approach
<!-- Describe your approach to solving the problem. -->
A skyline is defined by the highest buildings in a collumn or row.

If i keep track of the tallest buildings i will know the highest height i can increase buildings to.
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n^2)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(n)
# Code
```
impl Solution {
    pub fn max_increase_keeping_skyline(grid: Vec<Vec<i32>>) -> i32 {
        
        let mut vertical: Vec<i32> = vec![0;grid.len()];
        let mut horizontal: Vec<i32> = vec![0;grid.len()];

        //Find highest buildings
        for row in 0..grid.len(){
            for collumn in 0..grid.len(){
                horizontal[row] = horizontal[row].max(grid[row][collumn]);
                vertical[collumn] = vertical[collumn].max(grid[row][collumn]); 
            }
        }
        
        //Result value
        let mut res:i32 = 0;

        //Find buildings that we can increase
        for row in 0..grid.len(){
            for collumn in 0..grid.len(){
                if grid[row][collumn] < horizontal[row] 
                && grid[row][collumn] < vertical[collumn] {
                    res += (horizontal[row].min(vertical[collumn]) - grid[row][collumn]);
                }
            }
        }
        res
    }
}
```