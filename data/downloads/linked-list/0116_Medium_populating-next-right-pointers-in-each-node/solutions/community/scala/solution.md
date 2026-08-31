# Scala Solution

**Author:** imran-sarwar
**Votes:** 2
**Link:** [https://leetcode.com/problems/populating-next-right-pointers-in-each-node/solutions/870655/](https://leetcode.com/problems/populating-next-right-pointers-in-each-node/solutions/870655/)

---

1. if root nul return null
2. if root.left is not null then assign root.right to root.left.next
3. also check if root.next != null means there we are pointing next branch where current node right's next should point root.next.left
4. call for both left and rigth branch

```
def connect(root: Node): Node = root match {
	case null => null
	case r => {
		if(root.left != null) {
			root.left.next = root.right
			if(root.next != null) {
				root.right.next = root.next.left
			}
		}
		connect(root.left)
		connect(root.right)
		root
	}
}
```