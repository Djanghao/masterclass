# Solution in Go + Explanation

**Author:** LutraMan
**Votes:** 1
**Link:** [https://leetcode.com/problems/delete-columns-to-make-sorted-iii/solutions/1150010/](https://leetcode.com/problems/delete-columns-to-make-sorted-iii/solutions/1150010/)

---

After a long time and some pain, I figured that this problem can be seen as a graph problem:

let's look at this example: ["aaaaabaa", "abcdefgb"]
rearranged to a matrix shape:
```
	a a a a a b a a
	a b c d e f g b
```
We can think of each column in the matrix as a node in the graph

From each node to another node there is a path if and only if:
1. the source node is a column from the left of the destination node (i.e. we can only move from left to right)
2. all the rows in the column of the source node are smaller or equal to their corrosponding row in the destination node

for example,  there is a path from column 0 to column 7 (last one) because for the first string [0] and [7] are both 'a' and for the second [0] is a and [7] is b

```
	a ----------> a
	a ----------> b
```
The cost of which is 6, since we have to delete 6 characters to get there directly. The cost can be calculated `nextColumn - column - 1` where `column` and `nextColumn` are index numbers.

However, there is no route from 6 to 7:
```
	a ----------> a
	g ----X-----> b
```

Moving from one column to the next is free (if possible), no deletions.

Let's also add a Start and an End node to our graph (they are placeholders)
```
S   a a a a a b a a   E
S	a b c d e f g b   E
```
and rephrase our question as follows:
**What's the cheapest route to get from S to E?**

Now the question looks much simpler. At first I thought of Dijkstra, but it was just too complex to impement in this scenario (setting up a priority queue in go is a bit too much work for what we need). Then I tried DFS, but that was too slow. So I added some memory to the solution in the form of an array keeping the cheapest route to evey node at any point of the search, and now I get to call it dynamic programming :-)

So, here's the solution in Go. A DFS with memory:

```go
func minDeletionSize(strs []string) int {
    deletionsToColumn := make([]int, len(strs[0])+1) // deletionsToColumn is 1 place longer, to accomodate for the very important End node
	// this loop simulates going from our placeholder start node to every other node (the cost is just the column index)
	// also there will always be a path from S to any other node, it translates to where we choose to start
    for i := 0; i < len(deletionsToColumn); i++ {
        deletionsToColumn[i] = i
    }
    return minDeletionsRoute(strs, deletionsToColumn)
}

// I guess there was no real need for me to split to another function, just a remainder of my previous DFS attempt
func minDeletionsRoute(strs []string, deletionsToColumn []int) int {
    for column := 0; column < len(strs[0]); column++ {
        for nextColumn := column + 1; nextColumn < len(deletionsToColumn); nextColumn++ {
			// it's cheaper (computationally) to check if the cost of the edge is cheaper than the previous best way to arrive to it, so that condition comes before the call to hasRoute
            if deletionsToColumn[nextColumn] >= deletionsToColumn[column] + nextColumn - column - 1 && hasRoute(strs, column, nextColumn) {
                deletionsToColumn[nextColumn] = deletionsToColumn[column] + nextColumn - column - 1
            }
        }
    }
    return deletionsToColumn[len(deletionsToColumn)-1]
}

// hasRoute checks that all the chars in the column (c) are in order with the chars in the next column (nc)
func hasRoute(strs []string, c, nc int) bool {
    if c == -1 || nc == len(strs[0]) { return true } // if nc is out of bounds, that means it's the end node, to which all nodes are free to reach (at a cost!)
    for si := 0; si < len(strs); si++ {
        if strs[si][c] > strs[si][nc] {
            return false
        }
    }    
    return true
}
```
