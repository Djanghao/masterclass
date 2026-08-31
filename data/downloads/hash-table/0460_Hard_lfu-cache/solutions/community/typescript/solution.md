# [Typescript] Solution with double linked lists

**Author:** GuillaumeDeconinck
**Votes:** 2
**Link:** [https://leetcode.com/problems/lfu-cache/solutions/2304769/](https://leetcode.com/problems/lfu-cache/solutions/2304769/)

---

If it can help someone, enjoy

```
// Node in Double Linked List
class Node {
    key: number;
    value: number;
    previous: Node | null;
    next: Node | null;
    count: number;

    constructor(key: number, value: number) {
        this.key = key;
        this.value = value;
        this.previous = null;
        this.next = null;
        this.count = 1;
    }
}


// Double Linked List
class DoubleLinkedList {
    
    head: Node; // Dummy head
    tail: Node; // Dummy tail
    size: number; // Nb of elements in list

    constructor(){
        this.size = 0;
        this.head = new Node(-1,-1);
        this.tail = new Node(-1,-1);
        this.head.next = this.tail;
        this.tail.previous = this.head;
    }

    addNode(node: Node) {
        this.head.next.previous = node;
        node.previous = this.head;
        node.next = this.head.next;
        this.head.next = node;
        this.size++;
    }

    removeNode(node: Node) {
        node.previous.next = node.next;
        node.next.previous = node.previous;
        node.next = null;
        node.previous = null;
        this.size--;
    }

    popLast(): Node | null {
        // Edge case if list is empty
        // (shouldn't be the case with the LFU as it deletes empty list)
        if (this.tail.previous === this.head) {
            return null;
        }
        
        let last = this.tail.previous;
        this.removeNode(last);
        return last;
    }
}

// Actual LFU
class LFUCache {
    capacity: number; // Capacity provided in constructor
    size: number; // Actual nb of elements in the LFU
    mapOfLists: Record<number, DoubleLinkedList>; // Map of frequencies -> DoubleLinkedLists
    mapOfNodes: Record<number, Node>;  // Map of keys -> Nodes

    constructor(capacity: number) {
        this.capacity = capacity;
        this.size = 0;
        this.mapOfLists = {};
        this.mapOfNodes = {};
    }

    get(key: number): number {
        let node = this.mapOfNodes[key];
        
        // If not found in
        if (!node) {
            return -1;
        }
        
        // Remove node from its current list
        let list = this.mapOfLists[node.count];
        list.removeNode(node);

        // Delete list if empty
        if (list.size === 0) {
            delete this.mapOfLists[node.count]; 
        }
        
        // Increase count
        node.count++;
        
        // Create new list for this frequency if not present
        if (!this.mapOfLists[node.count]) {
            this.mapOfLists[node.count] = new DoubleLinkedList();
        }

        // Add in new list
         this.mapOfLists[node.count].addNode(node);
        
        return node.value;
    }

    put(key: number, value: number): void {
        
        // Edge case if no capacity provided
        // Useless cache
        if (this.capacity === 0) {
            return;
        }
        
        let node: Node | null = null;
        
        // If key (and thus node) is not yet known
        if (this.mapOfNodes[key] === undefined) {
            
            // If already full, delete the LRU
            if (this.capacity === this.size) {
                // Search for lowest frequency
                let smallest = -1;
                for (let key of Object.keys(this.mapOfLists)) {
                    // Key becomes a string in an object {}
                    const parsedKey = parseInt(key, 10);
                    if (smallest === -1 || smallest > parsedKey) {
                        smallest = parsedKey;
                    }
                }
                let list = this.mapOfLists[smallest];
                // Evict node
                let nodeToEvict = list.popLast();
                delete this.mapOfNodes[nodeToEvict.key];
                
                // Delete list if it's now empty
                if (list.size === 0) {
                    delete this.mapOfLists[nodeToEvict.count]; 
                }
            } else { // Else if it's not full, just increase the size
                this.size++;
            }
            
            // Create new node
            node = new Node(key, value);
            this.mapOfNodes[key] = node;

        } else { // If already exists, reset its "state"
            
            node = this.mapOfNodes[key];
            
            // Remove node from its current list
            let list = this.mapOfLists[node.count];
            list.removeNode(node);

            // Delete list if empty
            if (list.size === 0) {
                delete this.mapOfLists[node.count]; 
            }
            
            // Update value & count
            node.value = value;
            node.count++;
        }

        // Create list if not present
        if (!this.mapOfLists[node.count]) {
           this.mapOfLists[node.count] = new DoubleLinkedList();
        }

        // Add node
         this.mapOfLists[node.count].addNode(node);
    }
}
```