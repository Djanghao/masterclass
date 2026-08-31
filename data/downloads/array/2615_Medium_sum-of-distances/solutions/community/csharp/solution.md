# C# Solution Using Dictionary

**Author:** VikasSinghThakur07
**Votes:** 1
**Link:** [https://leetcode.com/problems/sum-of-distances/solutions/3395872/](https://leetcode.com/problems/sum-of-distances/solutions/3395872/)

---



# Code
```
class Solution {
    public long[] Distance(int[] nums) {
     int n = nums.Length;
    long[] res = new long[n];
    int[] count = new int[n];
    Dictionary<int, int> map = new Dictionary<int, int>();

    for (int i = 0; i < n; i++) {
        if (map.ContainsKey(nums[i])) {
            int prev;
            map.TryGetValue(nums[i], out prev);
            res[i] = res[prev] + (long)count[prev] * (i - prev);
            count[i] = count[prev] + 1;
        } else {
            count[i] = 1;
        }
        map[nums[i]] = i;
    }

    count = new int[n];
    map = new Dictionary<int, int>();
    long[] resReverse = new long[n];
    for (int i = n - 1; i >= 0; i--) {
        if (map.ContainsKey(nums[i])) {
            int prev;
            map.TryGetValue(nums[i], out prev);
            resReverse[i] = resReverse[prev] + (long)count[prev] * (prev - i);
            count[i] = count[prev] + 1;
        } else {
            count[i] = 1;
        }
        map[nums[i]] = i;
    }

    for (int i = 0; i < n; i++) {
        res[i] += resReverse[i];
    }

    return res;
    }
}
```