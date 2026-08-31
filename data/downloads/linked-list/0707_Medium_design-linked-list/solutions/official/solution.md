# Official Solution

**Link:** [https://leetcode.com/problems/design-linked-list/solution/](https://leetcode.com/problems/design-linked-list/solution/)

---

[TOC]

## Solution

---

### Interview Strategy

[Linked List](https://en.wikipedia.org/wiki/Linked_list#Basic_concepts_and_nomenclature) is a data structure with zero or several elements. Each element contains a value and link(s) to the other element(s). Depending on the number of links, that could be a singly linked list, doubly linked list or multiply linked list.  

A singly linked list is the simplest one, it provides `addAtHead` in a constant time, and `addAtTail` in a linear time. Though the doubly linked list is the most used one, because it provides both `addAtHead` and `addAtTail` in a constant time, and optimizes the insert and delete operations.

A doubly linked list is implemented in Java as [LinkedList](https://docs.oracle.com/javase/8/docs/api/java/util/LinkedList.html). Since these structures are quite well-known, a good interview strategy would be to mention them during the discussion but not to base the code on them. Better to use the limited interview time to work with two ideas:
 
- [Sentinel nodes](https://leetcode.com/articles/remove-linked-list-elements/)

>Sentinel nodes are widely used in the trees and linked lists as _pseudo-heads_, _pseudo-tails_, _etc_. They serve as the guardians, as the name suggests, and usually, they do not hold any data.

Sentinel nodes will be used here to simplify insert and delete. We would apply this in both of the following approaches.

- Bidirectional search for a doubly-linked list

Rather than starting from the head, we could search the node in a doubly-linked list from both head and tail.

If you are familiar with the concepts, you can start directly from the Approach #2. By the way, Approach #2 is 90% of what you need to solve the problem of [LRU Cache](https://leetcode.com/articles/lru-cache/).

### Approach 1: Singly Linked List

Let's start with the simplest possible MyLinkedList, which contains just a structure size and a sentinel head.

![bla](../Figures/707/singly4.png)

<iframe src="https://leetcode.com/playground/J4pc24Pv/shared" frameBorder="0" width="100%" height="191" name="J4pc24Pv"></iframe>

Note, that the sentinel node is used as a pseudo-head and is always present. This way the structure could never be empty, it will contain at least a sentinel head. All nodes in MyLinkedList have a type ListNode: value + link to the next element.

<iframe src="https://leetcode.com/playground/F8BMu7wE/shared" frameBorder="0" width="100%" height="140" name="F8BMu7wE"></iframe>

**Add at Index, Add at Head, and Add at Tail**

Let's first discuss insert at index operation, because thanks to the sentinel node addAtTail and addAtHead operations could be reduced to this operation as well. 

The idea is straightforward:

- Find the predecessor of the node to insert. If the node is to be inserted at the head, its predecessor is a sentinel head. If the node is to be inserted at the tail, its predecessor is the last node.

- Insert the node by changing the link to the next node.

<iframe src="https://leetcode.com/playground/mBJFS3ba/shared" frameBorder="0" width="100%" height="89" name="mBJFS3ba"></iframe>

![bla](../Figures/707/singly_insert.png)

---

![bla](../Figures/707/singly_insert_head.png)

**Delete at Index**

Basically, the same as insert:

- Find the predecessor.

- Delete the node by changing the links to the next node.

<iframe src="https://leetcode.com/playground/axvQFmJM/shared" frameBorder="0" width="100%" height="89" name="axvQFmJM"></iframe>

![bla](../Figures/707/singly_delete.png)

**Get**            

Get is a very straightforward: start from the sentinel node and do `index + 1` steps

<iframe src="https://leetcode.com/playground/jLNXTDLa/shared" frameBorder="0" width="100%" height="140" name="jLNXTDLa"></iframe>

![bla](../Figures/707/singly_get.png)

**Implementation**

<iframe src="https://leetcode.com/playground/Xvqv9NuL/shared" frameBorder="0" width="100%" height="500" name="Xvqv9NuL"></iframe>

**Complexity Analysis**

* Time complexity: $$\mathcal{O}(1)$$ for addAtHead. $$\mathcal{O}(k)$$ for get, addAtIndex, and deleteAtIndex, where $$k$$ is an index of the element to get, add or delete. $$\mathcal{O}(N)$$ for addAtTail.
 
* Space complexity: $$\mathcal{O}(1)$$ for all operations.
<br />
<br />


---
### Approach 2: Doubly Linked List

Time to implement DLL MyLinkedList, which is much faster (twice as fast on the test case set here) though a bit more complex. It contains size, sentinel head, and sentinel tail.

![bla](../Figures/707/dll.png)

<iframe src="https://leetcode.com/playground/iYVxQJ94/shared" frameBorder="0" width="100%" height="259" name="iYVxQJ94"></iframe>

Note, that the sentinel head and tail are always present. All nodes in MyLinkedList have a type ListNode: value + two links: to the next and to the previous elements.

<iframe src="https://leetcode.com/playground/HcpMqoFN/shared" frameBorder="0" width="100%" height="157" name="HcpMqoFN"></iframe>

**Add at Index, Add at Head, and Add at Tail**

The idea is simple:

- Find the predecessor and the successor of the node to insert. If the node is to be inserted at head, its predecessor is a sentinel head. If the node is to be inserted at the tail, its successor is a sentinel tail.

> Use bidirectional search to perform faster.

- Insert the node by changing the links to the next and previous nodes.

<iframe src="https://leetcode.com/playground/CR3W2JbM/shared" frameBorder="0" width="100%" height="123" name="CR3W2JbM"></iframe>

![bla](../Figures/707/dll_insert2.png)

**Delete at Index**

Basically, the same as insert:

- Find the predecessor and successor.

- Delete the node by changing the links to the next and previous nodes.

<iframe src="https://leetcode.com/playground/RBJkhDMD/shared" frameBorder="0" width="100%" height="89" name="RBJkhDMD"></iframe>

![bla](../Figures/707/dll_delete2.png)

**Get**            

Get is very straightforward: 

- Compare `index` and `size - index` to define the fastest way: starting from the head, or starting from the tail.

- Go to the wanted node.

<iframe src="https://leetcode.com/playground/LqZyjUA4/shared" frameBorder="0" width="100%" height="225" name="LqZyjUA4"></iframe>

![bla](../Figures/707/dll_get2.png)

**Implementation**

<iframe src="https://leetcode.com/playground/G3Twpvjc/shared" frameBorder="0" width="100%" height="500" name="G3Twpvjc"></iframe>

**Complexity Analysis**

* Time complexity: $$\mathcal{O}(1)$$ for addAtHead and addAtTail. $$\mathcal{O}(\min(k, N - k))$$ for get, addAtIndex, and deleteAtIndex, where $$k$$ is an index of the element to get, add or delete. 
 
* Space complexity: $$\mathcal{O}(1)$$ for all operations.