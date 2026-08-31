# Official Solution

**Link:** [https://leetcode.com/problems/two-sum-iii-data-structure-design/solution/](https://leetcode.com/problems/two-sum-iii-data-structure-design/solution/)

---

[TOC]

## Solution

---
### Approach 1: Sorted List

**Intuition**

First of all, the problem description is not terribly clear on the requirements of _time_ and _space_ complexity. But let us consider this as part of the challenge or a freedom of design. We could figure out the desired complexity for each function, by trial and error.

This is one of the followup problems to the first programming problem on LeetCode called [Two Sum](https://leetcode.com/problems/two-sum/), where one is asked to return the indice of two numbers from a **_list_** that could sum up to a given value.

>Let us take the inspiration from the origin problem, by keeping all the incoming numbers in a _list_.

Given a list, one of the solutions to the Two Sum problem is called **_Two-Pointers Iteration_** where we iterate through the list from two directions with _two pointers_ approaching each other.

![pic](../Figures/170/170_two_pointers.png)

>However, one of the preconditions for the Two-Pointers Iteration solution is that the input list should be _**sorted**_. 

So now, here are the questions:

- Should we keep the list in order while inserting new numbers in the function `add(number)` ? 

- Or should we do the sorting on demand, _i.e._ at the invocation of `find(value)` ?

We will address the above two questions later in the Algorithm section.

**Algorithm**

Let us first give the algorithm of Two-Pointers Iteration to find the two-sum solution from a _sorted_ list:

- We initialize **two pointers** `low` and `high` which point to the head and the tail elements of the list respectively.

- With the two pointers, we start a **loop** to iterate the list. The loop would terminate either we find the two-sum solution or the two pointers meet each other.

- Within the loop, at each step, we would move either of the pointers, according to different conditions:

    - If the sum of the elements pointed by the current pointers is _**less than**_ the desired value, then we should try to increase the sum to meet the desired value, _i.e._ we should move the `low` pointer forwards to have a larger value.

    - Similarly if the sum of the elements pointed by the current pointers is _**greater than**_ the desired value, we then should try to reduce the sum by moving the `high` pointer towards the `low` pointer. 

    - If the sum happen to the desired value, then we could simply do an **early return** of the function.

- If the loop is terminated at the case where the two pointers meet each other, then we can be sure that there is no solution to the desired value.


<iframe src="https://leetcode.com/playground/HArVJUjM/shared" frameBorder="0" width="100%" height="500" name="HArVJUjM"></iframe>

>The usage pattern of the desired data structure in the online judge, as we would discover, is that the `add(number)` function would be called **frequently** which might be followed a less frequent call of `find(value)` function.

The usage pattern implies that we should try to minimize the cost of `add(number)` function. As a result, we sort the list within the `find(value)` function instead of the `add(number)` function.

_So to the above questions about where to place the sort operation, actually both options are valid and correct._ Due to the usage pattern of the two functions though, it is **less optimal** to sort the list at each _add_ operation.

On the other hand, we do not do sorting at each occasion of `find(value)` neither. But rather, we sort on demand, _i.e._ only when the list is updated. As a result, we **_amortize_** the cost of the sorting over the time. And this is the optimization trick for the solution to pass the online judge.

**Complexity Analysis**

- Time Complexity:

    - For the `add(number)` function: $$\mathcal{O}(1)$$, since we simply append the element into the list.

    - For the `find(value)` function: $$\mathcal{O}(N \cdot \log(N))$$. In the worst case, we would need to sort the list first, which is of $$\mathcal{O}(N \cdot \log(N))$$  time complexity normally. And later, again in the worst case we need to iterate through the entire list, which is of $$\mathcal{O}(N)$$ time complexity. As a result, the overall time complexity of the function lies on  $$\mathcal{O}(N \cdot \log(N))$$ of the sorting operation, which dominates over the later iteration part.

- Space Complexity: the overall space complexity of the data structure is $$\mathcal{O}(N)$$ where $$N$$ is the total number of _numbers_ that have been added.
<br/>
<br/>

---
### Approach 2: HashTable

**Intuition**

As an alternative solution to the original [Two Sum](https://leetcode.com/problems/two-sum/) problem, one could employ the _HashTable_ to index each number.

>Given a desired sum value `S`, for each number `a`, we just need to verify if there exists a complement number (`S-a`) in the table.

As we know, the data structure of hashtable could offer us a quick _lookup_ as well as _insertion_ operations, which fits well with the above requirements.


**Algorithm**

- First, we initialize a _hashtable_ container in our data structure.

- For the `add(number)` function, we build a frequency hashtable with the _number_ as key and the frequency of the _number_ as the value in the table.

- For the `find(value)` function, we then iterate through the hashtable over the keys. For each key (`number`), we check if there exists a complement (`value - number`) in the table. If so, we could terminate the loop and return the result.

- In a particular case, where the number and its complement are equal, we then need to check if there exists _at least_ **two copies** of the _number_ in the table.

We illustrate the algorithm in the following figure:

![pic](../Figures/170/170_hashtable.png)

<iframe src="https://leetcode.com/playground/RVTWQrc9/shared" frameBorder="0" width="100%" height="500" name="RVTWQrc9"></iframe>


**Complexity Analysis**

- Time Complexity:

    - For the `add(number)` function: $$\mathcal{O}(1)$$, since it takes a constant time to update an entry in hashtable.

    - For the `find(value)` function: $$\mathcal{O}(N)$$, where $$N$$ is the total number of **unique** _numbers_. In the worst case, we would iterate through the entire table.

- Space Complexity: $$\mathcal{O}(N)$$, where $$N$$ is the total number of **unique** _numbers_ that we will see during the usage of the data structure.