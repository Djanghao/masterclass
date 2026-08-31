# Using Bit Array

**Author:** robin1302
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimize-xor/solutions/5669813/](https://leetcode.com/problems/minimize-xor/solutions/5669813/)

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
    public int MinimizeXor(int num1, int num2) {
        int bits = 0;
        while(num2 > 0)
        {
            if ((num2 & 1) == 1)
            {
                bits++;
            }
            num2 = num2 >> 1;
        }
        int[] n1 = new int[32];
        int[] x = new int[32];
        int t = 0;
        while(num1 > 0)
        {
            if ((num1 & 1) == 1)
            {
                n1[t++] = 1;
            } else {
                n1[t++] = 0;
            }
            num1 = num1 >> 1;
        }
        for(int i=31; i>=0; i--)
        {
            if (bits == 0)
            {
                break;
            }
            if (n1[i] == 1)
            {
                x[i] = 1;
                bits--;
            }
        }
        t = 0;
        while(bits > 0)
        {
            if (x[t] == 0)
            {
                x[t] = 1;
                bits--;
            }
            t++;
        }
        int num = 0;
        for(int i=0; i<32; i++)
        {
            if (x[i] == 1) {
             num += (int)Math.Pow(2,i);
            }
        }
        return num;
    }
}
```