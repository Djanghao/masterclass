# Official Solution

**Link:** [https://leetcode.com/problems/find-score-of-an-array-after-marking-all-elements/solution/](https://leetcode.com/problems/find-score-of-an-array-after-marking-all-elements/solution/)

---

[TOC]

## Solution

---

### Overview

We need to find and return the `score` by following rules that outline which elements from `nums` we can add to the `score` and which we should "mark" (remove from consideration). 

We'll repeat the following until all elements of `nums` are marked:
1. Identify the smallest unmarked integer and add it's value to `score`.
2. Mark off this element (if there's a tie, mark the element with the lowest index) and it's adjacent elements.

We will outline two solutions that will simulate this algorithm by efficiently going through a sorted order of `nums`, and keeping track of which elements of `nums` have been marked.

### Approach 1: Sorting

#### Intuition

At the beginning of each iteration of the algorithm, we need to select the next smallest unmarked integer. While this approach adds some complexity by focusing only on unmarked elements, it ensures that the selected elements will still be in ascending order. To simplify this process, we can start by sorting the list `nums` in ascending order. This initial sorting will help us achieve the correct order specified by the algorithm.

Now, as we iterate through this sorted version of `nums` from left to right, each integer can fall into one of two categories:

1. **Unmarked Number:** If the number hasn't been marked before, we add it to our running `score` and mark its adjacent elements.
2. **Marked Number:** If the number has already been marked, we simply skip it and move on to the next element.

To keep track of which elements have been marked, we can use a boolean array called `marked`. Here, `marked[i]` will be `true` if `nums[i]` has been marked. If `marked[i]` is `true`, we know to skip that number. If `marked[i]` is `false`, we add `nums[i]` to our `score` and update `marked` for the adjacent elements.

To mark the adjacent elements, we set `marked[i - 1]` (the element to its left) and `marked[i + 1]` (the element to its right) to `true`, as long as those indices are within the bounds of the array.

It's important to note that we need to maintain the original indices of `nums` to correctly identify the adjacent elements. If we sort `nums` directly, we lose the original indexing, which prevents us from finding the adjacent elements for each number in the original list. To solve this, we can create a new 2D array called `customSorted`, where `customSorted[i][0]` contains the element `nums[i]` and `customSorted[i][1]` holds the original index `i` for that element. After sorting `customSorted`, we have a customSorted version of `nums` while still keeping track of each element's original index.

#### Algorithm

1. Initialize our `ans` variable to `0`.
2. Initialize our boolean array `marked` to maintain which elements have been marked.
3. Initialize our sorted array `customSorted` to hold the sorted elements of `nums` as well as their original indices.
4. Traverse the elements of `nums` and populate `customSorted`.
5. Sort `customSorted` in ascending order.
6. Traverse through `customSorted` from left to right. For each element `customSorted[i]`:
    * Extract the number `number = customSorted[i][0]`.
    * Extract the original index `index = customSorted[i][1]`
    * If `!marked[index]`, then our number has not been marked yet:
        * Add `number` to our running score: `ans += number`.
        * Mark the current number: `marked[index] = true`.
        * Mark the left element if it exists: `marked[index - 1] = true`.
        * Mark the right element if it exists: `marked[index + 1] = true`.

#### Implementation

<iframe src="https://leetcode.com/playground/bXrbecnr/shared" frameBorder="0" width="100%" height="500" name="bXrbecnr"></iframe>
    
#### Complexity Analysis

Let $N$ be the size of `nums`.

* Time Complexity: $O(N \cdot \log N)$

    Sorting our `customSorted` array takes $O(N \cdot \log N)$ time. Traversing through `customSorted` and processing each element takes a total of $O(N)$ time. Thus, the total time complexity is $O(N \cdot \log N)$.

* Space Complexity: $O(N + S_N) \approx (N)$

    Our `customSorted` and `marked` arrays both have a size of $N$. Furthermore, additional space is needed to sort `nums`. This space complexity ($S_N$) depends on the language of implementation. Given input size $N$:

    In Java, `Arrays.sort()` is implemented using a variant of the Quick Sort algorithm which has a space complexity of $O( \log N)$.
    In C++, the `sort()` function is implemented as a hybrid of Quick Sort, Heap Sort, and Insertion Sort, with a worst-case space complexity of $O(\log N)$.
    In Python, the `sort()` method sorts a list using the Timsort algorithm which is a combination of Merge Sort and Insertion Sort and has a space complexity of $O(N)$.

    Thus, the total space complexity is determined by $O(N + S_N) \approx (N)$.

### Approach 2: Heap

#### Intuition

In our first approach, we processed the elements in the correct order by sorting the `nums` array in ascending order. We also used a `marked` array to keep track of elements that had already been processed or marked.

In our second approach, we can follow a very similar method by using a min heap to sort the elements of `nums`. Specifically, our min heap will be populated with tuples, each consisting of an element from `nums` (`nums[i]`) and its corresponding index (`i`). This is similar to the functionality of the `customSorted` array in Approach 1, which sorted `nums` while maintaining their original indices.

Once the min heap is populated, we can continuously remove elements from the top of the heap and repeat the procedure explained in Approach 1: 

1. Add the element's value to the running score if it hasn't been marked.
2. Mark the current element as well as any adjacent elements using the `marked` array.

#### Algorithm

1. Initialize our `ans` variable to `0`.
2. Initialize our boolean array `marked` to maintain which elements have been marked.
3. Initialize a min heap `heap` to store our `(nums[i], i)` tuples. The min heap should have the elements sorted so that smaller elements are prioritized first, and then smaller indices are used to break ties.
4. Traverse through `nums` and populate `heap` with all tuples
5. While `heap` is not empty:
    * Remove tuple `element` from `heap`.
    * Initialize `number = element[0]` and `index = element[1]`.
    * If `!marked[index]`:
        * Add `number` to our running score: `ans += number`.
        * Mark the current number: `marked[index] = true`.
        * Mark the left element if it exists: `marked[index - 1] = true`.
        * Mark the right element if it exists: `marked[index + 1] = true`.

#### Implementation

<iframe src="https://leetcode.com/playground/HK7RYbtZ/shared" frameBorder="0" width="100%" height="500" name="HK7RYbtZ"></iframe>

#### Complexity Analysis

Let $N$ be the size of `nums`.

* Time Complexity: $O(N \cdot \log N)$

    Each addition/removal from `heap` takes $O(\log N)$ time. Thus, adding/removing all $N$ elements from the `heap` takes a total of $O(N \cdot \log N)$ time. The other operations inside the while loop (marking elements and checking indices) take $O(1)$ time per iteration, so the total time for these operations is $O(N)$. Combining these, the overall time complexity is dominated by the $O(N \cdot \log N)$ operations of building and processing the priority queue.

* Space Complexity: $O(N)$

    Our `heap` and `marked` arrays both have a size of $N$. Thus, the total space complexity is $O(N)$.

---


### Approach 3: Sliding Window

#### Intuition

We can notice that finding the smallest unmarked number repeatedly can be slow if we keep searching through the array. To simplify this, we notice that once we mark a number, its neighbors are also marked. This means we can skip over these elements in our traversal. So, instead of checking every number, we decide to move through the array in steps of 2, which helps us skip over numbers that are already marked.

As we move through the array, we need to find sequences of numbers where the current number is greater than or equal to the next one (`nums[i] >= nums[i + 1]`). This lets us group together numbers that we can process at the same time. For each sequence we find, we process the numbers from the end of the sequence back to the start. This way, we always handle the smallest unmarked number first, as required by the problem.

#### Algorithm

- Initialize `ans` to 0 to store the cumulative score.

- Iterate through the array `nums` with a step of 2, starting from index `i = 0`.
  - Set `currentStart` to the current value of `i` to mark the beginning of a sequence.
  - While the next element `nums[i + 1]` exists and is smaller than the current element `nums[i]`, increment `i` to extend the sequence.
  
- After identifying the sequence, iterate backward from the current index `i` to `currentStart`, decrementing by 2 in each step:
  - Add the value of `nums[currentIndex]` to `ans`.

- Continue processing until all elements in the array are traversed.

- Return the accumulated value of `ans` as the final result.

#### Implementation

<iframe src="https://leetcode.com/playground/59naFUMm/shared" frameBorder="0" width="100%" height="395" name="59naFUMm"></iframe>

#### Complexity Analysis

Let $N$ be the size of `nums`.

- Time complexity: $O(N)$

    The algorithm iterates through the `nums` array once, with the outer loop running $N/2$ times (since `i` increments by 2 each time). The inner while loop and the inner for loop both operate within the bounds of the current segment, but together they do not exceed $O(N)$ in total because each element is processed at most a constant number of times. Therefore, the overall time complexity is linear in the size of `nums`.

- Space complexity: $O(1)$

    The algorithm uses a constant amount of extra space. The only additional space used is for the loop variables and the `ans` variable, which do not depend on the size of the input. Therefore, the space complexity is constant.

---