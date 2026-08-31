# Official Solution

**Link:** [https://leetcode.com/problems/count-mentions-per-user/solution/](https://leetcode.com/problems/count-mentions-per-user/solution/)

---

### Approach: Playback After Sorting

#### Intuition

We first sort all events by time. For events with the same time, offline events should come first, because according to the problem statement, user state changes should be processed and synchronized before all other events that occur at the same time.

After sorting, we process each event in chronological order from front to back. We can use a hash table to record each user's online time, and determine whether the user is online by comparing it with the current time. During traversal:

1. For message events, the cases where the mentioned object is $\textit{ALL}$ or $\textit{HERE}$ are relatively easy to handle. However, for the other case, we need to parse a $\textit{mentions_string}$ that contains multiple specified $\textit{id}$s. This string is composed of multiple $\textit{idx}$ separated by spaces, where $x$ is the integer we need to parse. In most languages, we can concatenate consecutive digits to form an $\textit{id}$ and split when we reach the end of the string or the next character is a space. For languages that provide a string split method, we can split the string by space $\textit{split}$, then remove the prefix of each entry to obtain each user $\textit{id}$.
2. For offline events, set the user's online status in the hash table for sixty units of time after the event.

#### Implementation

<iframe src="https://leetcode.com/playground/RUFueREo/shared" frameBorder="0" width="100%" height="500" name="RUFueREo"></iframe>

#### Complexity Analysis

Let $n$ be $\textit{numberOfUsers}$, $m$ be the length of $\textit{events}$, and $t$ be the maximum timestamp.

- Time complexity: $O(nm + m\log m\log t)$.
  
  The time complexity of sorting $\textit{events}$ is $O(m\log m\log t)$, and timestamp parsing takes $O(\log t)$. Traversing and processing each event takes $O(nm)$.

- Space complexity: $O(n)$.

---