# Morris Inorder Iterator + Ring Buffer

**Author:** bachngocson0812
**Votes:** 0
**Link:** [https://leetcode.com/problems/closest-binary-search-tree-value-ii/solutions/4978205/](https://leetcode.com/problems/closest-binary-search-tree-value-ii/solutions/4978205/)

---

# Result

Beat 100% time & memory
![image.png](./images/0.png)

# Intuition
Sliding window technique with window size is k, using in-order morris traversal with ring buffer

# Approach
Fix the window size of maximum k, iterate until meet requirement

# Complexity
- Time complexity: $$O(p)$$ where $p < n$. The algorithm stop when meet requirement, we don't need to traverse the whole tree
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$. Ring buffer space does not count because it is the output.
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func closestKValues(root *TreeNode, target float64, k int) []int {
    iter := NewMorrisInorderIterator(root)
    buffer := NewRingBuffer[int](k)
    for i := 0; i < k && iter.HasNext(); i++ {
        el := iter.Next()
        buffer.Push(el.Val)
    }

    for iter.HasNext() {
        el := iter.Next()
        head := buffer.Head()
        d := diff(target, head)
        if d > diff(target, el.Val) {
            buffer.Push(el.Val)
        } else {
            break
        }
    }

    return buffer.GetSlice()
}

func diff(target float64, a int) float64 {
    out := target - float64(a)
    if out > 0 {
        return out
    }
    return -out
}

type MorrisInorderIterator struct {
	cur *TreeNode
	pre *TreeNode
}

func NewMorrisInorderIterator(root *TreeNode) *MorrisInorderIterator {
	return &MorrisInorderIterator{
		cur: root,
	}
}

func (i *MorrisInorderIterator) HasNext() bool {
	return i.cur != nil
}

func (i *MorrisInorderIterator) Next() *TreeNode {
	var v *TreeNode
	for i.cur != nil {
		if i.cur.Left == nil {
			v = i.cur
			i.cur = i.cur.Right
			break
		} else {
			i.pre = i.cur.Left
			for i.pre.Right != nil && i.pre.Right != i.cur {
				i.pre = i.pre.Right
			}

			if i.pre.Right == nil {
				i.pre.Right = i.cur
				i.cur = i.cur.Left
			} else {
				i.pre.Right = nil
				v = i.cur
				i.cur = i.cur.Right
				break
			}
		}
	}
	return v
}

type RingBuffer[T any] struct {
    arr []T
    tail int
}

func NewRingBuffer[T any](cap int) RingBuffer[T] {
    return RingBuffer[T]{
        arr: make([]T, 0, cap),
    }
}

func (r *RingBuffer[T]) GetSlice() []T {
    return r.arr
}

func (r *RingBuffer[T]) Size() int {
    return len(r.arr)
}

func (r *RingBuffer[T]) Push(element T) {
    if len(r.arr) < cap(r.arr) {
        r.arr = append(r.arr, element)
    } else {
        r.arr[r.tail] = element
        r.tail++
        r.tail %= len(r.arr)
    }
}

func (r *RingBuffer[T]) Head() T {
    return r.arr[r.tail]
}
```