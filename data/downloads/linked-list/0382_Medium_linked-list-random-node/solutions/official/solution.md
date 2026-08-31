# Official Solution

**Link:** [https://leetcode.com/problems/linked-list-random-node/solution/](https://leetcode.com/problems/linked-list-random-node/solution/)

---

[TOC]

## Solution

---
### Overview

The solution for this problem could be as simple as it sounds, _i.e._ sampling from a linked list.
However, with the constraint raised by the follow-up question, it becomes more interesting.

As a spoiler alert, in this article we will present an algorithm called [Reservoir sampling](https://en.wikipedia.org/wiki/Reservoir_sampling) which is a family of randomized algorithms for sampling from a population of **_unknown size_**.

---
### Approach 1: Fixed-Range Sampling

**Intuition**

First of all, let us talk about the elephant in the room.
Yes, the problem could be as simple as choosing a random sample from a list, which in our case happens to be a **_linked list_**.

If we are given an array or a linked list with a **known size**, then it would be a no brainer to solve the problem.

>One of the most intuitive ideas would be that we **convert** the linked list into an array. With the array, we would know its size and moreover we could have an instant access to its elements.

**Algorithm**

We are asked to implement two interfaces in the object, namely the `init(head)` and `getRandom()` functions.

The `init(head)` function would be invoked once when we construct the object.
Within which, intuitively we could convert the given linked list into an array for later reuse.

Concerning the `getRandom()` function, with the linked list converted into an array, we could simply sample from this array.

<iframe src="https://leetcode.com/playground/gVRCBDte/shared" frameBorder="0" width="100%" height="500" name="gVRCBDte"></iframe>


The above solution is simple, which happens to be fast as well.
But it comes with two **_caveats_**:

- It requires some space to keep the pool of elements for sampling, which does not meet the constraint asked in the follow-up question, _i.e._ a solution of constant space.

- It cannot cope with the scenario that we have a list with **_ever-growing elements_**, _i.e._ we don't have unlimited memory to hold all the elements.
For example, we have a stream of numbers, and we would like to pick a random number at any given moment.
With the above naive solution, we would have to keep all the numbers in the memory, which is not scalable.

We will address the above caveats in the next approach.


**Complexity Analysis**

- Time Complexity:

    - For the `init(head)` function, its time complexity is $$\mathcal{O}(N)$$ where $$N$$ is the number of elements in the linked list.

    - For the `getRandom()` function, its time complexity is $$\mathcal{O}(1)$$.
    The reason is two-fold: it takes a constant time to generate a random number and the access to any element in the array is of constant time as well.


- Space Complexity: $$\mathcal{O}(N)$$

    - The overall solution requires $$\mathcal{O}(N)$$ space complexity, since we make a copy of elements from the input list.


---
### Approach 2: Reservoir Sampling

**Intuition**

In order to do random sampling over a population of **_unknown size_** with **_constant space_**, the answer is [reservoir sampling](https://en.wikipedia.org/wiki/Reservoir_sampling).
As one will see later, it is an elegant algorithm that can address the two caveats of the previous approach.

>The reservoir sampling algorithm is intended to sample `k` elements from an population of unknown size.
In our case, the `k` happens to be one.

Furthermore, the reservoir sampling is a **_family_** of algorithms which includes several variants over the time.
Here we present a simple albeit slow one, also known as _**Algorithm R**_ by [Alan Waterman](https://en.wikipedia.org/wiki/Reservoir_sampling#cite_note-vitter-1).

```python
# S has items to sample, R will contain the result
def ReservoirSample(S[1..n], R[1..k])
  # fill the reservoir array
  for i := 1 to k
      R[i] := S[i]

  # replace elements with gradually decreasing probability
  for i := k+1 to n
    # randomInteger(a, b) generates a uniform integer
    #   from the inclusive range {a, ..., b} *)
    j := randomInteger(1, i)
    if j <= k
        R[j] := S[i]
```

![reservoir sampling](../Figures/382/382_reservoir_sampling.png)

We summarize the main idea of the algorithm as follows:

- Initially, we fill up an array of reservoir `R[]` with the heading elements from the pool of samples `S[]`.
At the end of the algorithm, the reservoir will contain the final elements we sample from the pool.

- We then iterate through the rest of elements in the pool.
For each element, we need to _decide_ if we want to include it in the reservoir or not.
If so, we will replace an existing element in reservoir with the current element.

One important question that one might have is that how we can ensure that each element has an **equal probability** to be chosen.

>Given the above algorithm, it is guaranteed that at any moment, for each element scanned so far, it has an equal chance to be selected into the reservoir.

Here we provide a simple proof.

- Suppose that we have an element at the index of `i` (and `i > k`), when we reach the element, the chance that it will be selected into the reservoir would be $$\frac{k}{i}$$, as we can see from the algorithm.

- Later on, there is a chance that any chosen element in the reservoir might be **replaced** with the subsequent element.
More specifically, when we reach the element `j` (`j > i`), there would be a chance of $$\frac{1}{j}$$ for any specific element in the reservoir to be replaced.
Because for any specific position in the reservoir, there is $$\frac{1}{j}$$ chance that it might be chosen by the random number generator.
On the other hand, there would be $$\frac{j-1}{j}$$ probability for any specific element in the reservoir to stay in the reservoir at that particular moment of sampling.

- To sum up, in order for any element in the pool to be chosen in the final reservoir, a series of __independent events__ need to occur, namely:
    - Firstly, the element needs to be chosen in the reservoir when we reach the element.
    - Secondly, in the following sampling, the element should remain in the reservoir, _i.e._ not to be replaced.

- Therefore, for a sequence of length `n`, the chance that any element ends up in the final reservoir could be represented in the following formula:

$$
    \frac{k}{i} \cdot \frac{i}{i+1} \cdot \frac{i+1}{i+2} ... \frac{n-1}{n} = \frac{k}{n}
$$


**Algorithm**

Given the intuition above, we can now put it into implementation as follows:

- In the `init()` function, we simply keep the head of the linked list, rather than converting it into array.

- In the `getRandom()` function, we then do a reservoir sampling starting from the head of the linked list.
More specifically, we scan the element one by one and decide whether we should put it into the reservoir (which in our case case happens to be of size one).

<iframe src="https://leetcode.com/playground/GbVmJakj/shared" frameBorder="0" width="100%" height="500" name="GbVmJakj"></iframe>


**Complexity Analysis**

- Time Complexity:

    - For the `init(head)` function, its time complexity is $$\mathcal{O}(1)$$.

    - For the `getRandom()` function, its time complexity is $$\mathcal{O}(N)$$ where $$N$$ is the number of elements in the input list.

- Space Complexity: $$\mathcal{O}(1)$$

    - The overall solution requires $$\mathcal{O}(1)$$ space complexity, since the variables we used in the algorithm are of constant size, regardless the input.


---