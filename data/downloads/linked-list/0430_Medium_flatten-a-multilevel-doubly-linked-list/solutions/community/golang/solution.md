# Go solution

**Author:** ganesh
**Votes:** 3
**Link:** [https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/solutions/1551886/](https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/solutions/1551886/)

---

https://github.com/ganeshskudva/Leetcode-Golang

Inspired by [this](https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/discuss/150321/Easy-Understanding-Java-beat-95.7-with-Explanation) solution
```
func flatten(root *Node) *Node {
	if root == nil {
		return root
	}

	p := root
	for p != nil {
		if p.Child == nil {
			p = p.Next
			continue
		}
		tmp := p.Child
		for tmp.Next != nil {
			tmp = tmp.Next
		}
		tmp.Next = p.Next
		if p.Next != nil {
			p.Next.Prev = tmp
		}
		p.Next = p.Child
		p.Child.Prev = p
		p.Child = nil
	}

	return root
}
```