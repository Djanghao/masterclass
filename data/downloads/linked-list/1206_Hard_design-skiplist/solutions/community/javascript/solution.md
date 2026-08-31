# Concise Solution

**Author:** oDaniel
**Votes:** 3
**Link:** [https://leetcode.com/problems/design-skiplist/solutions/1304164/](https://leetcode.com/problems/design-skiplist/solutions/1304164/)

---

```
class Skiplist {
    constructor() {
        this.head = new Node();
    }

    search(value) {
        for (let curr = this.head; curr; curr = curr.down) {
            for (; curr.next && curr.next.value < value; curr = curr.next);
            if (curr.next && curr.next.value === value) {
                return true;
            }
        }
        return false;
    }

    add(value) {
        const stack = [];
        let curr = this.head;
        for (; curr; curr = curr.down) {
            for (; curr.next && curr.next.value < value; curr = curr.next);
            stack.push(curr);
        }
        let shouldInsert = true;
        for (let down = null; shouldInsert && stack.length; down = curr.next) {
            curr = stack.pop();
            curr.next = new Node(value, curr.next, down);
            shouldInsert = Math.random() < 0.5;
        }
        if (shouldInsert) {
            this.head = new Node(undefined, null, this.head);
        }
    }

    erase(value) {
        let isFound = false;
        for (let curr = this.head; curr; curr = curr.down) {
            for (; curr.next && curr.next.value < value; curr = curr.next);
            if (curr.next && curr.next.value === value) {
                isFound = true;
                curr.next = curr.next.next;
            }
        }
        return isFound;
    }
}

class Node {
    constructor(value, next = null, down = null) {
        this.value = value;
        this.next = next;
        this.down = down;
    }
}
```