# JS, Python, Java, C++ | (Updated) Hash & Array Solutions w/ Explanation

**Author:** sgallivan
**Votes:** 892
**Link:** [https://leetcode.com/problems/design-hashmap/solutions/1097755/](https://leetcode.com/problems/design-hashmap/solutions/1097755/)

---

*(Note: This is part of a series of Leetcode solution explanations. If you like this solution or find it useful,* ***please upvote*** *this post.)*

---

#### ***Idea:***

The "easy" solution for this problem is simply to create an **array** large enough to accommodate the entire range of **keys**. This would seem to be the intended first solution, since the range of allowed keys is **non-negative** and constrained to **10^6**, which is not unmanageable.

(*Note: The **Code** section has examples of each language's Array approach down below. The remainder of the **Idea** section discusses the Hash approach.*)

While this is probably the correct answer for an easy problem, it doesn't really get to the heart of what a **hashmap** really is. Hashmaps were created to speed up the lookup time of data to a hopefully **O(1) time**. **Arrays** do this naturally with index lookups, but it becomes more complicated if you're trying to look up an entry by some other non-index value instead.

We can see from the basic solution here that its easy enough to mimic a **key** lookup if the keys themselves are integers that are constrained enough to act as their own indexes. But what if they're not? Or what if they're some other data type, like strings?

Surprisingly, the idea in that case is somewhat similar. We can still use an Array to store the data, but we must first find a way to transform the key into an index. For that, we look to a **hashing function**. Hashing functions exist to convert data into a randomized, but reproduceable, integer version of themselves.

In this case, we can use a hashing function to convert the key into an integer within the bounds of our hashmap array's index range. In an ideal situation, that would allow us to reduce the size of the hashmap array to the maximum number of entries, which is **10^4**. Unfortunately, however, it's always possible for **collisions** to exist when two keys devolve to the same integer via the hashing function.

To deal with collisions, we can just make each of our hashmap array's elements a **linked list**. This will allow us to treat them like a simple stack, where we look first at the most recently added **node** and then move to the next until we find the correct key.

Since navigating a linked list will drop our lookup time past **O(1)**, the goal of a good hashing function is to randomize the keys' hashes enough to limit collisions as much as possible for a given hashmap array size, thus keeping down the **average lookup time complexity**.

Therefore, the size of our hashmap array should probably be *at least* equal to the number of entries. Increasing the size of the hashmap array will naturally reduce collisions (and therefore time complexity) at the expense of **space complexity**, and vice versa. The tradeoff is highly dependent on the quality of the hashing function.

There are many, many hashing functions out there, but for this problem we'll use a very simple **multiplicative hashing function** utilizing a **large prime multiplier** and then **modulo** the result to the desired size (also a prime) of our hashmap array. This should hopefully result in an even distribution of the entries throughout the hashmap array.

The **get()** method is fairly easy, then. We just **hash()** our **key**, access the corresponding bucket in our hashmap array (**data**), and navigate through the linked list (if necessary) and return the correct **val**, or **-1** if the **key** is not found.

For the **put()** method, we should first **remove()** any earlier instance of that **key** to avoid chaining multiple versions of a **key** definition in our linked list. Then we simply form a **new ListNode** at the head of the proper hashmap bucket, pushing any others back.

The **remove()** method will be similar to the **get()** method, except that we need to find and stitch together the nodes on either side of the **node** that matches the **key**, removing it from the linked list entirely.

---

#### ***Implementation:***

Python has **deque** and Java has **LinkedList** that can do the work of the linked list management, but it comes at the cost of efficiency. In this case, it's not really worth using over a custom **ListNode** class implementation.

---

#### ***Javascript Code w/ Array:***
```javascript
class MyHashMap {
    constructor() {
        this.data = new Array(1000001)
    }
    put(key, val) {
        this.data[key] = val
    }
    get(key) {
        let val = this.data[key]
        return val !== undefined ? val : -1
    }
    remove(key) {
        delete this.data[key]
    }
};
```

---

#### ***Javascript Code w/ Hash:***
```javascript
class ListNode {
    constructor(key, val, next) {
        this.key = key
        this.val = val
        this.next = next
    }
}
class MyHashMap {
    constructor() {
        this.size = 19997
        this.mult = 12582917
        this.data = new Array(this.size)
    }
    hash(key) {
        return key * this.mult % this.size
    }
    put(key, val) {
        this.remove(key)
        let h = this.hash(key)
        let node = new ListNode(key, val, this.data[h])
        this.data[h] = node
    }
    get(key) {
        let h = this.hash(key), node = this.data[h]
        for (; node; node = node.next)
            if (node.key === key) return node.val
        return -1
    }
    remove(key) {
        let h = this.hash(key), node = this.data[h]
        if (!node) return
        if (node.key === key) this.data[h] = node.next
        else for (; node.next; node = node.next)
            if (node.next.key === key) {
                node.next = node.next.next
                return
            }
    }
};
```

---

#### ***Python Code w/ Array:***
```python
class MyHashMap:
    def __init__(self):
        self.data = [None] * 1000001
    def put(self, key: int, val: int) -> None:
        self.data[key] = val
    def get(self, key: int) -> int:
        val = self.data[key]
        return val if val != None else -1
    def remove(self, key: int) -> None:
        self.data[key] = None
```

---

#### ***Python Code w/ Hash:***
```python
class ListNode:
    def __init__(self, key, val, nxt):
        self.key = key
        self.val = val
        self.next = nxt
class MyHashMap:
    def __init__(self):
        self.size = 19997
        self.mult = 12582917
        self.data = [None for _ in range(self.size)]
    def hash(self, key):
        return key * self.mult % self.size
    def put(self, key, val):
        self.remove(key)
        h = self.hash(key)
        node = ListNode(key, val, self.data[h])
        self.data[h] = node
    def get(self, key):
        h = self.hash(key)
        node = self.data[h]
        while node:
            if node.key == key: return node.val
            node = node.next
        return -1
    def remove(self, key: int):
        h = self.hash(key)
        node = self.data[h]
        if not node: return
        if node.key == key:
            self.data[h] = node.next
            return
        while node.next:
            if node.next.key == key:
                node.next = node.next.next
                return
            node = node.next
```

---

#### ***Java Code w/ Array:***
```java
class MyHashMap {
    int[] data;
    public MyHashMap() {
        data = new int[1000001];
        Arrays.fill(data, -1);
    }
    public void put(int key, int val) {
        data[key] = val;
    }
    public int get(int key) {
        return data[key];
    }
    public void remove(int key) {
        data[key] = -1;
    }
}
```

---

#### ***Java Code w/ Hash:***
```java
class ListNode {
    int key, val;
    ListNode next;
    public ListNode(int key, int val, ListNode next) {
        this.key = key;
        this.val = val;
        this.next = next;
    }
}
class MyHashMap {
    static final int size = 19997;
    static final int mult = 12582917;
    ListNode[] data;
    public MyHashMap() {
        this.data = new ListNode[size];
    }
    private int hash(int key) {
        return (int)((long)key * mult % size);
    }
    public void put(int key, int val) {
        remove(key);
        int h = hash(key);
        ListNode node = new ListNode(key, val, data[h]);
        data[h] = node;
    }
    public int get(int key) {
        int h = hash(key);
        ListNode node = data[h];
        for (; node != null; node = node.next)
            if (node.key == key) return node.val;
        return -1;
    }
    public void remove(int key) {
        int h = hash(key);
        ListNode node = data[h];
        if (node == null) return;
        if (node.key == key) data[h] = node.next;
        else for (; node.next != null; node = node.next)
            if (node.next.key == key) {
                node.next = node.next.next;
                return;
            }
    }
}
```

---

#### ***C++ Code w/ Array:***
```c++
class MyHashMap {
public:
    int data[1000001];
    MyHashMap() {
        fill(data, data + 1000001, -1);
    }
    void put(int key, int val) {
        data[key] = val;
    }
    int get(int key) {
        return data[key];
    }
    void remove(int key) {
        data[key] = -1;
    }
};
```

---

#### ***C++ Code w/ Hash:***
```c++
struct Node {
public:
    int key, val;
    Node* next;
    Node(int k, int v, Node* n) {
        key = k;
        val = v;
        next = n;
    }
};
class MyHashMap {
public:
    const static int size = 19997;
    const static int mult = 12582917;
    Node* data[size] = {};
    int hash(int key) {
        return (int)((long)key * mult % size);
    }
    void put(int key, int val) {
        remove(key);
        int h = hash(key);
        Node* node = new Node(key, val, data[h]);
        data[h] = node;
    }    
    int get(int key) {
        int h = hash(key);
        Node* node = data[h];
        for (; node != NULL; node = node->next)
            if (node->key == key) return node->val;
        return -1;
    }    
    void remove(int key) {
        int h = hash(key);
        Node* node = data[h];
        if (node == NULL) return;
        if (node->key == key) {
            data[h] = node->next;
            delete node;
        } else for (; node->next != NULL; node = node->next)
            if (node->next->key == key) {
                Node* temp = node->next;
                node->next = temp->next;
                delete temp;
                return;
            }
    }
};
```