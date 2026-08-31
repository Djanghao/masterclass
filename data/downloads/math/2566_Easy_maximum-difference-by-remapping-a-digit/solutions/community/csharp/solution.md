# Easy Solution

**Author:** vemohan15
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-difference-by-remapping-a-digit/solutions/6101085/](https://leetcode.com/problems/maximum-difference-by-remapping-a-digit/solutions/6101085/)

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
```csharp []
public class Solution {
    public int MinMaxDifference(int num) {
        List<int> a=new List<int>();
        while(num!=0)
        {
            a.Add(num%10);
            num=num/10;
        }
        a.Reverse();
        int up=0;int dow=a[0]; int max=0;int min=0;
        for(int i=0;i<a.Count;i++)
        {
            if(a[i]<9) 
            {
                up=a[i];break;
            }
        }
        for(int i=0;i<a.Count;i++)
        {
            if(up==a[i])
            {
                max=max*10+9;
            }
            else
            {
                max=max*10+a[i];
            }
            if(dow==a[i])
            {
                min=min*10+0;
            }
            else
            {
                min=min*10+a[i];
            }
        }
        return max-min;
        
    }
}
```