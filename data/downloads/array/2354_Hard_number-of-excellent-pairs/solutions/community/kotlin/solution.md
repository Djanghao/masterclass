# Best Solution Explained

**Author:** darian-catalin-cucer
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-excellent-pairs/solutions/3159818/](https://leetcode.com/problems/number-of-excellent-pairs/solutions/3159818/)

---


```
class Solution {
    public long countExcellentPairs(int[] nums, int k) {
    long res = 0, cnt[] = new long[30]; 
    for (int n : Arrays.stream(nums).distinct().toArray()) {
        ++cnt[Integer.bitCount(n)];
    }
    for (int i = 1; i < 30; ++i)
        for (int j = Math.max(i, k - i); j < 30; ++j)
            res += cnt[i] * cnt[j] * (i == j ? 1 : 2);
    return res;
}
}
```