# Clean TypeScript implementation of Node in Skiplist

**Author:** softengineer
**Votes:** 0
**Link:** [https://leetcode.com/problems/design-skiplist/solutions/4723352/](https://leetcode.com/problems/design-skiplist/solutions/4723352/)

---

```
class LinkedNode {
    val: number
    next: LinkedNode | null
    constructor(val?: number, next?: LinkedNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

class Skiplist {
    head?: LinkedNode;
    size: number
    constructor() {
        this.head = null;
        this.size = 0;
    }

    search(target: number): boolean {
        let curr = this.head;
        while (curr) {
            if (curr.val == target) return true;
            curr = curr.next;
        }
        return false;
    }

    add(num: number): void {
        if (this.size == 0) {
            this.head = { val: num, next: null }
            this.size++;
        } else if (this.size == 1) {
            this.head.next = { val: num, next: null }
            this.size++;
        } else {
            let curr = this.head;
            while (curr.next) {
                curr = curr.next;
            }
            curr.next = { val: num, next: null }
            this.size++;
        }
    }

    erase(num: number): boolean {
        if (!this.search(num)) return false;
        else {
            let curr = this.head;
            let prev = null;
            while (curr) {
                if (curr.val == num) {
                    if (!prev) {
                        curr = curr.next;
                        this.head = curr;
                        this.size--;
                        return true;
                    } else {
                        prev.next = curr.next;
                        this.size--;
                        return true;
                    }
                } else {
                    prev = curr;
                }
                curr = curr.next;
            }
        }
    }
}

/**
 * Your Skiplist object will be instantiated and called as such:
 * var obj = new Skiplist()
 * var param_1 = obj.search(target)
 * obj.add(num)
 * var param_3 = obj.erase(num)
 */
```