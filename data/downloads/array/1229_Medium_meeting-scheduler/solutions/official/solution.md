# Official Solution

**Link:** [https://leetcode.com/problems/meeting-scheduler/solution/](https://leetcode.com/problems/meeting-scheduler/solution/)

---

[TOC]

## Solution

---

### Overview

To find the earliest time slot that works for both the people, the most straightforward approach would be to examine all possible time slots for them. To improve it, we can either sort both input arrays and apply two pointers, or we can use a heap for sorting the time slots and find the earliest overlapping time slot. We will cover both of these approaches in this article.

</br>

---

### Approach 1: Two pointers

**Intuition**

![The common slot between two slots.](../Figures/1229/1129-img1.png)


*Figure 1. The common slot between two slots.*


We want to sort both `slots1` and `slots2` by the start time first, then initialize two pointers, each of which points to the beginning of the two arrays. From there, we will compare the two slots, and move one pointer at a time if the common slot is smaller than `duration`.

> Note that sorting by the start time vs the end time is the same, this is because, if a time slot starts earlier, it will end earlier. Remember that for both people, there're no overlapping time slots



Here comes the question: how do we decide which pointer should be incremented?

The answer is: we will always move the one that ends earlier. Assuming that we are comparing `slots1[i]` and `slots2[j]` and `slots1[i][1] > slots2[j][1]`, we would always choose to move the pointer `j`. The reason is that, as both slots are sorted, if `slots1[i][1] > slots2[j][1]`, we know `slots1[i+1][0] > slots2[j][1]` so that there will be no intersection between `slots1[i+1]` and `slots2[j]`.

![Always move the one that ends earlier.](../Figures/1229/1129-img2.png)


*Figure 2. Always move the one that ends earlier.*


**Algorithm**

- Sort both `slots1` and `slots2` by the start time.
- Initialize two pointers, `pointer1` and `pointer2`, pointing to the beginning of `slots1` and the beginning of `slots2` respectively.
- Iterate until `pointer1` reaches the end of `slots1` or `pointer2` reaches the end of `slots2`:
  - Find the common slot of `slots1[pointer1]` and `slots2[pointer2]`.
  - If the common slot is greater than or equal to `duration`, return the result.
  - Else, find the slot that ends earlier and move the pointer.
- If no common slot is found, return an empty array.


**Implementation**


<iframe src="https://leetcode.com/playground/Zc89LUK5/shared" frameBorder="0" width="100%" height="463" name="Zc89LUK5"></iframe>


**Complexity Analysis**

* Time complexity: $$O(M \log M + N \log N)$$, when $$M$$ is the length of `slots1` and $$N$$ is the length of `slots2`.

  Sorting both arrays would take $$O(M \log M + N \log N)$$. The two pointers take $$O(M + N)$$ because, during each iteration, we would visit a new element, and there are a total of $$M+N$$ elements. Putting these together, the total time complexity is $$O(M \log M + N \log N)$$.

* Space complexity: $O(n)$ or $O( \log n )$

    Some extra space is used when we sort an array of size $n$ in place. The space complexity of the sorting algorithm depends on the programming language.
    - In Python, the sort method sorts a list using the Timsort algorithm which is a combination of Merge Sort and Insertion Sort and has a space complexity of $O(n)$
    - In C++, the `sort()` function is implemented as a hybrid of Quick Sort, Heap Sort, and Insertion Sort, with a worst-case space complexity of $O( \log n )$
    - In Java, `Arrays.sort()` is implemented using a variant of the Quick Sort algorithm which has a space complexity of $O( \log n)$

    Thus, the total space complexity of the algorithm is $O(n)$ or $O( \log n )$.

<br/>

---

### Approach 2: Heap

**Intuition**

Another approach of systematically selecting slots and comparing them is using a heap. We would initialize a heap `timeslots` and push all of the time slots into it.

The key idea here is that **we only need one heap**. That is, we can put the time slots for *both* people into the same heap, and then if we find a common time slot, we know that the two-time slots *couldn't possibly be for the same person*. Before reading the justification for this, have a think for yourself about why we can draw such a bold conclusion.

The problem description states that the time slots for a single person *do not overlap*. This means that if, for example, we have the time slots `[10, 15]` and `[14, 20]`, then we *know* that these time slots *cannot be for the same person*. Otherwise, we would have a contradiction. So, given that a common time slot has to overlap, the two slots have to be from different people.

A heap returns the smallest items first. Because of this time slots we remove from the heap are sorted by the start time. Taking advantage of this, we can then compare the time slots in the order of time.

![Pop the first time slot out of the heap and compare it against the first element in the heap.](../Figures/1229/1129-img3.png)


*Figure 3. Compare the popped time slot and the top element in the heap.*


**Algorithm**

- Initialize a heap `timeslots` and push time slots that last longer than `duration` into it.
- Iterate until there's only one time slot remaining in `timeslots`:
  - Pop the first time slot `[start1, end1]` from `timeslots`.
  - Retrieve the next time slot `[start2, end2]`, which is the current top element in `timeslots`.
  - If we find `end1 >= start2 + duration`, because `start1 <= start2`, the common slot is longer than `duration` and we can return it.
- If we don't find the common slot that is longer than `duration`, return an empty array.

**Implementation**


<iframe src="https://leetcode.com/playground/66e82dSv/shared" frameBorder="0" width="100%" height="412" name="66e82dSv"></iframe>


**Complexity Analysis**

* Time complexity: $$O((M+N) \log (M+N))$$, when $$M$$ is the length of `slots1` and $$N$$ is the length of `slots2`.

  There are two parts to be analyzed: 1) building up the heap; 2) the iteration when we keep popping elements from the heap. For the second part, popping one element takes $$O(\log(M + N))$$, therefore, in the worst case, popping $$M + N$$ elements takes $$O((M+N) \log (M+N))$$.

  Regarding the first part, we have different answers for Java and Python implementations. For Python, `heapq.heapify` transforms a list into a heap, in-place, in linear time; however, in Java, we choose to pop each element into the heap, which leads to a time complexity of $$O((M+N) \log (M+N))$$. Note that it is possible to convert the array into a heap in linear time using the constructor of `PriorityQueue`; however, that will not influence the overall time complexity and will make it less readable.

  When we put these two parts together, the total time complexity is $$O((M+N) \log (M+N))$$, which is determined by the first part.

* Space complexity: $$O(M+N)$$. This is because we store all $$M+N$$ time slots in a heap.






<br/>


---