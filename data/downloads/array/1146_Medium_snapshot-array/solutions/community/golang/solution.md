# Databricks: Go solution with Binary Search

**Author:** ilya-pimenov
**Votes:** 3
**Link:** [https://leetcode.com/problems/snapshot-array/solutions/2755296/](https://leetcode.com/problems/snapshot-array/solutions/2755296/)

---

# Intuition

Initial intuition pushed me to use maps with version and a lookup in them, but then I understood that I missed a conditions of how we needed to look for elements with earlier snapshots.

I tried to implement binary search on map of version, only to realise that I need to do it over an array of versions.

And then I was sloppy not to update the element at the top of the array if the version didn't change.

# Approach

## Structure

An array of arrays. Every array stores elemenet values at snapshots.

## Get

Binary search over that array, finding exact version or the first before it.

# Complexity
- Time complexity:
Set is $$O(1)$$ and Get is $$O(LogN)$$ for binary search.

- Space complexity:
$$O(Length * Snapshots Count)$$

# Code
```
type Elem struct {
    val int
    version int
}

type SnapshotArray struct {
    data [][]Elem
    version int
}

func Constructor(length int) SnapshotArray {
    return SnapshotArray{ make([][]Elem, length), 0 }
}

func (sa *SnapshotArray) Set(index int, val int)  {
    // Update value if we are at the same version
    if len(sa.data[index]) > 0 {
        arr := sa.data[index]
        if arr[len(arr)-1].version == sa.version {
            sa.data[index][len(arr)-1].val = val
            return
        }
    }
    // Add new record if we are at the higher version
    sa.data[index] = append(sa.data[index], Elem{val, sa.version})
}

func (sa *SnapshotArray) Snap() int {
    old := sa.version
    sa.version++
    return int(old)
}

func (sa *SnapshotArray) Get(index int, snap_id int) int {
    // Binary search for the exact snap_id or the first below it
    arr := sa.data[index]
    l, r := 0, len(arr) - 1
    for l <= r {
        m := (l + r) / 2
        if arr[m].version == snap_id {
            return arr[m].val
        } else if arr[m].version < snap_id {
            l, r = m + 1, r
        } else {
            l, r = l, m - 1
        }
    }
    if l - 1 <= len(arr) && l - 1 >= 0 {
        return arr[l-1].val
    }
    return 0
}
```