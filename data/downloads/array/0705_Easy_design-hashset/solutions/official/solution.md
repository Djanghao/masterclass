# Official Solution

**Link:** [https://leetcode.com/problems/design-hashset/solution/](https://leetcode.com/problems/design-hashset/solution/)

---

[TOC]

## Solution

---
#### Intuition

This is a classical question from textbook, which is intended to test one's knowledge on data structure. Therefore, needless to say, it is not desirable to solve the problem with any build-in HashSet data structure.

>There are two key questions that one should address, in order to implement the HashSet data structure, namely _**hash function**_ and _**collision handling**_.

- _**hash function**_: the goal of the hash function is to assign an address to store a given value. Ideally, each unique value should have a unique hash value. 

- _**collision handling**_: since the nature of a hash function is to map a value from a space `A` into a corresponding value in a __*smaller*__ space `B`, it could happen that multiple values from space `A` might be mapped to the _same_ value in space `B`. This is what we call __*collision*__. Therefore, it is indispensable for us to have a strategy to handle the collision. 

Overall, there are several strategies to resolve the collisions:

- [Separate Chaining](https://en.wikipedia.org/wiki/Hash_table#Separate_chaining): for values with the same hash key, we keep them in a _bucket_, and each bucket is independent of each other.

- [Open Addressing](https://en.wikipedia.org/wiki/Hash_table#Open_addressing): whenever there is a collision, we keep on _probing_ on the main space with certain strategy until a free slot is found.

- [2-Choice Hashing](https://en.wikipedia.org/wiki/2-choice_hashing): we use two hash functions rather than one, and we pick the generated address with fewer collision.

In this article, we focus on the strategy of _**separate chaining**_. Here is how it works overall.

- Essentially, the primary storage underneath a HashSet is a continuous memory as `Array`. Each element in this array corresponds to a `bucket` that stores the actual values.

- Given a `value`, first we generate a key for the value via the _hash function_. The generated key serves as the index to locate the bucket.

- Once the `bucket` is located, we then perform the desired operations on the bucket, such as `add`, `remove` and `contains`.

---
### Approach 1: LinkedList as Bucket

**Intuition**


The common choice of hash function is the `modulo` operator, _i.e._ $$\text{hash} = \text{value} \mod \text{base}$$. Here, the $$\text{base}$$ of modulo operation would determine the number of buckets that we would have at the end in the HashSet.

Theoretically, the more buckets we have (hence the larger the space would be), the less likely that we would have _collisions_. The choice of $$\text{base}$$ is a tradeoff between the space and the collision. 

In addition, it is generally advisable to use a prime number as the base of modulo, _e.g._ $$769$$, in order to reduce the potential collisions. 

![pic](../Figures/705/705_linked_list.png)

As to the design of `bucket`, again there are several options. One could simply use another `Array` as bucket to store all the values.
However, one drawback with the Array data structure is that it would take $$\mathcal{O}(N)$$ time complexity to remove or insert an element, rather than the desired $$\mathcal{O}(1)$$.

Since for any update operation, we would need to scan the entire _bucket_ first to avoid any duplicate, a better choice for the implementation of _bucket_ would be the _**LinkedList**_, which has a constant time complexity for the _insertion_ as well as _deletion_, once we locate the position to update.

**Algorithm**

As we discussed in the above section, here we adopt the `LinkedList` to implement our _bucket_ within the HashSet.

>Essentially, we are implementing a _LinkedList_ that does not contain any duplicate.

For each of the functions of `add`, `remove` and `contains`, we first generate the bucket index with the hash function. Then, we simply pass down the operation to the underlying bucket.


<iframe src="https://leetcode.com/playground/jbZ6FmcW/shared" frameBorder="0" width="100%" height="500" name="jbZ6FmcW"></iframe>


***Implementation Notes***

In the Python implementation, we employed a sort of **_pseudo head_** to keep a reference to the _actual_ head of the LinkedList, which could _simplify_ a bit the logic by reducing the number of branchings.

For a value that was never seen before, we insert it to the **head** of the bucket, though we could also append it to the tail. It is a choice that we made, which could **fit better** the scenario where redundant values are operated in nearby time windows, since it is more likely that we spot the value at the head of the bucket rather than walking through the entire bucket.


**Complexity Analysis**

- Time Complexity: $$\mathcal{O}(\frac{N}{K})$$ where $$N$$ is the number of all possible values and $$K$$ is the number of predefined buckets, which is `769`.

    - Assuming that the values are _evenly_ distributed, thus we could consider that the average size of bucket is $$\frac{N}{K}$$. 

    - Since for each operation, in the worst case, we would need to scan the entire bucket, hence the time complexity is $$\mathcal{O}(\frac{N}{K})$$.
<br/>

- Space Complexity: $$\mathcal{O}(K+M)$$ where $$K$$ is the number of predefined buckets, and $$M$$ is the number of unique values that have been inserted into the HashSet.
<br/>
<br/>

---
### Approach 2: Binary Search Tree (BST) as Bucket

**Intuition**

In the above approach, one of the drawbacks is that we have to scan the entire linkedlist in order to verify if a value already exists in the bucket (_i.e._ the lookup operation).

To optimize the above process, one of the strategies could be that we maintain a _**sorted list**_ as the bucket. With the sorted list, we could obtain the $$\mathcal{O}(\log{N})$$ time complexity for the lookup operation, with the binary search algorithm, rather than a linear $$\mathcal{O}({N})$$ complexity as in the above approach.

On the other hand, if we implement the sorted list in a continuous space such as Array, it would incur a _linear_ time complexity for the update operations (_e.g._ _insert_ and _delete_), since we would need to shift the elements.

>So the question is can we have a data structure that have $$\mathcal{O}(\log{N})$$ time complexity, for the operations of _search_, _insert_ and _delete_ ?

Well. The answer is yes, with _**Binary Search Tree**_ (BST). Thanks to the properties of BST, we could optimize the time complexity of our first approach with LinkedList.

![pic](../Figures/705/705_BST.png)

As a result, now the problem is boiled down to the implementation of a standard Binary Search Tree that serves as the _bucket_ in the HashSet.

**Algorithm**

One could build upon the implementation of first approach for our second approach, by applying the [Façade design pattern](https://en.wikipedia.org/wiki/Facade_pattern).

>We have already defined a façade class (_i.e._ `bucket`) with three interfaces (`exists`, `insert` and `delete`), which hides all the underlying details from its users (_i.e._ HashSet).

So we can keep the bulk of the code, and simply modify the implementation of `bucket` class with BST. For each of the interfaces in `bucket`, it corresponds exactly to an operation in BST.

!?!../Documents/705_LIS.json:1000,456!?!

Actually, we have each of the BST operations listed as an independent problem in LeetCode, as follows:

- [Article 700. Search in a BST](https://leetcode.com/articles/search-in-a-bst/)
- [Article 701. Insert in a BST](https://leetcode.com/articles/insert-into-a-bst/)
- [Article 450. Delete in a BST](https://leetcode.com/articles/delete-node-in-a-bst)

One could try these exercises first, and then combine them together to get a full implementation of BST. 

<iframe src="https://leetcode.com/playground/FsNfV9XF/shared" frameBorder="0" width="100%" height="500" name="FsNfV9XF"></iframe>



**Complexity Analysis**

- Time Complexity: $$\mathcal{O}(\log{\frac{N}{K}})$$ where $$N$$ is the number of all possible values and $$K$$ is the number of predefined buckets, which is `769`.

    - Assuming that the values are evenly distributed, we could consider that the average size of bucket is $$\frac{N}{K}$$. 

    - When we traverse the BST, we are conducting binary search, as a result, the final time complexity of each operation is $$\mathcal{O}(\log{\frac{N}{K}})$$.

- Space Complexity: $$\mathcal{O}(K+M)$$ where $$K$$ is the number of predefined buckets, and $$M$$ is the number of unique values that have been inserted into the HashSet.
<br/>
<br/>

---
### Notes on Hash Function

In all the above approaches, the range of address is fixed, since the base of modulo operator is fixed.

Sometimes, it might be more desirable to have a __*dynamic space*__ that goes with the increase of elements in the HashSet. One could set up a threshold on the _load factor_ (_i.e._ ratio between the number of elements and the size of space) of the HashSet, and double the range of address, once the load factor exceeds the threshold.

The increase of address space could potentially **_reduce_** the collisions, therefore improve the overall performance of HashSet.
However, one should also take into account the cost of **_rehashing_** and redistributing the existing values. 

In another scenario, one could adopt the **_2-choice hashing_** as we mentioned at the beginning, which could help the values to be more _**evenly**_ distributed in the address space.
<br/>
<br/>