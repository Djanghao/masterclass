# Official Solution

**Link:** [https://leetcode.com/problems/build-array-from-permutation/solution/](https://leetcode.com/problems/build-array-from-permutation/solution/)

---

[TOC]

## Solution

--- 

### Approach 1: Build As Required

#### Intuition

We can construct a new array of the same length as the original array $\textit{nums}$, with the element at index $i$ in the new array equal to $\textit{nums}[\textit{nums}[i]]$.

#### Implementation

<iframe src="https://leetcode.com/playground/BFYeMNED/shared" frameBorder="0" width="100%" height="242" name="BFYeMNED"></iframe>

#### Complexity Analysis

Let $n$ be the length of the $\textit{nums}$.

- Time complexity: $O(n)$.

This is the time complexity for constructing the new array.

- Space complexity: $O(1)$.

The output array is not counted in the space complexity.

### Approach 2: Build In Place

#### Intuition

We can also directly modify the original array $\textit{nums}$.

In order to allow the construction process to proceed completely, we need to enable each element $\textit{nums}[i]$ in $\textit{nums}$ to store both the 'current value' (i.e., $\textit{nums}[i]$) and the 'final value' (i.e., $\textit{nums}[\textit{nums}[i]]$).

We noticed that the range of values of the elements in $\textit{nums}$ is $[0, 999]$ inclusive, which means that both the 'current value' and the 'final value' of each element in $\textit{nums}$ are within the closed interval $[0, 999]$.

Therefore, we can use a concept similar to the "$1000$-based system" to represent the "current value" and "final value" of each element. For each element, we use the quotient when it is divided by $1000$ to represent its "final value," and the remainder to represent its "current value."

So, we first traverse $\textit{nums}$, calculate the "final value" of each element, and add $1000$ times that value to the element. Then, we traverse the array again, and divide the value of each element by $1000$, retaining the quotient. At this point, $\textit{nums}$ is the completed array, and we return this array as the answer.

#### Details

When calculating the "final value" of $\textit{nums}[i]$ and modifying the element, we need to calculate the value of $\textit{nums}[\textit{nums}[i]]$ before the modification, and the element at the index $\textit{nums}[i]$ in $\textit{nums}$ may have been modified. Therefore, we need to take the modulus of the value at that index with 1000 to get the "final value".

#### Implementation

<iframe src="https://leetcode.com/playground/BKhRMDXq/shared" frameBorder="0" width="100%" height="310" name="BKhRMDXq"></iframe>

#### Complexity Analysis

Let $n$ be the length of the $\textit{nums}$.

- Time complexity: $O(n)$.

We traversed and modified the $\textit{nums}$ array twice, and the time complexity of each traversal and modification is $O(n)$.

- Space complexity: $O(1)$.

Only a few additional variables are needed.