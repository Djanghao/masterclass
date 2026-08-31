# Official Solution

**Link:** [https://leetcode.com/problems/implement-router/solution/](https://leetcode.com/problems/implement-router/solution/)

---

### Approach: Simulation

#### Intuition

This question requires us to implement a router based on the task description. The router needs to support the following operations:

- $\textit{addPacket}$: Add a packet. If the packet already exists in the router’s memory, return $\text{false}$; otherwise, return $\text{true}$. If the router’s memory is full, the oldest packet (smallest timestamp) must be removed before adding the new packet.  
- $\textit{forwardPacket}$: Forward the next packet in first-in-first-out order and return its $\textit{source}$, $\textit{destination}$, and $\textit{timestamp}$ as an array.  
- $\textit{getCount}$: Return the number of packets with a given destination address and timestamps between $\textit{startTime}$ and $\textit{endTime}$ (inclusive).

We first define the members of the $\textit{Router}$ class:

1. $\textit{memLimit}$: an int, representing the size of the router’s memory.  
2. $\textit{length}$: an int, representing the current number of packets in memory.  
3. $\textit{isExist}$: an ordered set of triples (each consisting of ints) that tracks whether a packet exists in memory.  
4. $\textit{sameDestQue}$: an unordered hash table where the key is the packet’s $\textit{destination}$, and the value is a deque of timestamps for packets with that destination.  
5. $\textit{que}$: a deque of triples representing all packets in memory.  

Next, we implement the three operations:

- $\textit{addPacket}$: First, check whether the packet already exists. If it does, return $\text{false}$. If the memory is full, the oldest packet must be removed by calling $\textit{forwardPacket}$. Then, insert the new packet into $\textit{que}$, add its timestamp to $\textit{sameDestQue}$, register it in $\textit{isExist}$, and return $\text{true}$.  
- $\textit{forwardPacket}$: Check if $\textit{que}$ is empty. If it is, return an empty array. Otherwise, remove the first packet from $\textit{que}$, erase it from $\textit{isExist}$, remove its timestamp from $\textit{sameDestQue}$, and return its $\textit{source}$, $\textit{destination}$, and $\textit{timestamp}$.  
- $\textit{getCount}$: In the deque corresponding to $\textit{destination}$ in $\textit{sameDestQue}$, use binary search to count the elements between $\textit{startTime}$ and $\textit{endTime}$.


#### Implementation

<iframe src="https://leetcode.com/playground/oByG2rz5/shared" frameBorder="0" width="100%" height="500" name="oByG2rz5"></iframe>

#### Complexity Analysis

Let $n$ be the router memory size.

- Time complexity:  
    The constructor of $\textit{Router}$ runs in $O(1)$ since it only performs assignments.  
    The $\textit{addPacket}$ operation runs in $O(\log n)$ because of the lookup and insertion in the set.  
    The $\textit{forwardPacket}$ operation also runs in $O(\log n)$ due to deletion from the set.  
    The $\textit{getCount}$ operation runs in $O(\log n)$ because it uses binary search on the deque of timestamps.  

- Space complexity: $O(n)$
    The $\textit{Router}$ class requires $O(n)$ space for storing packets and related data structures. Each method itself uses only constant extra space, so their additional space complexity is $O(1)$.  

---