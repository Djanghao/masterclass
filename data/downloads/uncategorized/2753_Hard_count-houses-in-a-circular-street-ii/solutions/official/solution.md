# Official Solution

**Link:** [https://leetcode.com/problems/count-houses-in-a-circular-street-ii/solution/](https://leetcode.com/problems/count-houses-in-a-circular-street-ii/solution/)

---

[TOC]

## Solution

---

### Approach: Skip the First Open Door 

#### Intuition   

This problem is fascinating yet tricky. Before delving into the solution, let's address some smaller subproblems that will greatly help us find the answer.

![img](../Figures/2753/1.png)


1. Do the closed doors provide any assistance? The answer is No. As we can only close the open doors via `closeDoor()`. Therefore, open doors serve as **reference points**, allowing us to change their state while we cannot alter the state of closed doors.

![img](../Figures/2753/2.png)


2. Consider a scenario where there is one and **only one** open door. How can we determine the total number of houses? In this case, we can move to the house with the open door and calculate the number of `moveRight()` operations needed before we return to this house again. 


> This reveals an important principle: to count the number of houses, we must:
> - complete at least one full circle around the houses.
> - have reference points (open doors) at the beginning and end of this circle.

![img](../Figures/2753/3.png)

With these insightful subproblems resolved, we are now well-equipped to tackle the main problem with a better understanding of its intricacies.

<br>

Let's simulate the process based on the above reasoning. As the closed doors do not serve as reference points, our first step is to perform `moveRight()` to an open door. Without loss of generality, let's stop at the first open door, which we will designate as `first_open`. This point is crucial for our calculations. 


Next, we encounter an important turning point, and the question arises: how should we handle this door?

![img](../Figures/2753/5.png)

You might think that we can close it, continue moving to the right, and close subsequent open doors. However, this approach presents a problem: if we treat this first open door as a reference point and close it, we cannot establish a connection based on the number of steps taken between visiting this open door twice. In other words, not all houses have been visited between the first open and last closed doors. Even though we continue performing `moveRight()`, we cannot locate its position as we have closed it previously.

![img](../Figures/2753/close.png)

<br>

Instead, if we skip the first open door and proceed to close all the open doors afterward, we find something interesting: the last door we close is precisely the same as the first open door. The number of `moveRight()` steps between these two reference points also represents the total number of houses!

![img](../Figures/2753/skip.png)

<br>

In essence, our approach is as follows: We perform `moveRight()` to update our current index (let's name it `x`, and start with `x = 0`). When we encounter the first open door, we designate its index as `first_open = x`. We leave it open and proceed to close all the open doors from now on. For each door we close, we calculate the number of steps taken from the first open door to this door as `x_from_first = x - first_open`. As we close the last door, which is also the first open oor, `x` becomes equal to `first_open` plus the total number of houses, so `x - first_open` precisely equals the number of steps taken in a circle as well as the total number of houses.

But when should we stop the `moveRight()` operations? We can still take advantage of the condition "the number of houses is less than or equal to k". After we skip the first open door, we have covered the entire circle before moving back again, which requires at most additional `k` steps. Therefore, the total number of `moveRight()` operations will not exceed `first_open + k`.

> Since finding the first open door takes less than `k` steps, which is `first_open < k`, we can also set the boundary as `2 * k` for convenience.


Please refer to the following slides for a detailed example:

!?!../Documents/2753/s1.json:601,301!?!


<br>

#### Algorithm

1) Build the relation between the index of the current house and the number of steps taken as `x = 0`.

2) Set `find_first` as `False`.

3) Circle around the houses for at most `2 * k` steps. At each step, perform `isDoorOpen` to check the state of each door, if the current door is open:

    - If `find_first = False`, set `find_first = True` and `x_first = x`.
    - Otherwise, set `dist_from_first = x - x_first`, and close this door via `closeDoor()`.

    Increment `x` by 1 and move to the next house on the right by performing `moveRight()`.

4) Return `dist_from_first` once the iteration is complete.

#### Implementation

<iframe src="https://leetcode.com/playground/eZaDJEKo/shared" frameBorder="0" width="100%" height="500" name="eZaDJEKo"></iframe>


#### Complexity Analysis


* Time complexity: $$O(k)$$

    - We need at most $2\cdot k$ steps of `moveRight()` to complete the traversal.


* Space complexity: $$O(1)$$
    
    - Constant space is required to update several variables `x`, `find_first`, `dist_first_open`, and `x_first`.



<br/>