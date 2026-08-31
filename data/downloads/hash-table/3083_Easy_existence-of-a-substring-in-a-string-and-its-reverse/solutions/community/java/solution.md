# Simple java solution

**Author:** Siddhant_1602
**Votes:** 12
**Link:** [https://leetcode.com/problems/existence-of-a-substring-in-a-string-and-its-reverse/solutions/4886173/](https://leetcode.com/problems/existence-of-a-substring-in-a-string-and-its-reverse/solutions/4886173/)

---

# Complexity
- Time complexity: $$O(n^2)$$

- Space complexity: $$O(n)$$

# Code
```
class Solution {
    public boolean isSubstringPresent(String s) {
        List<String> nm=new ArrayList<>();
        for(int i=0;i<s.length()-1;i++)
        {
            nm.add(s.charAt(i)+""+s.charAt(i+1));
        }
        String rev=new StringBuilder(s).reverse().toString();
        for(int i=0;i<nm.size();i++)
        {
            if(s.contains(nm.get(i)) && rev.contains(nm.get(i)))
            {
                return true;
            }
        }
        return false;
    }
}
```