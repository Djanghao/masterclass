# Beats 100% | Golang | Hashmap | O(n) | Linear

**Author:** user1428Ew
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-black-blocks/solutions/5464081/](https://leetcode.com/problems/number-of-black-blocks/solutions/5464081/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Work with the coordinates. Working the whole matrix is expensive for memory.

# Approach
<!-- Describe your approach to solving the problem. -->
*Assume there are no black cells. Calculate (m-1)*(n-1).*

*This is the total maximum possible blocks and the number of blocks with 0 black cells.*

Generate a hash function f(i,j) = 100000 * i + j to avoid collisions where i,j denote indexes of a block with top left corner as (i,j). We will use a map now to store these keys.

Start processing coordinates (i,j) with four possibilities of contribution:

(row, col) = (i-1,j-1) ----- Participating as bottom right

(row, col) = (i,j-1)   ----- Participating as top right

(row, col) = (i-1,j)   ----- Participating as bottom left

(row, col) = (i,j)     ----- Participating as top left


Check for lower bounds and upper bounds for above i, j combinations like 0, m, n etc.

Keep incrementing the hash values in the map based on hash keys of coordinates.

Initialize the result as an array A of size 5 with A[0] as (m-1)*(n-1) as mentioned.

Iterate the map as Key, Val and use the value Val as an index to increment A[Val]. This denotes the number of blocks with Val black cells.

Keep decrementing A[0] as each iteration reduces one block from A[0].

Return A


# Complexity
- Time complexity: $$O(coordinates.length)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->


- Space complexity: $$O(coordinates.length)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
func countBlackBlocks(m int, n int, iCoordinates [][]int) []int64 {

    blockMatrix := make([]int64, 5)

    mx := make(map[int]int)

    var row int
    var col int
    for i := 1; i <= len(iCoordinates); i++ {
        row = iCoordinates[i-1][0] - 1        //-----> 0
        col = iCoordinates[i-1][1] - 1       //-----> 0

        if row+1 < m && col+1 < n && row >= 0 && col >= 0 {
            mx[100000*row+col]++
        }

        row = iCoordinates[i-1][0]-1        //-----> 1
        col = iCoordinates[i-1][1]          //-----> 0


        if row+1 < m && col+1 < n && row >= 0 && col >= 0 {
            mx[100000*row+col]++
        }

        row = iCoordinates[i-1][0]          //-----> 0
        col = iCoordinates[i-1][1]-1        //-----> 1

        if row+1 < m && col+1 < n && row >= 0 && col >= 0 {
            mx[100000*row+col]++
        }

        row = iCoordinates[i-1][0]        //-----> 1
        col = iCoordinates[i-1][1]        //-----> 1

        if row+1 < m && col+1 < n && row >= 0 && col >= 0 {
            mx[100000*row+col]++
        }
    }

    blockMatrix[0] = (int64)((m-1)*(n-1))

    for _, v := range mx {
        blockMatrix[v]++
        blockMatrix[0]--
    }
    return blockMatrix
}
```