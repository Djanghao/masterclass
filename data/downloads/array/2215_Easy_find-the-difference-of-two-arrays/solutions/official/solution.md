# Official Solution

**Link:** [https://leetcode.com/problems/find-the-difference-of-two-arrays/solution/](https://leetcode.com/problems/find-the-difference-of-two-arrays/solution/)

---

[TOC]

## Solution

--- 

### Overview

We are given two integer arrays, `nums1` and `nums2`, and need to return a list of two lists. The first list has the elements that are present only in `nums1`, while the second list has the elements that are present only in `nums2`.
</br>

---

### Approach 1: Brute Force

**Intuition**

To find the elements in a list that are not present in another list, we can loop over every element in the first list and for each element we loop over the elements in the second list to check if it's present or not. If we find the element, we will not store it in the answer list; otherwise, we can store it.

This way, we will have to apply the above method twice once for the elements that are only in `nums1` and then again for the elements that are only present in `nums2`.

**Algorithm**

- `getElementsOnlyInFirstList` function:
  - Initialize an empty set `onlyInNums1` to store elements that are only in `nums1`.
  
  - Iterate over each element `num` in `nums1`:
    - Set a boolean flag `existInNums2` to `false`.
    - Iterate over each element `x` in `nums2`:
      - If `num` is found in `nums2` (i.e., `x == num`), set `existInNums2` to `true` and break the inner loop.
    
    - If `existInNums2` is still `false`, add `num` to the set `onlyInNums1` (i.e., `num` exists in `nums1` but not in `nums2`).
  
  - Convert `onlyInNums1` set to a list and return it.

- `findDifference` function:
  - Call `getElementsOnlyInFirstList(nums1, nums2)` to get elements only in `nums1` and store the result.
  - Call `getElementsOnlyInFirstList(nums2, nums1)` to get elements only in `nums2` and store the result.
  - Return a list of both results as a list of lists).

- The overall result contains two lists:
  - The first list contains elements in `nums1` that are not in `nums2`.
  - The second list contains elements in `nums2` that are not in `nums1`.

**Implementation**

<iframe src="https://leetcode.com/playground/Ci7D8Y5G/shared" frameBorder="0" width="100%" height="500" name="Ci7D8Y5G"></iframe>

**Complexity Analysis**

Here, $N$ is the length of list `nums1`, and $M$ is the length of `nums2`.

* Time complexity: $O(N \times M)$.

  The outer function `findDifference` calls the helper function `getElementsOnlyInFirstList` twice, once for `nums1` and once for `nums2`. For each element in `nums1`, we loop through all elements in `nums2` to check for existence, which results in a nested loop. The first loop runs for $N$ iterations, and for each iteration, the inner loop runs for $M$ iterations. This leads to a time complexity of $O(N \times M)$.

  Additionally, the process of inserting elements into the set and converting the set into a list both take linear time, which is $O(N)$ for each. However, since $N \times M$ dominates, the overall time complexity remains $O(N \times M)$.

  The second call to `getElementsOnlyInFirstList(nums2, nums1)` has similar behavior with $M \times N$, but since multiplication is commutative, this still results in $O(N \times M)$ overall.

* Space complexity: $O(N + M)$.

  The space complexity is primarily determined by the set and the list used to store unique elements. In the worst case, all elements of `nums1` and `nums2` are unique, leading to $O(N)$ space for the set in the first call and $O(M)$ space in the second call.

  Since both data structures exist separately for each call and are converted to list, the overall space usage is $O(N + M)$. The extra space for variables like `existInNums2` and loop counters is negligible, making the auxiliary space $O(1)$.

---

### Approach 2: HashSet

**Intuition**

Instead of iterating over each element in the second array to check if it exists in the list or not, we can store the elements in a HashSet. Then we can find if an element exists in the list or not in $O(1)$ time compared to $O(N)$ time in the previous approach.

In this approach, we follow the above intuition. To find the elements that only exist in `nums1`, we first store the elements in `nums2` in the HashSet. Then we iterate over each element in the list `nums1`, and for each element, we check if it's there in the HashSet; if yes, we skip the element; otherwise, we store it in the list `onlyInNums1`.

![fig](../Figures/2215/2215A.png)

**Algorithm**

- `getElementsOnlyInFirstList` function:
  - Initialize an empty set `onlyInNums1` to store elements that are only in `nums1`.
  
  - Create a set `existsInNums2` to store all elements from `nums2`:
    - Iterate over each element `num` in `nums2` and add it to the set `existsInNums2`.

  - Iterate over each element `num` in `nums1`:
    - If `num` is not in `existsInNums2`, add it to the set `onlyInNums1` (i.e., `num` exists in `nums1` but not in `nums2`).

  - Convert `onlyInNums1` set to a list and return it.

- `findDifference` function:
  - Call `getElementsOnlyInFirstList(nums1, nums2)` to get elements only in `nums1` and store the result.
  - Call `getElementsOnlyInFirstList(nums2, nums1)` to get elements only in `nums2` and store the result.
  - Return a list of both results as a list of lists (i.e., `Arrays.asList`).

- The overall result contains two lists:
  - The first list contains elements in `nums1` that are not in `nums2`.
  - The second list contains elements in `nums2` that are not in `nums1`.

**Implementation**

<iframe src="https://leetcode.com/playground/VA82MPMm/shared" frameBorder="0" width="100%" height="500" name="VA82MPMm"></iframe>

**Complexity Analysis**

Here, $N$ is the length of list `nums1`, and $M$ is the length of `nums2`.

* Time complexity: $O(N + M)$.

  In this implementation, the function `getElementsOnlyInFirstList` is called twice. For each call, we first iterate over `nums2` to store its elements in a set. This operation takes $O(M)$ time, where $M$ is the length of `nums2`. Inserting elements into a set is on average an $O(1)$ operation, so this step runs in $O(M)$ time.

  Next, we iterate over `nums1` and for each element, we check if it exists in the `existsInNums2` set. This lookup operation in a set also takes $O(1)$ on average, meaning the entire iteration over `nums1` takes $O(N)$ time.

  Since we perform these two operations (storing elements in a set and iterating over another set) for both `nums1` and `nums2`, the total time complexity is $O(N + M)$ for each call to `getElementsOnlyInFirstList`. Thus, the overall time complexity is $O(N + M)$.

* Space complexity: $O(N + M)$.

  The space complexity is primarily determined by the set data structures used to store the elements of `nums2` and the unique elements from `nums1`. In the worst case, all elements of `nums1` and `nums2` are unique, meaning the set for `nums2` will take $O(M)$ space, and the set for the unique elements of `nums1` will take $O(N)$ space.

  Additionally, the list created to store the result takes up $O(N)$ space, as it needs to hold the elements from the set. Therefore, the total space complexity is $O(N + M)$, as the two sets and the lists are the main contributors to space usage.

---