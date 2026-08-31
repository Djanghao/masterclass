# C#: faster than 100%

**Author:** Igor0
**Votes:** 0
**Link:** [https://leetcode.com/problems/tuple-with-same-product/solutions/2947149/](https://leetcode.com/problems/tuple-with-same-product/solutions/2947149/)

---

# Intuition
Brute force

# Approach
Create a dictionary with key equal to the result of multiplication and a value equal to number of pairs.

# Complexity
- Time complexity:
$$O(n * n)$$

- Space complexity:
$$O(n * n)$$

# Code
```
public class Solution {
    public int TupleSameProduct(int[] nums) {
        var dic = new Dictionary<int, int>();
        for (int i = 0; i < nums.Length - 1; i++)
        {
            for (int j = i + 1; j < nums.Length; j++)
            {
                var key = nums[i] * nums[j];
                if (!dic.ContainsKey(key))
                {
                    dic.Add(key, 1);
                }
                else
                {
                    dic[key]++;
                }
            }    
        }
        var rs = 0;
        foreach (var item in dic)
        {
            rs += item.Value * (item.Value - 1) / 2;
        }
        rs *= 8;
        return rs;
    }
}
```