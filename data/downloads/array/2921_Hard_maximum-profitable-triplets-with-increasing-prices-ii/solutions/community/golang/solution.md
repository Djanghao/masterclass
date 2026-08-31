# Golang Segment Tree Solution

**Author:** cakuang1
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-profitable-triplets-with-increasing-prices-ii/solutions/5796504/](https://leetcode.com/problems/maximum-profitable-triplets-with-increasing-prices-ii/solutions/5796504/)

---

# Intuition
Segment tree to find left and right maxes in O(logN).
Then do a final iteration to find potential maxes. 


# Code
```golang []
func maxProfit(prices []int, profits []int) int {
    

    left := make([]int , len(prices))
    
    right := make([]int, len(prices))


    maxi := 0
    

    for _,v := range(prices) {
        maxi = max(maxi,v)
    }
    

    

    res := -1
    leftseg := Constructor(make([]int, maxi + 1))
    rightseg := Constructor(make([]int, maxi + 1))
    
    leftseen := map[int]int{}

    for i := range(prices) {
        if i !=  0 {
            left[i] = leftseg.Query(1, prices[i] - 1)
        }
        
        if leftseen[prices[i]] < profits[i] {
            leftseg.Update(prices[i], profits[i] )
            leftseen[prices[i]] = profits[i]

        }
    }

    rightseen := map[int]int{}
    

    for i := len(prices) - 1 ; i >= 0 ; i -- {
        if i !=  len(prices) - 1 {
            right[i] = rightseg.Query(prices[i] + 1, maxi)
        }
        // how to  see this ?
        

        if rightseen[prices[i]] < profits[i] {
            rightseg.Update(prices[i], profits[i] )
            rightseen[prices[i]] = profits[i]
        }
    }


    

    for i := 1 ; i < len(prices) - 1; i ++ {
        if left[i] > 0 && right[i] > 0 {
            res = max(res, left[i] + profits[i] + right[i])
        }
    }

    return res




    


    return res
}





// SegmentTree structure
type SegmentTree struct {
	tree []int
	n    int
}

// Constructor initializes the segment tree with a given array
func Constructor(arr []int) *SegmentTree {
	n := len(arr)
	tree := make([]int, 4*n) // Allocate 4 * n space for the segment tree
	st := &SegmentTree{tree: tree, n: n}
	st.build(arr, 0, 0, n-1) // Build the segment tree
	return st
}

// Build the segment tree recursively
func (st *SegmentTree) build(arr []int, node, start, end int) {
	if start == end {
		// Leaf node will store the actual value from the array
		st.tree[node] = arr[start]
	} else {
		mid := (start + end) / 2
		// Recursively build the left and right children
		st.build(arr, 2*node+1, start, mid)
		st.build(arr, 2*node+2, mid+1, end)
		// Internal node will store the maximum of its two children
		st.tree[node] = max(st.tree[2*node+1], st.tree[2*node+2])
	}
}

// Update the value at index 'pos' to 'val'
func (st *SegmentTree) Update(pos, val int) {
	st.updateHelper(0, 0, st.n-1, pos, val)
}

// Update the segment tree recursively after modifying the array
func (st *SegmentTree) updateHelper(node, start, end, pos, val int) {
	if start == end {
		// Leaf node: update the value
		st.tree[node] = val
	} else {
		mid := (start + end) / 2
		if pos <= mid {
			// Update the left child
			st.updateHelper(2*node+1, start, mid, pos, val)
		} else {
			// Update the right child
			st.updateHelper(2*node+2, mid+1, end, pos, val)
		}
		// Internal node will store the maximum of its two children
		st.tree[node] = max(st.tree[2*node+1], st.tree[2*node+2])
	}
}

// Query the maximum value in the range [l, r]
func (st *SegmentTree) Query(l, r int) int {
	return st.queryHelper(0, 0, st.n-1, l, r)
}

// Recursively query the segment tree for the maximum in range [l, r]
func (st *SegmentTree) queryHelper(node, start, end, l, r int) int {
	// If the range [l, r] is outside the current segment
	if start > r || end < l {
		return -1 // Return the minimum possible value for max query
	}

	// If the current segment is fully inside the query range
	if start >= l && end <= r {
		return st.tree[node]
	}

	// If the current segment partially overlaps with the query range
	mid := (start + end) / 2
	leftQuery := st.queryHelper(2*node+1, start, mid, l, r)
	rightQuery := st.queryHelper(2*node+2, mid+1, end, l, r)
	return max(leftQuery, rightQuery)
}

// Helper function to compute the maximum of two integers
func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}

```