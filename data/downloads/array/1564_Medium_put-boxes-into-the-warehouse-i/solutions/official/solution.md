# Official Solution

**Link:** [https://leetcode.com/problems/put-boxes-into-the-warehouse-i/solution/](https://leetcode.com/problems/put-boxes-into-the-warehouse-i/solution/)

---

[TOC]

## Overview

Let's think through an analogy first, that might be more relatable. Imagine that you are standing in front of a cave. The cave goes down into the earth, becoming narrower and then wider in various places. Additionally, you have several stones in hand -  of varying diameters. Your goal is to throw as many of the stones inside the cave as possible. Let's think about the strategy you would use.

Firstly, if there is a bottleneck (a very narrow section) in the cave, then even if the cave becomes wider afterwards, the stone will get stuck right before the bottleneck. So for each position in the cave, the largest stone that we can insert is limited by the narrowest part of the cave before it. In other words, that position's _usable diameter_ is limited by the minimum diameter before it.

Secondly, throwing a small stone earlier is always better than throwing it later, because if a small stone gets stuck, a larger stone will certainly get stuck, but the reverse is not true.

Therefore, our strategy would be to throw in the smallest stone first.

Now we can think of the stones as boxes, and the warehouse as the cave, where the height of each warehouse room corresponds to the diameter of the cave. The problem, and its solution, are now equivalent to the above analogy.

</br>

---

### Approach 1: Add Smallest Boxes to the Rightmost Warehouse Rooms

**Intuition**

We will take a greedy approach to solve the problem. The intuition is that if each step follows the optimal strategy, then the overall arrangement of boxes will be optimal.

Imagine we have a box of height `h`, and we want to push it into the warehouse. We start pushing from the left, and we want to push it as far right as we can. The limiting factor on how far we can push it will be the *first* position in the warehouse we encounter that has a height *less than* `h`. We won't be able to push the box into this position, or into any position after it.

To make the algorithm more efficient, we will first preprocess the heights of the warehouse. Keeping in mind that the limiting factor for each position is the minimum height that comes before it, we update the height for each position so that it is no higher than this minimum. This essentially changes the warehouse array to a *weakly decreasing* array.

We then sort the boxes from shortest to tallest. Then, we take the shortest box remaining and push it as far right as possible through the warehouse (we have to stop when the next position is shorter than this box).

Below are the slides showing the greedy process.

!?!../Documents/1564/1564_Approach1.json:960,560!?!

**Algorithm**

Because lower heights for rooms on the left will block the entry of boxes into rooms on the right, we need to preprocess the array of warehouse heights such that it becomes a non-increasing sequence.
Then, we start from the smallest box and the rightmost position of the warehouse.
If the current box can fit in the warehouse room, we increment the count by 1 and move on to the next box.  Otherwise, we move on to the next warehouse room and check if the box will fit there.


<iframe src="https://leetcode.com/playground/DxCj3HQa/shared" frameBorder="0" width="100%" height="429" name="DxCj3HQa"></iframe>

Let $$n$$ be the number of boxes and $$m$$ be the number of rooms in the warehouse.

* Time complexity: $$O(n  \log(n) + m)$$ because we need to sort the boxes ($$O(n  \log n)$$) and iterate over the warehouse rooms and boxes ($$O(n + m))$$).

* Space complexity: $$O(1)$$ because we use two pointers to iterate over the boxes and warehouse rooms. If we are not allowed to modify the `warehouse` array, we will need $$O(m)$$ extra space.

</br>

---

### Approach 2: Add Largest Possible Boxes from Left to Right

**Intuition**

What if the interviewer requires us to use $$O(1)$$ space and does not allow us to modify the original warehouse array? This follow-up request excludes the possibility of preprocessing the input array as we did before.

We can take a slightly different greedy approach to tackle the problem.
We iterate over the warehouse rooms from left to right and use another pointer to iterate over boxes from the largest to the smallest.
For each position, we discard boxes that are too tall to fit in the current warehouse room, because they won't fit in any rooms further to the right.
We put the tallest possible box that can fit in this room, and save the remaining boxes for warehouse rooms further to the right.

**Algorithm**

For this approach, we do not need to calculate the maximum height allowed for each warehouse room.  This is because boxes are sorted in decreasing order, so a room with a low height will automatically omit all boxes that are taller than it.

We start from the largest box and the leftmost position of the warehouse.
When the box can fit in the warehouse room, we increment the count by 1. Otherwise, we discard the box and try a smaller one.

Below are the slides showing this new algorithm.

!?!../Documents/1564/1564_Approach2.json:960,560!?!

<iframe src="https://leetcode.com/playground/BSmVZeyF/shared" frameBorder="0" width="100%" height="429" name="BSmVZeyF"></iframe>

The time and space complexity will be similar to Approach 1. Let $$n$$ be the number of boxes and $$m$$ be the number of rooms in the warehouse.

* Time complexity: $$O(n \log(n) + m)$$ because we need to sort the boxes and iterate over the warehouse rooms and boxes.

* Space complexity: $$O(1)$$ because we use two pointers to iterate over the boxes and warehouse rooms.

A related question is [LeetCode 1580. Put Boxes Into the Warehouse II](https://leetcode.com/problems/put-boxes-into-the-warehouse-ii/). I recommend you have a go at it once you're confident you understand this problem!