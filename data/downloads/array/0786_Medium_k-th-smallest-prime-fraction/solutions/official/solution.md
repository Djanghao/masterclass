# Official Solution

**Link:** [https://leetcode.com/problems/k-th-smallest-prime-fraction/solution/](https://leetcode.com/problems/k-th-smallest-prime-fraction/solution/)

---

[TOC]

## Solution

---

### Overview

We need to find the <code class="">k<sup>th</sup></code> smallest fraction formed by dividing elements at different indices of a sorted array containing only `1` and prime numbers. The task is to return an array of two elements representing the numerator and denominator of the <code class="">k<sup>th</sup></code> smallest fraction.

---

### Approach 1: Binary Search

#### Intuition

To count the number of fractions smaller than a given fraction, we can iterate through the array and consider all possible pairs of indices `(i, j)` where `i < j`. For each pair, we check if the fraction formed by `arr[i] / arr[j]` is smaller than the given fraction. If it is, we increment the count.

Since the array is sorted, we notice that if `arr[i] / arr[j]` is smaller than the given fraction, then all subsequent fractions formed by `arr[i] / arr[k]` where `k > j` will also be smaller than the given fraction.

If we apply the above strategy, the fractions formed by dividing elements at different indices in the sorted array will maintain their sorted order. This enables us to efficiently solve the problem using binary search.

Now, the key question arises: How can we determine how many fractions are smaller than a given value? Since the array is sorted, we can count fractions by comparing their values against a reference value.

This reference value can be any fraction between `0` and `1`. As the array contains only `1` and prime numbers, we know that all the fractions will be between `0` and `1`. Therefore, we can set the initial search range to `[0, 1)`. We initialize two pointers, `left` and `right`, representing the lower and upper bounds of the possible fractions.

We use binary search to iteratively narrow down the search space for the <code class="">k<sup>th</sup></code> smallest fraction. At each step, we calculate the midpoint of the range (`mid`). Using a two-pointer approach, we compare each element of the array to `mid` and keep a count of how many fractions are smaller than or equal to it. This count helps in evaluating whether to adjust the left or right bounds of our search range and also ensures that we methodically pinpoint the precise <code class="">k<sup>th</sup></code> fraction by reducing the interval based on the number of smaller fractions found.

However, while iterating through the array, we're also exploring the set of possible fractions, gradually revealing the smallest fractions first. During this exploration, we maintain a record of the maximum fraction encountered so far within the current search range.

Now, why is this maximum fraction significant? In a sorted array of unique numbers, the fractions increase gradually as we move left to right. If we've encountered `k` or more fractions smaller than or equal to this maximum fraction, then this maximum fraction is the <code class="">k<sup>th</sup></code> smallest fraction.

Finally, we adjust the search range based on the count of smaller fractions. If the count equals `k`, we return the current maximum fraction as the <code class="">k<sup>th</sup></code> smallest fraction. If the count is greater than `k`, we move the right pointer to `mid`. Else, we move the left pointer to `mid`.

#### Algorithm

- Initialize the variable `n` to store the size of the input array `arr`. Set `left` to 0 and `right` to 1.0 to establish the initial range for binary search.
- Enter a binary search loop while the left boundary (`left`) is less than the right boundary (`right`).
    - Calculate the midpoint of the current range, denoted as `mid`, by averaging `left` and `right`.
    - Create variables to keep track of key metrics: `maxFraction` to store the maximum fraction encountered, `totalSmallerFractions` to count the number of fractions smaller than `mid`, and `numeratorIdx` and `denominatorIdx` to record the indices of the numerator and denominator of the maximum fraction.
    - Initialize `j` to 1, representing the index for the denominator in the array.
    - Iterate through the array `arr` to identify fractions smaller than `mid`.
        - Increment `j` until the fraction (`arr[i] / arr[j]`) is less than or equal to `mid`, effectively finding the right boundary for the current numerator.
        - Increment `totalSmallerFractions` by the count of elements between `j` and `n`.
        - Exit the loop if `j` reaches the end of the array `arr`.
        - Calculate the fraction `arr[i] / arr[j]` and update `maxFraction`, `numeratorIdx`, and `denominatorIdx` if the calculated fraction exceeds the current maximum fraction.
    - Check if `totalSmallerFractions` equals `k`. If it does, return the fraction with the numerator at index `numeratorIdx` and the denominator at index `denominatorIdx`.
    - If `totalSmallerFractions` exceeds `k`, update the right boundary of the search range (`right`) to `mid` to focus on the left portion of the range.
    - If `totalSmallerFractions` is less than `k`, update the left boundary of the search range (`left`) to `mid` to focus on the right portion of the range.
- If the loop concludes without finding the <code class="">k<sup>th</sup></code> smallest prime fraction, return an empty array.

#### Implementation

<iframe src="https://leetcode.com/playground/NesZhUEz/shared" frameBorder="0" width="100%" height="500" name="NesZhUEz"></iframe>

#### Complexity Analysis

Let $n$ be the size of the input array and $m$ be the maximum value in the array.

- Time complexity: $O(n \cdot log(m))$

    The algorithm uses binary search. Within each iteration of the binary search, we perform a linear scan through the array to count the number of fractions smaller than the current `mid` value. Since the array is sorted, this linear scan takes $O(n)$ time. 
    
    Binary search takes $O(\log x )$ where $x$ is the number of elements in the search space because each iteration reduces the size of the search space by half. We will stop generating fractions and terminate the search when the total number of smaller fractions equals `k`. This will happen when the size of the search space becomes smaller than the smallest possible difference between two fractions, which is $\frac{1}{m^2}$. 
    
    This means the size of the search space can be up to ${m^2}$. Therefore, the total time complexity is $O(n \cdot log(m^2))$, which simplifies to $O(n \cdot log(m))$.

- Space complexity: $O(1)$

    The algorithm uses constant space becuase we only use a constant amount of extra space for storing variables regardless of the input size. We don't use any additional data structures whose size depends on the input size.

---

### Approach 2: Priority Queue

#### Intuition

The binary search approach involves iterating through the array for each fraction being tested, which can be time-consuming, especially for large arrays.

To optimize this process, we can leverage the property that the smallest fractions will be formed by dividing each element by the largest element in the array. This observation leads us to the idea of using a priority queue data structure, which can efficiently maintain and update the smallest fractions as we explore the search space.

Consider an input array $[n_1, n_2, n_3, n_4, n_5]$, where $n_1 < n_2 < n_3 < n_4 < n_5$. The possible fractions that can be formed from different indices of the input are:

$
\begin{array}{cccccc}
\Large{\frac{n_1}{n_5}} & \Large{\frac{n_1}{n_4}} & \Large{\frac{n_1}{n_3}} & \Large{\frac{n_1}{n_2}} \\
\\
\Large{\frac{n_2}{n_5}} & \Large{\frac{n_2}{n_4}} & \Large{\frac{n_2}{n_3}} \\
\\
\Large{\frac{n_3}{n_5}} & \Large{\frac{n_3}{n_4}} \\
\\
\Large{\frac{n_4}{n_5}} \\
\\
\\
\end{array}
$

We can observe that for each numerator, the smallest fraction will be formed by dividing by the largest element ($n_5$).

The first step is to initialize a priority queue that stores pairs in the form `{-fraction, {numerator_index, denominator_index}}`. The negative sign is used to make the priority queue sort the fractions in ascending order (smallest fraction first).

After that, we can start by pushing all possible fractions formed by dividing each element by the last element of the array into the priority queue. This is because the last element of the sorted array is the largest.

After populating the priority queue, we observe that the top element of the queue will be the smallest fraction among all fractions formed by dividing each element by the last element.

Now, to find the <code class="">k<sup>th</sup></code> smallest fraction, we can iteratively remove the top element from the priority queue and replace it with a new fraction formed by dividing the same numerator by the next smaller denominator. This is done by decrementing the denominator index and pushing the new fraction into the priority queue.

The reason we decrement the denominator is that, suppose we have an array `[1, 2, 3, 4, 5]`. If we start with the largest denominator (`5`) and keep the numerator fixed (`1`), then decrement the denominator in each iteration, we will explore fractions in ascending order:

$\frac{1}{5}, \frac{1}{4}, \frac{1}{3}, \frac{1}{2} $

If we were to keep the denominator fixed and increment the numerator instead, we would explore fractions in descending order:

$ \frac{4}{5}, \frac{3}{5}, \frac{2}{5}, \frac{1}{5}$

While both ways eventually cover all fractions formed by dividing each element by the largest element, the priority queue requires fractions to be explored in ascending order to ensure that the <code class="">k<sup>th</sup></code> smallest fraction is found efficiently.

By decrementing the denominator, we maintain the property that the top element of the priority queue always represents the smallest fraction among those formed by dividing each element by the largest element. This helps us identify the <code class="">k<sup>th</sup></code> smallest fraction more effectively, as the priority queue naturally orders fractions from smallest to largest

Essentially, we replace the smallest fraction with the next smallest fraction having the same numerator. Repeating this `k - 1` times leaves the <code class="">k<sup>th</sup></code> smallest fraction at the top of the priority queue. In a nutshell, it's about finding the `k` smallest elements in `n` sorted linked lists.

The following is an illustration demonstrating the priority queue approach:

!?!../Documents/786/pq.json:978,439!?!

#### Algorithm
 
- Initialize an empty priority queue `pq` to store pairs of fractions and their corresponding indices.
- Iterate through the input array `arr` using a loop variable `i`.
  - For each element `arr[i]`, calculate the fraction formed by dividing it by the largest element in the array (`arr[arr.size() - 1]`).
  - Push a pair consisting of the negative fraction value (`-1.0 * arr[i] / arr[arr.size() - 1]`) and the corresponding indices (`i` for the numerator and `arr.size() - 1` for the denominator) into the priority queue `pq`.
- The priority queue `pq` now contains all the fractions formed by dividing each element by the largest element in the array, sorted in ascending order based on the fraction values.
- Repeat the following steps `k - 1` times:
  - Remove the top element (smallest fraction) from the priority queue `pq` and store its indices in the `cur` variable.
  - Decrement the denominator index (`cur[1]--`).
  - Calculate the new fraction formed by dividing the numerator at `cur[0]` by the decremented denominator (`arr[cur[1]]`).
  - Push the new fraction value (`-1.0 * arr[cur[0]] / arr[cur[1]]`) and its corresponding indices (`cur[0]` for the numerator and `cur[1]` for the denominator) into the priority queue `pq`.
- After `k - 1` iterations, the top element of the priority queue `pq` will be the <code class="">k<sup>th</sup></code> smallest fraction.
- Extract the numerator and denominator indices from the top element of the priority queue and store them in `result`.
- Return a array containing the numerator (`arr[result[0]]`) and denominator (`arr[result[1]]`) values corresponding to the <code class="">k<sup>th</sup></code> smallest fraction.

#### Implementation

<iframe src="https://leetcode.com/playground/M8yvD79e/shared" frameBorder="0" width="100%" height="500" name="M8yvD79e"></iframe>

#### Complexity Analysis

Let $n$ be the size of the input array and $k$ be the integer `k`.

* Time complexity: $O((n + k) \cdot \log n)$ 

    Pushing the initial fractions into the priority queue takes $O(n \log n)$.

    Iteratively removing and replacing fractions takes $O(k \log n)$ and retrieving the <code class="">k<sup>th</sup></code> smallest fraction takes $O(\log n)$.
    
    Thus the overall time complexity of the algorithm is $O(n \log n + k \log n)$, which can write as $O((n + k) \cdot \log n)$ 

* Space complexity: $O(n)$

    The space required by the priority queue to store fractions is $O(n)$ since it can potentially hold all fractions formed by dividing each element by the largest element.

    The additional space used by other variables like `cur`, `numeratorIndex`, `denominatorIndex`, etc., is constant and doesn't depend on the size of the input array.

    Thus the overall space complexity of the algorithm is $O(n)$.

---