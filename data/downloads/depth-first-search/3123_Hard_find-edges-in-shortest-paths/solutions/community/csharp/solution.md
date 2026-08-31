# Not so hard

**Author:** jovamilenkovic
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-edges-in-shortest-paths/solutions/5054847/](https://leetcode.com/problems/find-edges-in-shortest-paths/solutions/5054847/)

---

# Intuition use double dijkstra form 0 to n -1, and form n-1 to 0, and then check every edge
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
    public bool[] FindAnswer(int n, int[][] e) {
        Dictionary<int, List<int[]>> d= new Dictionary<int,List<int[]>>();
        for (int i=0; i<n; i++){
            d.Add(i, new List<int[]>());
        }
        for(int i=0;i<e.Length; i++){
            d[e[i][0]].Add(new int[]{e[i][1], e[i][2]});
             d[e[i][1]].Add(new int[]{e[i][0], e[i][2]});
        }
        int [] f= new int[n];
        Array.Fill(f,2000000000);
        f[0]=0;
        PriorityQueue<int[], int> q= new  PriorityQueue<int[], int> ();
        for(int i=0; i<d[0].Count; i++){
            q.Enqueue(new int[]{d[0][i][0],d[0][i][1]},d[0][i][1]);
        }
        while(q.Count>0){
            int []a= q.Dequeue();
            if(f[a[0]]>a[1]){
                f[a[0]]=a[1];
                for (int i=0; i<d[a[0]].Count; i++){
                    if(f[d[a[0]][i][0]]> a[1]+d[a[0]][i][1])
                 q.Enqueue(new int[]{d[a[0]][i][0],a[1]+d[a[0]][i][1]},a[1]+d[a[0]][i][1]);
                }
            }
        }
        int min=f[n-1];
       int [] l= new int[n];
        Array.Fill(l,2000000000);
        l[n-1]=0;
         q= new  PriorityQueue<int[], int> ();
        for(int i=0; i<d[n-1].Count; i++){
            q.Enqueue(new int[]{d[n-1][i][0],d[n-1][i][1]},d[n-1][i][1]);
        }
        while(q.Count>0){
            int []a= q.Dequeue();
            if(l[a[0]]>a[1]){
                l[a[0]]=a[1];
                for (int i=0; i<d[a[0]].Count; i++){
                    if(l[d[a[0]][i][0]]> a[1]+d[a[0]][i][1])
                    q.Enqueue(new int[]{d[a[0]][i][0],a[1]+d[a[0]][i][1]},a[1]+d[a[0]][i][1]);
                }
            }
        }
     
        bool[]ans= new bool[e.Length];
        for (int i=0; i< e.Length; i++){
            if(f[e[i][0]]+l[e[i][1]]+e[i][2]==min||f[e[i][1]]+l[e[i][0]]+e[i][2]==min) ans[i]=true;
        }
        return ans;
    }
}
```