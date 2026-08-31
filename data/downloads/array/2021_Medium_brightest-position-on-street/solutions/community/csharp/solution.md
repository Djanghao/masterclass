# Easy

**Author:** jovamilenkovic
**Votes:** 0
**Link:** [https://leetcode.com/problems/brightest-position-on-street/solutions/5535744/](https://leetcode.com/problems/brightest-position-on-street/solutions/5535744/)

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
    public int BrightestPosition(int[][] l) {
        SortedDictionary<int, int> turn= new SortedDictionary<int, int>();
         SortedDictionary<int, int> sho= new SortedDictionary<int, int>();
         for (int i=0; i< l.Length;i++){
            int x=l[i][0]-l[i][1];
            int y=l[i][0]+l[i][1]+1;
            if (turn.ContainsKey(x))turn[x]++;
            else turn.Add(x,1);
            if(sho.ContainsKey(y))sho[y]--;
            else sho.Add(y,-1);
         }
         List<List<int>> t= new List<List<int>>();
          List<List<int>> d= new List<List<int>>();
          foreach(int k in turn.Keys){
            t.Add(new List<int>(){k,turn[k]});
          }
          foreach(int k in sho.Keys){
            d.Add(new List<int>(){k,sho[k]});
          }
          int c=1;
          c=t[0][1];
          int max=c;
          int ans=t[0][0];
          int ind=0;       
          for(int i=1; i<t.Count; i++ ){
            while(d[ind][0]<=t[i][0]){
                c+=d[ind][1];
                ind++;
            }
            c+=t[i][1];
            if(c>max){max=c; ans=t[i][0];}
          }
          return ans;
    }
}
```