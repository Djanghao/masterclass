# easy faster java code -- 97 % faster

**Author:** PritamSinghSolanki
**Votes:** 4
**Link:** [https://leetcode.com/problems/graph-connectivity-with-threshold/solutions/2377404/](https://leetcode.com/problems/graph-connectivity-with-threshold/solutions/2377404/)

---

Just taking care of multiples for threshould 
```
class Solution {
    int[] p;
    int[] r;
    
    int find(int x){
        if(p[x]==x){
            return x;
        }else{
           p[x]=find(p[x]);
            return p[x];
        }
    }
    
    void union(int x,int y){
        int xl=find(x);
        int yl=find(y);
        
        if(xl==yl){
            return;
        }
        
        if(r[xl]<r[yl]){
            p[xl]=yl;
        }else if(r[xl]>r[yl]){
            p[yl]=xl;
        }else{
           p[yl]=xl;
            r[xl]++;
        }
    }
    public List<Boolean> areConnected(int n, int threshold, int[][] queries) {
        p=new int[n+1];
        r=new int[n+1];
        
        for(int i=0;i<=n;i++){
           p[i]=i;
           r[i]=0;
        }
        List<Boolean> ans=new ArrayList();
        for(int div=threshold+1;div<=n;div++){
            for(int m=1;div*m<=n;m++){
                union(div,div*m);
            }
        }
        
        for(int[] query: queries){
            int x=query[0];
            int y=query[1];
            
            if(find(x)==find(y)){
                ans.add(true);
            }else{
                ans.add(false);
            }
        }
        
        return ans;
    }
}

**plz upvote if you like
```