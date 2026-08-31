# Persistent index tree

**Author:** xmentex
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-sum-queries/solutions/3624194/](https://leetcode.com/problems/maximum-sum-queries/solutions/3624194/)

---

# Intuition
we have points in space (x=nums1[i] and y=nums2[i]) with value x+y and need to query the maximum value for all points in x>=q[0] and y >= q[1].

# Approach
sort the points by x
compress the y coordinates, so we can use index tree
iterate the sorted points from back the to front, for each point add the y coordinate with value x+y to the index tree of the next point
having index tree for each point uses too much memory, so use persistent index tree where it creates a new tree for each add that has new nodes along the path that changes and points to the nodes of the old tree otherwise
for each query do binary search to find the first point i in the sorted order with x>=q[0]
do binary search to find the y' within the compressed y coordinates
query index tree i for max value for interval y', n

# Complexity**Bold**
- Time complexity:
n*logn

- Space complexity:
n*logn

# Code
```
import "math"

type node struct {
	v     int
	left  *node
	right *node
}

type indexTree struct {
	n            int
	root         *node
	f            func(i, j int) int
	defaultValue int
}

type Aggregation interface {
	DefaultValue() int
	Aggregate(left, right int) int
}

func (m MinIndex) DefaultValue() int { return math.MaxInt32 }
func (m MinIndex) Aggregate(left, right int) int {
	if left < right {
		return left
	} else {
		return right
	}
}

func (m MaxIndex) DefaultValue() int { return -1 }
func (m MaxIndex) Aggregate(left, right int) int {
	if left > right {
		return left
	} else {
		return right
	}
}

func (m SumIndex) DefaultValue() int             { return 0 }
func (m SumIndex) Aggregate(left, right int) int { return left + right }

func (i *indexTree) Add(k, v int) IndexTree {
	newRoot := i.traverse(i.root, 0, i.n, true, func(cur *node, b, e int) *node {
		if b <= k && e >= k {
			next := &node{0, nil, nil}
			next.v = i.f(cur.v, v)
			return next
		}
		return nil
	})

	return &indexTree{i.n, newRoot, i.f, i.defaultValue}
}

func (i *indexTree) Get(qb, qe int) int {
	res := i.defaultValue
	i.traverse(i.root, 0, i.n, false, func(cur *node, b, e int) *node {
		if b >= qb && e <= qe {
			res = i.f(res, cur.v)
			return nil
		}
		if !(qe < b || qb > e) {
			return &node{0, nil, nil}
		} else {
			return nil
		}
	})
	return res
}

func (i *indexTree) traverse(cur *node, b, e int, add bool, do func(node *node, b, e int) *node) *node {
	x := do(cur, b, e)

	if x == nil {
		return cur
	}
    
    if cur.left == nil {
        cur.left = &node{i.defaultValue, nil, nil}
    }
    if cur.right == nil {
        cur.right = &node{i.defaultValue, nil, nil }
    }
    
    x.left = cur.left
	x.right = cur.right

	m := (b + e) / 2

	if b != e {
		x.left = i.traverse(cur.left, b, m, add, do)
		x.right = i.traverse(cur.right, m+1, e, add, do)
	}

	return x
}

// Aggregation types
type MinIndex struct{}
type MaxIndex struct{}
type SumIndex struct{}

type IndexTree interface {
	// Adds v to index i
	Add(i, v int) IndexTree
	// Gets the aggregation in the interval [b, e]
	Get(b, e int) int
}

func NewIndexTree(n int, a Aggregation) IndexTree {
	root := &node{a.DefaultValue(), nil, nil}

	return &indexTree{n, root, a.Aggregate, a.DefaultValue()}
}

type p struct {
    x, y int
}

func compress(arr []int) map[int]int {
    sort.Ints(arr)
    
    res := make(map[int]int)
    for i, v := range arr {
        res[v] = i
    }
    
    return res
}

func maximumSumQueries(nums1 []int, nums2 []int, queries [][]int) []int {
    n := len(nums1)
    arr := make([]p, 0)
    
    for i := 0; i < n; i++ {
        arr = append(arr, p{ nums1[i], nums2[i] })
    }
        
    sort.Slice(arr, func(i, j int) bool {
        return arr[i].x < arr[j].x 
    })
    
    max := make([]IndexTree, n)
    
    c := compress(nums2)
    
    for i := n - 1; i >= 0; i-- {
        x := arr[i].x
        y := arr[i].y
        if i == n - 1 {
            max[i] = NewIndexTree(n + 1, MaxIndex{})
            max[i] = max[i].Add(c[y], x + y)
        } else {
            max[i] = max[i+1].Add(c[y], x + y)
        }                  
    }
    
    res := make([]int, 0)
    for _, q := range queries {
        i := sort.Search(n, func(i int) bool {
            return arr[i].x >= q[0]
        })
        y := sort.Search(n, func(i int) bool {
            return nums2[i] >= q[1]
        })
        
        if i >= len(max) {
            res = append(res, -1)
        } else {
        
            res = append(res, max[i].Get(y, n + 1))
        }
    }
    
    return res
}
```