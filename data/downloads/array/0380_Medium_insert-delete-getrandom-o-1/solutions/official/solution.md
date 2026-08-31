# Official Solution

**Link:** [https://leetcode.com/problems/insert-delete-getrandom-o1/solution/](https://leetcode.com/problems/insert-delete-getrandom-o1/solution/)

---

[TOC]

## Solution

--- 

### Overview

We're asked to implement the structure which provides the following operations in _average_ $$\mathcal{O}(1)$$ time:

- Insert 

- Delete

- GetRandom

First of all - why this weird combination? The structure looks quite theoretical, but it's widely used in popular statistical algorithms like [Markov chain Monte Carlo](https://en.wikipedia.org/wiki/Markov_chain_Monte_Carlo) and [Metropolis–Hastings algorithm](https://en.wikipedia.org/wiki/Metropolis%E2%80%93Hastings_algorithm). These algorithms are for sampling from a probability distribution when it's difficult to compute the distribution itself. 

Let's figure out how to implement such a structure. Starting from the Insert, we immediately have two good candidates with $$\mathcal{O}(1)$$ [average insert time](https://wiki.python.org/moin/TimeComplexity):

- Hashmap (or HashSet, the implementation is very similar): [Java HashMap](https://docs.oracle.com/javase/8/docs/api/java/util/HashMap.html) / [Python dictionary](https://docs.python.org/3/tutorial/datastructures.html#dictionaries)

- Array List: [Java ArrayList](https://docs.oracle.com/javase/8/docs/api/java/util/LinkedList.html) / [Python list](https://docs.python.org/3/tutorial/datastructures.html)

Let's consider them one by one. 

> Hashmap provides Insert and Delete in average constant time, although has problems with GetRandom. 

The idea of GetRandom is to choose a random index and then retrieve an element with that index. There are no indexes in the hashmap, and hence to get a true random value, one has first to convert hashmap keys in a list, which would take linear time. The solution here is to build a list of keys aside and use this list to compute GetRandom in constant time.

> Array List has indexes and could provide Insert and GetRandom in average constant time, though has problems with Delete. 

Deleting a value at an arbitrary index takes linear time. The solution here is to always delete the last value:

- Swap the element to delete with the last one.

- Pop the last element out.

For that, one has to compute an index of each element in constant time and hence needs a hashmap which stores `element -> its index` dictionary.

Both ways converge into the same combination of data structures:

- Hashmap `element -> its index`.

- Array List of elements.

![fig](../Figures/380/structure2.png)
<br /> 
<br />


---
### Approach 1: HashMap + ArrayList

**Insert**

- Add value -> its index into dictionary, average $$\mathcal{O}(1)$$ time.

- Append value to array list, average $$\mathcal{O}(1)$$ time as well.

![fig](../Figures/380/isert.png)

<iframe src="https://leetcode.com/playground/MKcjnKub/shared" frameBorder="0" width="100%" height="208" name="MKcjnKub"></iframe>

**Delete**

- Retrieve an index of element to delete from the hashmap.

- Move the last element to the place of the element to delete, $$\mathcal{O}(1)$$ time.

- Pop the last element out, $$\mathcal{O}(1)$$ time.

![fig](../Figures/380/delete.png)

<iframe src="https://leetcode.com/playground/UzWgGq8n/shared" frameBorder="0" width="100%" height="293" name="UzWgGq8n"></iframe>

**GetRandom**

GetRandom could be implemented in $$\mathcal{O}(1)$$ time with the help of standard `random.choice` in Python and `Random` object in Java.

<iframe src="https://leetcode.com/playground/QQcP2oR4/shared" frameBorder="0" width="100%" height="140" name="QQcP2oR4"></iframe>

**Implementation**

<iframe src="https://leetcode.com/playground/aNJCsmvE/shared" frameBorder="0" width="100%" height="500" name="aNJCsmvE"></iframe>

**Complexity Analysis**

* Time complexity. GetRandom is always $$\mathcal{O}(1)$$. Insert and Delete both have $$\mathcal{O}(1)$$ average time complexity, and $$\mathcal{O}(N)$$ in the worst-case scenario when the operation exceeds the capacity of currently allocated array/hashmap and invokes space reallocation.

* Space complexity: $$\mathcal{O}(N)$$, to store N elements.