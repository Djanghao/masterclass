# Official Solution

**Link:** [https://leetcode.com/problems/random-pick-with-weight/solution/](https://leetcode.com/problems/random-pick-with-weight/solution/)

---

[TOC]

## Solution

---

### Overview

This is actually a very practical problem which appears often in the scenario where we need to do **sampling** over a set of data.

Nowadays, people talk a lot about machine learning algorithms.
As many would reckon, one of the basic operations involved in training a machine learning algorithm (_e.g._ Decision Tree) is to sample a batch of data and feed them into the model, rather than taking the entire data set.
There are several rationales behind doing sampling over data, which we will not cover in detail, since it is not the focus of this article.

If one is interested, one can refer to our Explore card of [Machine Learning 101](https://leetcode.com/explore/learn/card/machine-learning-101/) which gives an overview on the fundamental concepts of machine learning, as well as the Explore card of [Decision Tree](https://leetcode.com/explore/learn/card/decision-tree/) which explains in detail on how to construct a decision tree algorithm.

Now, given the above background, hopefully one is convinced that this is an interesting problem, and it is definitely worth solving.

#### Intuition

Given a list of positive values, we are asked to _randomly_ pick up a value based on the weight of each value.
To put it simple, the task is to do **_sampling with weight_**.

Let us look at a simple example. Given an input list of values `[1, 9]`, when we pick up a number out of it, the chance is that 9 times out of 10 we should pick the number `9` as the answer.

>In other words, the **_probability_** that a number got picked is proportional to the value of the number, with regards to the total sum of all numbers.

To understand the problem better, let us imagine that there is a line in the space, we then project each number into the line according to its value, _i.e._ a large number would occupy a broader range on the line compared to a small number. For example, the range for the number `9` should be exactly nine times as the range for the number `1`.

![throw a ball](../Figures/528/528_throw_ball.png)

Now, let us throw a ball _**randomly**_ onto the line, then it is safe to say there is a good chance that the ball will fall into the range occupied by the number `9`. In fact, if we repeat this experiment for a large number of times, then _statistically_ speaking, 9 out of 10 times the ball will fall into the range for the number `9`.

Voila. That is the intuition behind this problem.

#### Simulation

>So to solve the problem, we can simply **_simulate_** the aforementioned experiment with a computer program.

First of all, let us construct the line in the experiment by **chaining up** all values together.

Let us denote a list of numbers as $[w_1, w_2, w_3, ..., w_n]$.
Starting from the beginning of the line, we then can represent the **offsets** for each range $K$ as $(\sum_{1}^{K}{w_i}, \sum_{1}^{K+1}{w_i})$, as shown in the following graph:

![prefix sum formula](../Figures/528/528_prefix_sum_formula.png)

As many of you might recognize now, the offsets of the ranges are actually the [prefix sums](https://en.wikipedia.org/wiki/Prefix_sum) from a sequence of numbers. For each number in a sequence, its corresponding prefix sum, also known as **cumulative sum**, is the sum of all previous numbers in the sequence plus the number itself.

As an observation from the definition of prefix sums, one can see that the list of prefix sums would be _strictly_ monotonically increasing, if all numbers are positive.

To throw a ball on the line is to find an _offset_ to place the ball.
Let us call this offset **_target_**.

>Once we randomly generate the target offset, the task is now boiled down to finding the range that this target falls into.

Let us rephrase the problem now, given a list of offsets (_i.e._ prefix sums) and a target offset, our task is to fit the target offset into the list so that the ascending order is maintained.

<br/>
<br/>

---

### Approach 1: Prefix Sums with Linear Search

#### Intuition

If one comes across this problem during an interview, one can consider the problem almost resolved, once one reduces the original problem down to the problem of inserting an element into a sorted list.

Concerning the above problem, arguably the most intuitive solution would be **_linear search_**. Many of you might have already thought one step ahead, by noticing that the input list is _sorted_, which is a sign to apply a more advanced search algorithm called **_binary search_**.

Let us do one thing at one time. In this approach, we will first focus on the linear search algorithm so that we could work out other implementation details. In the next approach, we will then improve upon this approach with a binary search algorithm.

So far, there is one little detail that we haven't discussed, which is how to _randomly_ generate a target offset for the ball. By "randomly", we should ensure that each point on the line has an equal opportunity to be the target offset for the ball.

In most of the programming languages, we have some `random()` function that generates a random value between 0 and 1. We can **_scale up_** this randomly-generated value to the entire range of the line, by multiplying it with the size of the range. At the end, we could use this _scaled_ random value as our target offset.  

As an alternative solution, sometimes one might find a `randomInteger(range)` function that could generate a random integer from a given range.
One could then directly use the output of this function as our target offset.

Here, we adopt the `random()` function, since it could also work for the case where the weights are float values.


#### Algorithm

We now should have all the elements at hand for the implementation.

- First of all, before picking an index, we should first set up the playground, by generating a list of prefix sums from a given list of numbers.
The best place to do so would be in the constructor of the class, so that we don't have to generate it again and again at the invocation of `pickIndex()` function.

    - In the constructor, we should also keep the total sum of the input numbers, so that later we could use this total sum to scale up the random number.

- For the `pickIndex()` function, here are the steps that we should perform.

    - Firstly, we generate a random number between 0 and 1. We then scale up this number, which will serve as our `target` offset.

    - We then scan through the prefix sums that we generated before by _linear search_, to find the first prefix sum that is larger than our `target` offset.

    - And the index of this prefix sum would be exactly the _right_ place that the target should fall into. We return the index as the result of `pickIndex()` function.

#### Implementation

<iframe src="https://leetcode.com/playground/7WP5PEHN/shared" frameBorder="0" width="100%" height="500" name="7WP5PEHN"></iframe>



#### Complexity Analysis

Let $N$ be the length of the input list.

- Time Complexity

    - For the constructor function, the time complexity would be $\mathcal{O}(N)$, which is due to the construction of the prefix sums.
<br/>

    - For the `pickIndex()` function, its time complexity would be $\mathcal{O}(N)$ as well, since we did a linear search on the prefix sums.
<br/>

- Space Complexity

    - For the constructor function, the space complexity would be $\mathcal{O}(N)$, which is again due to the construction of the prefix sums.
<br/>

    - For the `pickIndex()` function, its space complexity would be $\mathcal{O}(1)$, since it uses constant memory. Note, here we consider the prefix sums that it operates on, as the input of the function.
<br/>


---

### Approach 2: Prefix Sums with Binary Search

#### Intuition

As we promised before, we could improve the above approach by replacing the linear search with the **binary search**, which then can reduce the time complexity of the `pickIndex()` function from $\mathcal{O}(N)$ to $\mathcal{O}(\log{N})$.

As a reminder, the condition to apply binary search on a list is that the list should be _sorted_, either in ascending or descending order.
For the list of prefix sums that we search on, this condition is guaranteed, as we discussed before.


#### Algorithm

We could base our implementation largely on the previous approach.
In fact, the only place we need to modify is the `pickIndex()` function, where we replace the linear search with the binary search.

As a reminder, there exist built-in functions of binary search in almost all programming languages.
If one comes across this problem during the interview, it might be acceptable to use any of the built-in functions.

On the other hand, the interviewers might insist on implementing a binary search by hand. It would be good to prepare for this request as well.

There are several code patterns to implement a binary search algorithm, which we cover in the Explore card of [Binary Search algorithm](https://leetcode.com/explore/learn/card/binary-search/).
One can refer to the card for more details.

#### Implementation

<iframe src="https://leetcode.com/playground/7LyQ3Rc8/shared" frameBorder="0" width="100%" height="500" name="7LyQ3Rc8"></iframe>



#### Complexity Analysis

Let $N$ be the length of the input list.

- Time Complexity

    - For the constructor function, the time complexity would be $\mathcal{O}(N)$, which is due to the construction of the prefix sums.
<br/>

    - For the `pickIndex()` function, this time its time complexity would be $\mathcal{O}(\log{N})$, since we did a binary search on the prefix sums.
<br/>

- Space Complexity

    - For the constructor function, the space complexity remains $\mathcal{O}(N)$, which is again due to the construction of the prefix sums.
<br/>

    - For the `pickIndex()` function, its space complexity would be $\mathcal{O}(1)$, since it uses constant memory. Note, here we consider the prefix sums that it operates on, as the input of the function.
<br/>