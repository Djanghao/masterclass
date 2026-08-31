# [Golang] using Binary Search Tree

**Author:** nithingudla23
**Votes:** 1
**Link:** [https://leetcode.com/problems/closest-room/solutions/4096106/](https://leetcode.com/problems/closest-room/solutions/4096106/)

---

# Code
```
type Node struct {
	val   int
	left  *Node
	right *Node
}

type BST struct {
	root *Node
}

func NewBST() *BST {
	return &BST{}
}

func (bst *BST) insert(v int) {
	n := &Node{
		val: v,
	}
	if bst.root == nil {
		bst.root = n
		return
	}

	temp := bst.root
	for {
		if v < temp.val {
			if temp.left == nil {
				temp.left = n
				return
			}
			temp = temp.left
		} else {
			if temp.right == nil {
				temp.right = n
				return
			}
			temp = temp.right
		}
	}
}

func (bst *BST) search(v int) int {
	if bst.root == nil {
		return -1
	}

	temp := bst.root
	closeResult := temp.val

	for {
		if temp.val == v {
			return v
		}

		if abs(v, temp.val) < abs(closeResult, v) {
			closeResult = temp.val
		}

		if v < temp.val {
			if temp.left == nil {
				return closeResult
			}
			temp = temp.left
		} else {
			if temp.right == nil {
				return closeResult
			}
			temp = temp.right
		}
	}
}

func abs(a, b int) int {
	if a > b {
		return a - b
	}
	return b - a
}

func min(a, b int) int {
	if a < b {
		return a
	}
	return b
}

type Query struct {
	roomID int
	size   int
	index  int
}

func closestRoom(rooms [][]int, queries [][]int) []int {

	myQueries := make([]Query, 0)
	for i, query := range queries {
		myQueries = append(myQueries, Query{
			size:   query[1],
			roomID: query[0],
			index:  i,
		})
	}

	// sort queries in descending order based on required size
	sort.Slice(myQueries, func(i, j int) bool {
		if myQueries[i].size > myQueries[j].size {
			return true
		}
		return false
	})

	// sort rooms in descending order based on size
	sort.Slice(rooms, func(i, j int) bool {
		if rooms[i][1] > rooms[j][1] {
			return true
		}
		return false
	})

	roomsIndex := 0
	bst := NewBST()

	result := make([]int, len(myQueries))
	for _, query := range myQueries {
		requiredSize := query.size
		for ; roomsIndex < len(rooms) && rooms[roomsIndex][1] >= requiredSize; roomsIndex++ {
			bst.insert(rooms[roomsIndex][0])
		}
		res := bst.search(query.roomID)
		if res > query.roomID {
			// If we are searching for 5, and res=7, then we can check if 3 (i.e 5 - (7-5)) exists in bst as priority is given to small number
			requiredSize2 := query.roomID - (res - query.roomID)
			if res2 := bst.search(requiredSize2); res2 == requiredSize2 {
				res = res2
			}
		}

		result[query.index] = res
	}

	return result
}
```