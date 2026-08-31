# Official Solution

**Link:** [https://leetcode.com/problems/count-special-triplets/solution/](https://leetcode.com/problems/count-special-triplets/solution/)

---

### Approach 1: Enumeration + Counting

#### Intuition

According to the problem statement, it is easy to observe that for the triplet (i, j, k), we have nums[i] = nums[k]. Consider counting by enumerating the numbers on both sides or in the middle.

Enumerating numbers on both sides, for example enumerating $\textit{nums}[i]$, and searching for valid $(j, k)$ pairs requires maintaining the relative position information between numbers in the $\textit{nums}$ array, which is tedious and difficult to implement under this data range constraint.

Instead, consider enumerating the middle element $\textit{nums}[j]$. At this point, we only need to know how many numbers on both sides are equal to $\textit{nums}[j] \times 2$ so that we can compute the contribution of $\textit{nums}[j]$ to the answer.

Suppose there are $\textit{LeftCnt}$ indices that meet the condition on the left side of the current position and $\textit{RightCnt}$ indices that meet the condition on the right side. According to the multiplication principle for counting problems, their contribution to the answer is $\textit{LeftCnt} \times \textit{RightCnt} \bmod (10^9 + 7)$.

Now consider how to calculate $\textit{LeftCnt}$ and $\textit{RightCnt}$.

Use a hash table to count the elements in $\textit{nums}$. Maintain two hash tables, $\textit{numCnt}$ and $\textit{numPartialCnt}$, representing the total number of occurrences of each element in the entire array and the number of occurrences up to the current traversal position, respectively.

We can precompute $\textit{numCnt}$ and then update $\textit{numPartialCnt}$ while enumerating. Let the target value to be searched at this point be $t$ (that is, twice $\textit{nums}[j]$). It follows that $\textit{LeftCnt} = \textit{numPartialCnt}[t]$ and $\textit{RightCnt} = \textit{numCnt}[t] - \textit{numPartialCnt}[t]$.

Finally, note the impact of the current element when updating $\textit{numPartialCnt}$. When $\textit{nums}[j] = 0$, we are looking for three identical numbers, so the update must occur after calculating $\textit{LeftCnt}$ and before calculating $\textit{RightCnt}$.

#### Implementation

<iframe src="https://leetcode.com/playground/amc3G4Rn/shared" frameBorder="0" width="100%" height="500" name="amc3G4Rn"></iframe>

#### Complexity Analysis

Let $n$ be the length of $\textit{nums}$.

- Time complexity: $O(n)$.
  
  Traversing $\textit{nums}$ takes $O(n)$ and accessing the hash table takes $O(1)$, so the total complexity is $O(n)$.

- Space complexity: $O(n)$.
  
  The hash tables require $O(n)$ space.

### Approach 2: Enumeration + Binary Search

#### Intuition

The basic idea is the same as in the first method, the difference being that after building the position index, binary search is used to compute $\textit{LeftCnt}$ and $\textit{RightCnt}$.

Use a hash table $\textit{pos}$ to build the position index for each element, storing the sequence of indices where the element appears in $\textit{nums}$.

Since the length of the index sequence indicates the number of occurrences of each element, for the current position $j$, we can compute $\textit{LeftCnt}$ and $\textit{RightCnt}$ by performing a binary search to find the position of $j$ in the target element’s index sequence.

#### Implementation

<iframe src="https://leetcode.com/playground/Nc3RTaK5/shared" frameBorder="0" width="100%" height="500" name="Nc3RTaK5"></iframe>

#### Complexity Analysis

Let $n$ be the length of $\textit{nums}$.

- Time complexity: $O(n \log n)$.
  
  Traversing $\textit{nums}$ takes $O(n)$, hash table access takes $O(1)$, and binary search takes $O(\log n)$, giving a total of $O(n \log n)$.

- Space complexity: $O(n)$.
  
  The hash table stores index sequences and requires $O(n)$ space on average.

---