# Simple java solution

**Author:** Siddhant_1602
**Votes:** 20
**Link:** [https://leetcode.com/problems/find-the-number-of-good-pairs-ii/solutions/5208991/](https://leetcode.com/problems/find-the-number-of-good-pairs-ii/solutions/5208991/)

---

# Complexity
- Time complexity: $$O(n* square root n)$$

- Space complexity: $$O(n)$$

# Code
```
class Solution {
    public long numberOfPairs(int[] nums1, int[] nums2, int k) {
        Map<Integer, Integer> nm = new HashMap<>();
        for(int i : nums2)
        {
            int val = i * k;
            nm.put(val, nm.getOrDefault(val, 0) + 1);
        }
        long ans=0;
        for(int i : nums1)
        {
            for(int j=1;j*j<=i;j++)
            {
                if(i%j==0)
                {
                    if(nm.containsKey(j))
                    {
                        ans += nm.get(j);
                    }
                    int val=i/j;
                    if(j!=val && nm.containsKey(val))
                    {
                        ans += nm.get(val);
                    }
                }
            }
        }
        return ans;
    }
}
```