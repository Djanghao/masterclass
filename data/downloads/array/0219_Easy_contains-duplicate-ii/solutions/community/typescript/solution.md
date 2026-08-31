# Sliding Window - O(n) time, O(1) space

**Author:** SleepyOwl
**Votes:** 24
**Link:** [https://leetcode.com/problems/contains-duplicate-ii/solutions/3863824/](https://leetcode.com/problems/contains-duplicate-ii/solutions/3863824/)

---

# Approach
The solution uses a sliding window approach to keep track of the elements within a distance of `k` from the current element. The sliding window is implemented using a `Set` data structure, which allows us to efficiently check if an element is already in the window.

For each element in the input array `nums`, we first check if the element is already in the Set. If it is, then we have found a duplicate within `k` distance and we can return `true`. This is because the `Set` only contains elements within a distance of `k` from the current element, so if the current element is already in the `Set`, it must be a duplicate within `k` distance.

If the current element is not in the Set, we add it to the `Set`. We then check if the size of the `Set` is greater than `k`. If it is, we remove the element that is `k` distance away from the current element to maintain the size of the sliding window. This ensures that the `Set` always contains at most `k` elements, representing a sliding window of size `k`.

If we reach the end of the array without finding any duplicates within `k` distance, we return `false`.

# Explanation with example
Suppose we have the following input:
```
nums = [1, 2, 3, 1];
k = 3;
```
We want to check if there are any duplicates in the `nums` array such that the distance between the two duplicates is at most `k`.

We start by initializing an empty Set to keep track of the elements within a distance of `k` from the current element.

`let set = new Set<number>();`

Next, we iterate over each element in the nums array. For the first element `nums[0]`, which is `1`, we check if it is already in the Set. Since the Set is empty, it is not. So we add it to the Set.

`set = {1};`

We then move on to the next element, `nums[1]`, which is `2`. We check if it is already in the Set. It is not, so we add it to the Set.

`set = {1, 2};`

We continue this process for the next element, `nums[2]`, which is `3`. We check if it is already in the Set. It is not, so we add it to the Set.

`set = {1, 2, 3};`

Now we have reached the fourth element, `nums[3]`, which is `1`. We check if it is already in the Set. It is, so we have found a duplicate within a distance of `k` and we can return true.

This is how the solution works. It uses a sliding window approach to keep track of the elements within a distance of `k` from the current element and checks if there are any duplicates within that window.

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
function containsNearbyDuplicate(nums: number[], k: number): boolean {
    let set = new Set<number>();
    
    for (let i = 0; i < nums.length; i++) {
        if (set.has(nums[i])) return true;
        set.add(nums[i]);
        if (set.size > k) set.delete(nums[i - k]);
    }
    return false;
}
```