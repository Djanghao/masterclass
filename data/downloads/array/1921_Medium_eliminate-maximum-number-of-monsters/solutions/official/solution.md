# Official Solution

**Link:** [https://leetcode.com/problems/eliminate-maximum-number-of-monsters/solution/](https://leetcode.com/problems/eliminate-maximum-number-of-monsters/solution/)

---

[TOC]

## Solution

---

### Approach 1: Sort By Arrival Time

**Intuition**

We can calculate when each monster will arrive at our city. The $$i^{th}$$ monster will arrive at time `dist[i] / speed[i]`. Which monsters should we shoot? We should shoot the monsters that will arrive the earliest. If a monster `A` arrives before a monster `B`, there is no benefit in shooting `B` before `A`, because `A` would end the game before `B` possibly could.

Let's put all arrival times in a list `arrival`, then sort `arrival` ascending. We will then iterate over `arrival` and shoot the monsters in the order that they will arrive.

When does the game end? Our weapon starts loaded and requires 1 minute to reload. The problem description states that "if a monster reaches the city at the exact moment the weapon is fully charged, it counts as a loss, and the game ends before you can use your weapon".

Since the first monster takes at least some time `arrival[0]` to arrive, we can be sure to eliminate it at time `0`. However, the weapon needs 1 minute to reload, meaning we can eliminate the second monster at time `1`. Thus, if the second monster arrives at any time less than or equal to `1`, we lose. Similarly, if the third monster arrives at any time less than or equal to `2`, we lose, and so on.

Therefore, for each index `i`, we check if `arrival[i] <= i` holds true. If this condition is met, it means that the $$i^{th}$$ monster (by arrival time) will reach the city and the game ends. Thus, we will break out of our loop. Otherwise, for every monster we kill, we will increment our answer.

**Algorithm**

1. Create an array `arrival` that holds all values of `dist[i] / speed[i]`.
2. Sort `arrival` in ascending order.
3. Initialize the answer `ans = 0`.
4. Iterate `i` over the indices of `arrival`:
    - If `arrival[i] <= i`, break from the loop.
    - Increment `ans`.
5. Return `ans`.

**Implementation**

<iframe src="https://leetcode.com/playground/hb2JiywL/shared" frameBorder="0" width="100%" height="429" name="hb2JiywL"></iframe>

**Complexity Analysis**

Given $$n$$ as the length of `dist` and `speed`,

* Time complexity: $$O(n \cdot \log{}n)$$

    Creating `arrival` costs $$O(n)$$. Then, we sort it which costs $$O(n \cdot \log{}n)$$. Finally, we iterate up to $$n$$ times.

* Space complexity: $$O(n)$$

    `arrival` has a size of $$O(n)$$. Note that we could instead modify one of the input arrays and use that as `arrival`. However, it is generally considered bad practice to modify the input, especially when it is something passed by reference like an array. Also, many people will argue that if you modify the input, you must include it as part of the space complexity anyway.
    
<br/>

---

### Approach 2: Heap

**Intuition**

Another way to iterate over the monsters by their arrival time would be to use a min-heap. We calculate all arrival times and push them onto a min-heap. Then, we pop from the min-heap one by one to get the order in which the monsters arrive.

Once we have the `heap`, we will use the same process as in the previous approach. Initialize `ans = 0` and iterate until a monster reaches the city or we have killed them all. At each iteration, we pop an arrival time from `heap` and compare it to `ans`. Note that in each iteration, the element we pop from the heap would be equal to `arrival[i]` and `ans` would be equal to `i` from the previous approach. If the time is less than or equal to `ans`, this monster will end the game. Otherwise, we increment `ans` and move on.

**Algorithm**

1. Create a min `heap` from the arrival times of the monsters.
2. Initialize `ans = 0`.
3. While `heap` is not empty:
    - Pop from `heap`. If the element is less than or equal to `ans`, break from the loop.
    - Increment `ans`.
4. Return `ans`.

**Implementation**

> In Python, we use the [heapq](https://docs.python.org/3/library/heapq.html) module.

<iframe src="https://leetcode.com/playground/Eyw3eNz9/shared" frameBorder="0" width="100%" height="429" name="Eyw3eNz9"></iframe>

**Complexity Analysis**

Given $$n$$ as the length of `dist` and `speed`,

* Time complexity: $$O(n \cdot \log{}n)$$

    The heap operations will cost $$O(\log{}n)$$. If all monsters can be killed, then we will perform $$O(n)$$ iterations and thus use $$O(n \cdot \log{}n)$$ time.

    Note: an array can be converted to a heap in linear time. In fact, Python's `heapq.heapify` does this, as does C++ `std::priority_queue` constructor. Without linear time heapify, we always use $$O(n \cdot \log{}n)$$ time since we need to build the heap. However, if we have linear time heapify and a monster reaches our city early, then this algorithm will have a better theoretical performance, since not many $$O(\log{}n)$$ operations will occur.

* Space complexity: $$O(n)$$

    `heap` uses $$O(n)$$ space.
    
<br/>

---