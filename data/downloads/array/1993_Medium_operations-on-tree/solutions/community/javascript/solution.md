# 1993. Operations on Tree

**Author:** pgmreddy
**Votes:** 2
**Link:** [https://leetcode.com/problems/operations-on-tree/solutions/1445634/](https://leetcode.com/problems/operations-on-tree/solutions/1445634/)

---

---

Looks like, there is a bug
- Raised formal bug here - https://github.com/LeetCode-Feedback/LeetCode-Feedback/issues/4699
- Details here - https://leetcode.com/problems/operations-on-tree/discuss/1445611/Bug-in-Q3

---

```
class LockingTree {
    n = 0;
    parent = [];
    children = [];
    locked = {};

    constructor(parent) {
        this.n = parent.length;
        this.parent = parent;
        for (let node = 0; node < this.n; node++) {
            if (this.children[parent[node]] === undefined) this.children[parent[node]] = [];
            this.children[parent[node]].push(node);
        }
    }

    lock(node, user) {
        if (this.locked[node]) return false; // already locked, bad
        this.locked[node] = user; // lock for this user
        return true; // good
    }

    unlock(node, user) {
        if (this.locked[node] !== user) return false; // locked by different user - bad
        this.locked[node] = undefined; // unlock for all
        return true; // good
    }

    upgrade(node, user) {
        // ========== Check conditions =============

        // ===== CONDITION 1 - The node is unlocked,
        if (this.locked[node] !== undefined) {
            console.log('Upgrade not success');
            return false;
        }

        // ===== CONDITION 2 - It has at least one locked descendant (by any user), and
        let isLockedByDecesdant = false;
        let queue = [];
        if (this.children[node]) queue.push(...this.children[node]);
        while (queue.length) {
            let childNode = queue.pop();
            if (this.locked[childNode] !== undefined) {
                isLockedByDecesdant = true; // It has at least one locked descendant (by any user), and
                break;
            }
            if (this.children[childNode]) queue.push(...this.children[childNode]);
        }
        if (isLockedByDecesdant === false) {
            console.log('Upgrade not success - It has at least one locked descendant (by any user), and');
            return false; // Upgrade not success - It has at least one locked descendant (by any user), and
        }

        // ===== CONDITION 3 - It does not have any locked ancestors.
        let ancestor = node; // assume
        while (true) {
            ancestor = this.parent[ancestor]; // now get ancestor
            if (ancestor === -1) break; // no more ancestors - stop
            if (this.locked[ancestor] !== undefined) {
                console.log('Upgrade not success - It does not have any locked ancestors.');
                return false; // Upgrade not success - It does not have any locked ancestors.
            }
        }

        // ===== ALL CONDITION MET =============

        // ===== 1. Locks the given node for the given user
        if (this.lock(node, user) === false) {
            console.log('lock failed');
            return false; // lock failed
        }

        // ===== 2. unlocks all of its descendants
        queue = [];
        queue.push(...this.children[node]);
        while (queue.length) {
            let node = queue.pop();

            this.locked[node] = undefined; // unlock for all         // <--------------------- PASS if this

            // <------------------------------------------------------------------------------ FAIL if below
            /*
            if (this.unlock(node, user)) {
                // unlock success
            } else {
                console.log('unlock fail')
                return false; // unlock fail <-------------- ESP THIS
            }
            */

            if (this.children[node]) queue.push(...this.children[node]);
        }
        return true;
    }
}
```

---
