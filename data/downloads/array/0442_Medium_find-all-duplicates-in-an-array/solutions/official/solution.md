# Official Solution

**Link:** [https://leetcode.com/problems/find-all-duplicates-in-an-array/solution/](https://leetcode.com/problems/find-all-duplicates-in-an-array/solution/)

---

[TOC]

## Solution

---

### Approach 1: Brute Force

#### Intuition

Check for a second occurrence of every element in the rest of the array.

#### Algorithm

When we iterate over the elements of the input array, we can simply look for any other occurrence of the current element in the rest of the array.

Since an element can only occur once _or_ twice, we don't have to worry about getting duplicates of elements that appear twice:
+ **Case - I:** If an element occurs only once in the array, when you look for it in the rest of the array, you'll find nothing.
+ **Case - II:** If an element occurs twice, you'll find the second occurrence of the element in the rest of the array. When you chance upon the second occurrence in a later iteration, it'd be the same as **Case - I** (since there are no more occurrences of this element in the rest of the array).

#### Implementation

<iframe src="https://leetcode.com/playground/TNqNbBzQ/shared" frameBorder="0" width="100%" height="327" name="TNqNbBzQ"></iframe>

**Complexity Analysis**

* Time complexity: $$\mathcal{O}(n^2)$$. \
\
For each element in the array, we search for another occurrence in the rest of the array. Hence, for the $$i^{{th}}$$ element in the array, we might end up looking through all $$n - i$$ remaining elements in the worst case. So, we can end up going through about $$n^2$$ elements in the worst case. \
\
$$n-1 + n-2 + n-3 + .... + 1 + 0 \ = \ \sum_{1}^{n}(n-i) \ \simeq \ n^2$$

* Space complexity: $O(1)$

    No extra space is required, other than the space for the output list.

---

### Approach 2: Sort and Compare Adjacent Elements

#### Intuition

After sorting a list of elements, all elements of equivalent value get placed together. Thus, when you sort an array, equivalent elements form contiguous blocks.

#### Algorithm

1. Sort the array.
2. Compare every element with its neighbors. If an element occurs more than once, it'll be equal to at least one of its neighbors.

To simplify:
1. Compare every element with its predecessor.
    + The first element doesn't have a predecessor, so we can skip it.
2. Once we've found a match with a predecessor, we can skip the next element entirely!
    + **Why?** Well, if an element matches with its predecessor, it cannot possibly match with its successor _as well_. Thus, the next iteration (i.e. comparison between the next element and the current element) can be safely skipped. 

#### Implementation

<iframe src="https://leetcode.com/playground/Td5X3mVa/shared" frameBorder="0" width="100%" height="327" name="Td5X3mVa"></iframe>

#### Complexity Analysis

* Time complexity: $$\mathcal{O}(n \log{n}) + \mathcal{O}(n) \simeq \mathcal{O}(n \log{n})$$.

  - A performant comparison-based sorting algorithm will run in $$\mathcal{O}(n \log{n})$$ time. Note that this can be reduced to $$\mathcal{O}(n)$$ using a special sorting algorithm like [Radix Sort](https://en.wikipedia.org/wiki/Radix_sort).

  - Traversing the array after sorting takes linear time i.e. $$\mathcal{O}(n)$$.

* Space complexity: $O( \log n)$

    Note that some extra space is used when we sort an array in place. The space complexity of the sorting algorithm depends on the programming language.
    - In Java, Arrays.sort() is implemented using a variant of the Quick Sort algorithm which has a space complexity of $O( \log n)$ for sorting an array.
    - In C++, the sort() function is implemented as a hybrid of Quick Sort, Heap Sort, and Insertion Sort, with a worse-case space complexity of $O( \log n)$. 
    
    The space used by the output list `ans` is not counted in the space complexity.

---

### Approach 3: Store Seen Elements in a Set / Map

#### Intuition

In [Approach 1](#approach-1-brute-force) we used two loops (one nested within the other) to look for two occurrences of an element. In almost all similar situations, you can usually substitute one of the loops with a hash table. Often, it's a worthy trade-off: **for a bit of extra memory, you can reduce the order of your runtime complexity.**

#### Algorithm

We store all elements that we've seen till now in a hash set. When we visit an element, we query the set to figure out if we've seen this element before.

<iframe src="https://leetcode.com/playground/CQuFt8ch/shared" frameBorder="0" width="100%" height="327" name="CQuFt8ch"></iframe>

#### Complexity Analysis

* Time complexity: $O(n)$ average case. $O(n)$ worst case.

  - It takes a linear amount of time to iterate through the array.
  - Lookups in a hash set are constant time on average, however, those can degrade to linear time in the worst case. Note that an alternative is to use tree-based sets, which give logarithmic time lookups _always_.

* Space complexity: Up to $O(n)$ extra space required for the set.

  - If you are tight on space, you can significantly reduce your physical space requirements by using bitsets [^note-3-0] instead of sets. This data structure requires just one bit per element, so you can be done in just $$n$$ bits of data for elements that go up to $$n$$. Of course, this doesn't reduce your space complexity: bitsets still grow linearly with the range of values that the elements can take.

---

### Approach 4: Cycle Sort

#### Intuition

As discussed in [Approach 2](#approach-2-sort-and-compare-adjacent-elements), if `nums` were sorted, we could efficiently determine the duplicate elements. Approach 2 had a worse than linear time complexity and used significant extra space due to utilizing built-in sorting functions. We need a way to sort the array in place, in constant time.

There are two main cases after sorting:

**1. No Duplicates in `nums`:**

| 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |
|---|---|---|---|---|---|---|---|---|

For an array of length `n`, the array contains all of the integers in the range `1` to `n`.

**2. Duplicates in `nums`:**

| 1 | 2 | 2 | 3 | 4 | 6 | 6 | 8 | 9 |
|---|---|---|---|---|---|---|---|---|

For an array of length `n`, the array contains duplicates of some of the integers in the range `1` to `n` and is therefore missing others.

The values in `nums` are in the range `1` to `n` according to the problem constraints, so we can utilize [cycle sort](https://en.wikipedia.org/wiki/Cycle_sort). Cycle sort is a sorting algorithm that can sort a given sequence in a range from `a` to `n` by putting each element at the index that corresponds to its value. `nums` is a zero-indexed array, so an element with the value `x` will be located at index `x - 1`. For example, `1` goes at index `0` in the array, `2` goes at index `1`, and `100` goes at index `99`. 

For each element `x` in `nums`, we place the first occurrence at index `nums[x - 1]`. Cycle sort is often implemented to handle duplicates, but our implementation will not require this. We use a simplified version of cycle sort because it is not a problem if the duplicate of a value is not in the correct position. Duplicates will reside at indexes that do not have a corresponding value in `nums`.

**Result of Cycle Sort on Input:** `nums = [9,1,2,2,3,4,6,6,8]`

| 1 | 2 | 3 | 4 | 2 | 6 | 6 | 8 | 9 |
|---|---|---|---|---|---|---|---|---|

Notice that the duplicate values `2` and `6` are the only values that are not at the index that corresponds to their value.

Then, to identify the duplicates, we iterate through `nums` and add values that are not equal to their index plus one to the result array. If there are no duplicates, every element will be in the correct position.

Finally, we return the result array.

> **Interview Tip: In-place Algorithms**
>
> This approach modifies the input. It changes the order of `nums`, but not the values of `nums`. In-place algorithms overwrite the input to save space, but sometimes this can cause problems.
>
> Here are a couple of situations where an in-place algorithm might not be suitable.
>
> 1. The algorithm needs to run in a multi-threaded environment, without exclusive access to the array. Other threads might need to read the array too, and might not expect it to be modified.
>
> 2. Even if there is only a single thread, or the algorithm has exclusive access to the array while running, the array might need to be reused later or by another thread once the lock has been released.
>
> In an interview, you should always check whether the interviewer minds you overwriting the input. Be ready to explain the pros and cons of doing so if asked!

#### Algorithm

1. Initialize a variable `n` to the length of `nums`.

2. Use cycle sort to place elements at the index that corresponds to their value.

    - Initialize a variable `i` to `0`.
    - Iterate through the elements in `nums`:
        - Set a variable `correctIdx` to `nums[i] - 1`.
        - If the `nums[i]`does not equal `nums[correctIdx]`, swap the element at `nums[i]` with the element at `nums[correctIdx]`.
        - Otherwise, increment `i`.

3. Initialize an array `duplicates` to store the answer. 

4. Add duplicate numbers to the answer array.

    - Iterate through sorted `nums` using a `for` loop and the iterator `i`: 
        - If `nums[i]` does not equal `i + 1`, add `nums[i]` to `duplicates`.

5. Return `duplicates`.

#### Implementation

<iframe src="https://leetcode.com/playground/XUhrKFZf/shared" frameBorder="0" width="100%" height="500" name="XUhrKFZf"></iframe>

#### Complexity Analysis

Let $n$ be the length of `nums`.

* Time complexity: $O(n)$

    We loop through the elements in `nums`, swapping elements to sort the array. Swapping takes constant time. Sorting `nums` using cycle sort takes $O(n)$ time. 

    Iterating through the sorted array and finding the duplicates can take up to $O(n)$. 

    The total time complexity is $O(2n)$, which simplifies to $O(n)$.


* Space complexity: $O(n)$

    We modify the array `nums` and use it to determine the answer, so the space complexity is $O(n)$.

    The space used by the output list `duplicates` is not counted in the space complexity.

    `nums` is the input array, so the *auxiliary* space used is $O(1)$.

---

### Approach 5: Mark Visited Elements in the Input Array Itself

#### Intuition

We can utilize a key piece of information in the problem statement:

> The integers in the input array `nums` satisfy `1 ≤ nums[i] ≤ n`, where `n` is the size of the array. [^note-4-0]

This presents us with two key insights:

1. All the integers present in the array are positive.
  i.e. `arr[i] > 0` for any valid index `i`. [^note-4-1]
2. The decrement of any integers present in the array must be an accessible index in the array. \
  i.e. for any integer `x` in the array, `x-1` is a valid index, and thus, `arr[x-1]` is a valid reference to an element in the array. [^note-4-2]

We can use the index as a hash key, and the sign of the element as a presence indicator. We use the absolute value when indexing `nums` because negative indexes will cause errors.

> **Note:** This approach modifies the input. It changes the content of `nums`. In-place algorithms overwrite the input to save space, but sometimes this can cause problems. Always check with your interviewer before modifying the input.

#### Algorithm

1. Iterate over the array and for every element `x` in the array, negate the value at index `abs(x)-1`. [^note-4-3]
    + The negation operation effectively marks the value `abs(x)` as _seen / visited_.

2. Iterate over the array again, for every element `x` in the array:
    + If the value at index `abs(x)-1` is positive, it must have been negated twice. Thus `abs(x)` must have appeared twice in the array. We add `abs(x)` to the result.
    + In the above case, when we reach the second occurrence of `abs(x)`, we need to avoid fulfilling this condition again. So, we'll additionally negate the value at index `abs(x)-1`.

#### Implementation

**Multiple Pass Implementation**

<iframe src="https://leetcode.com/playground/XagdU3gK/shared" frameBorder="0" width="100%" height="361" name="XagdU3gK"></iframe>

**One Pass Implementation**

Notice that if an element `x` occurs just once in the array, the value at index `abs(x) - 1` becomes negative and remains so for all of the iterations that follow.

1. Traverse through the array. When we see an element `x` for the first time, we'll negate the value at index `abs(x) - 1`.
2. But, the next time we see an element `x`, we _don't_ need to negate it again! If the value at index `abs(x) - 1` is already negative, we know that we've seen element `x` before.

So, now we are relying on a single negation to mark the visited status of an element. This is similar to what we did in [Approach 3](#approach-3-store-seen-elements-in-a-set), except that we are re-using the array (with some smart negations) instead of a separate set.

<iframe src="https://leetcode.com/playground/bxWdkEmt/shared" frameBorder="0" width="100%" height="310" name="bxWdkEmt"></iframe>

#### Complexity Analysis

* Time complexity: $O(n)$ 

    We iterate over the array twice. Each negation operation occurs in constant time.

* Space complexity: $O(n)$

    We modify the array `nums` and use it to determine the answer, so the space complexity is $O(n)$.

    The space used by the output list `ans` is not counted in the space complexity.

    `nums` is the input array, so the *auxiliary* space used is $O(1)$.

[^note-3-0]: C++ provides an excellent `std::bitset` in the [standard library](https://en.cppreference.com/w/cpp/utility/bitset).

[^note-4-0]: Some readers will notice a similarity with [the pigeonhole principle](https://en.wikipedia.org/wiki/Pigeonhole_principle). While this doesn't really come into play in [Approach 4](#approach-4-mark-visited-elements-in-the-input-array-itself), we utilized it indirectly in  [Approach 3](#approach-3-store-seen-elements-in-a-set): since some elements appear twice, the number of unique elements is less than the size of the array. If every unique element gets a bucket in our hash set, some buckets are bound to have more than one element in them!

[^note-4-1]: Because, `arr[i] >= 1 ` for any valid index `i` of array `arr`.

[^note-4-2]: Because, all elements in the array are integers that lie in the range $$[1, n]$$ (where $$n$$ is the length of the array). Thus, their decrements are integers that lie in the range $$[0, n-1]$$ (which is precisely the set of valid indices for an array of length $$n$$).

[^note-4-3]: The `abs()` function provides the absolute value.