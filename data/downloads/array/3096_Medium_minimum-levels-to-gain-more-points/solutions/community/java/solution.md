# Simple java solution

**Author:** Siddhant_1602
**Votes:** 8
**Link:** [https://leetcode.com/problems/minimum-levels-to-gain-more-points/solutions/4947390/](https://leetcode.com/problems/minimum-levels-to-gain-more-points/solutions/4947390/)

---

# Complexity
- Time complexity: $$O(n)$$

- Space complexity: $$O(1)$$ 

# Code
```
class Solution {
    public int minimumLevels(int[] possible) {
        int val=0;
        for(int i:possible)
        {
            val += i == 1 ? 1 : -1;
        }
        if(val<0)
        {
            if(possible.length==2)
            {
                return -1;
            }
            else if(Math.abs(val) == possible.length)
            {
                return 1;
            }
        }
        int first=0;
        for(int i=0;i<possible.length;i++)
        {
            if(possible[i] == 1)
            {
                first++;
                val--;
            }
            else
            {
                first--;
                val++;
            }
            if(first>val)
            {
                if(i == possible.length-1)
                {
                    return -1;
                }
                return i+1;
            }
        }
        return -1;
    }
}
```