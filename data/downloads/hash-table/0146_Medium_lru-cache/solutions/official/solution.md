# Official Solution

**Link:** [https://leetcode.com/problems/lru-cache/solution/](https://leetcode.com/problems/lru-cache/solution/)

---

[TOC]

## Solution

---

### Overview

Let's start by thinking about how we can implement the data structure without caring about time complexity.

The description of the `put` method states that we are storing key-value pairs. This means the data structure is similar to a hash map, which also stores key-value pairs.

It's easy enough to add new key-value pairs or update existing ones using a hash map. The thing that makes this problem tricky is that the hash map is limited to a size of `capacity`. When the hash map exceeds this capacity, we cannot arbitrarily remove a key - we need to remove the least recently used one. After we remove it, we need to know what the second least recently used one was (as it will be the next one to be deleted).

To keep the order in which keys have been used, we can implement a queue. The key at the front of the queue is the least recently used key, and the key at the back of the queue is the most recently used key. When we insert a key for the first time, we put it in the back of the queue. When we use an existing key (with either `get` or `put`), we locate it in the queue and move it to the back. If the data structure exceeds `capacity`, we can reference the front of the queue to find the key that should be deleted.

If we use an array/list to implement the queue, operations will cost $$O(n)$$. This is because we will frequently be removing elements from arbitrary positions in the list, which costs $$O(n)$$.

We need a way to implement this queue such that the operations will run in $$O(1)$$.

---

### Approach 1: Doubly Linked List

**Intuition**

We need a way to store data in an ordered manner such that elements can be removed from any position in constant time.

A linked list is a great candidate for this task. Removing from arbitrary positions is one of the few things that a linked list does better than an array.

Let's say you have a linked list `A -> B -> C -> D -> E`. We can remove the `C` from the list by performing `B.next = D`. As `C` is no longer reachable, it is effectively "removed" from the list. If you were to traverse from the head (`A`), you would visit nodes `A, B, D, E`. This operation is done in constant time, no matter how large the list is.

To remove `C` from the list, we needed a reference to the node before it `B`, so that we could change `B.next`. In general, if we want to remove a node from the list, we need a pointer to the node before it. Because of this, we shall use a doubly linked list. That way, when we want to remove a node, we have a `prev` pointer to reference the node before it.

<iframe src="https://leetcode.com/playground/DdumcMcG/shared" frameBorder="0" width="100%" height="242" name="DdumcMcG"></iframe>

> Note: in C++, we use `Node` instead of `ListNode`. This is because LeetCode's online judge environment already has `ListNode` defined (it's the class used in linked list problems).

As each node represents an element in the data structure, we can also store the key-value pair in each node.

Let's think about how we can implement the data structure again. We need to achieve the following functionality:

1. Store a key-value pair
2. Update a key-value pair
3. Given a key, determine if it exists in the data structure. If it does, return the value. If it doesn't, return `-1`.
4. When a new key-value pair is added, create a new linked list node and put it at the back.
5. When an existing key is updated or fetched, find its associated linked list node. Move it to the back.
6. When a new key-value pair is added and the size of the data structure exceeds `capacity`, remove the linked list node at the front.

> Tasks 4 - 6 follow the process that we determined in the overview.

Tasks 1, 2, and 3 can all easily be achieved using a standard built-in hash map. How do we accomplish tasks 4, 5, and 6?

In tasks 4 and 5, we need to add nodes to the back of the linked list. Because we are aiming for an $$O(1)$$ time complexity, we must keep a reference to the tail of our linked list. In task 6, we need to remove from the front of the linked list. This means we must also keep a reference to the head (although we would probably do this anyways since you always want to keep the head of a linked list).

We can easily detect when the size of the data structure exceeds `capacity` by checking the size of our hash map.

This leaves us with one final thing to implement:

> 5. When an existing key is updated or fetched, find its associated linked list node. ~~Move it to the back.~~

It's true that we can remove a node from a doubly linked list at any position in $$O(1)$$ - but **only** if we already have a reference to the node. Given a key, how can we find the node associated with it in $$O(1)$$?

