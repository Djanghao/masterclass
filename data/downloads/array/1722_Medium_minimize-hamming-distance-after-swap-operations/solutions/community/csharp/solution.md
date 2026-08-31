# Slow but not hard

**Author:** jovamilenkovic
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimize-hamming-distance-after-swap-operations/solutions/5409040/](https://leetcode.com/problems/minimize-hamming-distance-after-swap-operations/solutions/5409040/)

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
    public int MinimumHammingDistance(int[] s, int[] t, int[][] p) {
    
         List<List<int>> sub= new  List<List<int>>();
Dictionary<int, List<int>> d= new Dictionary<int, List<int>>();
        for (int i=0; i<p.Length; i++){
            if (d.ContainsKey(p[i][0]))d[p[i][0]].Add(p[i][1]);
            else d.Add(p[i][0],new List<int>(){p[i][1]});
             if (d.ContainsKey(p[i][1]))d[p[i][1]].Add(p[i][0]);
            else d.Add(p[i][1],new List<int>(){p[i][0]});
        }
        bool[]seen= new bool[s.Length];
        foreach (int k in d.Keys){
            if (!seen[k]){
                Console.WriteLine();               
                seen[k]=true;
                Queue<int> q= new Queue<int>();
                q.Enqueue(k);
                 List<int> c= new List<int>();            
                c.Add(k);                
                while(q.Count>0){
                    int x=   q.Dequeue();
                    for(int i=0; i< d[x].Count; i++){
                        if(!seen[d[x][i]]){c.Add(d[x][i]);
                             q.Enqueue(d[x][i]); seen[d[x][i]]=true;}
                    }
                }
                sub.Add(c);
            }
        }
        bool[] seen1= new bool[s.Length];
        for (int i=0; i< sub.Count; i++){
            for(int j=0; j< sub[i].Count; j++){
                seen1[sub[i][j]]=true;
            }
        }
        int ans=0;
 for (int i=0;i<seen1.Length; i++){
    if(!seen1[i]){ if(s[i]!=t[i])ans++;}
 }
 Console.WriteLine(ans);
  
 for (int i=0; i<sub.Count; i++){
    Dictionary <int,int>s1= new  Dictionary <int,int>(); 
    Dictionary <int,int>t1= new  Dictionary <int,int>(); 
    for (int j=0; j<sub[i].Count; j++){
       int x= s[sub[i][j]];
       int  y= t[sub[i][j]];
       if(s1.ContainsKey(x)) s1[x]++;
       else s1.Add(x,1);
        if(t1.ContainsKey(y)) t1[y]++;
       else t1.Add(y,1);
    }
    int x1=0;
    foreach (int k1 in s1.Keys){
        if (t1.ContainsKey(k1)){if(s1[k1]>t1[k1])ans+=(s1[k1]-t1[k1]);}
        else ans+=(s1[k1]);
    }    
    
 }
    
  
 
return ans;
               
    }
}
```