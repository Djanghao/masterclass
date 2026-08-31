# Java - straight forward by using Integer.bitCount( )

**Author:** du6587
**Votes:** 8
**Link:** [https://leetcode.com/problems/sum-of-values-at-indices-with-k-set-bits/solutions/4054180/](https://leetcode.com/problems/sum-of-values-at-indices-with-k-set-bits/solutions/4054180/)

---

# Code
```
class Solution {
    public int sumIndicesWithKSetBits(List<Integer> nums, int k) {
        int res = 0;
    	for (int i = 0; i < nums.size(); i++)
        	if (Integer.bitCount(i) == k)
        		res += nums.get(i);
        return res;
    }
}
```