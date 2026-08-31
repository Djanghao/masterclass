# Golang simple solution

**Author:** tjucoder
**Votes:** 4
**Link:** [https://leetcode.com/problems/operations-on-tree/solutions/1490382/](https://leetcode.com/problems/operations-on-tree/solutions/1490382/)

---

```go
type LockingTree struct {
	locker   []int
	parent   []int
	children [][]int
}

func Constructor(parent []int) LockingTree {
	locker := make([]int, len(parent))
	for i := range locker {
		locker[i] = -1
	}
	children := make([][]int, len(parent))
	for i := range children {
		children[i] = make([]int, 0)
	}
	for i := 1; i < len(parent); i++ {
		children[parent[i]] = append(children[parent[i]], i)
	}
	return LockingTree{
		locker:   locker,
		parent:   parent,
		children: children,
	}
}

func (lt *LockingTree) Lock(num int, user int) bool {
	if lt.locker[num] != -1 {
		return false
	}
	lt.locker[num] = user
	return true
}

func (lt *LockingTree) Unlock(num int, user int) bool {
	if lt.locker[num] != user {
		return false
	}
	lt.locker[num] = -1
	return true
}

func (lt *LockingTree) Upgrade(num int, user int) bool {
	if lt.locker[num] != -1 {
		return false
	}
	for i := num; lt.parent[i] != -1; {
		i = lt.parent[i]
		if lt.locker[i] != -1 {
			return false
		}
	}
	lockedChildren := make([]int, 0)
	lt.childrenLocked(num, &lockedChildren)
	if len(lockedChildren) == 0 {
		return false
	}
	lt.locker[num] = user
	for _, v := range lockedChildren {
		lt.locker[v] = -1
	}
	return true
}

func (lt *LockingTree) childrenLocked(num int, children *[]int) {
	for _, v := range lt.children[num] {
		if lt.locker[v] != -1 {
			*children = append(*children, v)
		}
		lt.childrenLocked(v, children)
	}
}
```