# [Go] Segment Tree with comments

**Author:** stanroze
**Votes:** 1
**Link:** [https://leetcode.com/problems/booking-concert-tickets-in-groups/solutions/2088914/](https://leetcode.com/problems/booking-concert-tickets-in-groups/solutions/2088914/)

---

Full credit to: [stilleholz](https://leetcode.com/stilleholz)'s solution here - [[Python] Segment tree, beats 100 % with explanation](https://leetcode.com/problems/booking-concert-tickets-in-groups/discuss/2085084/Python-Segment-tree-beats-100-with-explanation)

I ported this code from Python and made a few modifications to make the Segment Tree a little bit more generic for universal use. I moved some of the functionality of the original code outside the Segment Tree, so that the Segment Tree itself is very basic.

This is my first time implementing Segment Tree in Go, comments are welcome

```
// node of the segment tree
type Node struct {
    left   *Node    // lower segments ie < right    
    right  *Node    // upper segments ie > left
    start  int      // segment boundary
    end    int      // segment boundary
    total  int      // total # of seats in this segment
    max    int      // max # of open seats in this segment
}

func NewNode(start, end int) *Node {
    return &Node{nil, nil, start, end, -1, math.MinInt32}
}

// build returns a Node for the given range and builds up the segment ranges
// start    - start of range
// end      - end of range
// value    - seats per row 
func build(start, end, value int) *Node {
    if start > end {
        return nil
    }
    // only 1 node
    if start == end {
        node := NewNode(start, end)
        node.total, node.max = value, value
        return node
    }
    // split the range in half
    node := NewNode(start, end)
    mid := (start + end) / 2
    
    // recursively build the range of the tree
    node.left = build(start, mid, value)
    node.right = build(mid+1,end, value)
    
    // update the total and max for each range
    node.total = node.left.total + node.right.total
    node.max = max(node.left.max, node.right.max)
    
    return node
}

func updateNode(node *Node, index, value int) {
    if node.start == index && node.end == index {
        node.total = value
        node.max = value
        return
    }
    // binary search
    mid := node.start + (node.end - node.start)/2
    if index <= mid {
        updateNode(node.left, index, value)
    } else {
        updateNode(node.right, index, value)
    }
    // update the max and the total
    node.max = max(node.left.max, node.right.max)
    node.total = node.left.total + node.right.total
}

func maxQuery(node *Node, limit int) *Node {
    if node.start == node.end {
        return node
    }
    
    if limit <= node.left.max {
        return maxQuery(node.left, limit)
    }
    
    return maxQuery(node.right, limit)
}

func sumQuery(node *Node, start int, end int) int {
    
    // if our window is in the node's segment
    if start == node.start && end == node.end {
        return node.total
    }
    // otherwise binary search
    mid := (node.start + node.end) / 2
    if end <= mid {
        return sumQuery(node.left, start, end)
    } else if start > mid {
        return sumQuery(node.right, start, end)
    } 
    
    return sumQuery(node.left, start, mid) + sumQuery(node.right, mid+1, end)     
}

// SegTree represents a segment tree API
type SegTree struct {
    Update      func(index, value int)
    MaxQuery    func(limit int)  *Node    // find an entry in the tree that's < limit
    SumQuery    func(row int) int         // return sum in a range from [0...row]
}

func NewSegmentTree(start, end, value int) *SegTree {
    root := build(start, end, value)
    return &SegTree{
        Update: func(index, value int) {
            updateNode(root, index, value)  
        },
        MaxQuery: func(limit int) *Node {
            return maxQuery(root, limit)
        },
        SumQuery: func(row int) int {
            return sumQuery(root, 0, row)  
        },
    }
}

// ***** END OF SEGMENT TREE DS ***********

type BookMyShow struct {
    seats          []int         // keep track remaining seats indexed by row
    startRow       int
    seatsPerRow    int           

    segTree *SegTree
}


func Constructor(n int, m int) BookMyShow {
    // n = number of rows, m = number of seats per row
    seats := make([]int, n)
    for row := range seats {
        seats[row] = m
    }
    return BookMyShow{ seats, 0, m,  NewSegmentTree(0, n-1, m) }
}


func (this *BookMyShow) Gather(k int, maxRow int) []int {
    // find a row where we can fit a block of k-seats together
    candidateRow := this.segTree.MaxQuery(k)
    // make sure possible row is <= maxRow and it's max available seats is >= k
    if candidateRow.end > maxRow || candidateRow.max < k {
        return []int{}
    }
    // we can fit a block of k-seats in this row (extract last row and remaning seats in this row)
    row, remainingSeats := candidateRow.end, this.seatsPerRow - candidateRow.total
    // subtract seats count from this row and update this rows new value
    this.seats[row] -= k 
    this.segTree.Update(row, this.seats[row])
    
    return []int{ row, remainingSeats }
}


func (this *BookMyShow) Scatter(k int, maxRow int) bool {
    // there are no k seats available up to maxRow
    if this.segTree.SumQuery(maxRow) < k {
        return false
    } else {
        row, total := this.startRow, 0
        // pick seats by how many are available in each row until we get up to k seats
        for total < k {
            prevTotal := total
            total += this.seats[row]
            if total < k {
                // use up all of the seats at row
                this.seats[row] = 0
                this.segTree.Update(row, this.seats[row])
                row = row + 1
                this.startRow = row
            } else {
                // overbooked a bit
                this.seats[row] -= k - prevTotal
                this.segTree.Update(row, this.seats[row])
            }
        }
    }
    
    return true
}

func max(x, y int) int {
    if x > y {
        return x
    }
    return y
}


/**
 * Your BookMyShow object will be instantiated and called as such:
 * obj := Constructor(n, m);
 * param_1 := obj.Gather(k,maxRow);
 * param_2 := obj.Scatter(k,maxRow);
 */
```