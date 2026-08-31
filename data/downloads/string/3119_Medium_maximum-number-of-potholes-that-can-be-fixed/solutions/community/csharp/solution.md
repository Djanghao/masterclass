# 100% Fastest solution, With explaination

**Author:** robin1302
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-number-of-potholes-that-can-be-fixed/solutions/5490864/](https://leetcode.com/problems/maximum-number-of-potholes-that-can-be-fixed/solutions/5490864/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
- Since it takes extra 1 bucks for every continous holes to fix, we will try to fix longest length of holes first and then move towards small sets of holes.
- Get continous lengths of potholes
- Sorts the List of continous lengths in reverse order
- Pick the largest continous length first and check if its in budget.
# Approach
<!-- Describe your approach to solving the problem. -->
- First loop is to get continous lengths of pot holes.
- After sorting, start with largest length of potholes and move towards smaller ones.
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
public class Solution {
    public int MaxPotholes(string road, int budget) {
        List<int> pot = new ();
        int c = 0;
        for(int i=0; i<road.Length; i++)
        {
            if (road[i] == 'x')
            {
                c++;
            } else {
                if (c > 0)
                {
                    pot.Add(c);
                }
                c = 0;
            }
        }
        if (c > 0)
        {
            pot.Add(c);
        }
        pot.Sort(Compare);
        int count = 0;
        foreach(int p in pot)
        {
            if (p+1 >= budget)
            {
                count += budget-1;
                return count;
            }
            budget -= (p+1);
            count += p;
        }
        return count;
    }

    public int Compare(int a, int b)
    {
        return b.CompareTo(a);
    }
}
```