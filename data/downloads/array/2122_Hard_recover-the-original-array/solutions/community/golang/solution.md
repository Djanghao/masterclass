# Go // O(n^2) // Trying all values of k // Full explanation with optimizations

**Author:** cyclic
**Votes:** 1
**Link:** [https://leetcode.com/problems/recover-the-original-array/solutions/2326118/](https://leetcode.com/problems/recover-the-original-array/solutions/2326118/)

---

**Approach:**
The problem is twofold -- firstly, we need to find a valid value of `k`, and secondly, we need to pair terms up in a way such that each pair has a difference of `2k`.

So, how can we find values of `k` to test? Well, if a value of `k` is valid, two numbers in `nums` must have difference `2k`, since one has had `k` added and one has had `k` subtracted from the original number. There are up to `O(n^2)` differences, so this is going to take too long. The first observation we need to make is that there is always a lowest member of `nums`, let this be called `x`. Then `x + 2k` must be in the array, since `k > 0`. Therefore, we can check each of the other members of `nums` and find the corresponding `k` for each. This is only `O(n)` potential values of `k` to check, which is already a pretty good improvement.

Next, we need to find whether a value of `k` works or not. To do this, we proceed iteratively. Remember when we considered the lowest value of `nums` earlier to find a value of `k`? Well, we're going to use the lowest member again. In particular, let's think about this by iterating through a sorted version of `nums`. Let the current element be `c`. If `c` has already been used because `c - 2k` is also in the array, we continue. Otherwise, we see if `c + 2k` is in the array and has not yet been used. If `c + 2k` is not in the array, then we know that this value of `k` does not work -- we know a corresponding `c - 2k` is not in the array, since it would otherwise have used up this `c` already. If `c + 2k` is in the array, then we mark both as used and move to the next value. If we can empty out the array without any problems, then this is a valid value of `k`.

Well, now we want to efficiently check if a value is in an array. We could use binary search, but this adds an extra log factor for no good reason. What's a data structure that supports `O(1)` checking whether an integer is contained? Hash maps! In particular, in our hash map, we store each number in the array and how many of them there are (so `[1, 1, 3, 3]` would have a hash map `{1 -> 2, 3 -> 2}`. When we want to "use up" a number, we can just subtract 1 from the value stored in the hash map.

To make getting the final result easier, every time we identify a pair `c` and `c + 2k`, we add `c + k` to an array `res`, keeping track of where we are as we go. Once we finish processing all of `nums`, we will have completely filled in `res`, which can be directly returned.

**Optimizations:**

Instead of counting the number of times each number appears in `nums` on every iteration of the main loop, which would be inefficient, we do the counting once and create a "master copy" of the hash table, which is `origCounts` in my code. Afterward, we create another hash table `remaining`. On each iteration, we copy the values from `origCounts` into `remaining`, which represents the number of each number we still have left. By re-using `remaining` we are able to avoid having to allocate an extra hash table each iteration, which is expensive.

Our further optimizations deal with limiting the number of times each loop runs, and determining when an iteration can be skipped.

To reduce the number of iterations the main loop runs, we cap it at `n / 2` rather than `n` where `n` is the length of `nums`. Why? Consider if the value of `k` was created by pairing up element `0` and element `n / 2 + 1`. There are then too many elements left below index `n / 2 + 1`, each of which needs to get paired up with an element above index `n / 2 + 1` or else their difference is less than `nums[n / 2 + 1] - nums[0]`. (This doesn't actually end up mattering because there is always one valid solution guaranteed.)

We also skip an `i` if `nums[i] == nums[i - 1]`, because this means `nums[i] - nums[0] == nums[i - 1] - nums[0]`, indicating that the corresponding value of `k` has been checked already, or `i == 1` and we would get that `k` is 0, which is not allowed. Likewise, if the difference between `nums[i]` and `nums[0]` is odd, then we cannot divide by `2` to find the corresponding value of `k`, so we bail out early of an iteration in this situation.

Finally, we use the value of `k` as a flag to show whether pairing up numbers was successful. If we aren't able to pair up a number, then we set `k = -1`, and break out of the inner loop (which pairs up numbers). If we see that `k > 0` after the inner loop, then we know that we have found a valid `k` and can return the contents of `res`, otherwise, we know that this value of `k` failed and we need to test the next one.

**Code:**
```
func recoverArray(nums []int) []int {
    sort.Ints(nums)
    n := len(nums)
    origCounts := make(map[int]int)
    for _, b := range nums {
        origCounts[b]++
    }
    remaining := make(map[int]int)
    res := make([]int, n / 2)
    
    for i := 1; i <= n / 2; i++ {
        if nums[i] == nums[i - 1] {
            continue
        }
        for a, b := range origCounts {
            remaining[a] = b
        }
        k := nums[i] - nums[0]
        if k % 2 == 1 {
            continue
        }
        k /= 2
        rp := 0
        for j := 0; j < n; j++ {
            if remaining[nums[j]] == 0 {
                continue
            }
            candidate := nums[j] + 2 * k
            if remaining[candidate] == 0 {
                k = -1
                break
            }
            res[rp] = nums[j] + k
            rp++
            remaining[nums[j]]--
            remaining[candidate]--
        }
        if k > 0 {
            break
        }
    }
    return res
}
```

If this helped you, please upvote!