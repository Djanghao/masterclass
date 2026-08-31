# 🔥 [LeetCode The Hard Way] 🔥 Explained Line By Line

**Author:** tr1nity
**Votes:** 59
**Link:** [https://leetcode.com/problems/sum-of-even-numbers-after-queries/solutions/2603372/](https://leetcode.com/problems/sum-of-even-numbers-after-queries/solutions/2603372/)

---

Please check out [LeetCode The Hard Way](https://wingkwong.github.io/leetcode-the-hard-way/) for more solution explanations and tutorials. 
I'll explain my solution line by line daily and you can find the full list in my [Discord](https://discord.gg/Nqm4jJcyBf).
If you like it, please give a star, watch my [Github Repository](https://github.com/wingkwong/leetcode-the-hard-way) and upvote this post.

---

**C++**

```cpp
class Solution {
public:
    // the idea is we don't calculate the even sum from scratch for each query
    // instead, we calculate it at the beginning
    // since each query only updates one value, 
    // so we can adjust the even sum base on the original value and new value
    vector<int> sumEvenAfterQueries(vector<int>& nums, vector<vector<int>>& queries) {
        int evenSum = 0;
        // calculate the sum of all even numbers
        for (auto x : nums) {
            if (x % 2 == 0) {
                evenSum += x;
            }
        }
        vector<int> ans;
        for (auto q : queries) {
            int val = q[0], idx = q[1];
            // if original nums[idx] is even, then we deduct it from evenSum
            if (nums[idx] % 2 == 0) evenSum -= nums[idx];
            // in-place update nums
            nums[idx] += val;
            // check if we need to update evenSum for the new value
            if (nums[idx] % 2 == 0) evenSum += nums[idx];
            // then we have evenSum after this query, push it to ans 
            ans.push_back(evenSum);
        }
        return ans;
    }
};
```

**Python**

```py
class Solution:
    # the idea is we don't calculate the even sum from scratch for each query
    # instead, we calculate it at the beginning
    # since each query only updates one value, 
    # so we can adjust the even sum base on the original value and new value
    def sumEvenAfterQueries(self, nums: List[int], queries: List[List[int]]) -> List[int]:
        # calculate the sum of all even numbers
        evenSum = sum(x for x in nums if x % 2 == 0)
        ans = []
        for val, idx in queries:
            # if original nums[idx] is even, then we deduct it from evenSum
            if nums[idx] % 2 == 0: evenSum -= nums[idx]
            # in-place update nums
            nums[idx] += val
            # check if we need to update evenSum for the new value
            if nums[idx] % 2 == 0: evenSum += nums[idx]
            # then we have evenSum after this query, push it to ans 
            ans.append(evenSum)
        return ans
```

**Java**

```java
class Solution {
    // the idea is we don't calculate the even sum from scratch for each query
    // instead, we calculate it at the beginning
    // since each query only updates one value, 
    // so we can adjust the even sum base on the original value and new value
    public int[] sumEvenAfterQueries(int[] nums, int[][] queries) {
        int evenSum = 0, n = queries.length;
        // calculate the sum of all even numbers
        for (int x : nums) {
            if (x % 2 == 0) {
                evenSum += x;
            }
        }
        int[] ans = new int[n];
        for (int i = 0; i < n; i++) {
            int val = queries[i][0], idx = queries[i][1];
            // if original nums[idx] is even, then we deduct it from evenSum
            if (nums[idx] % 2 == 0) evenSum -= nums[idx];
            // in-place update nums
            nums[idx] += val;
            // check if we need to update evenSum for the new value
            if (nums[idx] % 2 == 0) evenSum += nums[idx];
            // then we have evenSum after this query, push it to ans 
            ans[i] = evenSum;
        }
        return ans;
    }
}
```

**Go**

```go
// the idea is we don't calculate the even sum from scratch for each query
// instead, we calculate it at the beginning
// since each query only updates one value, 
// so we can adjust the even sum base on the original value and new value
func sumEvenAfterQueries(nums []int, queries [][]int) []int {
    evenSum := 0
    // calculate the sum of all even numbers
    for _, val := range nums {
        if val % 2 == 0 {
            evenSum += val
        }
    }
    ans := make([]int, len(queries))
    for i, q := range queries {
        val, idx := q[0], q[1]
        // if original nums[idx] is even, then we deduct it from evenSum
        if nums[idx] % 2 == 0 {
            evenSum -= nums[idx]
        }
        // in-place update nums
        nums[idx] += val
        // check if we need to update evenSum for the new value
        if nums[idx] % 2 == 0 {
            evenSum += nums[idx]
        }
        // then we have evenSum after this query, push it to ans 
        ans[i] = evenSum
    }
    return ans
}
```

**Just For Fun - Segment Tree**

```cpp
struct segtree {
    int size;
    // used to store even sum
    vector<int> sums;

    void init(int n) {
        size = 1;
        while (size < n) size *= 2;
        sums.assign(2 * size, 0);
    }

    void set(int i, int v, int x, int lx, int rx) {
        if (rx - lx == 1){
            // set sums[x] to v only if v is even
            sums[x] = v % 2 == 0 ? v : 0;
            return;
        }
        int m = (lx + rx) / 2;
        if (i < m) set(i, v, 2 * x + 1, lx, m);
        else set(i, v, 2 * x + 2, m, rx);
        sums[x] = sums[2 * x + 1] + sums[2 * x + 2];
    }

    void set(int i, int v) {
        set(i, v, 0, 0, size);
    }

    int sum(int l, int r, int x, int lx, int rx) {
        // no intersection
        if (lx >= r || l >= rx) return 0;
        // inside
        if (lx >= l && rx <= r) return sums[x];
        // go to both left and right side
        int m = (lx + rx) / 2;
        int s1 = sum(l, r, 2 * x + 1, lx, m);
        int s2 = sum(l, r, 2 * x + 2, m, rx);
        return s1 + s2;
    }

    int sum(int l, int r) {
        return sum(l, r, 0, 0, size);
    }
};

class Solution {
public:
    vector<int> sumEvenAfterQueries(vector<int>& nums, vector<vector<int>>& queries) {
        int n = nums.size();
        // init segment tree
        segtree st;
        st.init(n);
        // set each number in segment tree
        for (int i = 0; i < n; i++) st.set(i, nums[i]);
        vector<int> ans;
        for (auto q : queries) {
            int val = q[0], idx = q[1];
            // update segment tree
            st.set(idx, nums[idx] += val);
            // query segement tree
			// or we can just add st.sums[0] 
			// since the root value represents the even sum for the whole array
            ans.push_back(st.sum(0, n));
        }
        return ans;
    }
};
```