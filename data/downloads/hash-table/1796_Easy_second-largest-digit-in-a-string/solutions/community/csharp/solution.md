# Runtime 42 ms Beats 93.55%

**Author:** Yogesh_555
**Votes:** 1
**Link:** [https://leetcode.com/problems/second-largest-digit-in-a-string/solutions/5356256/](https://leetcode.com/problems/second-largest-digit-in-a-string/solutions/5356256/)

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
    public int SecondHighest(string s) {
        SortedSet<int> set=new SortedSet<int>();
        for(int i=0;i<s.Length;i++){
            if(s[i]>=48 && s[i]<=57){
                int digit=Convert.ToInt32(s[i]-48);
                set.Add(digit);
            }
        }
        List<int> list=set.ToList();
        if(list.Count>1) return list[list.Count-2]; 
        return -1;
    }
}
```