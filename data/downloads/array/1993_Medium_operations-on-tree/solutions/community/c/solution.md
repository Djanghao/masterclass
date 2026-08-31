# C++ Simple and Easy Solution, With Detailed Explanation

**Author:** YehudisK
**Votes:** 10
**Link:** [https://leetcode.com/problems/operations-on-tree/solutions/1447066/](https://leetcode.com/problems/operations-on-tree/solutions/1447066/)

---

**--- Explanation: ---**
**Helper varibles:**
1. `parent` - vector to store the parent vector that we got in initialization.
2. `children` - hash map to keep the children of each node. We fill this map in the constructor.
3. `locked_by` - a hashmap to keep the locked nodes and the user who locked them.

**functions:**
1. `LockingTree` - constructor - we initialize the vector `parent` and the hashmap `children`.
2. `lock` - if the desired node is already locked, return false. Else, add to `locked_by` and return true.
3. `unlock` - if the desired node is not locked, return false. If it's locked by a different user, return false. Else, remove from `locked_by` and return true.
4. `upgrade` - If the desired node is locked, return false.
Then we use helper functions to check if there is a locked child and no locked parent.
If we have the conditions, we use another helper function to unlock all descendants, add current node to `locked_by` and return true. Otherwise, return false.
5. `is_locked_child` - helper function to check if we have a locked descendant. It uses recursive DFS to reach all nodes.
6. `is_locked_parent` - helper function to check if we have a locked ancestor. It also uses recursive DFS.
7. `unlock_descendants` - helper function to unlock all descendants.

```
class LockingTree {
public:
    LockingTree(vector<int>& p) : parent(p) {
        for (int i = 0; i < parent.size(); i++) 
            children[parent[i]].push_back(i);
    }
    
    bool lock(int num, int user) {
        if (locked_by.find(num) != locked_by.end()) return false;
        locked_by[num] = user;
        return true;
    }
    
    bool unlock(int num, int user) {
        if (locked_by.find(num) == locked_by.end()) return false;
        if (locked_by[num] != user) return false;
        locked_by.erase(num);
        return true;
    }
    
    bool is_locked_child(int num) {
        bool flag = false;
        if (locked_by.find(num) != locked_by.end()) flag = true;
        for (auto ch : children[num]) flag |= is_locked_child(ch);
        return flag;
    }
    
    bool is_locked_parent(int num) {
        if (num == -1) return false;
        if (locked_by.find(num) != locked_by.end()) return true;
        return is_locked_parent(parent[num]);
    }
    
    void unlock_descendants(int num) {
        for (auto ch : children[num]) {
            locked_by.erase(ch);
            unlock_descendants(ch);
        }
    }
    
    bool upgrade(int num, int user) {
        if (locked_by.find(num) != locked_by.end()) return false;
        if (is_locked_child(num) && !is_locked_parent(parent[num])) {
            unlock_descendants(num);
            locked_by[num] = user;
            return true;
        }
        return false;
    }
    
private:
    unordered_map<int, vector<int> > children;
    unordered_map<int, int> locked_by;
    vector<int> parent;
};
```
**Like it? please upvote!**