# C# | Bi-directional tree traversal with arrays

**Author:** alchemicalflux
**Votes:** 0
**Link:** [https://leetcode.com/problems/operations-on-tree/solutions/5035063/](https://leetcode.com/problems/operations-on-tree/solutions/5035063/)

---

# Intuition
To fulfill the requirements, each node in the tree needs to store information about its parent, children, and lock status. The provided parent array provides the first data point, its values useful for initializing the child associations and a matching sized array for lock state/ID. 

Locking and unlocking nodes is straightforward, simply updating the node's lock status accordingly based off its current state/ID.

For the Upgrade function, a thorough check of the node and its ancestors is necessary, similar to a Depth-First search. If any are locked, the function fails. Otherwise, a Breadth-First search is performed to unlock all child nodes, tracking if at least one unlock occurs. If there is an unlock, the requested node is locked with the user ID.
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
**Constructor:**
1) Store the parent index array and create a matching size lock array.
2) Create a child relational array of lists for all nodes.
    1) Ignore index 0, as it is always considered the root.
    2) Using the node's parent index, initialize with a new list if null and add the current node index as its child.

**Lock:**
1) Exit the function with false if the lock is already active.
2) Assign the user's id to the requested node index and return true.

**Unlock:**
1) Exit the function with false if the lock is not the user id.
2) Assign the unlock value to the requested node index and return true.

**Upgrade:**
1) Check if requested node and ancestors are locked, exiting if true.
    1) Check if the current node is unlocked.
    2) Update node reference to point to current node's parent and repeat until root is processed.
2) Unlock children, exiting if no unlocks occur.
    1) Initialize a queue with current node for BFS and create flag to track for unlocks.
    2) Process until no nodes remain...
        1) Unlock any locked nodes and mark the unlock flag.
        2) Check for children and add them to queue if necessary.
    3) Return whether any unlocks have occurred.
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $$O(n)$$
    - Constructor: O(n), due to children initialization.
    - Lock: O(1)
    - Unlock: O(1)
    - Upgrade: O(n), due to possibility of full tree traversal (Upgrade root).
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
    - Parent array: O(n)
    - Locked array: O(n)
    - Children array: O(n + n), due to need to add almost every node as a child.
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
public class LockingTree {
    private int[] _parentTree; // Stores initial parent index tree.
    private int[] _locks; // Tracks the current user locking a given node.
    private List<int>[] _children; // Stores children indices for a given node.

    private const int _unlocked = 0; // Unlock value. Users have range [1 - 10e4].

    public LockingTree(int[] parent) {
        _parentTree = parent;
        _locks = new int[parent.Length];
        AssignChildren();
    }
    
    public bool Lock(int num, int user) {
        if(_locks[num] != _unlocked) { return false; }
        _locks[num] = user;
        return true;
    }
    
    public bool Unlock(int num, int user) {
        if(_locks[num] != user) { return false; }
        _locks[num] = _unlocked;
        return true;
    }
    
    public bool Upgrade(int num, int user) {
        if(SelfOrParentsAreLocked(num) || UnlockChildren(num)) { return false; }
        _locks[num] = user;
        return true;
    }

    // Create storage for child indices. Assign the children for each node as necessary.
    private void AssignChildren()
    {
        // Create an array for each node's children, which will initially be null.
        _children = new List<int>[_parentTree.Length];

        // Index 0 will always be the root (-1), so it can be skipped.
        for(var index = 1; index < _parentTree.Length; ++index)
        {
            var parent = _children[_parentTree[index]] ??= new();
            parent.Add(index);
        }
    }

    // Work up the parent tree, until the root has been reached (parent is -1).
    private bool SelfOrParentsAreLocked(int current)
    {
        for(; current >= 0; current = _parentTree[current])
        {
            if(_locks[current] != _unlocked) { return true; }
        }
        return false;
    }

    // !!! Must be called after the Upgrade has passed the parent and ancestor checks. !!!
    // Unlocks all children, tracking if at least one has been upgraded.
    private bool UnlockChildren(int parent)
    {
        var queue = new Queue<int>(); // Use queue to perform a BFS of all the children nodes.
        queue.Enqueue(parent);
        
        var noUnlocks = true;
        while(queue.Count > 0)
        {
            var node = queue.Dequeue();
            if(_locks[node] != _unlocked) // Unlock and acknowledge lock change for child.
            {
                noUnlocks = false;
                _locks[node] = _unlocked;
            }
            
            if(_children[node] == null) { continue; } // No children are present so continue.
            foreach(var child in _children[node]) { queue.Enqueue(child); } // Add children to queue.
        }
        return noUnlocks;
    }
}

/**
 * Your LockingTree object will be instantiated and called as such:
 * LockingTree obj = new LockingTree(parent);
 * bool param_1 = obj.Lock(num,user);
 * bool param_2 = obj.Unlock(num,user);
 * bool param_3 = obj.Upgrade(num,user);
 */
```