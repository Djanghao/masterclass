# Official Solution

**Link:** [https://leetcode.com/problems/beautiful-arrangement/solution/](https://leetcode.com/problems/beautiful-arrangement/solution/)

---

[TOC]

## Solution

---
### Approach #1 Brute Force [Time Limit Exceeded]

#### Algorithm

In the brute force method, we can find out all the arrays that can be formed using the numbers from 1 to N(by creating every possible permutation of the given elements). Then, we iterate over all the elements of every permutation generated and check for the required conditions of divisibility.

In order to generate all the possible pairings, we make use of a function `permute(nums, current_index)`. This function creates all the possible permutations of the elements of the given array.

To do so, `permute` takes the index of the current element $$current_index$$ as one of the arguments. Then, it swaps the current element with every other element in the array, lying towards its right, so as to generate a new ordering of the array elements. After the swapping has been done, it makes another call to permute but this time with the index of the next element in the array. While returning back, we reverse the swapping done in the current function call.

Thus, when we reach the end of the array, a new ordering of the array's elements is generated. The following animation depicts the process of generating the permutations.

!?!../Documents/561_Array.json:1000,563!?!

#### Implementation

<iframe src="https://leetcode.com/playground/5cbz54de/shared" frameBorder="0" width="100%" height="500" name="5cbz54de"></iframe>

#### Complexity Analysis

* Time complexity : $$O(n!)$$. A total of $$n!$$ permutations will be generated for an array of length $$n$$.

* Space complexity : $$O(n)$$. The depth of the recursion tree can go upto $$n$$. $$nums$$ array of size $$n$$ is used.

---
### Approach #2 Better Brute Force [Accepted]

#### Algorithm

In the brute force approach, we create the full array for every permutation and then check the array for the given divisibilty conditions. But this method can be optimized to a great extent. To do so, we can keep checking the elements while being added to the permutation array at every step for the divisibility condition and  can stop creating it any further as soon as we find out the element just added to the permutation violates the divisiblity condition. 

#### Implementation

<iframe src="https://leetcode.com/playground/D4dVJwn7/shared" frameBorder="0" width="100%" height="500" name="D4dVJwn7"></iframe>

#### Complexity Analysis

* Time complexity : $$O(k)$$. $$k$$ refers to the number of valid permutations.

* Space complexity : $$O(n)$$. The depth of recursion tree can go upto $$n$$. Further, $$nums$$ array of size $$n$$ is used, where, $$n$$ is the given number.

---

### Approach #3 Backtracking [Accepted]

#### Algorithm


The idea behind this approach is simple. We try to create all the permutations of numbers from 1 to N. We can fix one number at a particular position and check for the divisibility criteria of that number at the particular position. But, we need to keep a track of the numbers which have already been considered earlier so that they aren't reconsidered while generating the permutations. If the current 
number doesn't satisfy the divisibility criteria, we can leave all the permutations that can be generated with that number at the particular position. This helps to prune the search space of the permutations to a great extent. We do so by trying to place each of the numbers at each position.


We make use of a visited array of size $$N$$. Here, $$visited[i]$$ refers to the $$i^{th}$$ number being already placed/not placed in the array being formed till now(True indicates that the number has already been placed).

We make use of a `calculate` function, which puts all the numbers pending numbers from 1 to N(i.e. not placed till now in the array), indicated by a $$False$$ at the corresponding $$visited[i]$$ position, and tries to create all the permutations with those numbers starting from the $$pos$$ index onwards in the current array. While putting the $$pos^{th}$$ number, we check whether the $$i^{th}$$ number satisfies the divisibility criteria on the go i.e. we continue forward with creating the permutations with the number $$i$$ at the $$pos^{th}$$ position only if the number $$i$$ and $$pos$$ satisfy the given criteria. Otherwise, we continue with putting the next numbers at the same position and keep on generating the permutations.

Look at the animation below for a better understanding of the methodology:

!?!../Documents/526_Beautiful.json:1000,563!?!

#### Implementation

<iframe src="https://leetcode.com/playground/EVQebXTW/shared" frameBorder="0" width="100%" height="480" name="EVQebXTW"></iframe>

#### Complexity Analysis

* Time complexity : $$O(k)$$. $$k$$ refers to the number of valid permutations.

* Space complexity : $$O(n)$$. $$visited$$ array of size $$n$$ is used. The depth of recursion tree will also go upto $$n$$. Here, $$n$$ refers to the given integer $$n$$.

---