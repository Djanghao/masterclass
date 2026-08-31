# Official Solution

**Link:** [https://leetcode.com/problems/maximum-number-of-events-that-can-be-attended/solution/](https://leetcode.com/problems/maximum-number-of-events-that-can-be-attended/solution/)

---

### Approach: Greedy

#### Intuition

According to the problem statement, meeting $i$ starts on $\textit{startDay}_i$ and ends on $\textit{endDay}_i$. You are allowed to attend a meeting on any day within the interval $[\textit{startDay}_i, \textit{endDay}_i]$. Since only one meeting can be attended per day, we apply a greedy strategy: if it's possible to attend both meetings $i$ and $j$ on day $k$, we should prioritize the one with the earlier end time, i.e., $\min(\textit{endDay}_i, \textit{endDay}_j)$. This ensures we leave more room to accommodate other meetings later.

Following this principle, we assume that the latest any meeting ends is $\textit{maxDay}$. We can then iterate through each day from $1$ to $\textit{maxDay}$ and greedily choose which meeting to attend on each day. To do this efficiently, we use a min-heap to keep track of the end times of currently available meetings. We also sort all meetings by their start time in advance.

Let the current day be $i$. At each day, we perform the following steps:

+ Add to the candidate queue (the min-heap) all meetings whose start day is less than or equal to $i$. At this point, the heap contains all meetings available to attend on day $i$ or earlier.

+ Remove from the heap all meetings whose end day is less than $i$, as they can no longer be attended.

+ If the heap is not empty, we attend the meeting with the earliest end time (which is at the top of the heap), increment the count of attended meetings by $1$, and remove it from the heap.

Finally, return the total number of meetings attended.

#### Implementation

<iframe src="https://leetcode.com/playground/UdJhEBHM/shared" frameBorder="0" width="100%" height="500" name="UdJhEBHM"></iframe>

#### Complexity analysis

Let $n$ be the number of meetings in the given array $\textit{events}$, and let $T$ be the maximum value of any end time in $\textit{events}$.

- Time complexity: $O((T + n) \log n)$.
  
  Sorting the array $\textit{events}$ takes $O(n \log n)$ time. After sorting, we iterate over each day from $1$ to $T$, giving us $T$ time points to process. For each day, we may add or remove meetings from the priority queue, which maintains at most $n$ elements. Each insertion or deletion operation in the heap takes $O(\log n)$ time. Therefore, the total cost of heap operations across all days is $O(T \log n)$. Combining both steps, the overall time complexity becomes $O((T + n) \log n)$.

- Space complexity: $O(n)$.
  
  We use a priority queue (min-heap) to store the end times of meetings that are available to attend. Since there are at most $n$ meetings, the heap will contain at most $n$ elements at any given time. Thus, the space complexity is $O(n)$.

---