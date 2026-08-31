# Official Solution

**Link:** [https://leetcode.com/problems/design-browser-history/solution/](https://leetcode.com/problems/design-browser-history/solution/)

---

[TOC]

## Solution

--- 

### Approach 1: Two Stacks

#### Intuition

We need to store the history of the visited URLs, the best data structure to record the history is a **stack** data structure.    
The stack can store the elements (URLs) in the order they were given, with the most recently given element (URL) at the top of the stack (i.e. last in first out order). The "back" operation can be implemented by popping the top element of the stack.

!?!../Documents/1472/slideshow1.json:1024,768!?!

<br />

Now, to implement the "forward" operation, we can again use another **stack**. If we go "back" then we push the current URL into the "future" stack because when we do "forward" operations we would again want the most recently visited URL stored from the "future" data structure (i.e. in last in first out order). 
This could be a little hard to visualize thus we are providing the following animation to make you better understand how the "future" and "history" stacks work.

!?!../Documents/1472/slideshow2.json:1024,768!?!

<br />

So, in this approach, we will use a string `current` to store the current URL, and two stacks `history` and `future`.   
Whenever we visit new URLs, we will push the current URL into the `history` stack which will be fetched while doing back operations,   
and whenever we do back operations, we store the URLs popped in the `future` stack which will be fetched while doing forward operations.


#### Algorithm

1. Initialize variables:
    - Two stacks of strings `history` and `future`, to store the URLs.
    - A string variable `current`, to store the currently visited URL, which is initialized with the given `homepage` as it is the first visited URL.
2. Implementing `visit(url)` method:
    - As we will **visit a new URL** `url`, we will store `current` in the `history` stack, and  
    - make the given `url` as `current`, and clear the `forward` stack.
3. Implementing `back(steps)` method:
    - We need to **go back by step URLs**.
    - While there are elements in the `history` stack and we haven't popped `step` elements from it, we will push `current` in the `future` stack and pop the most recently visited URL from the `history` stack and mark it as `current`.
    - At the end, we return `current`.
4. Implementing `forward(steps)` method:
    - We need to **go forward by step URLs**.
    - While there are elements in the `forward` stack and we haven't popped `step` elements from it, we will push `current` in the `history` stack and pop the most recently visited URL from the `forward` stack and mark it as `current`.
    - At the end, we return `current`.

#### Implementation


<iframe src="https://leetcode.com/playground/SQWiitng/shared" frameBorder="0" width="100%" height="500" name="SQWiitng"></iframe>


#### Complexity Analysis

Let's assume here, $n$ visit calls are made, $m$ is the maximum number of steps to go forward or back, and $l$ is the maximum length of the URL string.   

* Time complexity:   
  - In the `visit(url)` method, we push the URL string in the `history` stack, assign the given `url` string as the current URL, and then we clear the `future` stack, all these operations take $O(1)$ time each.  
  Thus, in the worst case each call to the `visit(url)` method will take $O(1)$ time. 

  - In the `back(steps)` and `forward(steps)` methods, we push and pop strings in the `future` and `history` stacks. We do these two operations unless we are done with $m$ steps or all elements are removed from the stack which might have $n$ elements in it.  
  Thus, in the worst case, each call to these methods will take $O(\min(m, n))$ time. 

  > **Note:** In C++, the stack is implemented using vectors, the push operation is simply updating the stack pointer and copying the string. The underlying vector class takes care of the reallocation and copy of the string, so the push operation is still an O(1) operation (we will discuss this in detail in the last approach).   
Similarly, in the case of Java, Python and most languages, the push operation on stack implemented using a dynamic array or list is $O(1)$ as it is only updating the stack pointer and not copying the string. 


* Space complexity:  
  - We might visit $n$ URL strings and they will be stored in our stacks. 
  - Thus, in the worse case, we use $O(l \cdot n)$ space.   

---


### Approach 2: Doubly Linked List 

#### Intuition
     

We can also use a linked list to store the history as a linked list can be used to simulate a stack.   
We can insert as many nodes (history URLs) as we like, and if it is a doubly linked list we can traverse back and forth in it to implement the "back" and "forward" operations.    
When we visit a new URL, instead of deleting all "future" nodes, we can just disconnect the link at the current node and add a new node.    
This approach is less optimized than the first approach, but we are listing it here as it will provide some hint and is the stepping stone for the last approach.  

The following slideshow has been added to help you visualize this approach:

!?!../Documents/1472/slideshow3.json:1024,768!?!

<br />

#### Algorithm

1. Create a class `DLLNode` for each node of the doubly linked list:
    - It contains a string variable `data` to store the URL string.
    - And two pointers `prev` and `next` pointing to the rest of the doubly linked list.
2. In the `BrowserHistory` class, we create two variables:
    - `linkedListHead`, points to the head of our doubly linked list and is storing the `homepage` URL.
    - `current`, it will always point to the current URL node in our doubly linked list.
3. Implementing `visit(url)` method:
    - We create a new node for `url`.
    - Make our `current` node's next point to this new node and the new node's prev point to the `current` node. Thus, deleting the link of the next nodes of `current` and inserting the new node in our doubly linked list.
    - Then, mark this new node as the `current` node.
4. Implementing `back(steps)` method:
    - We will move the `current` pointer towards the left (using prev pointer) in the doubly linked list if nodes are present and the `step` number of nodes is not traversed.
    - At the end, we return the `current` node's URL.
5. Implementing `forward(steps)` method:
    - We will move the `current` pointer towards the right (using next pointer) in the doubly linked list if nodes are present and the `step` number of nodes is not traversed.
    - At the end, we return the `current` node's URL.

#### Implementation


<iframe src="https://leetcode.com/playground/b8sKvFke/shared" frameBorder="0" width="100%" height="500" name="b8sKvFke"></iframe>


#### Complexity Analysis

Let's assume here, $n$ visit calls are made, $m$ is the maximum number of steps to go forward or back, and $l$ is the maximum length of a URL string.

* Time complexity:   
  - In the `visit(url)` method, we insert a new node in our doubly linked list, it will take $O(l)$ time to create a new node (to allocate memory for $l$ characters of the `url` string), and then we mark this new node as `current` which will take $O(1)$ time.  
  Thus, in the worst case each call to the `visit(url)` method will take $O(l)$ time. 

  - In the `back(steps)` and `forward(steps)` methods, we iterate on our doubly linked list nodes and stop when $m$ nodes are iterated or we reached the end.  
  Thus, in the worst case, each call to these methods will take $O(\min(m, n))$ time. 

* Space complexity:  
  - We might visit $n$ URL strings and they will be stored in our doubly linked list. 
  - Thus, in the worse case, we use $O(l \cdot n)$ space.         

---


### Approach 3: Dynamic Array

#### Intuition

Just like a linked list, a dynamic array can also be used to simulate a stack-like behavior, and just like previous approach we can append elements at end and use pointer to traverse back and forth.

In our dynamic array we can insert as many elements (history links) as we like, we can keep a pointer to point to the current URL and instead of traversing back and forth (incrementing or decrementing pointer index) like on the linked list we can directly return the element at the respective index after making a jump of `step` elements in the left or right direction, thus implementing the "back" and "forward" operations in more optimized manner.   

Whenever we go back we just move our current pointer, and if we visit a new URL we will insert the new element if we are at the end of the array, or overwrite the next element with the new URL if we are not at the end.    
We will also need one additional pointer to mark the right boundary in our array as if we overwrite an element there is the possibility that more elements exist past that overwritten element but while doing forward operations we should not visit those old elements. In reality, we should have deleted those old elements but instead, we will use a pointer to stop iterating forward as this will help us to save the time used in deleting those old elements.


The following slideshow has been added for visualization of this approach:

!?!../Documents/1472/slideshow4.json:1024,768!?!

<br />

#### Algorithm

1. Initialize variables:
    - An array `visitedURLs`, to store the visited URLs.
    - Two pointers `currURL` and `lastURL`, to store the index of the current and last URL in our array.
2. Implementing `visit(url)` method:
    - Increment `currURL` by `1`.
    - If there is space available at `currURL` index in `visitedURLs` we overwrite the element at this index, otherwise insert a new element at the end.
    - Then we mark `currURL` as the `lastURL`.
3. Implementing `back(steps)` method:
    - We need to **go back by step URLs**.
    - Thus, we need to move our `currURL` to `currURL - step` index if it's in bounds or `0` otherwise.
    - And return the element at `currURL` index.
4. Implementing `forward(steps)` method:
    - We need to **go forward by step URLs**.
    - Thus, we need to move our `currURL` to `currURL + step` index if it's less than `lastURL`, or `lastURL` otherwise.
    - And return the element at `currURL` index.

#### Implementation


<iframe src="https://leetcode.com/playground/T8E9ownb/shared" frameBorder="0" width="100%" height="500" name="T8E9ownb"></iframe>


#### Complexity Analysis

Let's assume here, $n$ visit calls are made, $m$ is the maximum number of steps to go forward or back, and $l$ is the maximum length of a URL string.

* Time complexity:   
  - In the `visit(url)` method, we insert the URL string in our array and update the `current` pointer, both of these operations will take $O(1)$ time each.  
  Thus, in the worst case each call to the `visit(url)` method will take $O(1)$ time. 

  - In the `back(steps)` and `forward(steps)` methods, we directly return the element at the required index which takes $O(1)$ time.  
  Thus, in the worst case, each call to these methods will take $O(1)$ time. 
  
  > **Note:** The time complexity of the push operation as a whole is not just the time taken for storing the string. It also includes the time complexity of resizing the vector if it is full, and adjusting the internal pointers and indices.    
Due to internal optimizations, the pushing of strings, integers, etc. takes very little time (it reuses their existing memory blocks internally instead of creating a new block for each push operation) compared to the time taken for reallocation of memory.    
If the vector is full, it needs to be resized to make room for the new elements. This typically involves allocating a new block of memory and copying the existing elements from the old block to the new block, thus the average time complexity when doing a lot of push operations does not depends on the length of the string but depends on time taken for reallocation. 
The time complexity of reallocation is dependent on the size of the vector, but as it happens rarely thus it is usually amortized over multiple push operations, meaning that **the average time complexity of a push operation is still $O(1)$**.    <br />   
In summary, the time complexity of pushing a string of length $l$ into a vector is usually amortized over multiple push operations, so the overall time complexity of each push operation is $O(1)$.  
This applies to C++, Java, Python, and the majority of other languages. You can read more about this amortized push/append operation behavior [here](https://www.ics.uci.edu/~thornton/ics46/Notes/AmortizedAnalysis/).


* Space complexity:  
  - We might visit $n$ URL strings and they will be stored in our array. 
  - Thus, in the worse case, we use $O(l \cdot n)$ space.