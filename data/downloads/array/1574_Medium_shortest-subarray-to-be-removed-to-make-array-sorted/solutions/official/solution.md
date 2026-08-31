# Official Solution

**Link:** [https://leetcode.com/problems/shortest-subarray-to-be-removed-to-make-array-sorted/solution/](https://leetcode.com/problems/shortest-subarray-to-be-removed-to-make-array-sorted/solution/)

---

[TOC]

## Solution

---

### Overview

Given an array `arr`, we want to return the size of the smallest possible subarray we can remove to make the remaining elements sorted in non-decreasing order. It's acceptable to return an empty subarray if the elements are already sorted correctly.  

![Test cases split into 3 parts](../Figures/1574/shortest_subarray_to_be_removed.png)

We can think of `arr` as being composed of 3 parts. The first part is a block of numbers in sorted order (blue region in the image above), followed by a block of numbers that breaks the sorted order (yellow region), and then finally another block of numbers in sorted order (green region).

For the nontrivial cases depicted above, we know that the subarray to remove resides somewhere in the middle of the array. Here, there can be multiple possibilities for what the middle elements can be. For the first example in the image, one option is to remove the block `[2, 3, 10, 4]`, leaving the remaining sorted sequence `[1, 2, 3, 5]`. Another option is to remove the block `[10, 4, 2]`, leaving another valid sequence `[1, 2, 3, 3, 5]`. The question then boils down to how we can find the smallest middle block of numbers to remove.

---

### Approach 1: Binary Search

#### Intuition

We need to find the shortest subarray that, if removed, would make the array sorted. To do this, we must understand the problem from a few perspectives and break it down logically.

##### 1. Identifying the Longest Non-Decreasing Subarrays

The first thing to consider is that the array might already be mostly sorted, but just have a small portion that disrupts the order. This means that if we could find the longest part of the array that is already non-decreasing from the left and from the right, we would be left with just a small part in the middle that needs to be removed to make the entire array sorted.

The concept is to iterate through the array, looking for the longest continuous subarray that follows the non-decreasing order. We start from the left and move right, stopping when we hit a decrease. This is the first natural choice because if we can identify the longest subarray from the left, we know the part from the right must complement it or be the part we need to focus on.

Similarly, we do the same thing from the right side. This parallelism helps us understand both ends of the array and figure out where the sorting breaks down. These steps build on each other, showing us the boundaries within which we need to find the subarray to remove.

##### 2. The Case Where the Array is Already Sorted

Now that we know how to find the longest non-decreasing subarrays from both ends, we need to think about the case where the array is already sorted. In this case, there’s no need to remove anything. So, we check if the left and right pointers (or indices) overlap or meet. If they do, the entire array is already sorted, and our work is done. This is an important insight because it helps us immediately return 0 when there’s no need to remove any subarray, avoiding unnecessary work.

##### 3. The Core Problem: What to Remove?

If the array is not sorted, we are left with the task of determining the shortest subarray that can be removed to make the array sorted. We could remove just the left part, just the right part, or try merging the two non-decreasing sections.

Now, this might seem a bit tricky at first, but if we look closely, we can use the fact that if a section on the left is non-decreasing and a section on the right is also non-decreasing, there may still be a possibility of merging these sections by removing the middle. The relationship between the two sections plays a critical role. Specifically, we want to find a point where elements in the right section are greater than or equal to elements in the left section after considering the removal of the middle portion.

##### 4. The Final Search

This leads us to the next part on how do we efficiently find where the two sections can merge? A naive approach might involve checking all pairs of elements, but that could be inefficient. Instead, we use binary search to find the smallest index in the right part of the array where the element is greater than or equal to the last element of the left part. By doing this, we can quickly pinpoint where the array can be "joined" back together, minimizing the subarray to remove.

This binary search approach leverages the sorted nature of the two subarrays. Since we know both the left and right subarrays are sorted, binary search allows us to find this boundary in logarithmic time, which is much more efficient than checking each element.

Finally, the solution is to take the minimum length of the subarrays that can be removed, whether that’s the left part, the right part, or the middle part (which we find through binary search).

#### Algorithm

- Initialize `n` as the size of `arr`, `left` as 0, and `right` as `n - 1`.

- Find the longest non-decreasing subarray starting from the left:
  - While `left + 1 < n` and `arr[left] <= arr[left + 1]`, increment `left` to expand the left subarray.

- Find the longest non-decreasing subarray starting from the right:
  - While `right - 1 >= 0` and `arr[right] >= arr[right - 1]`, decrement `right` to expand the right subarray.

- If the entire array is already sorted (i.e., `left >= right`), return `0` as no subarray removal is needed.

- Initialize `ans` to the smaller of removing the left or right part completely:
  - `ans = min(n - (left + 1), right)`

- Try to merge the left and right parts:
  - For each index `i` from 0 to `left`, use binary search (`helperBinarySearch`) to find the smallest index `j` where `arr[j] >= arr[i]`.
  - Update `ans` as the minimum of `ans` and the difference `j - (i + 1)`.

- Return `ans`, the length of the shortest subarray that can be removed to make the array sorted.

#### Implementation

<iframe src="https://leetcode.com/playground/haaC2UUS/shared" frameBorder="0" width="100%" height="500" name="haaC2UUS"></iframe>

#### Complexity Analysis

Let `N` be the size of `arr`.

* Time Complexity: $O(N \log N)$

  The first two `while` loops each run in $O(N)$ time to find the longest non-decreasing subarrays from the left and right. 
  
  After that, the `for` loop iterates up to `N` times, where for each iteration, a binary search is performed. Since binary search runs in $O(\log N)$ time, the total time complexity for the loop is $O(N \log N)$. 
  
  Therefore, the overall time complexity is dominated by the $O(N \log N)$ component.

* Space Complexity: $O(N)$

  The space complexity is mainly determined by the space required to store the input array `arr`, which takes $O(N)$ space.

---

### Approach 2: Two Pointers

#### Intuition

We can optimize the solution further by replacing binary search ($O(N \log N)$) with a more efficient two-pointer approach, reducing the complexity to $O(N)$.

A key insight in the diagram below is that the unsorted yellow region must always be part of the removed subarray, as it breaks the sorted order. In other words, the remaining sorted array will always consist of a prefix of the blue subarray (from the first element up to some index), followed by a suffix of the green subarray (from the last element down to some index).

![2 pointers](../Figures/1574/two_pointers.png)

To consider all possibilities, use two pointers, `left` and `right`. The pointers represent the prefix blue array `arr[0:left]` and suffix green array `arr[right:]` consisting of the remaining sorted array we are considering. Initially, `left` is set to 0, meaning we’re considering keeping the first element of the blue array. `Right` is set to the index of the start of the green subarray, meaning we consider keeping the entirety of the green subarray.

Using this two-pointer method, for each position of `left`, we search for the smallest `right` where `arr[left] <= arr[right]`. If this condition holds, then we have found a valid subarray candidate to remove—the subarray between `arr[left]` and `arr[right]`, which has a length of `right - left - 1`. If `arr[left] > arr[right]`, we increment `right` to find the next possible match. Once a valid `right` is found, we advance `left` to the next element, repeating the process.

<details>
  <summary>Why <code>arr[left] <= arr[right]</code> is Important (Click Here!)</summary>
  </br>
  <p><strong>Sorted Left Portion:</strong> The elements before left (i.e.,  <code>arr[0:left]</code>) are already sorted. Therefore,  <code>arr[left-1]</code> is the largest element in this prefix.</p>
  <p><strong>Sorted Right Portion:</strong> The elements from right onwards (i.e., <code>arr[right:]</code>) are sorted as well. Thus, <code>arr[right]</code> is the smallest element in the suffix.</p>
  <p>For the two sorted sections to form one valid sorted sequence when combined, we need the largest element in the left portion (<code>arr[left-1]</code>) to be less than or equal to the smallest element in the right portion (<code>arr[right]</code>), because:</p>
  <ul>
    <li>If <code>arr[left-1]</code> is greater than <code>arr[right]</code>, it means that after removing the unsorted middle section, the combined array would not be sorted.</li>
    <li>If <code>arr[left-1] <= arr[right]</code>, it guarantees that the largest element from the left side is smaller than or equal to the smallest element from the right side, ensuring the merged sequence is still sorted.</li>
  </ul>
</details>

</br>

#### Algorithm

1. Initialize our `right` pointer to the last index of `arr`.
2. We want to start our two-pointer process with `right` pointing to the start of the green sorted subarray. So we want to update `right` to the right index:
    * While `right > 0` and `arr[right] >= arr[right - 1]`, decrement `right`
3. We initialize our `ans = right`. We note that the biggest subarray that can be removed is the entire subarray preceding `right`. Thus, the maximum size subarray to be removed is `right`. 
4. We initialize our `left` pointer to `0`, the start of the blue sorted subarray.
5. While `left < right` and `left` is still in the blue region: `left == 0 || arr[left - 1] <= arr[left]`:
    * Find the right number after arr[left]:
        * While `right < arr.length` and `arr[left] > arr[right]`, increment `right`
    * Save length of the removed subarray: `ans = min(ans, right - left - 1)`
    * Increment `left`
6. Return `ans` 

#### Implementation

<iframe src="https://leetcode.com/playground/QgsqkvCG/shared" frameBorder="0" width="100%" height="429" name="QgsqkvCG"></iframe>

#### Complexity Analysis

Let `N` be the size of `arr`.

* Time Complexity: $O(N)$

    In the worst case for our two pointer algorithm, `left` will traverse through the entire blue sorted region once, and `right` will traverse through the entire `green` sorted region once. Thus, the time complexity grows linearly with the size of `arr`: $O(N)$

* Space Complexity: $O(1)$

    We only use two pointers to store indices and do not have any auxiliary data structures, so the space complexity is $O(1)$.
    
---