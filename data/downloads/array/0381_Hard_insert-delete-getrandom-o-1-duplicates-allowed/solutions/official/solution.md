# Official Solution

**Link:** [https://leetcode.com/problems/insert-delete-getrandom-o1-duplicates-allowed/solution/](https://leetcode.com/problems/insert-delete-getrandom-o1-duplicates-allowed/solution/)

---

[TOC]

## Solution

---

#### Intuition

We must support three operations with duplicates:

1. `insert`
2. `remove`
3. `getRandom`

To `getRandom` in $$O(1)$$ and have it scale linearly with the number of copies of a value. The simplest solution is to store all values in a list. Once all values are stored, all we have to do is pick a random index.

We don't care about the order of our elements, so `insert` can be done in $$O(1)$$ using a dynamic array (`ArrayList` in Java or `list` in Python).

The issue we run into is how to go about an `O(1)` remove. Generally we learn that removing an element from an array takes a place in $$O(N)$$, unless it is the last element in which case it is $$O(1)$$.

The key here is that _we don't care about order_. For the purposes of this problem, if we want to remove the element at the `i`th index, we can simply swap the `i`th element and the last element, and perform an $$O(1)$$ pop (_technically_ we don't have to swap, we just have to copy the last element into index `i` because it's popped anyway).

With this in mind, the most difficult part of the problem becomes _finding_ the index of the element we have to remove. All we have to do is have an accompanying data structure that maps the element values to their index.

---
### Approach 1: ArrayList + HashMap

**Algorithm**

We will keep a `list` to store all our elements. In order to make finding the index of elements we want to remove $$O(1)$$, we will use a `HashMap` or dictionary to map values to all indices that have those values. To make this work each value will be mapped to a set of indices. The tricky part is properly updating the `HashMap` as we modify the `list`.

- `insert`: Append the element to the `list` and add the index to `HashMap[element]`.
- `remove`: This is the tricky part. We find the index of the element using the `HashMap`.  We use the trick discussed in the intuition to remove the element from the `list` in $$O(1)$$. Since the last element in the list gets moved around, we have to update its value in the `HashMap`. We also have to get rid of the index of the element we removed from the `HashMap`.
- `getRandom`: Sample a random element from the list.

**Implementation**
<iframe src="https://leetcode.com/playground/MQ3RGKXN/shared" frameBorder="0" width="100%" height="500" name="MQ3RGKXN"></iframe>

**Complexity Analysis**

* Time complexity : $$O(N)$$, with $$N$$ being the number of operations. All of our operations are $$O(1)$$, giving $$N * O(1) = O(N)$$.

* Space complexity : $$O(N)$$, with $$N$$ being the number of operations. The worst case scenario is if we get $$N$$ `add` operations, in which case our `ArrayList` and our `HashMap` grow to size $$N$$.