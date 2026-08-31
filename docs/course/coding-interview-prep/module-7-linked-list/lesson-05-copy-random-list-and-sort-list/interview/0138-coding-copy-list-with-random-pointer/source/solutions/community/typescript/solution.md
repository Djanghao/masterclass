# < 69 IQ solution

**Author:** Hiruto
**Votes:** 13
**Link:** [https://leetcode.com/problems/copy-list-with-random-pointer/solutions/3797257/](https://leetcode.com/problems/copy-list-with-random-pointer/solutions/3797257/)

---

# Code
```
function copyRandomList(head: Node | null): Node | null {
    if (head == null) return null;

    let map = new Map();

    let current = head;

    while (current) {
        map.set(current, new Node(current.val, current.next, current.random));
        current = current.next;
    }

    map.forEach(node => {
        if (node.next) node.next = map.get(node.next);
        if (node.random) node.random = map.get(node.random);
    });

    return map.get(head);
};
```