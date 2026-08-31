# Not so hard dfs

**Author:** jovamilenkovic
**Votes:** 0
**Link:** [https://leetcode.com/problems/smallest-string-with-swaps/solutions/5408158/](https://leetcode.com/problems/smallest-string-with-swaps/solutions/5408158/)

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
    public string SmallestStringWithSwaps(string s, IList<IList<int>> p) {
           char[] ans= s.ToArray();
Dictionary<int, List<int>> d= new Dictionary<int, List<int>>();
        for (int i=0; i<p.Count; i++){
            if (d.ContainsKey(p[i][0]))d[p[i][0]].Add(p[i][1]);
            else d.Add(p[i][0],new List<int>(){p[i][1]});
             if (d.ContainsKey(p[i][1]))d[p[i][1]].Add(p[i][0]);
            else d.Add(p[i][1],new List<int>(){p[i][0]});
        }
        bool[]seen= new bool[s.Length];
          bool[]seen1= new bool[s.Length];
        foreach (int k in d.Keys){
            if (!seen1[k]){
                Console.WriteLine();
                seen= new bool[s.Length];
                seen[k]=true;
                Queue<int> q= new Queue<int>();
                q.Enqueue(k);
                while(q.Count>0){
                    int x=   q.Dequeue();
                    for(int i=0; i< d[x].Count; i++){
                        if(!seen[d[x][i]]){ q.Enqueue(d[x][i]); seen[d[x][i]]=true;}
                    }
                }
                List<int> c= new List<int>();
                List<char> b= new List<char>(); 
                for (int i=0; i< s.Length; i++){
                if(seen[i]){seen1[i]=true;c.Add(i);b.Add(s[i]);}
                }
                b.Sort();
                for (int i=0; i< c.Count; i++){
                    ans[c[i]]=b[i];
                }
            }
        }
        string ans1="";
        for (int i=0; i<s.Length; i++){
            ans1+=ans[i];
        }
        return ans1;
    }
}
```