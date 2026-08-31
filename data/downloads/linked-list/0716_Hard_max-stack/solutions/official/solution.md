# Official Solution

**Link:** [https://leetcode.com/problems/max-stack/solution/](https://leetcode.com/problems/max-stack/solution/)

---

[TOC]

## Solution

---

### Overview

In this problem, we are required to implement a data structure based on a classic stack, supporting `pop` and `top` methods in a stack. It is not hard to implement such a LIFO (Last-In-First-Out) stack to return and remove the last added element. However, we need to implement `popMax` and  `peekMax` to return and remove the max element in the entire stack additionally, which makes the requirement become much more tricky.

We may easily come up with the idea to track the last pushed and the max element so far separately, so we can find the last or the max element quickly for a single operation of `top` or `peekMax`. But the primary challenge is to figure out an efficient way to remove a specified element in both records of the push order track and the value track. Otherwise, we will fail to find out the exact last or max value in the next query method call.

Thus, in this solution, we will introduce two approaches to solve the problem. The first approach takes advantage of two balanced trees to sort all elements in two different orders meanwhile. Once we get the element to remove, we can remove it in both two balanced trees with acceptable time complexity. The second one just memorizes the IDs of elements to remove instead of deleting the last or max element in each `pop` or `popMax` request immediately. We only remove them physically when we come across them in later method calls. The two approaches based on different ideas could have different performances when functions are called in variously. You should adopt one of them according to the explicit requirements or assumptions.

---

### Approach 1: Two Balanced Trees

#### Intuition

The main challenge in the design is how to track the max and the last element respectively. Naturally, we consider keeping two copies of all elements stack, one is in the pushing order, and the other is sorted by the elements' values. A balanced tree is perfect for keeping all elements sorted in some specified order dynamically. We can use two balanced trees to track the order of pushing and values respectively. Once we need to remove the largest element in either balanced tree, we can also easily locate and remove it in the other balanced tree. 

#### Algorithm

As we discussed in Intuition, we need to maintain two balanced trees respectively: the former is in pushing order (`stack`), and the latter is sorted by values (`values`). Besides, we also need to tag each element with a unique `id`. To ensure all elements are of different `id`s, we keep a counter `cnt`, which increases by one once an element is pushed into our stack.

For `push` operation, we need to push the element with the current `cnt` into both two balanced trees, `stack` and `values`, which insert the element by `id` and `val` respectively. And then, don't forget to increase `cnt`.

For `top` and `peekMax`, since `stack` and `values` are sorted by the pushing order and element values, we only need to return the last element value of `stack` for `top` query, and the last element value of `values` for `peekMax`.

For `pop` and `popMax`, besides what we do before, we still find and remove the returned element in both two balanced trees. For `pop`, we first remove the last element in `stack`, and then remove the element in `values`; for `popMax`,  we first remove the last element in `values`, and then remove the element in `stack`.

For example, let's take a look at the input in example 1:

```
["MaxStack", "push", "push", "push", "top", "popMax", "top", "peekMax", "pop", "top"]
[[], [5], [1], [5], [], [], [], [], [], []]
```

After the first three `push` calls, our `stack` and `values` are sorted as:

```
stack = [(id:0, val:5), (id:1, val:1), (id:2, val:5)]
values = [(id:1, val:1), (id:0, val:5), (id:2, val:5)]
```

Then, `top` returns the last element in `stack`, whose value is 5;

`popMax` is about to remove the last element in `values`, `(id:2, val:5)`, in both `stack` and `values`. So after `popMax` returns `5`, the two balanced trees are:

```
stack = [(id:0, val:5), (id:1, val:1)]
values = [(id:1, val:1), (id:0, val:5)]
```

Then, `top` returns the last element in `stack`, whose value is `1`; Similar, the following `peekMax` returns the last element in `values`, whose value is `5`.

After `pop` is called, we remove `(id:1, val:1)` and return the value `5`, so:

```
stack = [(id:0, val:5)]
values = [(id:0, val:5)]
```

Finally, the last call of `top` gives the only element `(id:0, val:5)`, whose value is `5`.

#### Implementation

<iframe src="https://leetcode.com/playground/mkfc9XPH/shared" frameBorder="0" width="100%" height="500" name="mkfc9XPH"></iframe>


#### Complexity Analysis

Let $N$ be the number of elements to add to the stack.

* Time Complexity: $O(\log{N})$ for each operation except for initialization. All operations other than initialization are involved with finding/inserting/removing elements in a balanced tree once or twice. In general, the upper bound of time complexity for each of them is $O(\log{N})$. However, note that `top` and `peekMax` operations, requiring only the last element in a balanced tree, can be even done in $O(1)$ with `set::rbegin()` in C++ and some special handles on the last element of `SortedList` in Python. But `last` for `TreeSet` in Java haven't implemented similar optimization yet, we have to get the last element in $O(\log{N})$.

* Space Complexity: $O(N)$, the maximum size of the two balanced trees.

---

### Approach 2: Heap + Lazy Update

#### Intuition

To peek or pop the max element quickly, we may think of a heap (or priority queue). Meanwhile, a classic stack is sufficient to peek or pop the last added element quickly. What if we keep the two data structures at the same time?

Yes, we can pop the max or the last element quickly. However, when we pop the top element of our heap or the stack, we don't know how to locate the removed element in the other one unless we enumerate all items in it from top to bottom.

Thus, we are not urgent to delete the popped element. Instead, we just memorize the ID of this element. Next time, when we are going to peek or pop the top of our heap or stack, we first check whether the top is already removed from the other data structure by checking its ID.

#### Algorithm

To memorize all IDs of deleted elements, we use a hash set `removed` to store them. Apart from the stack(`stack`) and max heap(`heap`) we mentioned above, we still need a counter `cnt` like Approach 1 to tag each element with a unique ID.

Whenever `push(x)` is called, we add it along with the current counter value into both `heap` and `stack`, then increase our `cnt` by 1.

Whenever we are requested to operate on `stack` or `heap` (i.e., `top`, `pop`, `peekMax` and `popMax`), we first check the ID of its top element, if is turns out to be an ID in `removed`, that is, it was removed previously, we need to remove the current top element until its ID is not in `removed` to make sure the top still exists. After that,

- For `top`, return the value of the top element in `stack`.
- For `peekMax`, return the value of the top element in `heap`.
- For `pop`, remove the top element of `stack`, put its ID into `removed`, and return its value.
- For `popMax`, remove the top element of `heap`, put its ID into `removed`, and return its value.

We can observe that we only check the existence of the top element and remove the element only when it is at the top because the deletion operation for the top of a stack or heap is much faster.

#### Implementation

<iframe src="https://leetcode.com/playground/GPL5yVEe/shared" frameBorder="0" width="100%" height="500" name="GPL5yVEe"></iframe>

#### Complexity Analysis

Let $N$ be the number of elements to add to the stack.

* Time Complexity:  
    - `push`: $O(\log{N})$, it costs $O(\log{N})$ to add an element to the `heap` and $O(1)$ to add it to the `stack`.  
    - The amortized time complexity of operations caused by a single `pop`/`popMax` call is $O(\log{N})$. For a `pop` call, we first remove the last element in the `stack` and add its ID to `removed` in $O(1)$, resulting in the deletion of the top element in the `heap` in the future (when `peekMax` or `popMax` is called), which has a time complexity of $O(\log{N})$. Similarly, `popMax` needs $O(\log{N})$ immediately and $O(1)$ in the operations later. Note that because we lazy-update the two data structures, future operations might never happen in some cases. But even in the worst cases, the upper bound of the amortized time complexity is still only $O(\log{N})$.  
    - `top`: $O(1)$, excluding the time cost related to `popMax` calls we discussed above.  
    - `peekMax`: $O(1)$, excluding the time cost related to `pop` calls we discussed above.  

* Space Complexity:
    - $O(N)$, the maximum size of the `heap`, `stack`, and `removed`.  

---