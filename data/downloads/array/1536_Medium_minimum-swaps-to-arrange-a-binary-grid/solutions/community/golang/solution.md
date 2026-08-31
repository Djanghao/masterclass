# Naive solution

**Author:** bulakhov
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-swaps-to-arrange-a-binary-grid/solutions/3193676/](https://leetcode.com/problems/minimum-swaps-to-arrange-a-binary-grid/solutions/3193676/)

---

# Approach
If we look from top row to bottom we can see that every valid row has at leat n-1-i zeroes on the left (n - len of grid, i - row number). We make a slice couting zeroes (e.g. [0,1,2]). Now we can just "bubble sort" it from the top. For example, for upper level we need to move last row up and it will take 2 swaps ([0,1,2] -> [2,1,0]). We just count those swaps.

# Complexity
- Time complexity:
$$O(n^2)$$


# Code
```
func minSwaps(grid [][]int) int {
    zero := make([]int, len(grid))
    for j, row := range grid {
        zeros := 0
        for i:=len(row)-1; i>=0; i-- {
            if row[i] == 0 {
                zeros++
                continue
            }
            break
        }
        zero[j] = zeros
    }
    swaps := 0
    for i:=0; i<len(grid); i++{
        num := len(grid)-1-i
        rowNum := -1
        for j:=i; j<len(grid); j++ {
            if zero[j]>=num {
                rowNum = j
                break
            }
        }
        if rowNum == -1 {
            return -1
        }
        swaps += rowNum-i
        if rowNum>i {
            // rearranging slice, j-row to i-place
            tempz := []int{}
            tempz = append(tempz, zero[:i]...)
            tempz = append(tempz, zero[rowNum])
            tempz = append(tempz, zero[i:rowNum]...)
            tempz = append(tempz, zero[rowNum+1:]...)
            zero = tempz
        }
    }
    return swaps
}
```