# Sliding window

**Author:** linda2024
**Votes:** 0
**Link:** [https://leetcode.com/problems/alternating-groups-ii/solutions/5482823/](https://leetcode.com/problems/alternating-groups-ii/solutions/5482823/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
O(n)
# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(n)
# Code
```
public class Solution {
    public int NumberOfAlternatingGroups(int[] colors, int k) {
        int len = colors.Length, res = 0;
        if(len == 0)
            return res;

        int[] arr = new int[len+k-1];
        Array.Copy(colors, 0, arr, 0, len);
        int j = len;
        for(int i = 0; i < k-1; i++)
        {
            arr[len+i] = colors[i];
        }

        int start = 0, end = 1;
        while(start < len)
        {
            if(arr[end] == arr[end-1])
                start = end;
            
            if(end - start + 1 == k)
            {
                res++;
                start++;
                end++;
            }
            else
                end++;
        }

        return res;
    }
}
```