# SIMPLE DART Solution

**Author:** Mohamed_Sadeck
**Votes:** 2
**Link:** [https://leetcode.com/problems/assign-cookies/solutions/4486664/](https://leetcode.com/problems/assign-cookies/solutions/4486664/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
For every child we need no see if there is a cookie for him.
# Approach
<!-- Describe your approach to solving the problem. -->
We first have to iterate the list of children g, and for every child we look for the first cookie that can satisfy him, if we find it we give it to him, which means we remove it from the list of cookies.
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n)


# Code
```
class Solution {
  int findContentChildren(List<int> g, List<int> s) {
    g.sort();
    s.sort();
    int ans=0;
    int res; 
    g.forEach((child){
        try{
            res = s.firstWhere((cookie)=>child<=cookie);
            s.remove(res);
        }catch(e){
            res=-1;
        }
        res==-1?null:ans++;
    });
    return ans;
  }
}
```