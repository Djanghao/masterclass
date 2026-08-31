# C# easy solution with While loop.

**Author:** aloneguy
**Votes:** 2
**Link:** [https://leetcode.com/problems/count-the-digits-that-divide-a-number/solutions/3288434/](https://leetcode.com/problems/count-the-digits-that-divide-a-number/solutions/3288434/)

---


# Approach:Use only while loop.
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:20 ms.Beats 89.92% of other submissions.
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:26.6 Mb.Beats 56.7% of other submissions.
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
public class Solution {
    public int CountDigits(int num) {
        int count=0,x;
        x=num;
        while(x!=0){
            if(num%(x%10)==0)
            count++;
            x=x/10;
        }
        return count;
    }
}
```