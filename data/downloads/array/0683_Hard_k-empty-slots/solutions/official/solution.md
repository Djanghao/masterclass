# Official Solution

**Link:** [https://leetcode.com/problems/k-empty-slots/solution/](https://leetcode.com/problems/k-empty-slots/solution/)

---

### Approach #1: Insert Into Sorted Structure [Accepted]

**Intuition**

Let's add flowers in the order they bloom. When each flower blooms, we check it's neighbors to see if they can satisfy the condition with the current flower.

**Algorithm**

We'll maintain `active`, a sorted data structure containing every flower that has currently bloomed. When we add a flower to `active`, we should check it's lower and higher neighbors. If some neighbor satisfies the condition, we know the condition occurred first on this day.

<iframe src="https://leetcode.com/playground/cYMSzwUd/shared" frameBorder="0" name="cYMSzwUd" width="100%" height="326"></iframe>

**Complexity Analysis**

* Time Complexity (Java): $$O(N \log N)$$, where $$N$$ is the length of `flowers`. Every insertion and search is $$O(\log N)$$.

* Time Complexity (Python): $$O(N^2)$$.  As above, except `list.insert` is $$O(N)$$.

* Space Complexity: $$O(N)$$, the size of `active`.

---
### Approach #2: Min Queue [Accepted]

**Intuition**

For each contiguous block ("window") of `k` positions in the flower bed, we know it satisfies the condition in the problem statement if the minimum blooming date of this window is larger than the blooming date of the left and right neighbors.

Because these windows overlap, we can calculate these minimum queries more efficiently using a sliding window structure.

**Algorithm**

Let `days[x] = i` be the time that the flower at position `x` blooms. For each window of `k` days, let's query the minimum of this window in (amortized) constant time using a `MinQueue`, a data structure built just for this task. If this minimum is larger than its two neighbors, then we know this is a place where "`k` empty slots" occur, and we record this candidate's answer.

To operate a `MinQueue`, the key invariant is that `mins` will be an increasing list of candidate answers to the query `MinQueue.min`.  

For example, if our queue is `[1, 3, 6, 2, 4, 8]`, then `mins` will be `[1, 2, 4, 8]`. As we `MinQueue.popleft`, `mins` will become `[2, 4, 8]`, then after 3 more `popleft`'s will become `[4, 8]`, then after 1 more `popleft` will become `[8]`.  

As we `MinQueue.append`, we should maintain this invariant. We do it by popping any elements larger than the one we are inserting. For example, if we appended `5` to `[1, 3, 6, 2, 4, 8]`, then `mins` which was `[1, 2, 4, 8]` becomes `[1, 2, 4, 5]`.

Note that we used a simpler variant of `MinQueue` that requires every inserted element to be unique to ensure correctness. Also, the operations are amortized constant time because every element will be inserted and removed exactly once from each queue.

<iframe src="https://leetcode.com/playground/HLb4xDk6/shared" frameBorder="0" width="100%" height="500" name="HLb4xDk6"></iframe>

**Complexity Analysis**

* Time Complexity: $$O(N)$$, where $$N$$ is the length of `flowers`. In enumerating through the $$O(N)$$ outer loop, we do constant work as `MinQueue.popleft` and `MinQueue.min` operations are (amortized) constant time.

* Space Complexity: $$O(N)$$, the size of our `window`.

---
### Approach #3: Sliding Window [Accepted]

**Intuition**

As in *Approach #2*, we have `days[x] = i` for the time that the flower at position `x` blooms. We wanted to find *candidate* intervals `[left, right]` where `days[left], days[right]` are the two smallest values in `[days[left], days[left+1], ..., days[right]]`, and `right - left = k + 1`.

Notice that these candidate intervals cannot intersect: for example, if the candidate intervals are `[left1, right1]` and `[left2, right2]` with `left1 < left2 < right1 < right2`, then for the first interval to be a candidate, `days[left2] > days[right1]`; and for the second interval to be a candidate, `days[right1] > days[left2]`, a contradiction.

That means whenever some interval can be a candidate and it fails first at `i`, indices `j < i` can't be the start of a candidate interval. This motivates a sliding window approach.

**Algorithm**

As in *Approach #2*, we construct `days`.

Then, for each interval `[left, right]` (starting with the first available one), we'll check whether it is a candidate: whether `days[i] > days[left]` and `days[i] > days[right]` for `left < i < right`.

If we fail, then we've found some new minimum `days[i]` and we should check the new interval `[i, i+k+1]`.  If we succeed, then it's a candidate answer, and we'll check the new interval `[right, right+k+1]`.

<iframe src="https://leetcode.com/playground/YDzWcBe9/shared" frameBorder="0" width="100%" height="497" name="YDzWcBe9"></iframe>

**Complexity Analysis**

* Time and Space Complexity: $$O(N)$$. The analysis is the same as in Approach #2.