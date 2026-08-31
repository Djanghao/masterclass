# C# Easy solution without using built-in functions

**Author:** SaleemKassab
**Votes:** 6
**Link:** [https://leetcode.com/problems/shuffle-the-array/solutions/1958308/](https://leetcode.com/problems/shuffle-the-array/solutions/1958308/)

---

```
public int[] Shuffle(int[] nums, int n)
    {
        int x = 0;
        int[] result = new int[nums.Length];
        for (int i = 0; i < result.Length; i++)
        {
            if (i % 2 == 0)
            {
                result[i] = nums[x];
                x++;
            }
            else
            {
                result[i] = nums[n];
                n++;
            }
        }
        return result;
    }
```