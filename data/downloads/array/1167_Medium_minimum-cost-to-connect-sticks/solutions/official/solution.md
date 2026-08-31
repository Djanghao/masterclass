# Official Solution

**Link:** [https://leetcode.com/problems/minimum-cost-to-connect-sticks/solution/](https://leetcode.com/problems/minimum-cost-to-connect-sticks/solution/)

---

[TOC]

## Video Solution

---

<div>
    <div class="video-container">
        <iframe src="https://player.vimeo.com/video/548134877" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
    </div>
</div>

<div>&nbsp;
</div>

## Solution Article
 
---
 
### Approach 1: Greedy
  
 
**Intuition and Algorithm**
 
Always pick two of the smallest sticks to connect and continue doing this until you get only one stick. Let's see why this works.

Consider 4 sticks of the following lengths:
 
$$sticks = [a_1, a_2, a_3, a_4]$$
 
Let's try to connect them left to right.
 
After first merge, we will have: 
 
$$sticks = [(a_1 + a_2), a_3, a_4], cost = (a_1 + a_2)$$
 
After second merge, we will have: 
 
$$sticks = [(a_1 + a_2 + a_3), a_4], cost = (a_1 + a_2) + (a_1 + a_2 + a_3)$$
 
And finally, last stick will look like: 
 
$$sticks = [(a_1 + a_2 + a_3 + a_4)], cost = (a_1 + a_2) + (a_1 + a_2 + a_3) +(a_1 + a_2 + a_3 + a_4)$$
 
The final cost can be re-written as: $$cost = (3a_1 + 3a_2 + 2a_3 + a_4)$$
 
As we can see, the sticks which are connected first are included in the final cost more than  the ones that are picked later. Hence, it is optimal to pick smaller sticks first to get the smallest cost.

Let's try to figure out which data structure will be optimal to perform following tasks:

- Get two of the smallest sticks (`stick1` and `stick2`) from the array.
- Add one stick (`stick1 + stick2`) back to the array.

We can use a min heap data structure (which is, generally, implemented as a `PriorityQueue` in most languages) which gives us $$O(\log{N})$$ complexity for both the operations.
 
<iframe src="https://leetcode.com/playground/4ptAmwLV/shared" frameBorder="0" width="100%" height="500" name="4ptAmwLV"></iframe>
 
#### Complexity Analysis
 
* Time complexity: $$O(N\log{N})$$, where $$N$$ is the length of the input array. Let's break it down:
 
    * Step 1) Adding $$N$$ elements to the priority queue will be $$O(N\log{N})$$.
 
    * Step 2) We remove two of the smallest elements and then add one element to the priority queue until we are left with one element. Since each such operation will reduce one element from the priority queue, we will perform $$N-1$$ such operations. Now, we know that both `add` and `remove` operations take $$O(\log{N})$$ in priority queue, therefore, complexity of this step will be $$O(N\log{N})$$.
 
* Space complexity: $$O(N)$$ since we will store $$N$$ elements in our priority queue.
 
---