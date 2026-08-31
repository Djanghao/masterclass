# Go: golang | doubly linked list | easy

**Author:** ychawla1
**Votes:** 4
**Link:** [https://leetcode.com/problems/design-linked-list/solutions/3357685/](https://leetcode.com/problems/design-linked-list/solutions/3357685/)

---

**Note:** The performance can be improved by checking if the index is near the tail or head and if near tail, inseatd of using head.next use tail.prev for get and delete calls. 

To check if the index is near head use: 

*index + 1 < size - index*

# Code
```

type Node struct {
	Next *Node
	Prev *Node
	Val  int
}
type MyLinkedList struct {
	head *Node
	tail *Node
	size int
}

func Constructor() MyLinkedList {
	head := &Node{Val: -1, Next: nil, Prev: nil}
	tail := &Node{Val: -1, Next: nil, Prev: nil}
	head.Next = tail
	tail.Prev = head
	return MyLinkedList{
		head: head,
		tail: tail,
		size: 0,
	}
}

func (this *MyLinkedList) Get(index int) int {
	if index < 0 || index >= this.size {
		return -1
	}
	
    curr := this.head
    for i := 0; i <= index; i++ {
        curr = curr.Next
    }
    return curr.Val
	
}

func (this *MyLinkedList) AddAtHead(val int) {
	newNode := &Node{
		Val:  val,
		Next: this.head.Next,
		Prev: this.head,
	}
	this.head.Next.Prev = newNode
	this.head.Next = newNode
	this.size++
}


func (this *MyLinkedList) AddAtTail(val int) {
	newNode := &Node{
		Val:  val,
		Next: this.tail,
		Prev: this.tail.Prev,
	}

	this.tail.Prev.Next = newNode
	this.tail.Prev = newNode
	this.size++
}

func (this *MyLinkedList) AddAtIndex(index int, val int) {
	if index > this.size {
		return
	}

	if index <= 0 {
		this.AddAtHead(val)
		return
	}

	if index == this.size {
		this.AddAtTail(val)
		return
	}

	curr := this.head
	for i := 0; i <= index; i++ {
		curr = curr.Next
	}
	newNode := &Node{
		Val:  val,
		Prev: curr.Prev,
		Next: curr,
	}

	curr.Prev.Next = newNode
	curr.Prev = newNode
	this.size++

}

func (this *MyLinkedList) DeleteAtIndex(index int) {
	if index >= this.size {
		return
	}
	curr := this.head.Next
	for index > 0 {
		curr = curr.Next
		index--
	}
	curr.Prev.Next = curr.Next
	curr.Next.Prev = curr.Prev
	this.size--
}


```