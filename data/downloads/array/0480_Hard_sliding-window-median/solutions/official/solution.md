# Official Solution

**Link:** [https://leetcode.com/problems/sliding-window-median/solution/](https://leetcode.com/problems/sliding-window-median/solution/)

---

[TOC]

### A word of advice

This problem is a companion problem to [295. Find Median From Data Stream](https://leetcode.com/problems/find-median-from-data-stream/). This means that a lot of approaches to solve this problem are based on the [methods to solve 295. Find Median From Data Stream](https://leetcode.com/articles/find-median-from-data-stream). Perhaps try that problem before you approach this one.

## Solution
---
### Approach 1: Simple Sorting

**Intuition**

Do what the question says.

**Algorithm**

Store the numbers in a window container of size $$k$$. The following operations must take place:

1. **Inserting** the incoming element.
2. **Deleting** the outgoing element.
3. **Sorting** the window to find the medians.

One primitive approach is to copy $$k$$ consecutive elements from the input to the window and keep sorting these every time. This constitutes duplication of effort.

We can do a bit better if we instead *insert* and *delete* one element per window shift. The challenge then is to maintain the window as **sorted**, before and after the *insert* and *delete* operations.

<iframe src="https://leetcode.com/playground/fhTmYXjt/shared" frameBorder="0" width="100%" height="395" name="fhTmYXjt"></iframe>

Python comes with an excellent `bisect` module to help perform efficient insert operations on lists while maintaining their sorted property.

**Complexity Analysis**

* Time complexity: $$O(n \cdot k \log k)$$ to $$O(n \cdot k)$$.

    + Copying elements into the container takes about $$O(k)$$ time each. This happens about $$(n-k)$$ times.
    + Sorting for each of the $$(n-k)$$ sliding window instances takes about $$O(k \log k)$$ time each.

    + Bisected insertion or deletion takes about $$O(\log k)$$ for searching and $$O(k)$$ for actual shifting of elements. This takes place about $$n$$ times.

* Space complexity: $$O(k)$$ extra linear space for the window container.

---
### Approach 2: Two Heaps (Lazy Removal)

**Intuition**

The idea is the same as [Approach 3](https://leetcode.com/articles/find-median-from-data-stream/#approach-3-two-heaps) from [295. Find Median From Data Stream](https://leetcode.com/problems/find-median-from-data-stream/). The only additional requirement is removing the outgoing elements from the window.

Since the window elements are stored in heaps, deleting elements that are not at the top of the heaps is a pain.

Some languages (like **Java**) provide implementations of the `PriorityQueue` class that allow for removing *arbitrarily* placed elements. Generally, using such features is not efficient nor is their portability assured.

Assuming that only the tops of heaps (and by extension the `PriorityQueue` class) are accessible, we need to find a way to efficiently invalidate and remove elements that are moving out of the sliding window.

At this point, an important thing to notice is the fact that if the two heaps are balanced, only the top of the heaps are actually needed to find the medians. This means that as long as we can somehow keep the heaps balanced, we could also keep some extraneous elements.

Thus, we can use hash-tables to keep track of invalidated elements. Once they reach the heap tops, we remove them from the heaps. This is the lazy removal technique.

An immediate challenge at this point is balancing the heaps while keeping extraneous elements. This is done by actually moving some elements to the heap which has extraneous elements, from the other heap. This cancels out the effect of having extraneous elements and maintains the invariant that the heaps are balanced.

**NOTE:** When we talk about keeping the heaps balanced, we are **not** referring to the actual heap sizes. We are only concerned with valid elements and hence when we talk about balancing heaps, we are referring to count of such elements.

**Algorithm**

+ Two priority queues:

    1. A max-heap `lo` to store the smaller half of the numbers
    2. A min-heap `hi` to store the larger half of the numbers

+ A hash-map or hash-table `hash_table` for keeping track of invalid numbers. It holds the count of the occurrences of all such numbers that have been invalidated and yet remain in the heaps.

+ The max-heap `lo` is allowed to store, at worst, one more element more than the min-heap `hi`. Hence if we have processed $$k$$ elements:

    + If $$k = 2 \cdot n + 1 \quad (\forall \, n \in \mathbb{Z})$$, then `lo` is allowed to hold $$n+1$$ elements, while `hi` can hold $$n$$ elements.
    + If $$k = 2 \cdot n \quad (\forall \, n \in \mathbb{Z})$$, then both heaps are balanced and hold $$n$$ elements each.

    This gives us the nice property that when the heaps are perfectly balanced, the median can be derived from the tops of both heaps. Otherwise, the top of the max-heap `lo` holds the legitimate median.

**NOTE:** As mentioned before, when we are talking about keeping the heaps balanced, the actual sizes of the heaps are irrelevant. Only the count of valid elements in both heaps matter.

+ Keep a `balance` factor. It indicates three situations:

    + `balance` $$= 0$$: Both heaps are balanced or nearly balanced.
    + `balance` $$< 0$$: `lo` needs more valid elements. Elements from `hi` are moved to `lo`.
    + `balance` $$> 0$$: `hi` needs more valid elements. Elements from `lo` are moved to `hi`.

+ Inserting an incoming number `in_num`:

    + If `in_num` is less than or equal to the top element of `lo`, then it can be inserted to `lo`. However this unbalances `hi` (`hi` has lesser valid elements now). Hence `balance` is incremented.

    + Otherwise, `in_num` must be added to `hi`. Obviously, now `lo` is unbalanced. Hence `balance` is decremented.

+ Lazy removal of an outgoing number `out_num`:

    + If `out_num` is present in `lo`, then invalidating this occurrence will unbalance `lo` itself. Hence `balance` must be decremented.
    + If `out_num` is present in `hi`, then invalidating this occurrence will unbalance `hi` itself. Hence `balance` must be incremented.

    + We increment the count of this element in the hash_table table.
    + Once an invalid element reaches either of the heap tops, we remove them and decrement their counts in the hash_table table.

<iframe src="https://leetcode.com/playground/8DwWsiGw/shared" frameBorder="0" width="100%" height="500" name="8DwWsiGw"></iframe>

**Complexity Analysis**

* Time complexity: $O(n \log n)$

    Since `hi` and `lo` may grow up to $O(n)$ elements due to the unbounded nature of their sizes in certain sequences (like a descending sequence), each insertion or removal operation in either heap takes $O(\log n)$ time. Over `n` steps, this results in a complexity of `O(n \log n)`.

    These still take $O(1)$ time on average, but they don't change the overall time complexity, as $O(n \log n)$ dominates.

* Space complexity: $$O(k) + O(n) \approx O(n)$$ extra linear space.

    + The heaps collectively require $$O(k)$$ space.
    + The hash table needs about $$O(n-k)$$ space.

---
### Approach 3: Two Multisets

**Intuition**

One can see that `multiset`s are a great way to keep elements sorted while providing efficient access to the first and last elements. Inserting and deleting arbitrary elements are also fairly efficient operations in a `multiset`. (Refer to [Approach 4 Intuition](https://leetcode.com/articles/find-median-from-data-stream/#approach-4-multiset-and-two-pointers) for [295. Find Median From Data Stream](https://leetcode.com/problems/find-median-from-data-stream/))

Thus, if the previous approach gives you too much heartburn, consider replacing the use of `priority_queue` with `multiset`.

**Algorithm**

Inserting or deleting an element is straight-forward. Balancing the heaps takes the same route as [Approach 3](https://leetcode.com/articles/find-median-from-data-stream/#approach-3-two-heaps) of [295. Find Median From Data Stream](https://leetcode.com/problems/find-median-from-data-stream/).

<iframe src="https://leetcode.com/playground/iFKc3jdz/shared" frameBorder="0" width="100%" height="500" name="iFKc3jdz"></iframe>

**Complexity Analysis**

* Time complexity: $$O((n-k) \cdot 6 \cdot \log k) \approx O(n \log k)$$.

    + At worst, there are three set insertions and three set deletions from the start or end. Each of these takes about $$O(\log k)$$ time.
    + Finding the mean takes constant $$O(1)$$ time since the start or ends of sets are directly accessible.
    + Each of these steps takes place about $$(n-k)$$ times (the number of sliding window instances).

* Space complexity: $$O(k)$$ extra linear space to hold contents of the window.

---
### Approach 4: Multiset and Two Pointers

**Intuition**

This is same as [Approach 4](https://leetcode.com/articles/find-median-from-data-stream/#approach-4-multiset-and-two-pointers) for [295. Find Median From Data Stream](https://leetcode.com/problems/find-median-from-data-stream/).

> But, we don't actually need two pointers.

Median elements are derived using a single iterator position (when the window size $$k$$ is odd) or two consecutive iterator positions (when $$k$$ is even). Hence keeping track of *only* one pointer is sufficient. The other pointer can be *implicitly derived* when required.

**Algorithm**

+ A single iterator `mid`, which iterates over the `window` multiset. It is analogous to `upper_median` in [Approach 4](https://leetcode.com/articles/find-median-from-data-stream/#approach-4-multiset-and-two-pointers) for [295. Find Median From Data Stream](https://leetcode.com/problems/find-median-from-data-stream/). `lower_median` is *implicitly derived* from `mid`. It's either equal to `mid` (when the window size $$k$$ is odd) or `prev(mid)` [^note-1] \(when the window size $$k$$ is even\).

+ We start with populating our multiset `window` with the first $$k$$ elements. We set `mid` to the $$\lfloor k/2 \rfloor$$ indexed element in `window` (`0`-based indexing; Multisets always maintain their sorted property).

+ While inserting an element `num` into `window`, three cases arise:

    1. `num` is less than the value of upper median `mid`.

    2. `num` is greater than the value of upper median `mid`.

    3. `num` is equal to the value of upper median `mid`. This situation is often handled as language-dependent. Since C++ `multiset` insert elements at the end of their equal range, this situation is essentially the same as the previous case.

    + For the first case, `num` is inserted before the upper median element `mid`. Thus `mid` now, no longer points to the $$\lfloor k/2 \rfloor$$ indexed element. In fact it points to the $$\lfloor k/2 \rfloor + 1$$ indexed element. We fix that by decrementing `mid`.

    + For the second and third cases, `num` is inserted after the upper median element `mid` and hence does not spoil the `mid` iterator. It still points to the $$\lfloor k/2 \rfloor$$ indexed element.

    + Of course, the window size just increased to $$k + 1$$ in all three cases. That will easily be fixed by removing the element that is about to exit the window.

+ While removing an element `num`, the same three cases arise as when we wanted to insert an element:

    1. `num` is less than the value of upper median `mid`.

    2. `num` is greater than the value of upper median `mid`.

    3. `num` is equal to the value of upper median `mid`. Since `mid` will point to the first occurrence of `num` in the multiset `window` and we deterministically remove the first occurrence (take note that we use `std::multiset::lower_bound()` [^note-2] to find the correct occurrence to erase), this case is handled in the same manner as the first case.

    + In the first and third cases, removing `num` will spoil the `mid` iterator. Thus we need to fix that by incrementing `mid` before we remove that element.

    + For the second case, the `mid` iterator is not spoiled. No further action is required.

    + Once this element has been removed, the window size returns to being $$k$$.

+ After insertion of the incoming element and removal of the outgoing element, we are left again with some nice invariants:

    1. Window size is again $$k$$.
    2. The window is still fully sorted.
    3. `mid` still points to the $$\lfloor k/2 \rfloor$$ indexed element.

+ Finding the median of the window is easy! It is simply the **mean** of the elements pointed to by the two pointers `lo_median` and `hi_median`. In our case those are `mid` or `prev(mid)` (as decided by whether $$k$$ is odd or even) , and `mid` respectively.

[^note-3]

<iframe src="https://leetcode.com/playground/GpjtXrjS/shared" frameBorder="0" width="100%" height="500" name="GpjtXrjS"></iframe>

**Complexity Analysis**

* Time complexity: $$O((n-k) \log k) + O(k) \approx O(n \log k)$$.

    + Initializing `mid` takes about $$O(k)$$ time.
    + Inserting or deleting a number takes $$O(\log k)$$ time for a standard `multiset` scheme. [^note-4]
    + Finding the mean takes constant $$O(1)$$ time since the median elements are directly accessible from `mid` iterator.
    + The last two steps take place about $$(n-k)$$ times (the number of sliding window instances).

* Space complexity: $$O(k)$$ extra linear space to hold contents of the window.

---
### Further Thoughts

As noted before, this problem is essentially an extension to [295. Find Median From Data Stream](https://leetcode.com/problems/find-median-from-data-stream/). That problem had a lot of ways to go about, that frankly, are not of much use in an interview. But they are interesting to follow all the same. If you are interested take a look [here.](https://leetcode.com/articles/find-median-from-data-stream#further-thoughts) Try extending those methods to this problem.



[^note-1]: `std::prev()` is a C++ method to find the previous element to the current one being pointed to by an iterator.
[^note-2]: Had we used `std::multiset::find()`, there was no guarantee that the first occurrence of `num` would be found. Although the contrary did happen in all of our tests, I don't recommend using it. Your mileage may vary.
[^note-3]: Shout-out to [@votrubac](https://leetcode.com/votrubac/) and [@StefanPochmann](https://leetcode.com/stefanpochmann)!
[^note-4]: [Hinting](http://en.cppreference.com/w/cpp/container/multiset/insert) can reduce that to amortized constant $$O(1)$$ time.