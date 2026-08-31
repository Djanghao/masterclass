# Short & Simple. O(n^2 + m^2)

**Author:** 3S_AKB
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-ways-where-square-of-number-is-equal-to-product-of-two-numbers/solutions/5126015/](https://leetcode.com/problems/number-of-ways-where-square-of-number-is-equal-to-product-of-two-numbers/solutions/5126015/)

---


public class Solution {

    int c(int[] a, int[] b)
    {
        int res = 0;
        var aa = a.Select(x => (long)x * (long)x).GroupBy(x => x).ToDictionary(x => x.Key, x => x.Count());
        for (int i = 0; i < b.Length; i++)
            for (int k = i + 1; k < b.Length; k++)
                if (aa.ContainsKey((long)b[i] * b[k]))
                    res += aa[(long)b[i] * b[k]];
        return res;
    }

    public int NumTriplets(int[] nums1, int[] nums2) {
        return c(nums1, nums2) + c(nums2, nums1);
    }
}
```