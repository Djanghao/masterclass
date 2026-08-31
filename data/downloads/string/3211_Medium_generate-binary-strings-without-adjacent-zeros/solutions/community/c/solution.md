# ✅💯🔥Simple Code🚀📌|| 🔥✔️Easy to understand🎯 || 🎓🧠Beats 100%🔥|| Beginner friendly💀💯

**Author:** atishayj4in
**Votes:** 3
**Link:** [https://leetcode.com/problems/generate-binary-strings-without-adjacent-zeros/solutions/5545724/](https://leetcode.com/problems/generate-binary-strings-without-adjacent-zeros/solutions/5545724/)

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
//           //////////////////ATISHAY\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\           \\\\
//           \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\JAIN//////////////////           \\\\
class Solution {
    char one = '1';
    char zero = '0';
    boolean flag=false;
    List<String> ans = new ArrayList<>();
    StringBuilder subans = new StringBuilder("");
    public void genbin(int n, int i){
        if(subans.length()==n){
            ans.add(subans.toString());
            return;
        }

        if(flag==true || i==0){
            subans.append(zero);
            flag=false;
            genbin(n, i+1);
            subans.deleteCharAt(subans.length()-1);
        }

        flag=true;
        subans.append(one);
        genbin(n, i+1);
        subans.deleteCharAt(subans.length()-1);
    }
    public List<String> validStrings(int n) {
        genbin(n, 0);
        return ans;
    }
}
```

![7be995b4-0cf4-4fa3-b48b-8086738ea4ba_1699897744.9062278.jpeg](./images/0.jpeg)