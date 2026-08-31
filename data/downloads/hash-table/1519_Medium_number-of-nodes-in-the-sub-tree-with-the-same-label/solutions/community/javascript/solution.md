# Java || C++ || JavaScript || DFS || Explained || Beats 100% || Concise and Clean

**Author:** nishant7372
**Votes:** 48
**Link:** [https://leetcode.com/problems/number-of-nodes-in-the-sub-tree-with-the-same-label/solutions/3037960/](https://leetcode.com/problems/number-of-nodes-in-the-sub-tree-with-the-same-label/solutions/3037960/)

---

## Approach:
   * Use DFS for Traversal
   * Each node should return an array of size 26 to the parent, containing count of all labels in the subtree of that node.
   * store that count for each node label in the output array

## Complexity:

* **Time Complexity**: O(n)
* **Space Complexity**: O(26*n)


``` java []
class Solution {
    int[] array;
    public int[] countSubTrees(int n, int[][] edges, String labels) {

        array = new int[n]; //output array
    
        //creating adjacency list
        ArrayList<Integer>[] a = new ArrayList[n];
        for(int i=0;i<n;i++){
            a[i] = new ArrayList<Integer>();
        }

        for(int[] x:edges){
            a[x[0]].add(x[1]);
            a[x[1]].add(x[0]);
        }

        dfs(-1,0,a,labels);
        return array;
    }

    private int[] dfs(int prev,int curr,ArrayList<Integer>[] a,String labels)
    {
        int[] ans = new int[26];  //freq array 
        for(int x:a[curr])
        {
            if(prev!=x)
            {
                // array return by the children node
                int[] res = dfs(curr,x,a,labels);  
                // combining the frequencies of left and right subtrees into one array
                for(int i=0;i<res.length;i++)  
                    ans[i]+=res[i];
            }
        }
        // incrementing the freq of curr node label and storing in output array
        array[curr] = ++ans[labels.charAt(curr)-'a']; 
        return ans;
    }
}
```
``` C++ []
class Solution {
    vector<int> array;
public:
    vector<int> countSubTrees(int n, vector<vector<int>>& edges, string labels) {
        array.resize(n); //output array
        
        //creating adjacency list
        vector<vector<int>> a(n);
        for(auto x:edges){
            a[x[0]].push_back(x[1]);
            a[x[1]].push_back(x[0]);
        }
        dfs(-1,0,a,labels);
        return array;
    }

    vector<int> dfs(int prev,int curr,vector<vector<int>>& a,string& labels)
    {
        vector<int> ans(26); 
        for(auto x:a[curr])
        {
            if(prev!=x)
            {
            // array return by the children node
                vector<int> res = dfs(curr,x,a,labels); 
            // combining the frequencies of left and right subtrees into one array
                for(int i=0;i<26;i++) 
                    ans[i]+=res[i];
            }
        }
        // incrementing the freq of curr node label and storing in output array
        array[curr] = ++ans[labels[curr]-'a'];
        return ans;
    }
};
```
``` javascript []
var countSubTrees = function(n, edges, labels) {
        let array = new Array(n);  //output array

        // creating adjacency list
        let a = new Array(n);
        for (let i = 0; i < n; i++) {
            a[i] = [];
        }
        for (let x of edges) {
            a[x[0]].push(x[1]);
            a[x[1]].push(x[0]);
        }

        dfs(-1, 0, a, labels,array);
        return array;
    }

    function dfs(prev, curr, a, labels,array) {
        const ans = new Array(26).fill(0);

        for (let x of a[curr]) {
            if (prev !== x) {
            // array return by the children node
                const res = dfs(curr, x, a, labels, array);  
            // combining the frequencies of left and right subtrees into one array
                for (let i = 0; i < 26; i++)  
                    ans[i] += res[i];
            }
        }
        // incrementing the freq of curr node label and storing in output array
        array[curr] = ++ans[labels.charCodeAt(curr) - 'a'.charCodeAt(0)];
        return ans;
    }
```

Note: Here, in Java and C++ code, the output array is declared globally to avoid passing in recursion call.

## *UPVOTE, IF U LIKE IT*