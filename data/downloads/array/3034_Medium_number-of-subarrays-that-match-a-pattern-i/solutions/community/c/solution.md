# Easiest Way C // C++ // Java Beats 100% Please upvote

**Author:** Edwards310
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-subarrays-that-match-a-pattern-i/solutions/4709137/](https://leetcode.com/problems/number-of-subarrays-that-match-a-pattern-i/solutions/4709137/)

---

# Intuition
![Screenshot 2024-02-11 101954.png](./images/0.png)
![Screenshot 2024-02-11 101859.png](./images/1.png)
```Java []
class Solution {
    public int countMatchingSubarrays(int[] nums, int[] pattern) {
        int s[] = new int[nums.length + pattern.length - 1], count = 0;
        for (int i = 0; i < pattern.length; i++) {
            s[i] = pattern[i];
        }
        for (int i = 1; i < nums.length; i++) {
            s[i + pattern.length - 1] = Integer.signum(nums[i] - nums[i - 1]);
        }
        int[] z = z(s);
        for (int i = pattern.length; i < s.length; i++)
            count += z[i] < pattern.length ? 0 : 1;

        return count;
    }

    private static int[] z(int[] s) {
        int[] z = new int[s.length];
        for (int i = 1, x = 0, y = 0; i < s.length; i++) {
            for (z[i] = Math.max(0, Math.min(z[i - x], y - i + 1)); i + z[i] < s.length
                    && s[z[i]] == s[i + z[i]]; y = i + z[x = i]++) {
            }
        }
        return z;
    }
}
```
```C++ []
class Solution {
public:
    int countMatchingSubarrays(vector<int>& nums, vector<int>& pattern) {
        int N = nums.size();
        int M = pattern.size();
        int ans = 0;
        for (int l = 0; l < N; ++l) {
            int r = l + M + 1;
            if (r > N)
                continue;
            bool ok = 1;
            for (int i = 0; i < M; ++i) {
                if (pattern[i] == -1)
                    ok &= nums[l + i + 1] < nums[l + i];
                if (pattern[i] == 0)
                    ok &= nums[l + i + 1] == nums[l + i];
                if (pattern[i] == 1)
                    ok &= nums[l + i + 1] > nums[l + i];
            }
            ans += ok;
        }
        return ans;
    }
};
```
```C []
int countMatchingSubarrays(int* nums, int numsSize, int* pattern,int patternSize) {
    int N = numsSize;
    int M = patternSize;
    int ans = 0;
    for (int l = 0; l < N; ++l) {
        int r = l + M + 1;
        if (r > N)
            continue;
        bool ok = 1;
        for (int i = 0; i < M; ++i) {
            if (pattern[i] == -1)
                ok &= nums[l + i + 1] < nums[l + i];
            if (pattern[i] == 0)
                ok &= nums[l + i + 1] == nums[l + i];
            if (pattern[i] == 1)
                ok &= nums[l + i + 1] > nums[l + i];
        }
        ans += ok;
    }
    return ans;
}
```
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
    O(n)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
    O(1)
# Code
```
int countMatchingSubarrays(int* nums, int numsSize, int* pattern,int patternSize) {
    int N = numsSize;
    int M = patternSize;
    int ans = 0;
    for (int l = 0; l < N; ++l) {
        int r = l + M + 1;
        if (r > N)
            continue;
        bool ok = 1;
        for (int i = 0; i < M; ++i) {
            if (pattern[i] == -1)
                ok &= nums[l + i + 1] < nums[l + i];
            if (pattern[i] == 0)
                ok &= nums[l + i + 1] == nums[l + i];
            if (pattern[i] == 1)
                ok &= nums[l + i + 1] > nums[l + i];
        }
        ans += ok;
    }
    return ans;
}
```

# Please Upvote if it's useful