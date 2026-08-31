# ✅Simple Java✔ || C++✔ ||Python✔ ||  Easy To Understand

**Author:** Armorix13
**Votes:** 80
**Link:** [https://leetcode.com/problems/snapshot-array/solutions/3623538/](https://leetcode.com/problems/snapshot-array/solutions/3623538/)

---

# Please Vote up :))
**For this problem we need to optimize on space so we can't tradeoff memory for time. If you save the whole array for every snapshot there will be "Memory limit exceeded" error.

Essentially we are interested only in history of changes for the index, and it could be only few changes of one index. This means we need to lookup effectively value by index and save only those that changed. We can use Map for this, use index as key, value as a value.

We keep such map for every snapshot, each consequence change will override previous value but this is perfectly fine - we care only about last value. We keep maps in a list, index of the element is a snapshot index.

On value lookup we start scanning list elements starting from the passed snapshot_id back to 0. Return first value for the index that we found - this means the most recent change up to this snapshot_id. If we haven't found anything it means there were no changes and we can return initial value which is 0 for all elements.

O(1) for set - lookup for the map is O(1), put to the map is O(1) (average).
O(snap_id) for get() - we can potentially search up to snap_id snapshots (maps in our list), then O(1) for the lookup by index.
O(length^2) for space - we can save every element in map, then change every element for every snapshot**

# Approach
Here's a brief explanation of the approach:

    The array variable is initialized as a list of lists, where each element represents the history of a specific index. Each history entry is a tuple (snap_id, value) that records the value at that index and the snapshot ID when it was set.

    The set method appends a new history entry to the corresponding index in the array, using the current snap_id and the provided value.

    The snap method increments the snap_id and returns the previous snap_id, which represents the total number of snapshots taken minus 1.

    The get method searches for the closest snapshot index in the history of the specified index using binary search. It then returns the value recorded at that snapshot index.

This implementation provides efficient snapshots by only storing the changed values at each index and using binary search for retrieval, resulting in O(log N) time complexity for the get method, where N is the number of snapshots taken.



#  JAVA Code
```
class SnapshotArray {
    TreeMap<Integer, Integer>[] Tm;
    int snap_id = 0;
    public SnapshotArray(int length) {
        Tm = new TreeMap[length];
        for (int i = 0; i < length; i++) {
            Tm[i] = new TreeMap<Integer, Integer>();
            Tm[i].put(0, 0);
        }
    }

    public void set(int index, int val) {
        Tm[index].put(snap_id, val);
    }

    public int snap() {
        return snap_id++;
    }

    public int get(int index, int snap_id) {
        return Tm[index].floorEntry(snap_id).getValue();
    }
}


```




# C++ Code


```
class SnapshotArray {
    vector<vector<pair<int, int>>>updates;
    int curSnap;

public:
    SnapshotArray(int length) {
        updates.resize(length);
        curSnap = 0;
    }

    void set(int index, int val) {
        if (!updates[index].empty() && updates[index].back().first == curSnap)
            updates[index].back().second = val;
        else
            updates[index].push_back({curSnap, val});
    }

    int snap() {
        curSnap++;
        return curSnap - 1;
    }

    int get(int index, int snap_id) {
        int idx = upper_bound(updates[index].begin(), updates[index].end(), make_pair(snap_id,INT_MAX)) - updates[index].begin();
        if (idx == 0) return 0;
        return updates[index][idx - 1].second;
    }
};

```


# Python Code


```
class SnapshotArray:

    def __init__(self, length: int):
        self.cur_id = 0
        self.curVals = [0] * length
        self.snapIdArr = [[-1] for _ in range(length)]
        self.arrVal = [[0] for _ in range(length)]
        self.modified = set()

    def set(self, index: int, val: int) -> None:
        if val == self.arrVal[index][-1]:
            if index in self.modified: self.modified.remove(index)
            return
        self.curVals[index] = val
        if index not in self.modified: self.modified.add(index)

    def snap(self) -> int:
        for idx in self.modified:
            self.snapIdArr[idx].append(self.cur_id)
            self.arrVal[idx].append(self.curVals[idx])
        self.modified.clear()
        self.cur_id += 1
        return self.cur_id - 1

    def get(self, index: int, snap_id: int) -> int:
        arr = self.snapIdArr[index]
        l, r = 0, len(arr)
        while l < r:
            m = (l + r) // 2
            if arr[m] <= snap_id:
                l = m + 1
            else: r = m
        return self.arrVal[index][l-1]



```