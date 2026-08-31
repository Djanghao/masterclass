# Official Solution

**Link:** [https://leetcode.com/problems/group-the-people-given-the-group-size-they-belong-to/solution/](https://leetcode.com/problems/group-the-people-given-the-group-size-they-belong-to/solution/)

---

[TOC]

## Solution

---

### Approach: Greedy

**Intuition**

There are $N$ people, and each one needs to be part of exactly one group with a size from $1$ to $N$. We are given an array `groupSizes` with $N$ integers; the `ith` integer in the array denotes the size of the group that this person should be a part of. We need to return the list of groups, where each group has the indices that should be in that group.

There can be multiple possible answers to the problem; this is because if there are multiple groups of the same size, it doesn't matter which people should be in which group. We can group any set of people as long as the group size meets the requirement. For example, if the `groupSizes` is `[3,3,3,3,3,1,3]`, then two of the possible solutions are `[[0,1,2],[3,4,6],[5]]` and `[[0,1,3],[2,4,6],[5]]`. Since the order of groups doesn't matter, `[[5],[0,1,2],[3,4,6]]` is also a possible solution.

We will follow the same approach as above; we will keep an unordered map from an integer to an array. The key integer denotes the size of the group, and the array will store the indices of people. Whenever the size of the array becomes equal to the integer key, i.e. the size, we store the array in the final answer and empty the array for any other group of the same size. This ensures that each person is a part of exactly one group and always grouped with people of the same group size.

!?!../Documents/1282-re/1282_Group_the_People_Given_the_Group_Size_They_Belong_To.json:960,720!?! <br>


**Algorithm**

1. Initialize an empty list of lists `ans` to store the groups' indices.
2. Create a hash map `szToGroup` where the keys are integers representing group sizes, and the values are the arrays of the corresponding indices in the group.
3. Iterate over the array `groupSizes`, for each index `i`:

    1. Insert the index `i` into the list `szToGroup[groupSizes[i]]`.
    2. If the size of the list becomes equal to `groupSizes[i]`, store it in the answer `ans`. Also, clear the array for the key `groupSizes[i]` in the map `szToGroup`.
4. Return `ans`.


**Implementation**

<iframe src="https://leetcode.com/playground/LRZ83D2S/shared" frameBorder="0" width="100%" height="463" name="LRZ83D2S"></iframe>

**Complexity Analysis**

Here, $N$ is the size of the list `groupSizes`.

* Time complexity: $O(N)$

  We are iterating over each person's group size in the array `groupSizes` and storing it in the map `szToGroup`.  Whenever the size of the list for a particular size becomes equal to the size itself, we empty the array and store it in our list. Both these operations would take $O(1)$ for each element in the list. Therefore, we're basically iterating over each element three times, once in the outer for loop, a second time when we add it to the final list `ans`, and a final time when we clear it from the list. This makes the total operation count as $3*N$. Hence, the total time complexity equals $O(N)$.

* Space complexity: $O(N)$

  The space required by the map `szToGroup` could store all the indices in the `groupSizes` in the worst-case scenario. This happens when there is only one group of size $N$. The space required by `ans` is required to store the answer, which is not generally considered part of the space complexity. Hence, the total space complexity equals $O(N)$.
  <br/>

---