# [JS] Initial and Optimised solution

**Author:** wintryleo
**Votes:** 19
**Link:** [https://leetcode.com/problems/snapshot-array/solutions/1429705/](https://leetcode.com/problems/snapshot-array/solutions/1429705/)

---

**Solution 1:**

Modified Solution 2 to use **Hashmap** instead of an array for each element. This will reduce the space complexity, as only one value will be stored for each `snap_id`.

```
// TC = O(s * n); SC = O(n + s * n)
class SnapshotArray {
    constructor(length) {
        this.elements = Array(length).fill(0);    // TC: O(n); SC = O(n)
        this.snapshots = new Map();    // SC: O(s * n)
        this.snapId = -1;
    }
    set(index, val) {   // TC: O(1)
        this.elements[index] = val;
    }
    snap() {    // TC: O(n)
        ++this.snapId;
        this.snapshots.set(this.snapId, [...this.elements]);    // TC: O(n) [create deep copy of the array each time snapshot is called]
        return this.snapId;
    }
    get(index, snap_id) {   // TC: O(1)
        const snapshot = this.snapshots.has(snap_id) ? this.snapshots.get(snap_id) : [];
        return index < snapshot.length ? snapshot[index] : -1;
    }
}
```
Time Complexity:
`constructor - O(n)`
`set - O(1)`
`snap - O(n)`
`get - O(1)`

Space Complexity: O(n + s * n) ~ `O(s * n)`
[n - number of elements; s - number of snapshots taken]

----

**Solution 2:**

```
class SnapshotArray {
    constructor(length) {
        // each element will be an array of [val, snapId] values
        this.elements = Array(length).fill(null).map(el => []);    // O(n)
        this.snapId = 0;
    }
    set(index, val) {   // O(1)
        this.elements[index].push([val, this.snapId]);
    }
    snap() {    // O(1)
        ++this.snapId;
        return this.snapId - 1;
    }
	// find the value for snapId <= snap_id. in case no value is found, return 0
    get(index, snap_id) {   // O(log(s))
        const element = this.elements[index];
        let left = 0,
            right = element.length - 1,
            mid, id = -1;
        
        while(left <= right) {
            mid = left + Math.floor((right - left) / 2);
            if(element[mid][1] <= snap_id) {
                id = mid;
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return id === -1 ? 0 : element[id][0];
    }
}
```
Time Complexity:
`constructor - O(n)`
`set - O(1)`
`snap - O(1)`
`get - O(log(s))`

Space Complexity: `O(n)`
[n - number of elements; s - number of snapshots taken]

----

**Solution 3:**

```
class SnapshotArray {
    constructor(length) {
        // each element will be an array of Map
        this.elements = Array(length).fill(null).map(el => new Map());   // max O(n + s)
        this.snapId = 0;
    }
    set(index, val) {   // O(1)
        this.elements[index].set(this.snapId, val);
    }
    snap() {    // O(1)
        ++this.snapId;
        return this.snapId - 1;
    }
    get(index, snap_id) {   // O(log(s) + s)
        const element = Array.from(this.elements[index].keys());    // O(s)
        let left = 0,
            right = element.length - 1,
            mid, id = -1;
        
        while(left <= right) {
            mid = left + Math.floor((right - left) / 2);
            if(element[mid] <= snap_id) {
                id = element[mid];
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return id === -1 ? 0 : this.elements[index].get(id);
    }
}
```
Time Complexity:
`constructor - O(n)`
`set - O(1)`
`snap - O(1)`
`get - O(log(s) + s) ~ O(s)`

Space Complexity: `O(n)`
[n - number of elements; s - number of snapshots taken]