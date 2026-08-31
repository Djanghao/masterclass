# Solution

**Author:** deleted_user
**Votes:** 2
**Link:** [https://leetcode.com/problems/smallest-rotation-with-highest-score/solutions/3468209/](https://leetcode.com/problems/smallest-rotation-with-highest-score/solutions/3468209/)

---

```C++ []
int cnt[100000];
int speedup = []{ios::sync_with_stdio(0); cin.tie(0); return 0;}();

class Solution {
public:
    int bestRotation(vector<int>& nums) {
        int n = size(nums);
        memset(cnt, 0, sizeof(int) * n);
        for (int i = 0; i < n; ++i) {
            int v = nums[i], i2 = i-v;
            if (v > i) i2 += n;
            ++cnt[i]; --cnt[i2];
        }
        int best = -1, s = 0, bs = 0;
        for (int i = 0; i < n; ++i) if ((s += cnt[i]) > bs) bs = s, best = i;
        return best+1;
    }
};
```

```Python3 []
class Solution:
    def bestRotation(self, nums: List[int]) -> int:
        N = len(nums)
        change = [1] * N
        for i in range(N): change[(i - nums[i] + 1) % N] -= 1
        change = list(itertools.accumulate(change))
        return change.index(max(change))
```

```Java []
class Solution {
    public int bestRotation(int[] nums) {
        final int size = nums.length;
        int[] rsc = new int[size];
        for(int i = 0; i < size - 1; i++) {
            int value = nums[i];
            int downPos = (i + 1 + size - value) % size;
            rsc[downPos]--;
        }
        int value = nums[size-1];
        if( value != 0 ) rsc[size - value]--;
        int bestk = 0;
        int bestscore = rsc[0];
        int score = rsc[0];
        for(int i = 1; i < nums.length; i++) {
            score += rsc[i] + 1;
            if( score > bestscore ) {
                bestk = i;
                bestscore = score;
            }
        }
        return bestk;
    }
}
```
