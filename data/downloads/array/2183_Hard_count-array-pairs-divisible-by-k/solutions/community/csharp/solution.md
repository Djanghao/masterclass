# 100% Beats runtime in c#

**Author:** nichin
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-array-pairs-divisible-by-k/solutions/4310426/](https://leetcode.com/problems/count-array-pairs-divisible-by-k/solutions/4310426/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
public class Solution {
    public long CountPairs(int[] nums, int k) {
        long count = 0;
        var gcdDict = new Dictionary<int, int>();
        for(int i=0;i< nums.Length; i++)
        {
            var gcd  = getGcd(nums[i],k);
            gcdDict.TryGetValue(gcd, out int currentValue);
            gcdDict[gcd] = ++currentValue;        
        }

        foreach(var item1 in gcdDict)
            foreach(var item2 in gcdDict)
                if(((long)item1.Key * item2.Key) % k == 0)
                {
                    if(item1.Key == item2.Key)
                        count += ((long)item1.Value * (item2.Value - 1));
                    else
                        count += (long) item1.Value * item2.Value;
                }
        return count/2;
    }

    int getGcd(int x, int y)
    {
        while(x != 0)
        {
            var temp = x;
            x = y % x;
            y = temp;
        }
        return y;
    }
}
```