# Rust. Time complexity: O(log S), space complexity O(N)

**Author:** nepalez
**Votes:** 3
**Link:** [https://leetcode.com/problems/snapshot-array/solutions/3625401/](https://leetcode.com/problems/snapshot-array/solutions/3625401/)

---

# Intuition

At a first glance the problem can be solved by duplicating the array every time you get a snap, and then looking for a value in the corresponding snap.

In this case every operation (both reads and writes) would have a constant time complexity `O(1)`.

The problem with this naive approach is it consumes a lot of memory, becasue even though nothing can be changed between snaps you'd have to duplicate the array.

The memory complexity would be `O(N * S)` where the `N` is the size of the array, and the `S` is the number of snaps been taken.

So the **challenge** we face is how to store only the necessary changes, and at the same time keep the r/w operations fast enough.

Because each value changes individually, the natural approach is to store the stream of changes of **every individual item** as an array-like structure (`Vec` in Rust, or `Array` in Ruby).

The array as a whole can be represented as `Vec<Vec<(usize, i32)>>` where `usize` keeps `snap_id`, `i32` keeps the corresponding value.

# Approach

To keep the corresponding `snap_id` for every snapshot value, you can either use the same structure (`Vec<(usize, i32)>`), or 2 parallel structures for `values` and `snap_ids`, having the same length.

That said, in our structure we have to keep:
- the snapshot values as `Vec<Vec<i32>>`
- the corresponding snapshot ids `Vec<Vec<usize>>`
- the current `snap_id: usize`

Example:

```rust
#[derive(Debug)]
struct SnapshotArray {
    // the list of snapshot values for every array element
    // a new value is either overwrite the last snapshot
    // if the snap hasn't changed, or add the new one
    values:   Vec<Vec<i32>>,
    // the list of snapshot ids for every individual value
    snap_ids: Vec<Vec<usize>>,
    // the list of 
    snap_id:  usize,
}
```

The algorithms are simple

- **Initialize** the structure with 
    - `vec![vec![0i32]; lenght]`, keeping the first `0i32` for every element
    - `vec![vec![0usize; length]]` keeping the `0usize` snap_id for every snapshot value
    - `0usize` as the current `snap_id`

- **Take the snap** by increasing `snap_id`

- **Insert the value** by checking if the last snapshot in the `snap_ids[index]` equals the current `snap_id`. If yes, we overwrite the last value in `values[index]`, otherwise add new snapshot to the `values[index]` and new snap_id to the `snap_ids[index]`.

- **Look for the value** requires to find the `snap`, not greater, than an interesting version, in the `snap_ids[index]`. Then take the value from `values[index][snap]`.

# Complexity
- Time complexity:

    - initialize `O(1)`
    - take a snap `O(1)`
    - insert value `O(1)` (either update or insert a value to the tail of the list / `Vec`)
    - find value `O(log S)` (binary search of the `snap_id` in the corresponding `snap_ids[index]`)

- Space complexity:

    `O(M)` where `M` is the total number of changes of elements between snaps.

# Code

```rust
#[derive(Debug)]
struct SnapshotArray {
    values:   Vec<Vec<i32>>,
    snap_ids: Vec<Vec<usize>>,
    snap_id:  usize,
}

impl SnapshotArray {
    fn new(length: i32) -> Self {
        let length = length as usize;
        Self {
            values:   vec![vec![0]; length],
            snap_ids: vec![vec![0]; length],
            snap_id:  0,
        }        
    }
    
    fn set(&mut self, index: i32, val: i32) {
        let index = index as usize;
        let last_snap = self.snap_ids[index].len() - 1;

        if self.snap_ids[index][last_snap] == self.snap_id {
            self.values[index][last_snap] = val;
        } else {
            self.snap_ids[index].push(self.snap_id);
            self.values[index].push(val);
        }
    }
    
    fn snap(&mut self) -> i32 {
        self.snap_id += 1;
        self.snap_id as i32 - 1
    }
    
    fn get(&self, index: i32, snap_id: i32) -> i32 {
        let (index, snap_id) = (index as usize, snap_id as usize);

        match self.snap_ids[index].binary_search(&snap_id) {
            Err(snap) => self.values[index][snap-1],
            Ok(snap)  => self.values[index][snap],
        }
    }
}
```