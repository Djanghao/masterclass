# Go using chaining with detail explanation

**Author:** tuanbieber
**Votes:** 10
**Link:** [https://leetcode.com/problems/design-hashmap/solutions/2311277/](https://leetcode.com/problems/design-hashmap/solutions/2311277/)

---

```
type node struct {
    key     int
    val     int
    next    *node
}

type MyHashMap struct {
    size int
    arr []*node
}

func Constructor() MyHashMap {
    return MyHashMap {
        size: 1000,
        arr: make([]*node, 1000),
    }
}

func (this *MyHashMap) Put(key int, value int)  {
	//Use mod operation to find the position in the array
    position := key % this.size
   
   //Create a new node with key and value
    newNode := &node {
        key: key,
        val: value,
        next: nil,
    }
    
	//If current position is empty, assign it to newNode then return
    if this.arr[position] == nil {
        this.arr[position] = newNode
        return
    }
    
	//Check whether the new key already exists or not
	//Iterate through the chaining to, if the key matches, replace the old value by newValue, then return
    head := this.arr[position]

    for head != nil {
        if head.key == key {
            head.val = value
            return
        }

        head = head.next
    }
	
	//When we reach here, it means that the new key does not exist in the map
	//We need to insert the new key to the head of the linked list
	//Why not insert tail? Because insert head or tail does not make any sense
	//Moreover, insert head is O(1) while insert tail is O(n)
    newNode.next = this.arr[position]
    this.arr[position] = newNode
}

func (this *MyHashMap) Get(key int) int {
    position := key % this.size
    
    head := this.arr[position]
    
	//Iterate through the whole linked list at the position
	//If the key matches, return the value
	//Otherwise, return -1
    for head != nil {
        if head.key == key {
            return head.val    
        }
        
        head = head.next
    }
    
    return -1
}

func (this *MyHashMap) Remove(key int)  {
	//Find the position to remove
    position := key % this.size
    head := this.arr[position]
    
	//If the position is empty, it means that the key does not exist in the map, just return
    if head == nil {
        return
    }
       
	//Special case, when the key is the head of the linked list, just update the arr[position] to the next value of head
    if head.key == key {
        head = head.next
        this.arr[position] = head
        return
    }
    
	//Otherwise, we iterate to find the key in the linked list, then remove it from the linked list (Actually, we use prev.next to skip the node)
    var prev *node
    
    for head != nil {
        if head.key == key {
            prev.next = head.next
            return
        }
        
        prev = head
        head = head.next
    }
}

```