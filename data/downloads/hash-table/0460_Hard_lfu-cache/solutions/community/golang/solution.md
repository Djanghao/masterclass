# Golanng O(1) linkedList map + int map  solution

**Author:** KinsoLee
**Votes:** 4
**Link:** [https://leetcode.com/problems/lfu-cache/solutions/1812009/](https://leetcode.com/problems/lfu-cache/solutions/1812009/)

---

```
type LFUCache struct {
    nodeMap map[int]*Node
    listMap map[int]*List
    capacity int
    min int
}

type List struct {
    head *Node
    tail *Node
    size int
}

func (l *List) PushNode(node *Node) {
    node.prev = l.tail.prev
    node.next = l.tail
    l.tail.prev.next = node
    l.tail.prev = node
    l.size++
}

func (l *List) DeleteNode(node *Node) {
    node.prev.next = node.next
    node.next.prev = node.prev
    l.size--
}

func makeList() *List {
    head := &Node{}
    tail := &Node{}
    head.next = tail
    tail.prev = head
    return &List{
        head: head,
        tail: tail,
    }
}

type Node struct {
    prev, next *Node
    key, val, freq int
}


func Constructor(capacity int) LFUCache {
    return LFUCache{
        nodeMap: make(map[int]*Node),
        listMap: make(map[int]*List),
        capacity: capacity,
        min: 0,
    }
}


func (this *LFUCache) Get(key int) int {
    node, ok := this.nodeMap[key]
    if !ok {
        return -1
    }
    list, ok := this.listMap[node.freq]
    if ok {
        list.DeleteNode(node)
    }

    node.freq++
    nextList, nextOk := this.listMap[node.freq]
    if !nextOk {
        nextList = makeList()
    }
    nextList.PushNode(node)
    this.listMap[node.freq] = nextList
    if list.size == 0 && this.min ==  node.freq  - 1 {
        this.min++
    }
    return node.val
}


func (this *LFUCache) Put(key int, value int)  {
    if this.capacity == 0 {
        return
    }
    
    node, ok := this.nodeMap[key]
    if ok {
        node.val = value
        this.Get(key)
        return
    }
    
    // exceed maximum capacity
    if len(this.nodeMap) == this.capacity {
        minList := this.listMap[this.min]
        leastFrequencyNode := minList.head.next
        minList.DeleteNode(leastFrequencyNode)
        delete(this.nodeMap, leastFrequencyNode.key)
    }

    node = &Node{
        key: key,
        val: value,
        freq: 1,
    }

    this.min = 1
    list, ok := this.listMap[node.freq]
    if !ok {
        list = makeList()
    }
    list.PushNode(node)
    this.listMap[node.freq] = list
    this.nodeMap[key] = node
}
```