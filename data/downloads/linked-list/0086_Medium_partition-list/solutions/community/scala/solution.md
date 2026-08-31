# [Scala] One liner solution using iterator partition

**Author:** Abastro
**Votes:** 1
**Link:** [https://leetcode.com/problems/partition-list/solutions/1858306/](https://leetcode.com/problems/partition-list/solutions/1858306/)

---

Scala provides a handy method which partitions an iterator given a condition - which does not seem to incur more than O(1) memory cost.
So, the partitioned iterator is concatenated and is folded back into . Sadly, `foldRight` do incur O(n) stack space cost. Does beat 67% though.
```scala
    def partition (head: ListNode, x: Int): ListNode = Iterator.unfold (head) (Option (_).map (n => (n.x, n.next))).partition (_ < x) match { case (l, r) => (l ++ r).foldRight (null: ListNode) (ListNode (_, _)) }
```

Unwrapped version
```scala
    def partition (head: ListNode, x: Int): ListNode =
		Iterator.unfold (head) (Option (_).map (n => (n.x, n.next)))
			.partition (_ < x) match { 
				case (l, r) => (l ++ r).foldRight (null: ListNode) (ListNode (_, _))
			}
```