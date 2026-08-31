# Golang Solution with Explanation

**Author:** neilnaveen
**Votes:** 2
**Link:** [https://leetcode.com/problems/remove-all-ones-with-row-and-column-flips/solutions/1670858/](https://leetcode.com/problems/remove-all-ones-with-row-and-column-flips/solutions/1670858/)

---


Here are some constraints around the problem to make the solution around.
* If we flip a row or column an even number of times, we have the row or collum back to its original form. 
* If we iterate through the first row and column, we can figure out if we should flip or not.
* After all of this, if we still find a ```1``` inside of the grid, we return ``false``.

With this in mind, we can first iterate through the first row and the first element of all the columns. If we find an element whose value is one, we flip that respective row or collum. 

``` go
func removeOnes(grid [][]int) bool {
    for _,i := range grid{
        if i[0] == 1 {
            for k := range i {
                i[k] = 1-i[k]
            }
        }
    }
    for j,i := range grid[0]{
        if i == 1 {
            for k := range grid {
                grid[k][j] = 1-grid[k][j]
            }
        }
    }
    for _,i := range grid{
        for _,j := range i{
            if j == 1{
                return false
            }
        }
    }
    return true
}
```