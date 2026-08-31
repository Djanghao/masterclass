# Official Solution

**Link:** [https://leetcode.com/problems/maximum-number-of-distinct-elements-after-operations/solution/](https://leetcode.com/problems/maximum-number-of-distinct-elements-after-operations/solution/)

---

### Approach: Greedy

#### Intuition

Since the problem requires that each element in the array $\textit{nums}$ be operated on at most once to maximize the number of distinct elements in $\textit{nums}$, and since each operation can add an integer within the range $[-k, k]$ to the element, let $\textit{minVal}$ be the smallest element and $\textit{maxVal}$ be the largest element in the array $\textit{nums}$. After performing the operations on the entire array, the range of possible values for all elements becomes $[\textit{minVal} - k, \textit{maxVal} + k]$.

To maximize the number of distinct elements, we should greedily choose the smallest available value for each element when constructing it. This approach allows the remaining elements in the array to have a wider value range, thereby potentially creating more distinct elements.

Following this idea, we first sort the elements in $\textit{nums}$ in ascending order, and then consider each element in turn:

*  Consider $\textit{nums}[0]$. According to the greedy principle, the element should be made as small as possible. Therefore, after the operation, $a_0 = \textit{nums}[0] - k$.

* Next, consider $\textit{nums}[1]$. After the operation, its possible value range is $[\textit{nums}[1] - k, \textit{nums}[1] + k]$. Since the element after the operation must be different from $a_0$, the smallest valid value is $a_0 + 1$. According to the greedy principle, to make the element after the operation as small as possible, we have
  $$a_1 = \min(\max(\textit{nums}[1] - k, a_0 + 1), \textit{nums}[1] + k).$$
  If $a_1 > a_0$, then the number of distinct elements increases by 1.

* Following the same logic, we process $\textit{nums}[2], \textit{nums}[3], \dots, \textit{nums}[n-1]$ in order. Each time, we compare the newly constructed element with the previous one and count the total number of distinct elements at the end.

In fact, since the range of possible values for all elements is $[\textit{minVal} - k, \textit{maxVal} + k]$, we could also greedily select the **largest** possible value each time (processing from largest to smallest). This alternative approach yields the same result and is therefore omitted here for brevity.

#### Implementation

<iframe src="https://leetcode.com/playground/UKVmSc6p/shared" frameBorder="0" width="100%" height="344" name="UKVmSc6p"></iframe>

#### Complexity Analysis

Let $n$ be the length of the given array $\textit{nums}$.

- Time complexity: $O(n \log n)$.

  Sorting takes $O(n \log n)$ time, and traversing the array once after sorting takes $O(n)$ time, resulting in a total of $O(n \log n)$.

- Space complexity: $O(\log n)$.

  $O(\log n)$ on average for in-place sorts (like C++’s `std::sort`, Go, Rust, or Java’s primitive `Arrays.sort`). In some languages or data types where merge-based algorithms (like **Timsort**) are used, the space complexity can increase to $O(n)$.

---