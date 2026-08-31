# GREEDY Solution NO DP,  HASHING + DFS + BFS  + String  Concatenation

**Author:** Rachit070203
**Votes:** 5
**Link:** [https://leetcode.com/problems/count-number-of-possible-root-nodes/solutions/3256575/](https://leetcode.com/problems/count-number-of-possible-root-nodes/solutions/3256575/)

---


<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->
A simple observation : like if I have ith node as a parent and jth node is its immediate chlid then all the relationships for jth node is exactly same as ith except iparentOfj and jparentOfi

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->


- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->


# Code
```
import java.util.*;
class Solution{
    HashSet<String> ans=new HashSet<>();

    public  void DFS(ArrayList<Integer>[]arr,HashSet<String> h)
    {
        boolean []bool=new boolean[arr.length+1];

        for(int i=1;i<arr.length;i++)
        {
            if(bool[i])
                continue;
            {
                // dfs.add(i);

                DFS(arr,bool,i,h);
            }


        }

    }
    public  void DFS(ArrayList<Integer> []arr,boolean []vst,int i,HashSet<String> h) {
        if (vst[i]) {

            return;
        }
        vst[i] = true;
        // cc++;;
        ArrayList<Integer> anss = arr[i];
        if (anss != null) {
            for (Integer an : anss) {
                {
                    if (vst[an]) {

                        continue;
                    }
                    // dfs.add(an);
                    String s = "";
                    s += i + "#" + an;

                    if (h.contains(s))
                        ans.add(s);
                    DFS(arr, vst, an, h);
                }
            }
        }
    }




    public int rootCount(int[][] edges, int[][] gs, int k) {
        if(k==0)
        {
            return edges.length+1;
        }
        int m=edges.length;
        int n=m+1;
        int [][]gp=new int[m][2];
        ans=new HashSet<>();
//        for(int i=0;i<=n;i++)ans[i]=new HashSet<>();

        ArrayList<Integer>[]arr=new ArrayList[n+1];
        for(int i=0;i<m;i++)
        {
            gp[i][0]= edges[i][0]+1;
            gp[i][1]= edges[i][1]+1;
        }


        for(int i=0;i<m;i++)
        {

            ArrayList<Integer> ans=new ArrayList<>();
            if(arr[gp[i][0]]!=null)
            {
                ans=arr[gp[i][0]];

            }
            ans.add(gp[i][1]);
            arr[gp[i][0]]=ans;
            ArrayList<Integer> bns=new ArrayList<>();
            if(arr[gp[i][1]]!=null)
            {
                bns=arr[gp[i][1]];

            }
            bns.add(gp[i][0]);
            arr[gp[i][1]]=bns;


        }
        HashSet<String> h=new HashSet<>();
        for (int[] g : gs) {
            String a = "" + (g[0] + 1) + "#" + (g[1] + 1);
            h.add(a);

        }
        // System.out.println(h+"----");

        DFS(arr,h);
        return BFS(arr,h,k,n);
        // for(int i=1;i<ans.length;i++)
        //             System.out.println(ans[i]);




    }




    public  int  BFS(ArrayList<Integer>[]arr,HashSet<String> h,int k,int n)
    {
        Queue<Integer> q=new LinkedList<>();

        boolean []vst=new boolean[arr.length];
        int sizer[]=new int[arr.length];
        sizer[1]=ans.size();

        q.offer(1);

        while(!q.isEmpty())
        {
            int x=q.poll();
            if(!vst[x]) {
                // bfs.add(x);
                vst[x]=true;
                ArrayList<Integer> anss=arr[x];

                for (Integer an : anss) {
                    if(!vst[an])
                    {
//                        ans[an]=new HashSet<>(ans[x]);
                        sizer[an]=sizer[x];
                        String torem="",toadd="";
                        torem+=x+"#"+an;


                        if(h.contains(torem))
                            sizer[an]--;
                        toadd+=an+"#"+x;

                        if(h.contains(toadd))
                            sizer[an]++;
                        // System.out.println(torem+"---"+toadd);

                        q.offer(an);
                    }
                }
            }



        }
        int ak=0;
        for(int i=1;i<arr.length;i++)
        {
            if(sizer[i]>=k)
                ak++;
        }
        return ak;



    }
}
```