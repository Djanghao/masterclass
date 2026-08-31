# Kotlin | Rust

**Author:** SamoylenkoDmitry
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimum-number-of-removals-to-make-mountain-array/solutions/5986047/](https://leetcode.com/problems/minimum-number-of-removals-to-make-mountain-array/solutions/5986047/)

---

![1.webp](./images/0.webp)

https://youtu.be/O3m4k8IfX-Q

#### Join me on Telegram

https://t.me/leetcode_daily_unstoppable/785

#### Problem TLDR

Min removes to make a mountain #hard #dynamic_programming #binary_search #lis

#### Intuition

Failed this one (didn't groq the dp and failed to adapt lis).

Let's observe the corner case example:

```j

    // 4 2 5 2 4 3
    // 5 2 4 3       5 4 3 2 1 4
    // * *                        
    // *   * *
    // 5  
    //   2      52
    //     4    54
    //       3  543
    // 1,16,84,9,29,71,86,79,72,12

```
First idea: we can try every index to be our mountain top.
Next, we should find the longest decreasing subsequence starting with the current number.
Two ways to find the `LIS`: adapt the O(nlog(n)) solution or do a pure dp.

Dp is like this: $$dp[i] = max_{j=0..i}(dp[j] * (nums[i] > nums[j]))$$ - for the current element search all previous filtering n < curr.

The adaptation of the `LIS` algorithm is tricky: we do our lis step as usual
* search the current element position in the sorted `lis` list
* add it or set it on a position

But to take into account that the current element must be the `top` we do the trick: `size of the longest increasing subsequence inding with current element is the position it is inserted into a sorted lis-list`.

#### Approach

* spent no more than 40 minutes without the hints, and go for others' solution after 1 hour is optimal for brain energy spending between searching for solution and understanding others
* let's implement both dp and lis solutions

#### Complexity

- Time complexity:
$$O(n^2)$$ for `dp`, O(nlog(n)) for the `lis`

- Space complexity:
$$O(n^2)$$ for `dp`, O(n) for the `lis`

#### Code

```kotlin []

    fun minimumMountainRemovals(nums: IntArray): Int {
        val ln1 = IntArray(nums.size)
        val lis = mutableListOf<Int>()
        fun lisStep(n: Int): Int {
            var ind = lis.binarySearch(n)
            if (ind < 0) ind = -ind - 1
            if (ind == lis.size) lis += n else lis[ind] = n
            return ind
        }
        for ((i, n) in nums.withIndex()) ln1[i] = lisStep(n) + 1
        lis.clear(); var res = nums.size
        for (i in nums.lastIndex downTo 0) {
            var ind = lisStep(nums[i])
            if (ln1[i] > 1 && ind > 0) res = min(res, nums.size - ln1[i] - ind)
        }
        return res
    }

```
```rust []

    pub fn minimum_mountain_removals(nums: Vec<i32>) -> i32 {
        let (mut res, n) = (nums.len(), nums.len());
        let (mut dp1, mut dp2) = (vec![1; n + 1], vec![1; n + 1]);
        for i in 1..n { for j in 0..i { 
            if nums[i] > nums[j] { dp1[i] = dp1[i].max(1 + dp1[j])}}}
        for i in (0..n).rev() { for j in (i + 1..n).rev() { 
            if nums[i] > nums[j] { dp2[i] = dp2[i].max(1 + dp2[j])}}}
        for i in 1..n { if dp1[i] > 1 && dp2[i] > 1 {
            res = res.min(n - dp1[i] - dp2[i] + 1)
        }}; res as i32
    }

```
```c++ []

    int minimumMountainRemovals(vector<int>& n) {
        vector<int> d(n.size()), l;
        auto f = [&](int x) {
            auto i = lower_bound(begin(l), end(l), x) - begin(l);
            return i == l.size() ? l.push_back(x), i : (l[i] = x, i);
        };
        for (int i = 0; i < n.size(); ++i) d[i] = f(n[i]) + 1;
        int r = n.size(); l.clear();
        for (int i = n.size() - 1; i >= 0; --i)
            if (auto j = f(n[i]); d[i] > 1 && j) r = min(r, int(n.size() - d[i] - j));
        return r;
    }

```