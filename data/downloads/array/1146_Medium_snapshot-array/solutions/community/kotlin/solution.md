# [Kotlin] Easy O(log(N)) Kotlin solution using TreeMap

**Author:** ikss
**Votes:** 1
**Link:** [https://leetcode.com/problems/snapshot-array/solutions/3625423/](https://leetcode.com/problems/snapshot-array/solutions/3625423/)

---

# Intuition
We don't need to copy and store full state on each `snap`, we just need to be able to find value set on greatest `snap`, less or equal to `snap_id`.

# Approach
We can store each new value in TreeMap for each index in array, so we can `get` value for `snap_id` in `O(log(N))`. We don't need to initialize each element of the array at construction and can just check if entry we found is `null` or not.

# Complexity
- Time complexity:
    - snap: `O(1)`. We just increment `currSnap`
    - set: `O(log(N))`. We store each new value to TreeMap
    - get: `O(log(N))`. We need to get `floorEntry` from TreeMap

- Space complexity:
    - We store each new value on `set` to map, so space complexity will be `O(N)`

# Code
```
class SnapshotArray(length: Int) {
    private val array = Array<TreeMap<Int, Int>?>(length) { null }
    private var currSnap = 0

    fun set(index: Int, `val`: Int) {
        if (array[index] == null) {
            array[index] = TreeMap()
        }
        val map = array[index]!!
        map[currSnap] = `val`
    }

    fun snap(): Int {
        return currSnap++
    }

    fun get(index: Int, snap_id: Int): Int {
        val entry = array[index]?.floorEntry(snap_id)
            ?: return 0
        return entry.value
    }

}

/**
 * Your SnapshotArray object will be instantiated and called as such:
 * var obj = SnapshotArray(length)
 * obj.set(index,`val`)
 * var param_2 = obj.snap()
 * var param_3 = obj.get(index,snap_id)
 */
```