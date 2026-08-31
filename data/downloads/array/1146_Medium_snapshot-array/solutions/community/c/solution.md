# C++|short and simple

**Author:** spyole97
**Votes:** 8
**Link:** [https://leetcode.com/problems/snapshot-array/solutions/1769405/](https://leetcode.com/problems/snapshot-array/solutions/1769405/)

---

```
class SnapshotArray {
public:
    vector<map<int,int>>A;
    int s_id = 0;
    SnapshotArray(int length) {
        A.resize(length);
        for(int i = 0; i < length; i++)
            A[i][0] = 0;
        
    }
    
    void set(int index, int val) {
        A[index][s_id] = val;
    }
    
    int snap() {
        s_id++;
        return  s_id - 1;
    }
    
    int get(int index, int snap_id) {
        if(A[index].find(snap_id) == A[index].end())
        {
            auto it = --A[index].lower_bound(snap_id);
            return it->second;
        }
        return A[index][snap_id];
    }
};

/**
 * Your SnapshotArray object will be instantiated and called as such:
 * SnapshotArray* obj = new SnapshotArray(length);
 * obj->set(index,val);
 * int param_2 = obj->snap();
 * int param_3 = obj->get(index,snap_id);
 */
```