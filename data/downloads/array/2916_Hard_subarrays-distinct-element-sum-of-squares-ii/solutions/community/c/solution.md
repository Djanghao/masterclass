# Four Subproblems

**Author:** votrubac
**Votes:** 24
**Link:** [https://leetcode.com/problems/subarrays-distinct-element-sum-of-squares-ii/solutions/4233580/](https://leetcode.com/problems/subarrays-distinct-element-sum-of-squares-ii/solutions/4233580/)

---

For this problem, we need to figure out not two, not three, but four subproblems.

> Note that first two code snippets are interim solutions, and the accepted solution is in the final snippet.

## 1. Math

If we know that a square of `3` is `9`, we calculate a square of `3 + 1` as `9 + 2 * 3 + 1`, according to the formula:
- `(a + 1) * (a + 1) = a * a + 2 * a + 1`.

This also applies to the sum of squares. Let us use array `[3, 2, 1]` to demonstrate.

The sum of numbers is `6`, and the sum of their squares is `14`. If we increment all numbers, the sum of squares would be:
- `4*4 + 3*3 + 2*2` = `14 + 2 * 6 + 3` = `29`. 
- `5*5 + 4*4 + 3*3` = `29 + 2 * 9 + 3` = `50`.
	- We do `+ 3` because there are 3 numbers.
	- The sum of numbers becomes `6 + 3` = `9` after the first increment.

This can be generalized for `[a1, a2, ..., an]`. If we know `sum` and `sum_sq`:
- `a1 + a2 + ... + an` = `sum`, 
- `a1*a1 + a2*a2 + ... an*an` = `sum_sq`.

Then we can compute the sum of squares for:
- `(a1  + 1)*(a1 + 1) + (a2 + 1)*(a2 + 1) + ... (an  + 1)*(an + 1)` 
as:
-  `sum_sq + 2 * sum + n`.

## 2. Recurrence Relation
We first consider a case when all numbers in `nums` are unique.

For `nums[i]`, we compute the sum of squares for all subarrays ending at `i`. This is how our distinct count subarrays look like for i in range `[0, 3]`:
- `[1]`: 1 * 1 = 1
- `[2, 1]`: 2 * 2 + 1 * 1  = 5
- `[3, 2, 1]`: 3 * 3 + 2 * 2 + 1 * 1 = 15
- `[4, 3, 2, 1]`: 4 * 4 + 3 * 3 + 2 * 2 + 1 * 1 = 31

With previous sum (`sum[i - 1]`) and square sum (`dp[i - 1]`), we can compute the square sum for `i` using this recurrence relation:
- `dp[i] = dp[i - 1] + 2 * sum[i - 1] + i + 1`.
- `sum[i] = sum[i - 1] + i + 1`
	- we do `+ 1` because we add a new count subarray (`1`) at each step.

This illustration code yields accurate results for unique numbers.

**C++**
```cpp
int sumCounts(vector<int>& nums) {
    long long sum_sq = 0, sum = 0, res = 0;
    for (int i = 0; i < nums.size(); ++i) {
        sum_sq += 2 * sum + i + 1;
        sum += i + 1;
        res += sum_sq;
    }
    return res;
} 
```

## 3. Repeated Numbers
Consider the array `[1, 2, 3, 4, 2]`. The distinct counts subarrays for position `3` and `4` are:
- `[4, 3, 2, 1]` - all unique numbers
- `[4, 3, 3, 2, 1]` - number `2` repeats

As you see, counts for first two subarrays do not change. We need to increment counts only after the previous occurance of the repeated number.

We imporve our solution by tracking last index for each number. The code below shows correct, but not yet efficient solution (TLE).

**C++**
```cpp
int sumCounts(vector<int>& nums) {
    long long cnt[100001] = {}, last[100001] = {}, sum_sq = 0, res = 0, mod = 1000000007;
    for (int i = 0; i < nums.size(); ++i) {
        long long l = last[nums[i]];
        long long sum = accumulate(begin(cnt) + l, begin(cnt) + i, 0LL);
        transform(begin(cnt) + l, begin(cnt) + i + 1, begin(cnt) + l, [](int c){ return c + 1; });
        sum_sq = (sum_sq + 2 * sum + (i - l) + 1) % mod;
        res = (res + sum_sq) % mod;
        last[nums[i]] = i + 1;
    }
    return res;
}  
```

## 4. Efficient Range Updates
The previous solution takes linear time to sum and increment counts, resulting in a quadratic time complexity.

We can use a segment tree to sum elements in a logarithmic time. However, for efficient range increments, we also need to implement lazy propagation.

You can see implementations for various segment tree flavours on the competive programming algorithms site.

 The final code snippet shows an accepted solution, where we replaced linear scans with efficient range operations.
 
**C++**
```cpp
int st[400000] = {}, lazy[400000] = {}, last[100001] = {}, mod = 1000000007;
long long query(int l, int r, int p = 1, int tl = 0, int tr = 100000) {
    if (l > r) 
        return 0;
    if (l == tl && r == tr)
        return (st[p] + (1LL + tr - tl) * lazy[p]) % mod;
    int tm = (tl + tr) / 2;
    return (1LL + r - l) * lazy[p] + 
        query(l, min(r, tm), p * 2, tl, tm) + query(max(l, tm + 1), r, p * 2 + 1, tm + 1, tr);
}
void add(int l, int r, int v, int p = 1, int tl = 0, int tr = 100000) {
    if (l == tl && r == tr)
        lazy[p] += v;
    else if (l <= r) {
        lazy[p * 2] += lazy[p];
        lazy[p * 2 + 1] += lazy[p];
        lazy[p] = 0;  
        int tm = (tl + tr) / 2;
        add(l, min(r, tm), v, p * 2, tl, tm);
        add(max(l, tm + 1), r, v, p * 2 + 1, tm + 1, tr);
        st[p] = query(tl, tm, p * 2, tl, tm) + query(tm + 1, tr, p * 2 + 1, tm + 1, tr);
    }
}
int sumCounts(vector<int>& nums) {
    long long sum_sq = 0, res = 0;
    for (int i = 0; i < nums.size(); ++i) {
        int l = last[nums[i]];
        long long sum = query(l, i);
        add(l, i, 1);
        sum_sq = (sum_sq + 2 * sum + (i - l) + 1) % mod;
        res = (res + sum_sq) % mod;
        last[nums[i]] = i + 1;
    }
    return res;
}   
```