# Official Solution

**Link:** [https://leetcode.com/problems/destination-city/solution/](https://leetcode.com/problems/destination-city/solution/)

---

[TOC]

## Solution

---

### Approach 1: Brute Force

**Intuition**

Each element in `paths` can be represented as two cities `[a, b]`. It indicates that we leave `a` and go to `b`.

The destination city is the city that does not appear as `a` (the first element) in any of the `paths`. The destination city would appear as `b` for one path.

We will check every city individually. For each index `i`, we let `candidate = paths[i][1]`.

For this `candidate`, we then iterate over each `path` in `paths` with a nested loop and check if `path[0] = candidate`. If we find ANY `path` with `path[0] = candidate`, we know the current `candidate` cannot be the destination city since there is a path starting with `candidate`.

We continue for each index `i` until we eventually find the destination city, as it is guaranteed that a destination city exists. Essentially, we are searching for the city that does not appear as the first element in any `path`.

To implement this check, we will initialize a boolean flag `good = true` at the beginning of each iteration. If we find that `path[0] = candidate` for any `path`, we set `good = false` and break from the inner loop. At the end of the inner loop, we check if `good = true`. If it is, then `candidate` is the destination city.

**Algorithm**

1. Iterate `i` over the indices of `paths`:
    - Set `candidate = paths[i][1]` and a boolean flag `good = true`.
    - Iterate `j` over the indices of `paths`:
        - If `paths[j][0] == candidate`, set `good = false` and break from the loop.
    - If `good = true`, return `candidate`.
2. The code should never reach this point. Return anything.

**Implementation**

<iframe src="https://leetcode.com/playground/kuWBCAMQ/shared" frameBorder="0" width="100%" height="429" name="kuWBCAMQ"></iframe>

**Complexity Analysis**

Given $$n$$ as the length of `paths`,

* Time complexity: $$O(n^2)$$

    We have a nested for loop, both iterating $$O(n)$$ times.

* Space complexity: $$O(1)$$

    We aren't using any extra space except for a few variables like `candidate` and `good`.
    
<br/>

---

### Approach 2: Hash Set

**Intuition**

In the previous approach, we used an outer for loop to lock in a `candidate`. We then used an inner for loop to check if `candidate` had any outgoing path. This inner for loop is expensive, and we can check a given `candidate` in a much more efficient manner using a hash set.

We will create a hash set `hasOutgoing` that represents all the cities that have an outgoing path. We iterate over `paths` and for each index `i`, add `paths[i][0]` to `hasOutgoing`.

Now, we can iterate over `paths` again and select a `candidate = paths[i][1]` as we did in the previous approach. However, now that we have `hasOutgoing`, we can simply check if `candidate` is in `hasOutgoing` instead of using a nested for loop. If `hasOutgoing` contains `candidate`, then `candidate` cannot be the destination city. We simply check all candidates until we eventually find the destination city.

**Algorithm**

1. Initialize a hash set `hasOutgoing`.
2. Iterate `i` over the indices of `paths`:
    - Add `paths[i][0]` to `hasOutgoing`.
3. Iterate `i` over the indices of `paths`:
    - Set `candidate = paths[i][1]`.
    - If `candidate` is not in `hasOutgoing`, return `candidate`.
4. The code should never reach this point. Return anything.

**Implementation**

<iframe src="https://leetcode.com/playground/L9TajziQ/shared" frameBorder="0" width="100%" height="361" name="L9TajziQ"></iframe>

**Complexity Analysis**

Given $$n$$ as the length of `paths`,

* Time complexity: $$O(n)$$

    We first iterate over `paths` to populate `hasOutgoing`, this costs $$O(n)$$.

    Next, we iterate over `paths` again to find the answer, checking at each step whether `candidate` is in the hash set, which takes $$O(1)$$. Thus the iteration costs $$O(n)$$.

* Space complexity: $$O(n)$$

    `hasOutgoing` will grow to a size of $$O(n)$$.
    
<br/>

---