# Official Solution

**Link:** [https://leetcode.com/problems/distribute-candies/solution/](https://leetcode.com/problems/distribute-candies/solution/)

---

[TOC]

## Solution

---

### Overview

Solving this problem efficiently requires a couple of key observations.

1. If the number of unique candies is *less than or equal to* half the length of `candyType`, then Alice can eat one of each type of candy and the answer is equal to the *number of unique candies*.
2. Otherwise, the number of candies she can eat is limited to half the length of `candyType`, and so the answer is equal to *half the length of `candyType`*.

In essence, this problem boils down to finding the *number of unique candies*. We then return whichever value is *smaller* out of the *number of unique candies* and *half the length of `candyType`*.

</br>

---

### Approach 1: Brute Force

**Intuition and Algorithm**

One way to find the number of unique candies is to traverse over each element in `candyType`, checking whether or not we've already seen a candy of this same type. We can do this check by iterating over all elements *before* the current element. If any of those are of the same type, then this is not a unique candy. We should keep track of the number of unique candies we find.

<iframe src="https://leetcode.com/playground/Pq4h8R3Q/shared" frameBorder="0" width="100%" height="497" name="Pq4h8R3Q"></iframe>

**Complexity Analysis**

Let $$N$$ be the the length of `candyType`.

* Time complexity : $$O(N^2)$$. We traverse over each of the $$N$$ elements of $$candyType$$, and for each, we check all of the elements before it. Checking each item for each item is the classic $$O(N^2)$$ time complexity pattern.

* Space complexity : $$O(1)$$. We don't allocate any additional data structures, instead only using constant space variables.

</br>

---

### Approach 2: Sorting

**Intuition and Algorithm**

The previous approach is too inefficient to reliably avoid a `Time Limit Exceeded` (at the time of writing this article), but most importantly, it is unlikely to impress your interviewer!

Is there a more efficient way that we can count the number of unique candies? Yes, there is! 

One way is to sort `candyType` first, so that we can then count the number of unique candies by comparing adjacent elements in the sorted array. This removes the need to do repeated traversals. 

As a quick warning before we get to the code though, this approach *modifies the input array*. This isn't always a good idea, and is something you should always ask your interviewer about.

> **Interview Tip: In-place Algorithms**
>
> In-place algorithms overwrite the input to save space, but sometimes this can cause problems. Here are a couple of situations where an in-place algorithm might not be suitable.
> 1. The algorithm needs to run in a *multi-threaded* environment, without exclusive access to the array. Other threads might need to read the array too, and might not expect it to be modified.
> 2. Even if there is only a single thread, or the algorithm has exclusive access to the array while running, the array might need to be reused later or by another thread once the lock has been released.
>
> In an interview, you should always check whether or not the interviewer minds you overwriting the input. Be ready to explain the pros and cons of doing so if asked!

<iframe src="https://leetcode.com/playground/QCJUaYDY/shared" frameBorder="0" width="100%" height="378" name="QCJUaYDY"></iframe>

If you're using a language that has a built-in *heapify* function, then you can use this to further optimize the space complexity to $$O(1)$$. Here is an example of using `heapify` in Python.

<iframe src="https://leetcode.com/playground/YqWcpBxf/shared" frameBorder="0" width="100%" height="361" name="YqWcpBxf"></iframe>


**Complexity Analysis**

Let $$N$$ be the the length of `candyType`.

* Time complexity : $$O(N \log N)$$. 

    We start by sorting the $$N$$ elements in `candyType`, which has a cost of $$O(N \log N)$$. 
    
    We then perform a single pass through `candyType`, performing an $$O(1)$$ operation at each step: this has a total cost of $$O(N)$$.

    This gives us a total of $$O(N \log N) + O(N)$$. When adding complexities, we only keep the one that is strictly bigger, this leaves us with $$O(N \log N)$$.

* Space complexity : Dependent on the sorting algorithm implementation, which is generally between $$O(1)$$ and $$O(N)$$.

    Python and Java now use Timsort, which requires $$O(N)$$ space.

    The `heapify` variant for Python is $$O(1)$$, as it uses Heapsort.

</br>

---

### Approach 3: Using a Hash Set

**Intuition and Algorithm**

> **Explore Card**: Check out our [Explore Card on Hash Tables](https://leetcode.com/explore/learn/card/hash-table/) if you are unfamiliar with them.

Recall that a Set cannot contain duplicates, and attempting to add a duplicate item into a Set will do nothing.

Therefore, the best way to find the number of unique elements is to simply insert all of the `candyType` elements into a Hash Set. After that, the number of unique candies is simply the number of elements in the Hash Set.

<iframe src="https://leetcode.com/playground/FMJRw6bi/shared" frameBorder="0" width="100%" height="242" name="FMJRw6bi"></iframe>

**Complexity Analysis**

Let $$N$$ be the the length of `candyType`.

* Time complexity : $$O(N)$$. 

    Adding an item into a Hash Set has an *amortized* time of $$O(1)$$. Therefore, adding $$N$$ items requires $$O(N)$$ time. All of the other operations we use are $$O(1)$$.


* Space complexity : $$O(N)$$. 

    The worst case for space complexity occurs when all $$N$$ elements are unique. This will result in a Hash Set containing $$N$$ elements.