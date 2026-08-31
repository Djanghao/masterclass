# Official Solution

**Link:** [https://leetcode.com/problems/non-decreasing-array/solution/](https://leetcode.com/problems/non-decreasing-array/solution/)

---

[TOC]

## Solution

--- 

### Approach: Greedy

**Intuition**

The one thing that we should focus on here is the fact that the problem description says non-decreasing, which is just another way of saying increasing. In this case, it means the next element must always be greater than or equal to the current element. Thus, in an array, the item on the left must be less than or equal to the item on the right. Since we can only rectify a single violation of this rule, if more than one violation exists, it is impossible to make the array non-decreasing. 

The first time we encounter such a violation i.e. `nums[i - 1] > nums[i]`, we make a change.  You don't actually have to make a change because the question doesn't ask us to give the final array in order, it just asks if it could become non-decreasing. Then, we move on with the rest of the array and continue to check for other violations. If it ever so happens that the rule gets violated again, we return `false` since this would be the second violation of the rule. If we don't find a second violation, we can return `true` since rectifying the first violation made our array non-decreasing.

Whenever we encounter a violation at a particular index `i`, we need to check what modification we can make to make the array sorted. Let's see this scenario using an example.

![Single violation](../Figures/665/img1.png)


*Figure 1. A violation in the sorted array.*


In the example above, we consider the numbers `4, 5, 3` for deciding on how to fix the violation or. In this case, the correct modification is to change the number `3` to `5`. If we change `5` to `3`, then we won't be fixing the violation because the resulting array would be `3, 4, 3, 3, 6, 8`.

![Single violation modification](../Figures/665/img2.png)


*Figure 2. Rectifying a single violation leading to a sorted array.*


The basic decision-making process for fixing a violation is listed below. Without considering the number at the index `i - 2`, we won't be able to choose between updating `nums[i]` or `nums[i - 1]`. The modification has to fit in with the sorted nature of the array.

<pre>
if nums[i - 2] > nums[i] then
    nums[i] = nums[i - 1]
else
    nums[i - 1] = nums[i]
</pre>

Once we make the modification, we expect that the rest of the array will be sorted. If that is not the case, then we return `false` from our function. Some arrays will have violations in different places e.g. a `10` element array where `nums[4] > nums[5]` and also `nums[8] > nums[9]`. This array cannot be sorted by only fixing the violation at `nums[5]`.

Additionally, it is possible that a modification in the array leads to another violation that did not exist before. Let's consider an example where this can happen.

![Additional violation introduced](../Figures/665/img3.png)


*Figure 3. Rectifying a single violation introduces a new violation.*


**Algorithm**

1. We iterate over the array until we reach the end of the array or find a violation.
2. If we reach the end of the array, we know it is sorted and we return `true`.
3. Otherwise, we found a violation. We consider the `nums[i - 2]` to fix the violation. 
    * If the violation is at the index `1`, we won't have a `nums[i - 2]` available. In that case, we simply set `nums[i - 1]` equal to `nums[i]`.  
    * Otherwise, we check if `nums[i - 2] <= nums[i]` in which case we set `nums[i - 1]` equal to `nums[i]`. 
    * Finaly, if `nums[i - 2] > nums[i]`, then we set `nums[i]` equal to `nums[i - 1]`.
4. Once we modify, we simply iterate over the remaining array. If we find another violation, we return `false`. Otherwise, we return `true` once the iteration is complete.

**Implementation**

<iframe src="https://leetcode.com/playground/XSE7S8Ao/shared" frameBorder="0" width="100%" height="480" name="XSE7S8Ao"></iframe>

**Complexity Analysis**

* Time Complexity: $$O(n)$$ considering there are $$n$$ elements in the array and we process each element at most once.

* Space Complexity: $$O(1)$$ since we don't use any additional space apart from a couple of variables for executing this algorithm.