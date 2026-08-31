# Official Solution

**Link:** [https://leetcode.com/problems/how-many-apples-can-you-put-into-the-basket/solution/](https://leetcode.com/problems/how-many-apples-can-you-put-into-the-basket/solution/)

---

[TOC]

## Video Solution
---

<div>
    <div class="video-container">
        <iframe src="https://player.vimeo.com/video/844727153" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
    </div>
</div>

<div>&nbsp;
</div>

## Solution Article

---

### Approach 1: Sort

**Intuition**

To put as many apples in the basket as possible, we would want to choose the apple with the smallest weight each time in a greedy manner, until we reach `5000` units of weights or we've taken all apples.

The most straightforward approach would be sorting the input array `arr` first.
Then we can iterate through it, and count how many apples we can put in the basket until it reaches the weight limit.

**Algorithm**

- Sort `arr`, and initialize two integer variables: `apples` to count the number of apples we have put in the basket and `units` to record the current weight of the basket.
- Iterate through `arr` until `units` reaches `5000`:
    - increment `apple` by `1`;
    - increment `units` by the weight of the current apple.


<iframe src="https://leetcode.com/playground/JNCJHhkM/shared" frameBorder="0" width="100%" height="259" name="JNCJHhkM"></iframe>

**Complexity Analysis**

* Time Complexity: $$\mathcal{O}(N \log N)$$, where $$N$$ is the length of the input array.
This is determined by the sorting.
* Space Complexity: $$\mathcal{O}(1)$$.
This is because we do not use additional data structures.
<br/>
---

### Approach 2: Min-Heap

**Intuition**

Another approach to select the lightest apple at each time is using a min-heap.
We can transform the input array `arr` into a min-heap;
we then keep popping the first element from it, which is the lightest apple due to min-heap's nature.

**Algorithm**

- Transform `arr` into a min-heap, and initialize two integer variables: `apples` to count the number of apples we have put in the basket and `units` to record the current weight of the basket.
- Before `units` reaches `5000` and while there are remaining elements in the min-heap:
    - increment `apples` by `1`;
    - increment `units` by the popped element from the min-heap;
    
> **Note:** We will creat a heap using the heapify method. To create a heap using the heapify method requires O(N) time. More details can be found [here](https://stackoverflow.com/questions/9755721/how-can-building-a-heap-be-on-time-complexity).

<iframe src="https://leetcode.com/playground/JseRwmmz/shared" frameBorder="0" width="100%" height="293" name="JseRwmmz"></iframe>

**Complexity Analysis**

* Time Complexity: $$\mathcal{O}(N + k \log N)$$, where $$N$$ is the length of the input array and $$k$$ is the number of apples that will be put into the basket. This is because: transforming an array into a heap takes $$\mathcal{O}(N)$$ time; each pop operation on the heap takes $$\mathcal{O}(\log N)$$, and it will called for $$k$$ times.
* Space Complexity: $$\mathcal{O}(N)$$, as we construct a min-heap and put all apples into it. Note that for Python, the space complexity is $$\mathcal{O}(1)$$ because, as stated in the Python docs, `heapify(x)` transforms list `x` into a heap, in-place, in linear time.
<br/>
---

### Approach 3: Counting Sort

**Intuition**

Notably, this question has the constraint that $$1 \leq \text{arr[i].length} \leq 10^{3}$$, and taking advantage of this we can improve the time complexity to $$\mathcal{O}(n)$$ using [Counting Sort](https://leetcode.com/explore/learn/card/sorting/695/non-comparison-based-sorts/4437/). However, this approach should be used with caution. It is safe to use here because the heaviest apple is guaranteed to weigh no more than $$10^{3}$$, but this approach would not perform well on a test case such as $$\text{weight} = [1, 2, 3, 10^{9}]$$. 

**Algorithm**

- Create an array `counts` with the length of `max(arr) + 1`, where `counts[i]` represents the number of apples with weight `i`.
- Iterate through `arr`:
    - for each `arr[i]`, increment `counts[arr[i]]` by `1`;
- Initialize two integer variables: `apples` to count the number of apples we have put in the basket and `units` to record the current weight of the basket.
- Iterate through `counts`:
    - to make sure it will not exceed `5000` units of weight, the number of apples we take is  `take = min{counts[i], (5000-units)/i}`;
    - increment `units` by `take * i`;
    - increment `apples` by `take`;


!?!../Documents/1196_How_Many_Apples_Can_You_Put_into_the_Basket.json:661,191!?!


<iframe src="https://leetcode.com/playground/DvHm4vCy/shared" frameBorder="0" width="100%" height="500" name="DvHm4vCy"></iframe>

**Complexity Analysis**

* Time Complexity: $$\mathcal{O}(N + W)$$, where $$N$$ is the length of `arr` and $$W$$ is the largest element in `arr`. This is because we iterate through `arr` and `counts` once and the lengths are $$N$$ and $$W$$ accordingly.
* Space Complexity: $$\mathcal{O}(W)$$. This is because we initialize an array `counts` with the size of `max(arr)`.
<br/>
---