In our hash map, instead of mapping each key to its value (`int: int`), let's have it map each key to its associated node (`int: ListNode`).

Now, in task 5, when we update or fetch a `key`, we can reference the hash map to find the key's node in $$O(1)$$. Once we have the node, we can remove it from the list in $$O(1)$$. Finally, we can move it to the back by referencing the linked list's tail.

So if we are storing `ListNode` in the hash map instead of the values, how do we implement the `get` method? Remember that our `ListNode` objects also have `key` and `val` attributes. Therefore, to get a value associated with `key`, we can first use the hash map to get the key's `node` in $$O(1)$$, and then just check `node.val`.

For our `LRUCache` class, we need the following attributes:

1. `capacity` - to detect when we need to start deleting key-value pairs.
2. `dic` - short for dictionary, this will be our hash map that maps keys to nodes.
3. `head` - the head of our linked list
4. `tail` - the tail of our linked list

Before we start implementation, let's talk about an edge case.

We know that we are going to need to remove from the front of the linked list and add to the end of the linked list frequently. We plan on doing this by using the `head` and `tail` attributes. What happens if the linked list is empty? This is a frustrating case - we will need to check for it every time and handle it completely differently.

Imagine that the linked list is empty and we call `put` to create a new key-value pair. We create a `node` for this key-value pair, then we need to set it as both the `head` and `tail` (since it's the only node).

What if `capacity = 1` and we call `put` again with a new key? You can imagine the headache that might ensue - we need to delete the only existing node, which means we are deleting both the `head` and `tail`. Then we need to add the new node, but since the linked list is empty again, we will be setting the new node as the head and tail again.

The cleanest way to handle the empty list case is by using **sentinel nodes**.

We will have our `head` and `tail` attributes both set to dummy nodes. The "real" head will be `head.next` and the "real" tail will be `tail.prev`. These dummy nodes sit just "outside" of our linked list. What is the purpose? We never want `head` or `tail` to be `null`.

<img src="../Figures/146/1.png" width="960"> <br>

> These dummy nodes can have any keys and any values, it doesn't matter. We should initialize `head.next = tail` and `tail.prev = head`.

We now have everything we need! Let's implement some methods.

---

**Algorithm**

**Adding a node to the back of the linked list**

We need to add a node to the end of our linked list whenever we add a new key or update an existing one. Let's write a helper method `add(ListNode node)` that takes a `node` and puts it at the end of our linked list.

This can be done in the following steps:

1. Get the current node at the end of the linked list. This is the "real" tail: `tail.prev`. Let's call it `previousEnd`.
2. `node` is being inserted after `previousEnd`. Therefore, set `previousEnd.next = node`.
3. Now, we set the pointers of `node`. First, `node.prev = previousEnd`.
4. Next, because the "real" tail is before `tail`, we set `node.next = tail`.
5. Finally, we update `tail.prev = node`.

<iframe src="https://leetcode.com/playground/git4kcYt/shared" frameBorder="0" width="100%" height="174" name="git4kcYt"></iframe>

---

**Removing a node from the linked list**

We need to perform removals when we update/fetch an existing key, or when the data structure exceeds `capacity`. Let's write a helper method `remove(ListNode node)` that removes `node` from the linked list.

This can be done in the following steps:

1. Let's call `nextNode = node.next` and `prevNode = node.prev`. Currently, `nextNode.prev = node` and `prevNode.next = node`. To remove `node` from the linked list, we need to reassign `nextNode.prev = prevNode` and `prevNode.next = nextNode`.
2. We can perform both these reassignments without needing to declare `prevNode` or `nextNode` using the following code:
3. `node.prev.next = node.next`
4. `node.next.prev = node.prev`

> Imagine you have `A <-> B <-> C`. To remove `B`, we need `A` and `C` to become adjacent, i.e. `A <-> C`. Here, `prevNode = A` and `nextNode = C`.


<iframe src="https://leetcode.com/playground/9rLyBdSE/shared" frameBorder="0" width="100%" height="123" name="9rLyBdSE"></iframe>

---

**The `get(int key)` method**

Now that we have helper methods for adding and removing from our linked list, we can easily implement the `get` and `put` methods using simple logic.

1. Check if `key` exists in the hash map. If not, return `-1`.
2. Get the `node` associated with `key` from the hash map.
3. Move it to the back of the linked list. This can be done by first calling `remove(node)` and then `add(node)`.
4. Return the value associated with `key`, which is `node.val`.

<iframe src="https://leetcode.com/playground/c4AeshNA/shared" frameBorder="0" width="100%" height="225" name="c4AeshNA"></iframe>

---

**The `put(int key, int value)` method**

This method updates `key: value` if it already exists, and inserts `key: value` otherwise. If inserting causes the size to exceed `capacity`, we need to remove the least recently used key (which we know is the head of our linked list).

We can perform the following steps:

1. First, check if `key` already exists in the hash map. If it does, find the node associated with it and call `remove` on it. We are going to move the key to the back of the queue, so we need to first remove it from the linked list.
2. Create a new `node` using `key, value`.
3. Set `key: node` in the hash map.
4. Add `node` to the back of the linked list with `add(node)`.
5. Finally, check if the data structure has exceeded `capacity` by using the hash map's size.
    - If it has, then get the `nodeToDelete` as `head.next`.
    - Delete the node with `remove(nodeToDelete)`.
    - Delete the key from the hash map. The key is `nodeToDelete.key`.

<iframe src="https://leetcode.com/playground/GXmPw6ZX/shared" frameBorder="0" width="100%" height="327" name="GXmPw6ZX"></iframe>

**Implementation**

Now, we just combine everything to solve the problem.

<iframe src="https://leetcode.com/playground/W6r9GhEq/shared" frameBorder="0" width="100%" height="500" name="W6r9GhEq"></iframe>

**Complexity Analysis**

* Time complexity: $$O(1)$$ for both `get` and `put`.

    For `get`:
    - Check if a key is in a hash map. This costs $$O(1)$$.
    - Get a node associated with a key. This costs $$O(1)$$.
    - Call `remove` and `add`. Both methods cost $$O(1)$$.
    
    For `put`:
    - Check if a key is in a hash map. This costs $$O(1)$$.
    - If it is, we get a node associated with a key and call `remove`. Both cost $$O(1)$$.
    - Create a new node and insert it into the hash map. This costs $$O(1)$$.
    - Call `add`. This method costs $$O(1)$$.
    - If the capacity is exceeded, we call `remove` and delete from the hash map. Both cost $$O(1)$$.

* Space complexity: $$O(\text{capacity})$$

    We use extra space for the hash map and for our linked list. Both cannot exceed a size of `capacity`.
    
<br/>


---

### Approach 2: Built-in

**Intuition**

The major programming languages have built-in data structures that make this problem much easier.

> Note: using these data structures sort of defeats the purpose of the problem. It is likely that if you are asked this problem in an interview, the interviewer wants to see you implement the first approach. It is not recommended that you use these data structures without asking the interviewer first.
>
> We have included this approach for the sake of completeness.

In Java, we will be using [LinkedHashMap](https://docs.oracle.com/javase/8/docs/api/java/util/LinkedHashMap.html), which is a hash map that maintains insertion order. It essentially implements the linked list for us in the same data structure as the hash map, with the `add` and `remove` methods built into the hash map operations.

In C++, we will be using [std::list](https://en.cppreference.com/w/cpp/container/list), which implements the doubly linked list.

In Python, we will be using [collections.OrderedDict](https://docs.python.org/3/library/collections.html#collections.OrderedDict). This is similar to the Java data structure - it is a hash map that maintains insertion order.

**Implementation**

We will use the exact same algorithms as in the previous approach. The only difference is that much of the code we needed to implement the linked list logic is now done automatically for us by the built-in data structure we are using.

<iframe src="https://leetcode.com/playground/eZ3GrnP4/shared" frameBorder="0" width="100%" height="500" name="eZ3GrnP4"></iframe>

**Complexity Analysis**

The complexity analysis is the same as in the first approach. We are implementing the same algorithm using the built-in data structures.

* Time complexity: $$O(1)$$ for both `get` and `put`.

* Space complexity: $$O(\text{capacity})$$
    
<br/>

---