# Dfs | 2ms

**Author:** gauravkumar10184
**Votes:** 6
**Link:** [https://leetcode.com/problems/frog-position-after-t-seconds/solutions/1326702/](https://leetcode.com/problems/frog-position-after-t-seconds/solutions/1326702/)

---

```
class Solution {
    public double frogPosition(int n, int[][] edges, int t, int target) {
       
        ArrayList<ArrayList<Integer>> graph=new ArrayList<>();
        for(int i=0;i<=n;i++)
            graph.add(new ArrayList<>());
        
        for(int ar[]:edges){
          int u=ar[0];
          int v=ar[1];
            graph.get(u).add(v);
            graph.get(v).add(u);
        }
        ans=0;
        dfs(1,t,target,graph,1,new boolean[n+1]);
        return ans;
    }
    double ans;
    
    public void dfs(int i,int t,int tar,ArrayList<ArrayList<Integer>> graph,double prob,boolean vis[]){
	// size for node 1 will be no of children but for other it will be 1 less bcz we have visisted its parent(only one)
        int size=graph.get(i).size()-(i==1?0:1);
        vis[i]=true;
        if(i==tar){
            if(t==0)ans=prob;               //  on target on given time
            else if(t>0 && size==0)ans=prob;  // on target not on given time but its leaf(we can't can't go anywhere now )
          return;
        }
        if(t>0)
        for(int x:graph.get(i)){
            if(!vis[x])
            dfs(x,t-1,tar,graph,prob/size,vis); // prob will be divided by no of its children
        }
    }
}
```