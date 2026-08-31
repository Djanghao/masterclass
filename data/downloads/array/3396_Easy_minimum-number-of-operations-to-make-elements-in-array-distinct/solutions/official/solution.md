# Official Solution

**Link:** [https://leetcode.com/problems/minimum-number-of-operations-to-make-elements-in-array-distinct/solution/](https://leetcode.com/problems/minimum-number-of-operations-to-make-elements-in-array-distinct/solution/)

---

[TOC]

## Solution

--- 

### Approach 1: Simulation

#### Intuition

The question requires executing operations to ensure the remaining elements in the array are distinct. The most direct method is to skip $3$ elements from the beginning of the array each time and check for any remaining duplicate elements. We can use a hash map to detect if there are any duplicate elements in the array.

#### Implementation

<iframe src="https://leetcode.com/playground/8cEmFSpe/shared" frameBorder="0" width="100%" height="480" name="8cEmFSpe"></iframe>

#### Complexity Analysis

Let $n$ be the length of the array $\textit{nums}$.

- Time complexity: $O(n^2)$.

Each time it is necessary to check for duplicate elements in the remaining array, the maximum time required is $O(n)$. A total of up to $n$ checks are needed, so the total time is $O(n^2)$.

- Space complexity: $O(n)$.

Each time we check whether an array contains duplicate elements, a hash table needs to be used to record the elements that have already appeared. At most, there can be $n$ elements to record, so the required space is $O(n)$.

#### Approach 2: Reverse traversal

#### Intuition

If the repeated element $x$ appears at indices $i$ and $j$ with $i < j$, then all elements before index $i$ must be removed. This reduces the problem to finding the longest suffix of the array in which all elements are distinct. Since each time it is necessary to remove $3$ elements, to remove all elements before index $i$, i.e., $\textit{nums}[0\cdots i]$, at least $\lceil \dfrac{i+1}{3} \rceil = \lfloor \dfrac{i}{3} \rfloor + 1$ removal operations are required.

If the array length is $n$, we traverse it in reverse order, using $\textit{seen}$ to record the elements that have already appeared. When we reach the first duplicate element $\textit{nums}[i]$, it indicates that the element already exists in the current suffix. We then return the minimum number of operations: $\lfloor \dfrac{i}{3} \rfloor + 1$. If there are no duplicate elements in the array, we return $0$.

#### Implementation

<iframe src="https://leetcode.com/playground/TdEtyefQ/shared" frameBorder="0" width="100%" height="276" name="TdEtyefQ"></iframe>

#### Complexity Analysis

Let $n$ be the length of the array $\textit{nums}$.

- Time complexity: $O(n)$.

We only need to traverse the array once.

- Space complexity: $O(n)$.

A hash map is used to store the traversed elements. Since up to $n$ elements may be stored, the required space is $O(n)$.