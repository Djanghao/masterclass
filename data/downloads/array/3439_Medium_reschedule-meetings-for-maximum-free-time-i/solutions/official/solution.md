# Official Solution

**Link:** [https://leetcode.com/problems/reschedule-meetings-for-maximum-free-time-i/solution/](https://leetcode.com/problems/reschedule-meetings-for-maximum-free-time-i/solution/)

---

### Approach 1: Greedy + Prefix Sum

#### Intuition

According to the problem description, shifting a meeting can merge the adjacent free time periods on both sides of that meeting. Therefore, when we shift $k$ meetings, the maximum number of free time periods that can be merged is $k + 1$, this happens only when the $k$ meetings are adjacent.

Once the $k$ adjacent meetings to be shifted are fixed, let the start time of the first free time interval to be merged be $\textit{left}$, and the end time of the last free time interval be $\textit{right}$. Then, the total length of the merged $k + 1$ free intervals is equal to the overall time interval $\textit{right} - \textit{left}$ minus the total duration of the $k$ meetings.

We precompute the prefix sums $\textit{sum}$ of the $n$ meeting durations to make it easier to compute the total duration of any $k$ adjacent meetings later. We then enumerate the rightmost meeting among the $k$ adjacent ones, denoted as $i$ (with $i \ge k - 1$), so the $k$ meetings span the interval $[i - k + 1, i]$. For each such $i$, we compute:

- The total duration of the $k$ meetings: $\textit{sum}[i + 1] - \textit{sum}[i - k + 1]$

- The start time of the first available time slot before the $k$ meetings:

$$
\textit{left}_i =
\begin{cases}
0 & \text{if } i \le k - 1 \\
\textit{endTime}[i - k] & \text{if } i > k - 1 \\
\end{cases}
$$

- The end time of the last available time slot after the $k$ meetings:

$$
\textit{right}_i =
\begin{cases}
\textit{eventTime} & \text{if } i = n - 1 \\
\textit{startTime}[i + 1] & \text{otherwise} \\
\end{cases}
$$

So the total length of the merged $k + 1$ free time intervals is:

$$
\textit{right}_i - \textit{left}_i - (\textit{sum}[i + 1] - \textit{sum}[i - k + 1])
$$

Finally, we return the maximum value over all such computations.

#### Implementation

<iframe src="https://leetcode.com/playground/PykrSDg4/shared" frameBorder="0" width="100%" height="463" name="PykrSDg4"></iframe>

#### Complexity analysis

Let $n$ be the number of all meetings.

- Time complexity: $O(n)$.
  
  We need to go through all the meetings.

- Space complexity: $O(n)$.
  
  A array is needed to save the prefix sums.

### Approach 2: Greedy + Sliding Window

#### Intuition

In Approach 1, we used prefix sums to efficiently calculate the total duration of $k$ consecutive meetings. Similarly, in this approach, we can use a sliding window to maintain the total duration of $k$ consecutive meetings. Specifically, we use a variable $t$ to track the total duration of meetings within the current window. For each meeting $i$, we do the following:

- Add meeting $i$ to the current window by updating: $t = t + \textit{endTime}[i] - \textit{startTime}[i]$

- As in Approach 1, compute the start and end of the merged free interval:
  - Left boundary:
      $$
    \textit{left}_i = 
    \begin{cases}
    0 & \text{if } i \le k - 1 \\
    \textit{endTime}[i - k] & \text{if } i > k - 1 \\
    \end{cases}
    $$
   
  - Right boundary:
    $$
    \textit{right}_i =
    \begin{cases}
    \textit{eventTime} & \text{if } i = n - 1 \\
    \textit{startTime}[i + 1] & \text{otherwise} \\
    \end{cases}
    $$
    
- When the window reaches size $k$ (i.e., $i \ge k - 1$), we compute the total length of the merged $k + 1$ free intervals:
  $$
  \textit{right}_i - \textit{left}_i - t
  $$
  
- After that, we remove the earliest meeting in the window (meeting $i - k + 1$) to maintain the window size at most $k$: $t = t - (\textit{endTime}[i - k + 1] - \textit{startTime}[i - k + 1])$

We return the maximum total length of the merged free time intervals across all valid windows.

#### Implementation

<iframe src="https://leetcode.com/playground/iu5Jnk5f/shared" frameBorder="0" width="100%" height="500" name="iu5Jnk5f"></iframe>

#### Complexity analysis

Let $n$ be the number of all meetings.

- Time complexity: $O(n)$.
  
  We need to go through all the meetings.

- Space complexity: $O(1)$.