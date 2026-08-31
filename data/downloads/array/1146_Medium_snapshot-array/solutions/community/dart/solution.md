# Easy Solution ⚡⚡⚡ 100% Beats 😉😉

**Author:** king77nt54321
**Votes:** 0
**Link:** [https://leetcode.com/problems/snapshot-array/solutions/5512163/](https://leetcode.com/problems/snapshot-array/solutions/5512163/)

---



# Code
```
class SnapshotArray {
  int snapId;
  List<Map<int, int>> data;

  SnapshotArray(int length) : snapId = 0, data = List.generate(length, (_) => {0: 0});

  void set(int index, int val) {
    data[index][snapId] = val;
  }

  int snap() {
    return snapId++;
  }

  int get(int index, int snapId) {
    var snapshots = data[index];
    while (snapId >= 0) {
      if (snapshots.containsKey(snapId)) {
        return snapshots[snapId]!;
      }
      snapId--;
    }
    return 0; // default value if no snapshot is found
  }
}
```