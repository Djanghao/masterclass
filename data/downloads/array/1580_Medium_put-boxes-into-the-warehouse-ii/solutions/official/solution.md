# Official Solution

**Link:** [https://leetcode.com/problems/put-boxes-into-the-warehouse-ii/solution/](https://leetcode.com/problems/put-boxes-into-the-warehouse-ii/solution/)

---

[TOC]

## Solution

---

### Overview

Put Boxes Into the Warehouse II is a follow up question of [1564. Put Boxes Into the Warehouse I](https://leetcode.com/problems/put-boxes-into-the-warehouse-i/editorial/). If you are struggling with this problem, you may want to attempt that one first.

The trick to solving this problem is understanding that this warehouse isn't set up like a typical warehouse. You can't access these individual rooms through a central hallway; to get to the center rooms, you must pass through the rooms that are next to it. If you try to push a box to a tall room that has a short one before it, it will get stuck before the short room.

To maximize the number of boxes you can place in the warehouse, you should start by placing the smallest box. By doing this, you ensure that you don’t block access to smaller rooms later, because if a smaller box gets stuck, a larger box will certainly get stuck, but the reverse is not true.

Therefore, our strategy would be to place boxes from shortest to tallest.

---

### Approach 1: Add Smallest Boxes to the Rightmost Warehouse Rooms from Both Ends

#### Intuition

We will take a greedy approach to solve the problem. The intuition is that if each step follows the optimal strategy, then the overall arrangement of boxes will be optimal.

Imagine we have a box of height `h`, and we want to push it into the warehouse. We can start pushing from either the left or the right. The limiting factor on how far we can push it will be the first position in the warehouse we encounter that has a height less than `h`. We won't be able to push the box into this position or into any position after it.

To make the algorithm more efficient, we will first preprocess the heights of the warehouse. Keeping in mind that the limiting factor for each position is the minimum height that comes before it from the left or the right, we update the height for each position to this minimum value. 

We then sort the boxes from shortest to tallest. Next, we check from both ends and try to place the smallest box remaining into the furthermost valid position available.

Because lower heights for rooms on the left and right will block the entry of boxes into rooms in the middle,  we need to sort the preprocessed warehouse array. We then start from the smallest box and the leftmost and rightmost positions of the warehouse. If the current box can fit in the warehouse room, we increment the count by 1 and move on to the next box. Otherwise, we move on to the next warehouse room from the opposite end and check if the box will fit there.

#### Algorithm

- Initialize `n` as the size of the `warehouse` array.
- Initialize `minHeight` to `INT_MAX`.
- Create an array `effectiveHeights` of size `n` and initialize all elements to 0.
- Iterate from 0 to `n - 1`:
   - Update `minHeight` as the minimum of `minHeight` and the current `warehouse` height to keep track of the minimum height encountered so far from the left end.
   - Set `effectiveHeights[i]` to `minHeight`. The effective height at each position should be the minimum height encountered up to that position from the left end, as this limits the maximum height of boxes that can be pushed from the left side.
- Reset `minHeight` to `INT_MAX` to prepare for computing the minimum heights from the right end.
- Iterate from `n - 1` to 0:
   - Update `minHeight` as the minimum of `minHeight` and the current `warehouse` height to keep track of the minimum height encountered so far from the right end.
   - Set `effectiveHeights[i]` to the maximum of `effectiveHeights[i]` and `minHeight`. The effective height at each position should be the maximum of the minimum heights encountered from both sides, as this accounts for the constraints imposed by both sides when pushing boxes.
- Sort `effectiveHeights` in ascending order to prepare for the greedy placement of boxes from smallest to largest effective height.
- Sort `boxes` in ascending order to place boxes from smallest to largest, ensuring that smaller boxes have a chance to be placed even if larger boxes cannot fit.
- Initialize `count` to 0 to keep track of the number of boxes placed in the warehouse.
- Iterate from 0 to `n - 1`:
    - If `count` is less than the size of `boxes`, and the current `box` height is less than or equal to `effectiveHeights[i]`:
        - Increment `count` as the current box fits within the current effective height and can be placed in the warehouse.
- Return `count`.

#### Implementation

<iframe src="https://leetcode.com/playground/4hcwNGgr/shared" frameBorder="0" width="100%" height="500" name="4hcwNGgr"></iframe>

#### Complexity Analysis

Let $m$ be the number of boxes and $n$ be the number of rooms in the warehouse.

- Time complexity: $O(m \log(m) + n \log(n))$

    $O(m \log(m) + n \log(n))$ because we need to sort the `boxes` $O(m \log m)$ and preprocess the warehouse rooms heights from both ends $O(n)$.

- Space complexity: $O(\log m + n)$

    The algorithm uses an additional array `effectiveHeights` to store the processed heights of the warehouse, which has the same length as the warehouse array. Therefore, the space complexity is $O(n)$.

    Sorting the boxes has different space complexities depending on the language used. For now, we will consider Java as the primary language, so the space complexity of $O(\log m)$ is due to the auxiliary stack space used by the sort function.

    Sorting the `effectiveHeights` has a space complexity of $O(\log n)$ for the same reason.

    The space complexity of the sorting algorithm depends on the programming language.
    - In Python, the sort method sorts a list using the Timsort algorithm which is a combination of Merge Sort and Insertion Sort and has $O(n)$ additional space.
    - In Java, `Arrays.sort()` is implemented using a variant of the Quick Sort algorithm which has a space complexity of $O(\log n)$ for sorting two arrays.
    - In C++, the `sort()` function is implemented as a hybrid of Quick Sort, Heap Sort, and Insertion Sort, with a worse-case space complexity of $O(\log n)$.

---

### Approach 2: Add Largest Possible Boxes from Both Ends

#### Intuition

What if the interviewer requires us to use $O(1)$ space by modifying the `boxes` array and does not allow us to modify the original `warehouse` array? This follow-up request excludes the possibility of preprocessing the input array as we did before.

We can take a slightly different greedy approach to tackle the problem. The idea is to iterate over the boxes from largest to smallest and check if each box can fit in either the leftmost or rightmost available room in the warehouse.

We start by sorting the boxes in descending order of their heights. Then, we initialize two pointers `leftIndex` and `rightIndex` to keep track of the leftmost and rightmost available rooms in the warehouse, respectively.

We iterate through the sorted boxes from the largest to the smallest. For each box, we check if it can fit in either the leftmost available room (pointed by `leftIndex`) or the rightmost available room (pointed by `rightIndex`).

If the box can fit in the leftmost available room, we increment the count of placed boxes and move the `leftIndex` to the next room on the right. Similarly, if the box can fit in the rightmost available room, we increment the count and move the `rightIndex` to the next room on the left.

If the box cannot fit in either the leftmost or rightmost available room, we move to the next smaller box without incrementing the count or updating the indices.

We continue this process until all boxes have been checked or until `leftIndex` and `rightIndex` cross each other (i.e., there are no more available rooms).

By iterating over the boxes from largest to smallest, we ensure that smaller boxes have a chance to be placed even if larger boxes cannot fit in the remaining rooms. This greedy approach guarantees that we place the maximum number of boxes possible in the warehouse without using any additional space or modifying the input arrays.

#### Algorithm
 
- Initialize `warehouseSize` as the size of the `warehouse` array.
- Sort `boxes` in ascending order to iterate over boxes from largest to smallest.
- Initialize `leftIndex` to 0 and `rightIndex` to `warehouseSize - 1` to keep track of the leftmost and rightmost available rooms in the warehouse.
- Initialize `boxCount` to 0 and `boxIndex` to `boxes.size() - 1` to store the number of boxes placed, and to iterate over boxes from largest to smallest.
- While `leftIndex` is less than or equal to `rightIndex`, and `boxIndex` is greater than or equal to 0:
    - If the current `box` height is less than or equal to `warehouse[leftIndex]`:
        - Increment `boxCount` as the current box fits in the leftmost available room, so it can be placed.
        - Increment `leftIndex` to move to the next room on the right, as the leftmost available room is now occupied.
    - Else if the current `box` height is less than or equal to `warehouse[rightIndex]`:
        - Increment `boxCount` as the current box fits in the rightmost available room, so it can be placed.
        - Decrement `rightIndex` to move to the next room on the left, as the rightmost available room is now occupied.
    - Decrement `boxIndex` to move to the next smaller box.
- Return `boxCount`.

The approach is visualized below:

!?!../Documents/1580-Re/app2.json:976,675!?!

#### Implementation

<iframe src="https://leetcode.com/playground/2rcwy84k/shared" frameBorder="0" width="100%" height="500" name="2rcwy84k"></iframe>

#### Complexity Analysis

Let $m$ be the number of boxes and $n$ be the number of rooms in the warehouse.

* Time complexity: $O(m \log(m) + n)$

    $O(m \log(m) + n)$ because we need to sort the boxes and iterate over the warehouse rooms and boxes.

* Space complexity: $O(\log m)$ or $O(m)$ 

    Note that some extra space is used when we sort arrays in place. The space complexity of the sorting algorithm depends on the programming language.
    - In Python, the sort method sorts a list using the Timsort algorithm which is a combination of Merge Sort and Insertion Sort and has $O(m)$ additional space.
    - In Java, `Arrays.sort()` is implemented using a variant of the Quick Sort algorithm which has a space complexity of $O(\log m)$ for sorting two arrays.
    - In C++, the `sort()` function is implemented as a hybrid of Quick Sort, Heap Sort, and Insertion Sort, with a worse-case space complexity of $O(\log m)$.

    Besides the sorting space, our algorithm uses constant space $O(1)$ by using two pointers to iterate through the boxes and warehouse rooms.

---