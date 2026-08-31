# Official Solution

**Link:** [https://leetcode.com/problems/koko-eating-bananas/solution/](https://leetcode.com/problems/koko-eating-bananas/solution/)

---

[TOC]

## Solution

--- 
### Overview

In the problem, Koko is given n piles of bananas, represented by an integer array of length n. She eats bananas at a constant speed, for example, $$x$$ bananas per hour. The time taken to eat a pile of $$y$$ bananas is $$y/x$$ after rounding up to the closest integer. For example, if she eats $$3$$ bananas per hour, it takes her $$2$$ hours to eat a pile of $$4$$ bananas.


The first constraint of the problem is that Koko has to eat all the piles within $$h$$ hours, where $$h$$ is no less than the number of piles. We can imagine that with a fast speed, Koko spends $$1$$ hour on each pile, therefore, she can always finish all the piles within $$h$$ hours. Let's call this kind of speed **workable speed**. Likewise, let any eating speed at which Koko can't eat all the piles be **unworkable speed**.


However, we have another constraint that Koko would like to eat as slow as possible, therefore, among all the workable eating speeds, we need to find out the minimum one.



---

### Approach 1: Brute Force

**Intuition**   


> How do we calculate the overall time for Koko to eat all the piles?

Let's refer to two examples below:

!?!../Documents/875/walkthrough_1.json:601,301!?!

> Does the order by which Koko eats affect the overall time?

The answer is no. The order does not matter because Koko will stop eating for the rest of the hour, even if there are no more bananas left in the current pile. Therefore, the time she spends eating a particular pile is given as $$currTime = \lceil NumberOfBananas / speed \rceil$$, regardless of the order of this pile in her eating plan $$( \lceil x \rceil $$ denotes $$ \text{ceil(x)} )$$. Thus, we can conclude that as long as the eating speed is the same, the order of the piles by which Koko eats does not affect the total hours, so we can keep the array as it is for convenience.

 The brute force approach is to try every possible eating speed to find the smallest workable speed. Starting from $$speed = 1$$ and incrementing it by 1 each time, we will find a speed at which Koko can eat all piles within $$h$$ hours, that is, the first minimum speed.


![limits](../Figures/875/875-sol_1.png)


<br>

**Algorithm**

1) Start at $$speed = 1$$.
2) Given the current speed, calculate how many hours Koko needs to eat all of the piles.
    - If Koko cannot finish all piles within $$h$$ hours, increment $$speed$$ by 1, that is $$speed = speed + 1$$ and start over step 2.
    - If Koko can finish all piles within $$h$$ hours, go to step 3.
3) Return the $$speed$$ as the answer. 

**Implementation**

> Note: The following implementation is included because it is an intuitive first approach and it helps lay the foundation needed to understand the following optimized approach. However, it is a brute force approach and is not expected to pass all test cases.

<iframe src="https://leetcode.com/playground/RavELvea/shared" frameBorder="0" width="100%" height="500" name="RavELvea"></iframe>


**Complexity Analysis**

Let $$n$$ be the length of input array $$piles$$ and $$m$$ be the upper bound of elements in $$piles$$.

* Time complexity: $$O(nm)$$

    - For each eating speed $$speed$$, we iterate over $$piles$$ and calculate the overall time, which takes $$O(n)$$ time. 
    - Before finding the first workable eating speed, we must try every smaller eating speed. Suppose in the worst-case scenario (when the answer is $$m$$), we have to try every eating speed from $$1$$ to $$m$$, that is a total of $$m$$ iterations over the array.
    - To sum up, the overall time complexity is $$O(nm)$$
    

* Space complexity: $$O(1)$$

    - For each eating speed $$speed$$, we iterate over the array and calculate the total hours Koko spends, which costs constant space. 
    - Therefore, the overall space complexity is $$O(1)$$.


<br/>


---

### Approach 2: Binary Search

**Intuition**   

In the previous approach, we tried every smaller eating speed, before finding the first workable speed. We shall look for a more efficient way to locate the minimum workable eating speed.

Recall how we calculated the total time for Koko to finish eating all the piles in approach 1. We can observe two laws:

1. If Koko can eat all the piles with a speed of $$n$$, she can also finish the task with the speed of $$n + 1$$. 
With a larger eating speed, Koko will spend less or equal time on every pile. Thus, the overall time is guaranteed to be less than or equal to that of the speed $$n$$.
2. If Koko can't finish with a speed of $$n$$, then she can't finish with the speed of $$n - 1$$ either.
With a smaller eating speed, Koko will spend more or equal time on every pile, thus the overall time will be greater than or equal to that of the speed $$n$$.

![limits](../Figures/875/875-ana.png)

Given the previous laws, the distribution will be:

![limits](../Figures/875/875-ana_2.png)

If the current speed is workable, the minimum workable speed should be on its left inclusively. If the current speed is not workable, that is, too slow to finish the eating task, then the minimum workable speed should be on its right exclusively.


Therefore, we can use binary search to locate the boundary that separates workable speeds and unworkable speeds, to get the minimum workable speed.


First, let's set a reasonable upper and lower bound for binary search (to ensure that we do not miss any workable speed). Let the lower bound be 1, the minimum possible eating speed since there is no speed slower than 1. The upper bound will be the maximum eating speed, that is the maximum number of bananas in a pile. For instance, if the piles are `[3,5,7,9]`, then $$9$$ is the maximum number of bananas in a single pile, we can set the upper boundary as $$9$$. Because Koko can eat every pile within 1 hour with a speed of $$9$$, or any other faster speed,  $$9$$ is thus guaranteed to be a workable value.


Once we set the boundaries, we can then apply the binary search to reduce the search space. In each iteration, we will reduce the remaining search space by half until we have narrowed down the search space to just one element, which is the minimum workable eating speed!


<details>

<summary>There are many other interesting problems that can be solved by performing a binary search to find the optimal value. You can practice using the binary search approach on the following problems! (click to show)</summary>

<br>

- [1231. Divide Chocolate](https://leetcode.com/problems/divide-chocolate/)
- [410. Split Array Largest Sum](https://leetcode.com/problems/split-array-largest-sum/) 
- [774. Minimize Max Distance to Gas Station](https://leetcode.com/problems/minimize-max-distance-to-gas-station/) 
- [1011. Capacity To Ship Packages Within D Days](https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/)
 
 

</details>

<br>

**Algorithm**

1) Initialize the two boundaries of the binary search as $$left = 1$$, $$right = max(piles)$$.
2) Get the middle value from $$left$$ and $$right$$, that is, $$middle = (left + right) / 2$$, this is Koko's eating speed during this iteration.
3) Iterate over the piles and check if Koko can eat all the piles within $$h$$ hours given this eating speed of $$middle$$.
4) If Koko can finish all the piles within $$h$$ hours, set $$right$$ equal to $$middle$$ signifying that all speeds greater than $$middle$$ are workable but less desirable by Koko. Otherwise, set $$left$$ equal to $$middle + 1$$ signifying that all speeds less than or equal to $$middle$$ are not workable.
5) Repeat the **steps 2, 3, and 4** until the two boundaries overlap, i.e., $$left = right$$, which means that we have found the minimum speed by which Koko could finish eating all the piles within $$h$$ hours. We can return either $$left$$ or $$right$$ as the answer.  


**Implementation**

<iframe src="https://leetcode.com/playground/ZLYNvAcV/shared" frameBorder="0" width="100%" height="500" name="ZLYNvAcV"></iframe>


**Complexity Analysis**

Let $$n$$ be the length of the input array $$piles$$ and $$m$$ be the maximum number of bananas in a single pile from $$piles$$.


* Time complexity: $$O(n \cdot \log m)$$

    - The initial search space is from $$1$$ to $$m$$, it takes $$\log m$$ comparisons to reduce the search space to 1.
    - For each eating speed $$middle$$, we traverse the array and calculate the overall time Koko spends, which takes $$O(n)$$ for each traversal.
    - To sum up, the time complexity is $$O(n \cdot \log m)$$.
    

* Space complexity: $$O(1)$$

    - For each eating speed $$middle$$, we iterate over the array and calculate the total hours Koko spends, which costs constant space. 
    - Therefore, the overall space complexity is $$O(1)$$.


<br/>