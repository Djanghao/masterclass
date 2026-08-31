# Official Solution

**Link:** [https://leetcode.com/problems/maximum-frequency-of-an-element-after-performing-operations-i/solution/](https://leetcode.com/problems/maximum-frequency-of-an-element-after-performing-operations-i/solution/)

---

### Approach: Sort + Enumerate + Binary Search

#### Intuition

First, handle the constraint $\textit{numOperations}$. Although the problem requires **exactly** $\textit{numOperations}$ operations, since **you can choose several elements to add 0**, and $\textit{numOperations}$ is less than the length of $\textit{nums}$, this effectively means you can select **at most** $\textit{numOperations}$ elements to adjust within the range $[-k, k]$.

Next, consider enumerating the majority element of the target. Let the minimum and maximum values of $\textit{nums}$ be $\textit{num}*{\min}$ and $\textit{num}*{\max}$, respectively. Thus, the enumeration interval is $[\textit{num}*{\min}, \textit{num}*{\max}]$.  

Assume that for each $m_i$, we can calculate the maximum number of elements that can be transformed into $m_i$, denoted as $f_i$. We can then use $f_i$ as a temporary result $\textit{ans}_{\textit{temp}}$ to update the global answer $\textit{ans}$. Since the correct answer must exist for some $m_i$, the correctness of this enumeration is evident.

Next, let’s discuss how to calculate $f_i$.

For each $m_i$, consider the constraint $k$. It is easy to see that only numbers within the range $[m_i - k, m_i + k]$ can be transformed into $m_i$. If we sort $\textit{nums}$, we can use binary search to find:

* the **lower bound element**, i.e., the first element greater than or equal to $m_i - k$ (denoted as $l$), and
* the **upper bound element**, i.e., the last element less than or equal to $m_i + k$ (denoted as $r$).

This means that any $\textit{nums}[i]$ with $i \in [l, r]$ can potentially consume one operation to become $m_i$. To satisfy the constraint of $\textit{numOperations}$ while maximizing the number of elements converted to $m_i$, the value of $f_i$ should be the smaller of the interval length and $\textit{numOperations}$, i.e.,

$$ 
f_i = \min(r - l + 1, \textit{numOperations})
$$ 

There is one final consideration. If the enumerated $m_i$ already exists in $\textit{nums}$, we should not waste operations on those occurrences. Therefore, we preprocess the occurrence count of each number in $\textit{nums}$ and include it in the final calculation of $f_i$. Let the occurrence count of $m_i$ be $\textit{count}_i$; then the final formula becomes

$$ 
f_i = \min(r - l + 1, \textit{numOperations} + \textit{count}_i)
$$ 

#### Implementation

<iframe src="https://leetcode.com/playground/Fh6TmKgN/shared" frameBorder="0" width="100%" height="500" name="Fh6TmKgN"></iframe>

#### Complexity Analysis

Let $n$ be the length of $\textit{nums}$, and $0 \le \textit{nums}[i] \le k$.

- Time complexity: $O(\max(n \log n, k \log n))$. 
  
  Sorting requires $O(n \log n)$, preprocessing requires $O(n)$, and enumerating possible target values requires $O(k \log n)$, leading to a total complexity of $O(\max(n \log n, k \log n))$.

- Space complexity: $O(n)$.

---