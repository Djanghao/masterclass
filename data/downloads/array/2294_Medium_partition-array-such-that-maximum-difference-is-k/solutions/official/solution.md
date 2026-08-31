# Official Solution

**Link:** [https://leetcode.com/problems/partition-array-such-that-maximum-difference-is-k/solution/](https://leetcode.com/problems/partition-array-such-that-maximum-difference-is-k/solution/)

---

[TOC]

## Solution

---

### Approach: Sort + Greedy

#### Intuition

The task requires us to group the numbers in the $\textit{nums}$ array such that the difference between the minimum and maximum values in each group is no more than $k$, and the total number of groups is minimized.

We can consider a greedy approach here: for each group, we include as many numbers as possible. Since the order of elements does not affect the grouping, we can sort the array first. Then, we traverse the array $\textit{nums}$ and start a new group whenever necessary. We record the minimum value $\textit{rec}$ of the current group. As we iterate, if the current element $\textit{nums}[i]$ satisfies $\textit{nums}[i] - \textit{rec} > k$, it means a new group must be started.

The correctness of this greedy strategy can be explained as follows:

1. Suppose the minimum value of a group is $\textit{start}$. Then, the valid range for that group is $[\textit{start}, \textit{start} + k]$. Since we add all elements within this range to the current group, removing any of them wouldn't reduce the number of groups—it would either stay the same or increase. Thus, including all such elements in a group ensures we use the fewest groups possible.
2. According to our strategy, we start a new group only when an element exceeds $\textit{start} + k$. This guarantees that no element is counted in more than one group. If there were overlap between two groups, the overlapping elements could be moved to the first group, which would increase the second group's minimum value and its upper bound, possibly allowing more elements to be grouped together. This either reduces or maintains the number of groups, proving the greedy method does not produce a worse result.

#### Implementation

<iframe src="https://leetcode.com/playground/Ynk3HRjW/shared" frameBorder="0" width="100%" height="310" name="Ynk3HRjW"></iframe>

#### Complexity analysis

Let $n$ be the length of the array $\textit{nums}$.

- Time complexity: $O(n \log n)$.
  
  We sort the array $\textit{nums}$ in $O(n \log n)$ time. Then, we traverse the sorted array once, which takes $O(n)$ time. Therefore, the overall time complexity is $O(n \log n)$.

- Space complexity: $O(S_n)$.
  
  The space complexity is determined by the space needed by our sorting algorithm to sort `nums`. This space complexity ($S$) depends on the language of implementation. Given input size $n$:

  In Java, `Arrays.sort()` is implemented using a variant of the Quick Sort algorithm which has a space complexity of $O( \log n)$.
  In C++, the `sort()` function is implemented as a hybrid of Quick Sort, Heap Sort, and Insertion Sort, with a worst-case space complexity of $O(\log n)$.
  In Python, the `sort()` method sorts a list using the Timsort algorithm which is a combination of Merge Sort and Insertion Sort and has a space complexity of $O(n)$.