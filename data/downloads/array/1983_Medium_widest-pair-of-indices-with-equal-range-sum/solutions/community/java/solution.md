# O(n), Java simple and straightforward.

**Author:** anurag-pathak
**Votes:** 1
**Link:** [https://leetcode.com/problems/widest-pair-of-indices-with-equal-range-sum/solutions/3791974/](https://leetcode.com/problems/widest-pair-of-indices-with-equal-range-sum/solutions/3791974/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
We are only concerned about sum of elements in between two indices being same. So we are recording the difference of nums1[i] and nums2[i], as it being zero means the numbers are same. Generalizing the same idea to prefix sum, we see that the sum of elements in between two indices will be the same if the prefix sum of the differences are the same at two index.

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    public int widestPairOfIndices(int[] nums1, int[] nums2) {
        int sum = 0;
        int max = 0;

        Map<Integer, Integer> map = new HashMap<>();
        map.put(0, -1);
        for (int i = 0; i < nums1.length; i++) {
            sum += nums1[i] - nums2[i];
            Integer index = map.get(sum);
            if (index != null) {
                max = Math.max(max, i - index);
            } else {
                map.put(sum, i);
            }
        }

        return max;
    }
}
```