# Backtrack

**Author:** jovamilenkovic
**Votes:** 0
**Link:** [https://leetcode.com/problems/brace-expansion/solutions/5627922/](https://leetcode.com/problems/brace-expansion/solutions/5627922/)

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
    string s1;
    List<string> ans= new List<string>();
    public void help(string l, int i ){
        if(i>=s1.Length){ ans.Add(l); return;}
        if (s1[i]=='{'){
            int j=i;
            for(; j< s1.Length; j++){
if(s1[j]=='}') break;
            }
            i++;
                while (s1[i]!='}'){
                    if(s1[i]>='a'&&s1[i]<='z'){help(l+s1[i], j+1);}
                    i++;
                }
                i++;
        }
        else{
        while(s1[i]==','|| s1[i]=='}'){
            i++;
        }
        help(l+s1[i],i+1);
        }
    }
    public string[] Expand(string s) {
        s1=""+s;
        help("",0);
        ans.Sort();
        return ans.ToArray();
    }
}
```