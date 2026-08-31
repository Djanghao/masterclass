# Simple Straight forward solution

**Author:** Four0One
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-value-after-insertion/solutions/3546447/](https://leetcode.com/problems/maximum-value-after-insertion/solutions/3546447/)

---

# Intuition
if str is +ve then maximize the value else minimize the value

# Approach
5|4|7|3 and x =6
65473
56473
54673==> inserting at i = 2, the first number in string that is > x
54763
54736 

similarly for - ve number, insert at where digit < x

if you have reached at the end of the loop, means you havent find any position in the string, so append at the end

# Complexity
- Time complexity:O(N)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
public class Solution {
    public string MaxValue(string str, int x) {
        int idx = str[0] == '-' ? 1 : 0;
        bool neg = str[0] == '-' ? true : false;
        for(int i = idx; i < str.Length; ++i) {
            int n = (int)(str[i]-'0');
            if(!neg && x > n) {
                return str.Substring(idx,i) + x.ToString() + str.Substring(i);
            }
            if(neg && x < n) {
                return str.Substring(0,i) + x.ToString() + str.Substring(i);
            }
        }
        return str+x.ToString();
    }
}
```