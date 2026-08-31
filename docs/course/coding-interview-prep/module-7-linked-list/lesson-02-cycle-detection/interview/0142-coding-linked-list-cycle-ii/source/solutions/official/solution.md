# Official Solution

**Link:** [https://leetcode.com/problems/linked-list-cycle-ii/solution/](https://leetcode.com/problems/linked-list-cycle-ii/solution/)

---

[TOC]

## Solution

---

### Approach 1: Hash Set

>**Note.** For this approach, we assume that you already know what a hash table is and are figuring out how to apply it to a wide range of problems, such as this one. If you are not yet at this stage, we recommend checking out our relevant [Explore Card content on hash table](https://leetcode.com/explore/learn/card/hash-table/) before coming back to this article.

#### Intuition

The fundamental concept behind this approach is that a cycle in a linked list means visiting a node we've already seen before. By keeping track of each node we visit and checking whether we've seen it before, we can identify whether a cycle exists.

A hash set is a data structure that allows us to efficiently check if an element is already present (visited) and also to insert new elements (mark as visited).

So, our strategy here is to traverse the linked list one node at a time and, for each $\text{node}$, check if it is in our hash set $\text{nodes\_seen}$. If we come across a node that is already in our set, then we have encountered a cycle. If not, we add this new node to the set $\text{nodes\_seen}$ and proceed to the next one.

If we manage to reach the end of the list (a null node), then we can conclude that no cycle exists. This is because we would have been stuck in a loop and wouldn't reach the end if there was a cycle.

#### Algorithm

1. Initialize the $\text{node}$ to the head of the linked list and an empty hash set, $\text{nodes\_seen}$.
2. Start from the head of the linked list, and move the $\text{node}$ one step at a time.
3. For each $\text{node}$ that we visit, check if it's already in the $\text{nodes\_seen}$.
	* If it is, it means we've found a cycle. Return the current node as the entry point of the cycle.
	* If it's not in $\text{nodes\_seen}$, then add the current node to $\text{nodes\_seen}$, and move on to the next node.
4. If $\text{node}$ becomes `null` (the end of the list), then return `null`. There's no cycle in the list because we would have been stuck in a loop and wouldn't reach the end if there was a cycle.

#### Implementation


<iframe src="https://leetcode.com/playground/WThoJ2tt/shared" frameBorder="0" width="100%" height="500" name="WThoJ2tt"></iframe>


#### Complexity Analysis

Let $n$ be the total number of nodes in the linked list.

* Time complexity: $O(n)$.

We have to visit all nodes once.

* Space complexity: $O(n)$.

We have to store all nodes in the hash set.

---

### Approach 2: Floyd's Tortoise and Hare Algorithm

#### Intuition

> This algorithm is very difficult to derive on your own and you would not be expected to do so in an interview without any help.

![Tortoise and Hare](../Figures/142/142_tortoise_and_hare.png)​

Floyd's Tortoise and Hare Algorithm is a clever technique that is used to detect cycles in sequences or linked lists. You can imagine it as a race between a fast "hare" and a slow "tortoise." We will explain it in a beginner-friendly way:

Imagine you're in a park, where there is a circular path inside the park and a straight path leading to the circular path. If you start walking on the straight path into the circular path, you'll eventually start walking in a cycle around the circular path.

Now imagine two people: a fast runner (the "hare") and a slow walker (the "tortoise"). They both start at the beginning of the path (the start of the linked list). The hare starts running twice as fast as the tortoise.

If the path does not contain a cycle (no circular path), the hare will reach the end of the straight path first. Let's focus on the case where the cycle exists.

At some point, if there is a cycle (a circular path) in the park, the hare will enter this cycle earlier due to its speed. Eventually, the tortoise will also enter the cycle. Since the hare is moving faster, it will lap the tortoise at some point inside the cycle.

![Cycle](../Figures/142/142_cycle.drawio.png)​

* Let's define $a$ as the length of the path from the start of the list to the entrance of the cycle.
* Let's define $b$ as the length of the path from the cycle's entrance to the meeting point of the hare and the tortoise inside the cycle.
* Let's define $c$ as the total length of the cycle.

The hare could lap the cycle multiple times before it meets the tortoise, especially if the cycle's size is relatively small compared to the distance from the start to the cycle's entrance, or if the cycle's size is big, and the hare enters it significantly before the tortoise does.

When the tortoise and the hare meet inside the cycle, the tortoise has walked $a+b$ distance.

On the other hand, the hare, which moves twice as fast, has covered this distance and maybe a few more laps around the cycle. So, the total distance the hare ran is $a+b$ plus $k \cdot c$, where $k$ is the number of times it lapped the cycle. Because the hare moves twice as fast, this total distance is also equal to $2(a+b)$.

If we set these two equal: $a + b + k \cdot c = 2(a+b)$, we obtain $k \cdot c = a + b$.

This tells us that the number of times the hare laps the cycle times the length of the cycle equals the distance from the head of the list to the meeting point.

The question now is where is the entrance to the cycle?

Here is where the second part of the algorithm comes in: after finding a meeting point inside the cycle, you'll leave the tortoise there and move the hare back to the starting point of the park (or the head of the linked list). Then, have both the hare and the tortoise move at the same pace (one step at a time). When they meet again, that meeting point is the entrance to the cycle.

You may ask, "Why is this the entrance to the cycle?" Well, let's consider the distances each has traveled.

The first time that the hare and the tortoise meet within the cycle, we have established that:
* The tortoise has travelled $a + b$ distance.
* The hare has traveled $a + b + k \cdot c$ distance, where $k$ represents how many times the hare has lapped the cycle.
* Because the hare moves at twice the speed, $a + b + k \cdot c = 2(a+b)$, rearrange for $k \cdot c = a + b$.

If we move the hare back to the start of the straight path and make it move at the same speed as the tortoise, here's what happens:
* The hare has $a$ distance to travel to reach the entrance of the cycle. We can rearrange the above equation to say that the hare will reach the entrance of the cycle in $a = k \cdot c - b$ steps.
* Currently, the tortoise is $b$ away from the entrance of the cycle. In $k \cdot c - b$ steps, where will the tortoise be? Relative to the entrance of the cycle, the tortoise will be at $(k \cdot c - b) + b = k \cdot c$. Because $k$ is an integer, $c$ is defined as the length of the cycle, and this distance is relative to the entrance of the cycle, the tortoise will be at the entrance!

Because the tortoise and hare are now moving at the same speed, after $k \cdot c - b$ steps, they will meet again at the entrance of the cycle. This must be the first time they meet again because the hare has just entered the cycle again for the first time. Therefore, to find the entrance of the cycle, we don't actually need the values of $a, b, c, k$. We can just return the node at which they meet again.

#### Algorithm

1. Initialize the `tortoise` and `hare` pointers to the head of the linked list.
2. Move the `tortoise` one step and the `hare` two steps at a time until they meet or either `hare` or `hare.next` becomes `null`.
3. If the `hare` or `hare.next` pointer is `null`, it means the hare came to the dead end and we return `null` as there is no cycle.
4. Reset the `hare` pointer to the head of the linked list.
5. Move both pointers one step at a time until they meet again. The meeting point is the node where the cycle begins.
6. Return the meeting point node.

#### Implementation

<iframe src="https://leetcode.com/playground/bSJBqJQR/shared" frameBorder="0" width="100%" height="500" name="bSJBqJQR"></iframe>


#### Complexity Analysis

Let $n$ be the total number of nodes in the linked list.

* Time complexity: $O(n)$.

The algorithm consists of two phases. In the first phase, we use two pointers (the "hare" and the "tortoise") to traverse the list. The slow pointer (tortoise) will go through the list only once until it meets the hare. Therefore, this phase runs in $O(n)$ time.

In the second phase, we again have two pointers traversing the list at the same speed until they meet. The maximum distance to be covered in this phase will not be greater than the length of the list (recall that the hare just needs to get back to the entrance of the cycle). So, this phase also runs in $O(n)$ time.

As a result, the total time complexity of the algorithm is $O(n) + O(n)$, which simplifies to $O(n)$.

* Space complexity: $O(1)$.

The space complexity is constant, $O(1)$, because we are only using a fixed amount of space to store the slow and fast pointers. No additional space is used that scales with the input size. So the space complexity of the algorithm is $O(1)$, which means it uses constant space.