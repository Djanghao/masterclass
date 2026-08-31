# Not so hard bfs

**Author:** jovamilenkovic
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximize-the-number-of-target-nodes-after-connecting-trees-i/solutions/6100593/](https://leetcode.com/problems/maximize-the-number-of-target-nodes-after-connecting-trees-i/solutions/6100593/)

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
```csharp []
public class Solution {
    public int[] MaxTargetNodes(int[][] e1, int[][] e2, int k) {
    Dictionary <int, List<int>> d1= new   Dictionary <int, List<int>>();
     Dictionary <int, List<int>> d2= new   Dictionary <int, List<int>>();
     for(int i=0; i< e1.Length; i++){
        if(d1.ContainsKey(e1[i][0]))d1[e1[i][0]].Add(e1[i][1]);
        else d1.Add(e1[i][0], new List<int>(){e1[i][1]});
         if(d1.ContainsKey(e1[i][1]))d1[e1[i][1]].Add(e1[i][0]);
        else d1.Add(e1[i][1], new List<int>(){e1[i][0]});
     }
     for(int i=0; i< e2.Length; i++){
        if(d2.ContainsKey(e2[i][0]))d2[e2[i][0]].Add(e2[i][1]);
        else d2.Add(e2[i][0], new List<int>(){e2[i][1]});
         if(d2.ContainsKey(e2[i][1]))d2[e2[i][1]].Add(e2[i][0]);
        else d2.Add(e2[i][1], new List<int>(){e2[i][0]});
     }
    int[] a1= new int [e1.Length+1];
     foreach(int a in d1.Keys){
        bool[] seen= new bool[ e1.Length+1];
        seen[a]=true;
        Queue<int> q= new Queue<int>();
        q.Enqueue(a);
        int s=0;
        while( q.Count>0 && s<k){
            int l=q.Count;
            for (int i=0; i<l; i++){
                int x=q.Dequeue();
                for(int j=0; j< d1[x].Count; j++){
                    if(!seen[d1[x][j]]){
                        seen[d1[x][j]]=true;
                        a1[a]++;
                        q.Enqueue(d1[x][j]);
                    }
                }
            }
            s++;
        }
     }
     int[] a2= new int [e2.Length+1];
     foreach(int a in d2.Keys){
        bool[] seen= new bool[ e2.Length+1];
        seen[a]=true;
        Queue<int> q= new Queue<int>();
        q.Enqueue(a);
        int s=0;
        while( q.Count>0 && s<k-1){
            int l=q.Count;
            for (int i=0; i<l; i++){
                int x=q.Dequeue();
                for(int j=0; j< d2[x].Count; j++){
                    if(!seen[d2[x][j]]){
                        seen[d2[x][j]]=true;
                        a2[a]++;
                        q.Enqueue(d2[x][j]);
                    }
                }
            }
            s++;
        }
     }
     int max=0;
     for (int i=0; i< a2.Length; i++){
        max=Math.Max(max,a2[i] );
           }
     int []ans = new int[e1.Length+1];
    if(k>0) for(int i=0; i< a1.Length; i++){
        ans[i]=max+2+a1[i];
     }
     else Array.Fill(ans,1);
     return ans;

    }
}
```