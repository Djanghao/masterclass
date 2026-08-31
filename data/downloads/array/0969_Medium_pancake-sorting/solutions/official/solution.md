# Official Solution

**Link:** [https://leetcode.com/problems/pancake-sorting/solution/](https://leetcode.com/problems/pancake-sorting/solution/)

---

[TOC]

## Solution

---
### Approach 1: Sort like Bubble-Sort

**Intuition**

One might argue that this is an awkward question to do things.
Indeed, it is not the most practical operation that one can have with the _pancake flipping_, in order to sort a list.

However awkward the problem might be, it is the game that we play with. And in order to win the game, we have to play by the rules.
Actually, from this perspective, this problem does share some similarity with the **_[Rubik's cube](https://en.wikipedia.org/wiki/Rubik%27s_Cube)_**, _i.e._ one cannot move one tile without moving other tiles along with.
Let us get on with it, by playing a few rounds ourselves to get the hang of the problem.

Given the input of `[3, 2, 4, 1]`, the desired sorted output would be `[1, 2, 3, 4]`. 

As a reminder, the only operation that we could perform in order to move the elements in the list, is the so-called _pancake flip_, which is to reverse a _prefix_ of the list.

Starting from the largest value in the list, _i.e._ `4` in the example, its desired position would be the tail of the list.
While in the input, it is located at the third of the list, if we look at the list from left to right.

In order to move the value of `4` to its desired position, we could perform the following two steps:

- Firstly, we do the pancake flip on the prefix of `[3, 2, 4]`. With this operation, we then move the value `4` to the _**head**_ of the updated list as `[4, 2, 3, 1]`.

![flip to head](../Figures/969/969_flip_head.png)

- Now that, the value `4` is located at the head of the list, we could now perform another pancake flip on the entire list, which would get us the list of `[1, 3, 2, 4]`.

![flip to tail](../Figures/969/969_flip_tail.png)

Voila. With the obtained list of `[1, 3, 2, 4]`, we are now one step closer to our final goal, with the value `4` now at its proper place.
For the following steps, we only need to focus on the sublist of `[1, 3, 2]`.

>If one looks over the above steps again, it might ring a bell to a well-known algorithm called _**[bubble sort](https://en.wikipedia.org/wiki/Bubble_sort)**_.

<p align="center">
<img src="https://upload.wikimedia.org/wikipedia/commons/3/37/Bubble_sort_animation.gif">
</p>


Indeed, we share the same strategy as the bubble sort, by _sinking_ the numbers to the bottom one by one.

>Here we can make a statement that for any given number, in order to move it to any desired position, it takes **_at most_** two pancake flips to do so.

The idea is simple. First we move the number to the head of the list, then we can switch it with any other element by performing another pancake flip.


**Algorithm**

One can inspire from the bubble sort to implement the algorithm.

- First of all, we implement a function called `flip(list, k)`, which performs the pancake flip on the prefix of `list[0:k]` (in Python).

- The main algorithm runs a loop over the values of the list, starting from the largest one.

    - At each round, we identify the value to sort (named as `value_to_sort`), which is the number we would put in place at this round.

    - We then locate the index of the `value_to_sort`.

    - If the `value_to_sort` is not at its place already, we can then perform _at most_ two pancake flips as we explained in the intuition.

    - At the end of the round, the `value_to_sort` would be put in place.


<iframe src="https://leetcode.com/playground/74miTuW6/shared" frameBorder="0" width="100%" height="500" name="74miTuW6"></iframe>



**Complexity Analysis**

Let $$N$$ be the length of the input list.

- Time Complexity: $$\mathcal{O}(N^2)$$

    - In the algorithm, we run a loop with $$N$$ iterations.

    - Within each iteration, we are dealing with the corresponding prefix of the list.
    Here we denote the length of the prefix as $$k$$, _e.g._ in the first iteration, the length of the prefix is $$N$$. While in the second iteration, the length of the prefix is $$N-1$$. 

    - Within each iteration, we have operations whose time complexity is linear to the length of the prefix, such as iterating through the prefix to find the index, or flipping the entire prefix _etc._ Hence, for each iteration, its time complexity would be $$\mathcal{O}(k)$$

    - To sum up all iterations, we have the overall time complexity of the algorithm as $$\sum_{k=1}^{N} \mathcal{O}(k) = \mathcal{O}(N^2)$$.


- Space Complexity: $$\mathcal{O}(N)$$

    - Within the algorithm, we use a list to maintain the final results, which is proportional to the number of pancake flips.

    - For each round of iteration, at most we would add two pancake flips. Therefore, the maximal number of pancake flips needed would be $$2\cdot N$$.

    - As a result, the space complexity of the algorithm is $$\mathcal{O}(N)$$. If one does not take into account the space required to hold the result of the function, then one could consider the above algorithm as a constant space solution.


---