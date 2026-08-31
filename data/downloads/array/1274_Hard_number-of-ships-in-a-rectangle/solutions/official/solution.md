# Official Solution

**Link:** [https://leetcode.com/problems/number-of-ships-in-a-rectangle/solution/](https://leetcode.com/problems/number-of-ships-in-a-rectangle/solution/)

---

[TOC]

## Solution

---
### Overview

There is an open sea with ships at some random locations. We are given two coordinates representing the `bottomLeft` and `topRight` corners of a rectangle defining a portion of the `sea`. There can be up to 10 ships at different coordinates inside this area, and we can ask the game master if there are any ships in a given sub-region of the `sea`.
A condition of the game is that we can ask this question at most 400 times; to win the game we must find the exact number of ships.

![ships](../Figures/1274/Ships_Introduction.png)

At first, this problem looks like a blind game, but this makes the problem altogether more interesting.

There can be only one ship at any coordinate, so let's calculate the maximum number of possible points.
As per the problem statement, the maximum size of the Cartesian plane is (1,000 by 1,000) which means that the maximum number of possible points where a ship can be present is 1,000,000. We only have 400 chances to find a ship, so a brute force approach will not help here; we have to be smart!

Let's look at a more efficient approach to solving this problem.

---
### Approach 1: Divide And Conquer

**Intuition**

Because we are only allowed 400 guesses and there could be up to a million points in the `sea`, we know that checking every coordinate is not a feasible strategy. However, by starting from a larger zone and recursively checking smaller and smaller zones, we can eliminate any areas that do not contain a single ship and thus limit our search to the remaining area.

In this way, we can use an elimination technique to concentrate our search in the right direction. To apply this, we will have to first divide the rectangular Cartesian plane into a certain number of roughly equal parts.

For each sub-rectangle, we will make a separate call to the method `hasShip()`. If a sub-rectangle does not contain a ship, it can be eliminated from future searching.

We can perform a similar search process for the remaining sub-rectangles until the bottom-left and top-right coordinates converge to a single point (which is the location of a ship).

> In this solution, we are dividing the problem into sub-problems until the sub-problem can be solved without diving it further. Such solutions can be implemented [recursively](https://leetcode.com/explore/learn/card/recursion-i/).

Now, the important question is _what is the optimal number of sub-rectangles at each step?_

Let's consider dividing the rectangle into roughly 4 equal parts.
Thus, we will make 4 calls to `hasShip()` to determine if ships are present in each sub-rectangle; any empty sub-rectangles can then be eliminated from the search space.
The following figure demonstrates this idea.

![ships](../Figures/1274/Divide_And_Conquer_Technique.png)

_Analysis_

Since we will divide each rectangle into 4 sub-rectangles recursively, at each level of the recursion tree, we will have $$4^{level}$$ possible sub-rectangles.

![ships](../Figures/1274/Recursion_Levels.png)

_Calculate the number of levels:_

From the problem statement, we know that the maximum size of the original rectangle is $$(1000 \cdot 1000)$$.

If we recursively divide this rectangle into four equal sub-rectangles, at each level, the maximum number of levels is $$\log_4 (1000000) \approx 10$$   
Thus, the maximum number of levels for any given input will not be greater than 10.

_Calculate the number of sub-rectangles:_

Suppose that there is a ship at every coordinate point in the `sea`. In that case, every coordinate would be a leaf node of the recursion diagram shown above. We would need over a million calls to `hasShip()` to find the exact number of ships, but we are only allowed to make only $$400$$ calls. How do we solve this?

> Hint: Read the problem statement one more time.

Let's look at the problem statement carefully. It states that there can be at most 10 ships in the rectangle. This implies that, in the worst case, if each sub-rectangle contains at most one ship, there can be at most 10 non-empty sub-rectangles at any level.
Thus, the maximum number of sub-rectangles at each level of recursion is 40 (10 that contain a ship and 30 that are empty).

For each sub-rectangle that contains a ship, we will make $$4$$ recursive calls to `hasShip()`. Thus, even in the worst case scenario, the number of total calls to `hasShip()` will be less than the number of ships $$(10)$$ times $$4$$ times the maximum number of levels $$(\log_4 (1000 \cdot 1000) = 10)$$. That is, $$10 \cdot 4 \cdot 10 = 400$$.

![ships](../Figures/1274/Ships_SubRectangles.png)


**Algorithm**

> This technique of dividing the problem into more sub-problems of the same or related type until these become simple enough to be solved directly is called _Divide and Conquer_.

1. Check if the current rectangle given by `topRight` and `bottomLeft` coordinates, contains a ship. ​If so, divide the rectangle into 4​ sub-rectangles and recursively find the number of ships in each sub-rectangle.

   Otherwise, terminate the search process. Thus, at each step, we eliminate all rectangles that do not contain a single ship.

2. To divide the rectangle into 4 equal parts, we will first define the center coordinate of the X and Y axes as `midX` and `midY`; thus forming 4 sub-rectangles. The following figure illustrates the idea.

![ships](../Figures/1274/Sub_Rectangle_Mid_Position.png)
​
![ships](../Figures/1274/Rectangle_Four_Division.png)


3. For each of the sub-rectangles, recursively count the number of ships. The number of ships in a given rectangle will be the sum of the ships returned by the recursive call to each sub-rectangle.

4. The recursive search process will terminate when either of the following conditions is met:

    i. There are no ships in the rectangle.

    ii. The rectangle cannot be divided further, i.e the rectangle represents a single point. This condition is true when the `topRight` co-ordinate is equal to the `bottomLeft` co-ordinate.

**Implementation**

<iframe src="https://leetcode.com/playground/5aXpgTPW/shared" frameBorder="0" width="100%" height="429" name="5aXpgTPW"></iframe>

**Complexity Analysis**

Let $$M$$ be the range of possible x-coordinate values between `bottomLeft[0]` and `topRight[0]` and let $$N$$ be the range of possible y-coordinate values between `bottomLeft[1]` and `topRight[1]`. Thus, the maximum possible number of points in the rectangle is $$M \cdot N$$. Finally, let $$S$$ be the maximum number of ships in the sea.

* Time Complexity: $$O(S \cdot (\log_2 \max(M, N) - \log_4 S))$$

  Each call to `countShips` requires only constant time so the time complexity will be $$O(1)$$ times the maximum possible number of calls to `countShips`.

  The worst-case scenario is when there is the maximum number of possible ships $$(S = 10)$$ and they are spread out such that after $$S$$ recursive calls (the $$\log_4 S$$ level of the recursion tree), there are $$S$$ regions that each contain $$1$$ ship and the remaining regions are empty.


  Each region that contains $$1$$ ship, will result in $$4$$ recursive calls. $$3$$ will return $$0$$ because they do not contain a ship and $$1$$ call will result in $$4$$ more recursive calls because it does contain a ship. This process will repeat until we make a recursive call with the exact coordinates of the ship.

  At the latest, we will pinpoint the ship at the maximum depth of the recursion tree which is $$\log_2 \max(M, N)$$ because at each recursive call we divide the search space by half for each of the $$2$$ dimensions.

  Thus, once a region contains only $$1$$ ship, it may still take $$4 \cdot (\log_2 \max(M, N) - \log_4 S)$$ recursive calls before pinpointing the location of the ship (and returning $$1$$). And since there are $$S$$ ships, the total number of recursive calls after all regions contain at most $$1$$ ship is $$4 \cdot S \cdot (\log_2 \max(M, N) - \log_4 S)$$.

  Summing up, the time complexity is $$S + 4 \cdot S \cdot (\log_2 \max(M, N) - \log_4 S)$$ which in the worst case (when $$S = 10$$ and $$M = N = 1000$$) equals $$342$$ recursive calls.

* Space Complexity: $$O(\log_2 \max(M, N))$$.

  Each call to `countShips` uses only constant space so our space complexity is directly related to the maximum height of the recursion call stack. Since we have 2 dimensions of magnitudes M and N respectively, and the search space for each dimension is reduced by half at each recursive call to `countShips`, the maximum height of the recursion call stack will be $$ \log_2 \max(M, N) $$.