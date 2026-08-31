# time: O(N), space: O(N)

**Author:** brudnovskyi
**Votes:** 0
**Link:** [https://leetcode.com/problems/convert-doubly-linked-list-to-array-i/solutions/6090010/](https://leetcode.com/problems/convert-doubly-linked-list-to-array-i/solutions/6090010/)

---

```typescript []
function toArray(head: _Node | null): number[] {
    let current = head;
    const array: number[] = [];

    while (current) {
        array.push(current.val);

        if (!current.next)return array;

        current = current.next;
    }
};
```