# Official Solution

**Link:** [https://leetcode.com/problems/insertion-sort-list/solution/](https://leetcode.com/problems/insertion-sort-list/solution/)

---

[TOC]

## Video Solution
---

<div>
    <div class="video-container">
        <iframe src="https://player.vimeo.com/video/476061757?texttrack=en" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
    </div>
</div>

<div>&nbsp;
</div>

## Solution Article

---

### Overview


[Insertion sort](https://en.wikipedia.org/wiki/Insertion_sort) is an intuitive sorting algorithm, although it is much less efficient than the more advanced algorithms such as quicksort or merge sort.

Often that we perform the sorting algorithm on an [Array](https://leetcode.com/explore/learn/card/fun-with-arrays) structure,
this problem though asks us to perform the insertion sort on a **linked list** data structure, which makes the implementation a bit challenging.

In this article, we will present some tricks to manipulate the linked list, which would help us to simplify the logics of implementation.


---

### Approach 1: Insertion Sort

#### Intuition

Let us first review the idea of insertion sort algorithm, which can be broke down into the following steps:

- First of all, we create an empty list which would be used to hold the results of sorting.

- We then iterate through each element in the _input_ list. For each element, we need to find a proper position in the resulting list to insert the element, so that the order of the resulting list is maintained.

- As one can see, once the iteration in the above step terminates, we will obtain the resulting list where the elements are _ordered_.

Now, let us walk through a simple example, by applying the above intuition.

Given the input list `input=[4, 3, 5]`, we have initially an empty resulting list `result=[]`.

- We then iterate over the input list. For the first element `4`, we need to find a proper position in the resulting list to place it.
Since the resulting list is still empty, we then simply _append_ it to the resulting list, _i.e._ `result=[4]`.

![step 1](../Figures/147/147_linked_list_step_1.png)

- Now for the second element (_i.e._ `3`) in the input list, similarly we need to insert it properly into the resulting list.
As one can see, we need to insert it right before the element `4`.
As a result, the resulting list becomes `[3, 4]`.

![step 2](../Figures/147/147_linked_list_step_2.png)

- Finally, for the last element (_i.e._ `5`) in the input list, as it turns out, the proper position to place it is the _tail_ of the resulting list.
With this last iteration, we obtain a _sorted_ list as `result=[3, 4, 5]`.

![step 3](../Figures/147/147_linked_list_step_3.png)


#### Algorithm

To translate the above intuition into the implementation, we applied two **tricks**.

>The first trick is that we will create a `dummy` (`pseudo_head`) node which serves as a pointer pointing to the resulting list.

More precisely, this node facilitates us to always get a _hold_ on the resulting list, especially when we need to insert a new element to the head of the resulting list.
One will see later in more details how it can greatly simplify the logic.

In a _singly-linked list_, each node has only one pointer that points to the next node.
If we would like to insert a new node (say `B`) before certain node (say `A`), we need to know the node (say `C`) that is currently before the node `A`, _i.e._ `C -> A`.
With the reference in the node `C`, we could now insert the new node, _i.e._ `C -> B -> A`.

Given the above insight, in order to insert a new element into a singly-linked list, we apply another trick.

>The idea is that we use a _**pair of pointers**_ (namely `prev -> next`) which serve as place-holders to guard the position where in-between we would insert a new element (_i.e._ `prev -> new_node -> next`).

With the same example before, _i.e._ `input=[4, 3, 5]`, we illustrate what the above helper pointers look like at the moment of insertion, in the following graph:

![pointers](../Figures/147/147_pointers.png)

#### Implementation

Here are some sample implementations based on the above ideas:

<iframe src="https://leetcode.com/playground/gDxDYr3y/shared" frameBorder="0" width="100%" height="497" name="gDxDYr3y"></iframe>



#### Complexity Analysis

Let $N$ be the number of elements in the input list.

- Time Complexity: $\mathcal{O}(N^2)$

    - First of all, we run an iteration over the input list.

    - At each iteration, we insert an element into the resulting list. In the worst case where the position to insert is the tail of the list, we have to walk through the entire resulting list.

    - As a result, the total steps that we need to walk in the worst case would be $\sum_{i=1}^{N} i = \frac{N(N+1)}{2}$.

    - To sum up, the overall time complexity of the algorithm is $\mathcal{O}(N^2)$.


- Space Complexity: $\mathcal{O}(1)$

    - We used some pointers within the algorithm. However, their memory consumption is constant regardless of the input.

    - **Note**, we did not create new nodes to hold the values of input list, but simply _reorder_ the existing nodes.


---