# Official Solution

**Link:** [https://leetcode.com/problems/meeting-rooms/solution/](https://leetcode.com/problems/meeting-rooms/solution/)

---

[TOC]

## Video Solution
---

<div>
    <div class="video-container">
        <iframe src="https://player.vimeo.com/video/474301408" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
    </div>
</div>

<div>&nbsp;
</div>

## Solution Article
---

### Approach 1: Brute Force
The straight-forward solution is to compare every two meetings in the array, and see if they conflict with each other (i.e. if they overlap). Two meetings overlap if one of them starts while the other is still taking place.


<iframe src="https://leetcode.com/playground/C9LkCdas/shared" frameBorder="0" width="100%" height="361" name="C9LkCdas"></iframe>

**Overlap Condition**

The overlap condition in the code above can be written in a more concise way. Consider two non-overlapping meetings. The earlier meeting ends before the later meeting begins. Therefore, the *minimum* end time of the two meetings (which is the end time of the earlier meeting) is smaller than or equal the *maximum* start time of the two meetings (which is the start time of the later meeting).

![Two non-overlapping intervals](https://leetcode.com/media/original_images/252_NonOverlappingIntervals.png "Odd Even Linked List"){:width="300px"}


*Figure 1. Two non-overlapping intervals.*


![Two overlapping intervals](https://leetcode.com/media/original_images/252_OverlappingIntervals.png "Odd Even Linked List"){:width="280px"}


*Figure 2. Two overlapping intervals.*


So the condition can be rewritten as follows.

<iframe src="https://leetcode.com/playground/PiBGhH4o/shared" frameBorder="0" width="100%" height="123" name="PiBGhH4o"></iframe>

#### Complexity Analysis

Because we have to check every meeting against every other meeting, the total run time is $O(n^2)$. No additional space is used, so the space complexity is $O(1)$.

---

### Approach 2: Sorting

The idea here is to sort the meetings by starting time. Then, go through the meetings one by one and make sure that each meeting ends before the next one starts.

<iframe src="https://leetcode.com/playground/Y5jxFX5k/shared" frameBorder="0" width="100%" height="361" name="Y5jxFX5k"></iframe>

#### Complexity Analysis

* Time complexity: $O(n \log n)$.
    
    The time complexity is dominated by the sorting step. Once the array has been sorted, only $O(n)$ time is required to go through the array and determine if there is any overlap.

* Space complexity: $O( \log n)$ or $O(n)$

    Note that some extra space is used when we sort an array in place. The space complexity of the sorting algorithm depends on the programming language.
    - In Python, the `sort` method sorts a list using the Tim Sort algorithm which is a combination of Merge Sort and Insertion Sort and has $O(n)$ additional space. Additionally, Tim Sort is designed to be a stable algorithm.
    - In Java, Arrays.sort() is implemented using a variant of the Quick Sort algorithm which has a space complexity of $O( \log n)$ for sorting an array.

---