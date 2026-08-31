# Slow and Fast + Sliding Window

**Author:** votrubac
**Votes:** 13
**Link:** [https://leetcode.com/problems/maximize-value-of-function-in-a-ball-passing-game/solutions/3965550/](https://leetcode.com/problems/maximize-value-of-function-in-a-ball-passing-game/solutions/3965550/)

---

If we start from a receiver `i`, we keep on passing till find a loop.

So, we first find receivers that no one pass to, and use the slow and fast pointers approach to find the beginning of the loop.

For a loop, we find how many receivers are in that loop, and the sum of their indices.

Then, we can use a sliding window of size `k` to find value from all receivers starting from `i`.

For large `k`, we can reduce it by `k / loop_sz * loop_sz` when we enter the loop.

Note that there could be a situations when no one pass to group of players that are in the loop. In that case, we can start from any player that is a part of the loop. 

**C++**
```cpp
int cnt[100001] = {}, vis[100001] = {};
long long loop(int i, vector<int>& rec, long long k) {
    int slow = i, fast = i, loop_sz = 0;
    long long loop_sum = 0, sum = 0, res = 0;
    do {
        vis[slow] = true;
        slow = rec[slow];
        fast = rec[rec[fast]];
    }
    while (slow != fast);
    do {
        loop_sum += fast;
        ++loop_sz;
        fast = rec[fast];
    }
    while (slow != fast);
    int l = i, r = i;
    bool looped = false;
    while (true) {
        if (r == slow && k >= loop_sz) {
            sum += k / loop_sz * loop_sum;
            k -= k / loop_sz * loop_sz;
        }
        sum += r;
        r = rec[r];
        if (k-- < 0) {
            sum -= l;
            l = rec[l];
            if (l == slow) {
                if (looped)
                    break;
                looped = true;
            }                    
        }
        res = max(res, sum);
    }
    return res;
}
long long getMaxFunctionValue(vector<int>& rec, long long k) {
    long long res = 0;
    for (int i = 0; i < rec.size(); ++i)
        ++cnt[rec[i]];
    for (int i = 0; i < rec.size(); ++i)
        if (cnt[i] == 0)
            res = max(res, loop(i, rec, k));
    for (int i = 0; i < rec.size(); ++i)
        if (vis[i] == 0)
            res = max(res, loop(i, rec, k));    
    return res;
}
```