# Official Solution

**Link:** [https://leetcode.com/problems/merge-two-2d-arrays-by-summing-values/solution/](https://leetcode.com/problems/merge-two-2d-arrays-by-summing-values/solution/)

---

## Solution

---

### Overview

We are given two arrays, `nums1` and `nums2`, each containing pairs of the form `{id, value}`. These pairs represent mappings where `id` is unique within each array, and both arrays are sorted in ascending order based on `id`.

Our goal is to merge these two arrays of pairs into a single sorted array of pairs. Each entry in the result should correspond to an `id` that appears in either input array. If an `id` is present in both arrays, we sum the associated values; otherwise, we keep the existing pair as is. The final output must be sorted by `id`.

##### Examples:
1. If `nums1 = [(id1, val1)]` and `nums2 = [(id2, val2)]` with `id1 < id2`, then the final array should be `[(id1, val1), (id2, val2)]`.
2. If `nums1 = [(id1, val1)]` and `nums2 = [(id1, val2)]`, then the final array should be `[(id1, val1 + val2)]`.
3. If `nums1 = [(id1, val1), (id2, val2)]` and `nums2 = [(id2, val3)]` with `id1 < id2`, then the final array should be `[(id1, val1), (id2, val2 + val3)]`.

---

### Approach 1: HashMap

#### Intuition

An intuitive approach to solving this problem is to use a data structure such as a map to store the `(key, value)` pairs. This is because the final result requires pairs where the value corresponds to an entry in either `nums1` or `nums2`. If the `id` exists in only one array, the value will be taken from that array. If the `id` appears in both arrays, the value will be the sum of the values from both arrays.

We can break the approach down into two main steps. First, we populate the map using one of the two input lists. Since each `id` is unique within a list, inserting these pairs directly into the map is straightforward. Next, we process the second array, updating the values in the map. If an `id` from the second list already exists in the map, we simply add its value to the existing value. If it does not exist, we insert it as a new entry.

One important consideration is the order of the pairs in the final result. Since the pairs must be sorted in ascending order of `id`, we can either copy the entries from the map to a list and then sort the list, or use an ordered map to maintain the order throughout the process. In the code, we have chosen to use an ordered map, which eliminates the need for sorting after the merge. However, both approaches will result in the same time complexity as inserting in a map takes $O(\log N)$ time.

> For a more comprehensive understanding of hash tables, check out the [Hash Table Explore Card 🔗](https://leetcode.com/explore/learn/card/hash-table/). This resource provides an in-depth look at hash tables, explaining their key concepts and applications with a variety of problems to solidify understanding of the pattern.

#### Algorithm

1. Create an empty map named `keyToSum` to store the sum of values for each unique key.
2.  Iterate through each pair `(id, value)` in `nums1` and insert the `id` as the map key and `value` as the map value.
3. Iterate through each pair `(id, value)` in  `nums2`:
    - If the key already exists in the map, add the value from `nums2` to the existing value.
    - If the key does not exist in the map, insert the  pair from `nums2`.
4.  Iterate over the map and construct a vector of pairs `mergedArray` by inserting each pair from the map into the list.
5. Return `mergedArray`.

#### Implementation

<iframe src="https://leetcode.com/playground/ERuaLkPJ/shared" frameBorder="0" width="100%" height="500" name="ERuaLkPJ"></iframe>

#### Complexity Analysis

Here, $N1$ is the number of elements in the array `nums1` and $N2$ is the number of elements in the array `nums2`.

- Time complexity: $O((N1 + N2) \log (N1 + N2))$.

  Copying the `(id, value)` pairs from the array `nums1` into the ordered map will take $O(N1 \log ⁡N1)$ time, as the insert operation in an ordered map has a time complexity of $O(\log⁡N)$. Similarly, iterating through the pairs in the array `nums2` to either add new entries or update existing values in the map will take $O(N2 \log ⁡N2)$. Finally, iterating over the entries in the map and copying them to the `mergedArray` list takes $O((N1 + N2) \log⁡ (N1 + N2))$. Therefore, the overall time complexity of the algorithm is $O((N1 + N2) \log ⁡(N1 + N2))$.

- Space complexity: $O(N1 + N2)$

We will store each entry in the map `keyToSum`, and thus there can be at most $(N1 + N2)$ entries if both arrays have unique entries. Space used to generate the output is generally not considered as part of the space complexity. Thus, the total space complexity is equal to $O(N1 + N2)$.

---

### Approach 2: Two Pointers

#### Intuition

This problem is a slight variation of [88. Merge Sorted Array](https://leetcode.com/problems/merge-sorted-array/), except that instead of merging arrays of integers, we are merging arrays of pairs in the form `(id, value)`. In the original problem, we use a two-pointer technique, where two pointers traverse both arrays, inserting the smaller element into the result and advancing the respective pointer.  

A similar approach works here because the input arrays are sorted in ascending order, and our goal is to merge them. The key distinction is that each element consists of an `(id, value)` pair. If the `id` values are identical in both arrays, we sum their corresponding `value`s and insert the merged pair into the result. Otherwise, we insert the pair with the smaller `id` and increment the corresponding pointer, following the same logic as in [88. Merge Sorted Array](https://leetcode.com/problems/merge-sorted-array/).  

To implement this, we initialize two pointers, `ptr1` and `ptr2`, at `0`, tracking the current positions in `nums1` and `nums2`, respectively. We then enter a while loop that continues until one of the pointers reaches the end of its array. Inside the loop, we compare the `id` values of the current pairs from `nums1` and `nums2`. If the `id`s differ, we insert the pair with the smaller `id` into the result list `mergedArray` and advance the corresponding pointer. If the `id`s match, we sum the `value`s and insert the combined pair into `mergedArray`.  

Once the loop finishes, one array may still contain unprocessed elements. This occurs when one array has exhausted its smaller `id` values, leaving unmatched pairs in the other. In this case, we append the remaining elements directly to `mergedArray`. Finally, we return `mergedArray` as the result.

!?!../Documents/2570/2570_Merge_Two_2D_Arrays_by_Summing_Values.json:960,720!?! <br>

#### Algorithm

1. Initialize ` N1` and `N2` to the size of `nums1` and `nums2`. Also, `ptr1` and `ptr2` to `0`. An empty 2D list `mergedArray` to store the result.
2. While both `ptr1` is less than `N1` and `ptr2` is less than `N2`, continue merging:
    - If the `id` matches:
        - Add the key and the sum of the values from both arrays to `mergedArray`.
        - Increment both `ptr1` and `ptr2`.
    - If the `id` in `nums1` is smaller:
        - Add the current pair from `nums1` to `mergedArray`.
        - Increment `ptr1`.
    - If the `id` in `nums2` is smaller:
        - Add the current pair from `nums2` to `mergedArray`.
        - Increment `ptr2`.
3. If `ptr1` is still less than `N1` (i.e., there are remaining elements in `nums1`), add the remaining pairs to `mergedArray`.
4. If `ptr2` is still less than `N2` (i.e., there are remaining elements in `nums2`), add the remaining pairs to `mergedArray`.
5. Return `mergedArray`.

#### Implementation

<iframe src="https://leetcode.com/playground/8tQRAiVf/shared" frameBorder="0" width="100%" height="500" name="8tQRAiVf"></iframe>

#### Complexity Analysis

Here, $N1$ is the number of elements in the array `nums1` and $N2$ is the number of elements in the array `nums2`.

- Time complexity: $O(N1 + N2)$

  In the while loop, we either increment one of the two pointers or increment both when the `id` is the same. Thus, we will iterate over each pair in the two arrays at most once. Also, all operations like insertion in the list is $O(1)$ and hence the total time complexity is equal to $O(N1 + N2)$

- Space complexity: $O(N1 + N2)$

  No extra space is required apart from the array required to store the result which is not considered as part of the space complexity and hence the total space complexity is equal to $O(N1 + N2)$.

---