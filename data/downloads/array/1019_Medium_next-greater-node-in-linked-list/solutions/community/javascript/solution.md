# Straightforward but slow

**Author:** space_sailor
**Votes:** 6
**Link:** [https://leetcode.com/problems/next-greater-node-in-linked-list/solutions/385696/](https://leetcode.com/problems/next-greater-node-in-linked-list/solutions/385696/)

---

```
const nextLargerNodes =  head => {
    let current = head,
        pointer = head,
        ans = [];

    while (current.next) {
        pointer = pointer.next;
        if (pointer.val > current.val) {
            ans.push(pointer.val);
            current = current.next;
            pointer = current;
        } else if (pointer.next === null) {
            ans.push(0);
            current = current.next;
            pointer = current;
        }
    }
	// Last ans always 0
    ans.push(0);

    return ans;
}
```