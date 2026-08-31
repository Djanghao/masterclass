# Easy javascript solution

**Author:** darynkaypbaev
**Votes:** 6
**Link:** [https://leetcode.com/problems/delete-n-nodes-after-m-nodes-of-a-linked-list/solutions/690939/](https://leetcode.com/problems/delete-n-nodes-after-m-nodes-of-a-linked-list/solutions/690939/)

---

There is nothing special here.

1) Traverse through the first `m - 1` nodes
2) Save the current node as a breakpoint
3) Traverse further through the next `n + 1` nodes
4) Connect the current node with the breakpoint node

*JavaScript*

	let curr = head

    while (curr) {
        for (let i = 0; i < m - 1 && curr; i++) {
            curr = curr.next
        }

        if (curr === null) break

        let breakPoint = curr

        for (let i = 0; i <= n && curr; i++) {
            curr = curr.next
        }

        breakPoint.next = curr
    }
    
    return head