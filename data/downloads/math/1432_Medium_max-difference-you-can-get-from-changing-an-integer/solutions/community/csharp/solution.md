# Beat 100% in time complexity and memory complexity only 19ms

**Author:** saaditya711
**Votes:** 0
**Link:** [https://leetcode.com/problems/max-difference-you-can-get-from-changing-an-integer/solutions/4987165/](https://leetcode.com/problems/max-difference-you-can-get-from-changing-an-integer/solutions/4987165/)

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
    public int MaxDiff(int num) {
        string str=num.ToString();
        int i=0,a=num,b=num;
        char x=str[i];
        if(x=='1' )
        {
            while((str[i]=='1' ||str[i]=='0')  && i<str.Length-1 )
            {
                i++;
                x=str[i];
            }
            if(x!='1' && x!='0')
            {
                a=int.Parse(str.Replace(x,'0'));
            }
        }
        else a=int.Parse(str.Replace(x,'1'));
        i=0;
        x=str[i];
        while(str[i]=='9' && i<str.Length-1 )
        {
            i++;
            x=str[i];
        }
        if(x!='9')
        {
b=int.Parse(str.Replace(x,'9'));
        }
        //return a;
        return b-a;
    }
}
```