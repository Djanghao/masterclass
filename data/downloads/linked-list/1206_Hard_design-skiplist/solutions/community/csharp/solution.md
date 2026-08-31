# Solution in the style of explanation with C#

**Author:** sebnembasak
**Votes:** 0
**Link:** [https://leetcode.com/problems/design-skiplist/solutions/5387697/](https://leetcode.com/problems/design-skiplist/solutions/5387697/)

---

# Intuition
The Skiplist is a data structure that facilitates efficient searching, insertion, and deletion operations with an average time complexity of O(log n). It achieves this by using multiple levels of linked lists, where each level represents a subset of the nodes in the list. Nodes at higher levels serve as "express lanes" that allow skipping over multiple nodes at lower levels, akin to the efficiency gained in binary search over linear search. 

# Approach
- Node Levels: Each node in the Skiplist is assigned a random level during insertion, based on a probabilistic distribution. This randomization ensures that the structure remains balanced and efficient over time.
- Search Operation: To search for a value, the Skiplist starts at the top level and moves downwards, traversing nodes horizontally until it finds the correct position or determines that the value isn't present. This approach leverages the sorted order maintained by each level to quickly hone in on the target value.
- Insertion and Deletion: Adding a node involves determining the appropriate level for the node, updating pointers across levels, and adjusting the Skiplist structure if necessary to maintain its properties. Deletion similarly adjusts pointers to remove nodes while maintaining the integrity of the Skiplist.

# Complexity
Time complexity:
- Search: O(log n) 
- Insert: O(log n) 
- Delete: O(log n)

Runtime 173 ms
Beats 82.61%

Space complexity: O(n)
This space complexity arises from storing the nodes and their forward pointers across multiple levels. The maximum space used is dependent on the number of nodes and the maximum level any node reaches (bounded by MAX_LEVEL).

Memory 78.79 MB
Beats 47.83%

# Code
```
public class Skiplist {
    public readonly int MAX_LEVEL = 20;
    private readonly Node head;
    private int level; // max level the list has
    private readonly Random random; // for randomizing operations

    public Skiplist() {
        head = new Node(-1, MAX_LEVEL); // initailize head node, head node must be highest level
        level = 0;
        random = new Random();
    }

    // This function create random level for new nodes
    private int RandomLevel(){
        int level = 0;
        // There is coin toss logic here - 50%/50%
        // 50% chance of moving to the next level

        while(random.Next(2) == 1 && level < MAX_LEVEL){ 
            level++; // We must check that we do not exceed the max level limit
        }
        return level;
    }
    
    public bool Search(int target) {
        Node current = head;
        // we start top level and going to bottom level
        for(int i = level; i >= 0; i--){
            while(current.forward[i] != null && current.forward[i].val < target){
                current = current.forward[i];
                // move through nodes that are smaller than the target at the same level 
            }
        }
        current = current.forward[0];
        return current != null && current.val == target;
    }
    
    public void Add(int num) {
        // This covers levels from 0 to the max level
        // It is used to update connection on all levels
        Node[] update = new Node[MAX_LEVEL + 1];
        // We dont use [Skiplist.level + 1]. Because levels are randomly create. 
        // So, levels can be up Max_level
        Node current = head;

        // Appropriate places are found by going down from the current levels
        for(int i = level; i >= 0; i--){
        // its like 'temp.next' in linked list.
        while (current.forward[i] != null && current.forward[i].val < num) {
            current = current.forward[i];
        }
         update[i] = current; // at each level, the node before the node to be added is saved
        }

        int newLevel = RandomLevel();
        if(newLevel > level){
            for(int i = level+1; i<=newLevel; i++){
                update[i] = head; // head node is used as reference for new nodes
            }
            level = newLevel;
        }

        Node newNode = new Node(num, newLevel);
        // add new node and update connections
        // update array determines where the new node will be added
        // update[i] keeps the node before the new node at level i
        for(int i = 0; i<= newLevel; i++){
            // the new nodes forward pointer at level i is set to the node pointed to by update[i]s forw. ptr
            newNode.forward[i] = update[i].forward[i];
            // The forward pointer of update[i] is updated to point to the new node.
            update[i].forward[i] = newNode;
        }
    }
    
    public bool Erase(int num) {
        Node[] update = new Node[MAX_LEVEL + 1];
        Node current = head;

        // search for node to delete
        for (int i = level; i >= 0; i--) {
            while (current.forward[i] != null && current.forward[i].val < num){
                current = current.forward[i];
            }
            update[i] = current;
        }
        current = current.forward[0];
        // num value is not in Skip List
        if (current == null || current.val != num) return false; 
        
        // update connections
        for (int i = 0; i <= level; i++){
            if (update[i].forward[i] != current) break; // we dont have num value
            // We set the forward pointer of update[i] at level i to the next node from the current node
            // Thus, the current node is removed from the Skip List.
            update[i].forward[i] = current.forward[i];
        }

        // This loop reduces the level as long as there are empty connections at the top level.
        // This makes Skip List work more efficiently by removing unnecessary levels.
        while (level > 0 && head.forward[level] == null) { level--; }
        return true;
    }
}

public class Node{
    public int val;
    public Node[] forward; // array of forwards

    public Node(int val, int level){
        this.val = val;
        forward = new Node[level+1];
        // forward is an array that allows its nodes to be connected to each other.
        // we use level + 1 because nodes must has as many pointers as its level
        // note: level is started 0


        // When a create Node object also create a forward array according to nodes level
        // Each node has an array pointer that points to the node that 
        // comes after it in layers up to a certain level.
        // This way, we can quickly make search, add, erase operations
    }
}

/**
 * Your Skiplist object will be instantiated and called as such:
 * Skiplist obj = new Skiplist();
 * bool param_1 = obj.Search(target);
 * obj.Add(num);
 * bool param_3 = obj.Erase(num);
 */
```