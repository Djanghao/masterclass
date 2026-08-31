# Official Solution

**Link:** [https://leetcode.com/problems/number-of-longest-increasing-subsequence/solution/](https://leetcode.com/problems/number-of-longest-increasing-subsequence/solution/)

---

[TOC]

## Solution

--- 

>**Note.** For this problem, we assume that you already know the fundamentals of dynamic programming and are figuring out how to apply it to a wide range of problems, such as this one. If you are not yet at this stage, we recommend checking out our relevant [Explore Card content on dynamic programming](https://leetcode.com/explore/featured/card/dynamic-programming/) before returning to this article.

### Approach 1: Bottom-up Dynamic Programming

#### Intuition

Before attempting this problem, please first solve [Longest Increasing Subsequence](https://leetcode.com/problems/longest-increasing-subsequence/), which this problem is a follow up to.

Consider an array $\text{nums}$ of length $n$ representing a sequence of numbers. To find the number of longest increasing subsequences (LISs) in this array, we introduce two dynamic programming (DP) arrays: $\text{length}$ and $\text{count}$.

$\text{length}[i]$ represents the length of the LIS ending at index $i$ in the $\text{nums}$ array, while $\text{count}[i]$ denotes the count of LISs ending at index $i$.

Notice that $\text{length}$ here represents the answer to **Longest Increasing Subsequence** and $\text{count}$ represents the answer to this problem.

!?!../Documents/673/slideshow.json:1000,500!?!

For instance, given $\text{nums} = [1, 3, 2, 4]$, we can illustrate the purpose of these arrays. Here, $\text{length}[0] = 1$ because the longest increasing subsequence ending at index $0$ is the number $1$ itself. Similarly, $\text{length}[1] = 2$ as the LIS ending at index $1$ is $[1, 3]$. Continuing, $\text{length}[2] = 2$ since the LIS ending at index $2$ is $[1, 2]$. Finally, $\text{length}[3] = 3$ as the LIS ending at index $3$ is either $[1, 3, 4]$ or $[1, 2, 4]$.

In addition, we use $\text{count}$ to keep track of the count of the longest increasing subsequences. In the example above, $\text{count}[0] = 1$ because only one LIS ends at index $0$. Similarly, $\text{count}[1] = 1$ and $\text{count}[2] = 1$ since one LIS is ending at each of those indices. $\text{count}[3] = 2$ because there are two LISs ending at index $3$.

By utilizing these two DP arrays, we can efficiently compute the count of the LISs in the given $\text{nums}$ array.

Initially, every subsequence consisting of a single element is increasing. Therefore, we initialize $\text{length}[i] = 1$ and $\text{count}[i] = 1$ for all indices $i$ in the array. As we iterate through the array, if we encounter a longer subsequence ending at index $i$, we update the values of $\text{length}[i]$ and $\text{count}[i]$ accordingly.

To compute the DP values for index $i$, we first calculate the values for all positions $j < i$.

For each index $j$ such that $j < i$ and $\text{nums}[j] < \text{nums}[i]$, we can extend any increasing subsequence that ends at index $j$ by adding the element at index $i$. The length of the LIS ending at position $j$ is $\text{length}[j]$. By extending the subsequence, we obtain a new subsequence of length $\text{length}[j] + 1$ that ends at index $i$. We update the $\text{length}[i]$ value to be the maximum length of an increasing subsequence ending at index $i$ seen so far.

If $\text{length}[j] + 1 > \text{length}[i]$, it means we have found a longer subsequence ending at index $i$. In this case, we update $\text{length}[i]$ to $\text{length}[j] + 1$. Additionally, we discard any subsequences we saw earlier since they are no longer LIS: reset $\text{count}[i]$ to zero.

Next, we check the equality $\text{length}[j] + 1 = \text{length}[i]$. If $\text{length}[j] + 1 = \text{length}[i]$, it implies that we can extend every LIS ending at index $j$ with the element $\text{nums}[i]$ to create new longest increasing subsequences ending at index $i$. Therefore, we add $\text{count}[j]$ to $\text{count}[i]$ to count all subsequences that include both indices $j$ and $i$. Note that $\text{length}[i]$ might have just become $\text{length}[j] + 1$ during the previous step.

Let's consider the length of the LIS of the entire array $\text{nums}$, denoted as $\text{maxLength}$, which equals the maximum $\text{length}[i]$. By finding $\text{maxLength}$, we determine the target length we aim to achieve for our subsequences.

To calculate $\text{result}$, the total number of LISs in the array, we need to sum up the $\text{count}[i]$ values for all indices $i$ where the length of the subsequence, $\text{length}[i]$, is equal to $\text{maxLength}$. These indices represent the endpoints of the longest increasing subsequences in the array. By adding up their corresponding $\text{count}[i]$ values, we account for all possible LISs.

#### Algorithm

1. Declare two DP arrays $\text{length}$ and $\text{count}$, and initialize $\text{length}[i] = 1$, $\text{count}[i] = 1$.
2. Iterate $i$ from $0$ to $n - 1$.
	* Iterate $j$ from $0$ to $i - 1$.
		* If $\text{nums}[j] < \text{nums}[i]$.
			* If $\text{length}[j] + 1 > \text{length}[i]$, update $\text{length}[i]$ with $\text{length}[j] + 1$ and set $\text{count}[i]$ to zero.
			* If $\text{length}[j] + 1 = \text{length}[i]$, add $\text{count}[j]$ to $\text{count}[i]$.
3. Let $\text{maxLength}$ be the maximum value in the array $\text{length}$.
4. Initialize $\text{result} = 0$.
5. Iterate $i$ from $0$ to $n - 1$.
	* If $\text{length}[i] = \text{maxLength}$, add $\text{count}[i]$ to $\text{result}$.
6. Return $\text{result}$.

#### Implementation


<iframe src="https://leetcode.com/playground/Q6GAPagG/shared" frameBorder="0" width="100%" height="500" name="Q6GAPagG"></iframe>


#### Complexity Analysis

* Time Complexity: $O(n^2)$.

The nested loops iterate over the input array $\text{nums}$, resulting in an overall time complexity of $O(n^2)$, where $n$ is the array length. The outer loop iterates $n$ times, and the inner loop iterates up to $i$ times, where $i$ ranges from $0$ to $n-1$.

* Space Complexity: $O(n)$.

We store two DP arrays: $\text{length}$ and $\text{count}$, each with a length of $n$. Therefore, the space required to store these arrays is $O(n)$.

---

### Approach 2: Top-down Dynamic Programming (Memoization)

#### Intuition

In this approach, we will calculate the DP arrays $\text{length}$ and $\text{count}$ using the same recurrence relation as in the previous one, but the organization of computations will be different.

We will utilize a recursive function called $\text{calculateDP}(i)$ that computes the DP values $\text{length}[i]$ and $\text{count}[i]$ when called for the first time with a particular $i$ value. Once the values $\text{length}[i]$ and $\text{count}[i]$ are computed, subsequent calls to $\text{calculateDP}(i)$ will terminate immediately.

For example, when we first call $\text{calculateDP}(4)$, it computes $\text{length}[4]$ and $\text{count}[4]$. When we make subsequent calls to $\text{calculateDP}(4)$, it returns immediately.

This approach ensures that we calculate the DP value for each state (each $i$) only once.

To compute $\text{length}[i]$ and $\text{count}[i]$, we will follow the same steps as in the previous approach: iterate over $j$ such that $j < i$ and $\text{nums}[j] < \text{nums}[i]$, and update the DP values for $i$ using the DP values for $j$.

To determine whether we need to compute the DP values for $i$ or return immediately, we can initialize the DP arrays $\text{length}$ and $\text{count}$ with zeros. Thus, $\text{length}[i] = 0$ will indicate that we have not yet computed the DP values for $i$. Once we find the result for $i$, we will update $\text{length}[i]$ and $\text{count}[i]$, and $\text{length}[i]$ will no longer be zero, indicating that we have computed the values.

#### Algorithm

The function $\text{calculateDP}$ takes a parameter $i$.
1. If $\text{length}[i] \ne 0$ (which means that we found this value earlier), return from the function.
2. Assign $\text{length}[i] = 1$, $\text{count}[i] = 1$ (the DP initialization).
3. Iterate $j$ from $0$ to $i - 1$.
	* If $\text{nums}[j] < \text{nums}[i]$.
		* Call $\text{calculateDP}(j)$ recursively to ensure that $\text{length}[j]$ and $\text{count}[j]$ are calculated.
		* If $\text{length}[j] + 1 > \text{length}[i]$, update $\text{length}[i]$ with $\text{length}[j] + 1$ and set $\text{count}[i]$ to zero.
		* If $\text{length}[j] + 1 = \text{length}[i]$, add $\text{count}[j]$ to $\text{count}[i]$.

In the main function, one needs to do the following.
1. Initialize $\text{maxLength} = 0$ and $\text{result} = 0$.
2. Iterate $i$ from $0$ to $n - 1$.
	* Call $\text{calculateDP}(i)$.
	* Assign $\text{maxLength} = \max(\text{maxLength}, \text{length}[i])$.
3. Iterate $i$ from $0$ to $n - 1$.
	* If $\text{length}[i] = \text{maxLength}$, add $\text{count}[i]$ to $\text{result}$.
4. Return $\text{result}$.

#### Implementation

<iframe src="https://leetcode.com/playground/eWJZudA2/shared" frameBorder="0" width="100%" height="500" name="eWJZudA2"></iframe>


#### Complexity Analysis

* Time Complexity: $O(n^2)$.

Even though we changed the order in which we calculate DP, the time complexity is the same as in the previous approach: for each $i$, we compute $\text{length}[i]$ and $\text{count}[i]$ in $O(n)$. 

* Space Complexity: $O(n)$.

We store the DP arrays $\text{length}$ and $\text{count}$ of size $n$, as in the previous approach.