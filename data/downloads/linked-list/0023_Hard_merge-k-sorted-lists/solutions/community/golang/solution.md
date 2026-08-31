# Golang concise solutions, priority queue and using "merge two lists" method

**Author:** redtree1112
**Votes:** 13
**Link:** [https://leetcode.com/problems/merge-k-sorted-lists/solutions/10655/](https://leetcode.com/problems/merge-k-sorted-lists/solutions/10655/)

---

Two ways to solve,
1) Use priority queue by using `container/heap` 

```
func mergeKLists(lists []*ListNode) *ListNode {
	pq := make(PQ, 0)
	for _, node := range lists {
		if node != nil {
			pq = append(pq, node)
		}
	}

	if len(pq) == 0 {
		return nil
	}
	heap.Init(&pq)

	head := &ListNode{}
	dummyHead := head

	for len(pq) > 0 {
		min := heap.Pop(&pq)
		minNode := min.(*ListNode)
		head.Next = minNode
		head = head.Next

		if minNode.Next != nil {
			heap.Push(&pq, minNode.Next)
		}
	}
	return dummyHead.Next
}

type PQ []*ListNode

func (pq PQ) Len() int {
	return len(pq)
}

func (pq PQ) Swap(a, b int) {
	pq[a], pq[b] = pq[b], pq[a]
}

func (pq PQ) Less(a, b int) bool {
	return pq[a].Val < pq[b].Val
}

func (pq *PQ) Push(nodeInterface interface{}) {
	node := nodeInterface.(*ListNode)
	*pq = append(*pq, node)
}

func (pq *PQ) Pop() interface{} {
	old := *pq
	lastNode := old[len(*pq)-1]
	*pq = old[:len(*pq)-1]
	return lastNode
}
```

2. Apply the same algorithm as "merge two lists" while taking 2 lists , until we can merge all.

```
func mergeKLists(lists []*ListNode) *ListNode {
	listsLen := len(lists)
	if listsLen == 0 {
		return nil
	} else if listsLen == 1 {
		return lists[0]
	}

	for len(lists) > 1 {
		list1, list2 := lists[0], lists[1]
		merged := mergeLists(list1, list2)

		lists = lists[2:]
		lists = append(lists, merged)
	}
	return lists[0]
}

func mergeLists(listA, listB *ListNode) *ListNode {
	res := &ListNode{}
	dummyHead := res
	for listA != nil || listB != nil {
		if listA == nil {
			res.Next = listB
			break
		}
		if listB == nil {
			res.Next = listA
			break
		}

		if listA.Val < listB.Val {
			res.Next = listA
			res = res.Next
			listA = listA.Next
		} else {
			res.Next = listB
			res = res.Next
			listB = listB.Next
		}
	}
	return dummyHead.Next
}

```