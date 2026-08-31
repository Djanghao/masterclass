# Official Solution

**Link:** [https://leetcode.com/problems/design-circular-deque/solution/](https://leetcode.com/problems/design-circular-deque/solution/)

---

[TOC]

## Solution

---

### Overview

We are asked to design a circular double-ended queue (deque) data structure. In a deque, we need to provide fast access to the first (front) and last (rear) elements, as well as an efficient way to add/remove elements at the front and rear. 

We note that a circular deque is a specific implementation of a deque where the last element loops back to the first element, creating a circular assortment. Since this particular implementation is not enforced for a correct submission, we will go over two approaches: one that will satisfy the required deque operations without storing our elements in a circle, and one that will cover a more proper implementation of a circular deque.

### Approach 1: Linked List 

### Intuition

If we aren't following the circular ordering of a circular deque, we can achieve an implementation by considering existing data structures that provide efficient ways to access the front and rear elements to add or remove elements. 

One example of this is the doubly linked list data structure in which each node contains a reference to the next node as well as the previous node. The doubly linked list data structure also maintains pointers to the head (front element) as well as the rear (last element). This makes adding/removing elements to the front and rear fairly simple: 

* To add a new node to the front, we first instantiate the new node and have it point to the current front node as its next node. We also want to make the current front node point to the new node as its previous node. Then, we update our reference of the head to this new front node.
* To remove the front node, we can simply advance our head pointer by one.
* To add a new node to the rear, we instantiate the new node and have the current rear node point to it as its next node. We also want the new node to point back to the current rear node as its previous node. Then, we update our reference of the rear to this new rear node.  
* To remove the rear node, we can simply move our rear pointer back by one node, by accessing the previous node of the rear node.

With these pointer manipulations, we can fully support the required deque operations.

### Algorithm

1. Create a new `Node` class where each node contains a value `val`, a reference to its next node `next`, and a reference to its previous node `prev`
2. The given `MyCircularDeque` class will then contain two `Node` references: one for the head of the deque, and one for the rear. It will also have a `size` field and `capacity` field to keep track of the current size and maximum size of the deque, respectively.
3. Defining constructor:
    * Initialize `size = 0` since our deque is initially empty and `capacity = k`.
4. Defining `insertFront(int value)`:
    * If `isFull()` is true, we don't have room to insert a new node so we return `false`.
    * Otherwise, we add the node:
        * If `head == null`, this will be the first element in the list
            * Have `head` point to a new node with value `value`
            * Have `rear` point to the new node as well
        * Otherwise, there already exists at least 1 element in the list:
            * Create a new node `newHead` that points to `head` as its next node
            * Have `head.prev` point back to `newHead` as its previous node
            * Update `head` to point to the `newHead`
        * Increment `size` and return `true`
5. Defining `insertLast(int value)`:
    * If `isFull()` is true, we don't have room to insert a new node so we return `false`
    * Otherwise, we add the node:
        * If `head == null`, this will be the first element in the list
            * Have `head` point to a new node with value `value`
            * Have `rear` point to the new node as well
        * Otherwise, there already exists at least 1 element in the list:
            * Have `rear.next` point to a new node with `val = value` and `prev = rear`.
            * Update the `rear = rear.next` so it points to the new rear
        * Increment `size` and return `true`
6. Defining `deleteFront()`:
    * If `isEmpty()` is true, there are no nodes to delete so we return `false`
    * Otherwise, we delete the front element: 
        * If `size == 1`, then this deletion will make the deque empty, so make `head` and `rear` both `null`
        * Otherwise, we can delete the existing `head` node by simply updating `head = head.next`
        * We decrement `size` and return `true`
7. Defining `deleteLast()`:
    * If `isEmpty()` is true, then there are no nodes to delete so we return `false`
    * Otherwise, we delete the rear element:
        * If `size == 1`, then this deletion will make the deque empty, so make `head` and `rear` both `null`
        * Otherwise, we can move `rear` back 1 node by updating `rear = rear.next` 
        * We decrement `size` and return `true`
8. Defining `getFront()`:
    * If `isEmpty()` there is no front node so return -1. 
    * Otherwise, return `head.val`
9. Defining `getRear()`:
    * If `isEmpty()` there is no rear node so return -1.
    * Otherwise, return `rear.val`
10. Defining `isEmpty()`:
    * Return `size == 0` to see if there are any nodes in our deque
11. Defining `isFull()`:
    * Return `size == capacity` to see if our current size is the maximum size.

### Implementation

<iframe src="https://leetcode.com/playground/HEXctuWu/shared" frameBorder="0" width="100%" height="500" name="HEXctuWu"></iframe>

### Complexity Analysis 

* Time Complexity: $O(1)$

    Because we maintain access to the front and rear elements at all times, all operations simply involve pointer manipulations that take $O(1)$ time.

* Space Complexity: $O(k)$

    In the worst case, there will be maximum $k$ nodes in our doubly linked list, which will involve instantiating $k$ node objects and thus take $O(k)$ space.


### Approach 2: Fixed Array with Circular Ordering

### Intuition

In Approach 1, we opted to use a doubly linked list in which the elements don't wrap around. For this approach, we will use a fixed-sized array that will have the elements placed circularly.

Similar to before, we can maintain quick access to the front and the rear of our deque. For our fixed-sized array approach, this means we will keep track of the indices of the front and rear elements via two variables `front` and `rear`. With our linked list approach, this required dynamically creating new nodes at the front and rear of our list. For this fixed-sized circular array approach, we will have to use some arithmetic and modulo operations to keep track of the `front` and `rear`. Let's dive into how to update these indices as we support the add/removal operations:

* When adding a new element to the front, we know that this element must be placed in front of the existing front element. In terms of indexing, it should be placed directly to the left of the element at `front`, which would be at an index of `front - 1`. In the case that `front - 1` < 0, the index can be recalculated as `(front - 1 + k) % k)`, which will give us the index in case the front element goes beyond the first index and wraps back around to the end of the deque. Note that when `front - 1 >= 0`, `front - 1 == (front - 1 + k) % k` so it'll have no effect as expected. Now that we have updated the `front` index, we can add the element by placing it at index `front` in the array.
* When deleting a new element at the front, we can do the opposite of adding a new element at the front: We increment `front` by 1 so that it will point to the element directly to the right of the front element, effectively deleting the original front element. Similar to before, `front + 1` can go beyond the last possible index `k - 1` and wrap around back to the first index. To cover this case, we will update `front` to `(front + 1) % k`.
* When adding a new element to the rear, we know that this element will be added to the right of the existing rear, placing it at an index of `(rear + 1) % k`.
* To remove the rear node, we can reverse the above operation, and update `rear = (rear - 1 + k) % k`. 


### Algorithm

1. Defining constructor:
    * We can initialize an array `array` of size `k` to represent our circular deque
    * We initialize current `size = 0` and maximum allowed size `capacity = k`
    * We also want to keep track of the indices of the front and rear elements so we set `front = 0` and `rear = k - 1`. Note that setting `rear = k - 1` conveniently makes `front == rear` after adding our first element to the deque. 
2. Defining `insertFront(int value)`:
    * If `isFull()`: return `false` since there's no room to add new elements
    * Otherwise, update our front index `front = (front - 1 + capacity) % capacity` and set `array[front] = value`
    * Increment `size` 
3. Defining `insertLast(int value)`:
    * If `isFull()`, return `false` since there's no room to add new elements
    * Otherwise, update our rear index `rear = (rear + 1) % capacity` and set `array[rear] = value`
    * Increment `size`
4. Defining `deleteFront(int value)`:
    * If `isEmpty()`, return `false` since there are no elements to delete
    * Otherwise, move the front index to the right by 1: `front = (front + 1) & capacity`, decrement `size`, and return `true`
5. Defining `deleteLast(int value)`:
    * If `isEmpty()`, return `false` since there are no elements to delete
    * Otherwise, move the rear index to the left by 1: `rear = (rear - 1 + capacity) % capacity`, decrement `size`, and return `true`
6. Defining `getFront()`:
    * If `isEmpty()`, return -1
    * Otherwise, return `array[front]`
7. Defining `getRear()`:
    * If `isEmpty()`, return -1
    * Otherwise, return `array[rear]`
8. Defining `isEmpty()`:
    * Return `size == 0`
9. Defining `isFull()`:
    * Return `size == capacity`
    

### Implementation

<iframe src="https://leetcode.com/playground/QNyW8S5G/shared" frameBorder="0" width="100%" height="500" name="QNyW8S5G"></iframe>

### Complexity Analysis 

* Time Complexity: $O(1)$

    Similar to Approach 1, we maintain the references for the front and rear elements at all times, where all operations are simply arithmetic operations that take $O(1)$ time.

* Space Complexity: $O(k)$

    Our fixed-sized array will always have $k$ elements and thus will take $O(k)$ space.