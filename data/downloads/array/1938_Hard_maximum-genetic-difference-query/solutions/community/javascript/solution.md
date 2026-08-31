# [Javascript] DFS, Trie and deleting from a Trie + comments

**Author:** George_Chrysochoou
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-genetic-difference-query/solutions/1348514/](https://leetcode.com/problems/maximum-genetic-difference-query/solutions/1348514/)

---

* **Intuition**

A naive way of going about this is a DFS and a stack. In that stack I keep the values of the ancestors of my current node and the current node included. By checking the xor of VAL with every value inside the stack, I can answer any query of the form [curnode, VAL]. That would of course result in a  O(N^2) runtime and would therefore TLE. 
One can notice, however, that in order to maximize the xor of any number X with some others [y1,y2,...y3] the ideal solution would be to pick a yi such that yi^X have a set bit that's as left as possible because this is how the maximum xor occurs. If there are 2 or more such yis that have a set bit let's say 14 positions to the left, the same logic applies for any position <14 . So if there was a way for storing my numbers in terms of bits that I could rapidly traverse, that would be great.
A trie is an excellent candidate for my task. All that my trie needs is a pointer to 0 or 1 if any numbers that have the k-th bit unset/set respectively are stored inside the Trie. 
During the stack Implementation, one would need to pop a value from the stack once a dfs step  was finished, so that the current value is NOT available for different branches inside the stack. 
Consider this case:
**Root**
| \\\\
**B**  **C**
B should never be available when the time comes to decide on any solution of the form [C,VAL]
therefore after I finish answering queries on B, the stack should go from [ROOT,B] to just [ROOT]

In order for me to achieve this in my Trie, I store the first change that was ever made inside that Trie, and I cut the branch once the dfs step finishes.

* **Implementation**
```
class Trie{
    constructor(){
        this.T=[-1,-1]
    }
    insert(val){
        let cur=this.T,firstchangeNode=null,fcIndex=null
        for(let i=17;i>=0;i--){ // a node can be up to (1e5), whose log2 is 17, so at most we need 17 bits
            let next=Number(Boolean(val&(1<<i)))
            if(cur[next]===-1){
                if(firstchangeNode===null)
                    firstchangeNode=cur,fcIndex=next
                cur[next]=[-1,-1]
            }
            cur=cur[next]
        }
        // memorize the first change (if any) that was made during the insertion of val
        return [firstchangeNode,fcIndex] 
    }
    search(val){
        let cur=this.T,res=0
        for(let i=17;i>=0;i--){
            let xor= 1^Number(Boolean(val&(1<<i)))
            if(cur[xor]!==-1)
                cur=cur[xor],res|=(1<<i)
            else
                cur=cur[xor^1]
        }
        return res
    }
}
var maxGeneticDifference = function(parents, queries) {
    let root,n=parents.length,res=[...Array(n)].map(d=>{}),
        Q=[...Array(n)].map(d=>[]),adj=[...Array(n)].map(d=>[])
    // create some objects for fast access to the results
    for(let [node,val] of queries)
        Q[node].push(val),
        res[node]={},res[node][val]=undefined
    // create an adjacency list that points to the next node 
    for(let i=0;i<parents.length;i++)
        if(parents[i]!==-1)
            adj[parents[i]].push(i)
        else 
            root=i
    let T=new Trie()
    //traverse the tree
    let dfs=(node)=>{
        let [fnode,index]=T.insert(node) //insert the value of a node to our trie
        for(let q of Q[node]) //answer all the queries for our current node
            res[node][q]=T.search(q) 
        for(let nei of adj[node]) // dfs to the children nodes
            dfs(nei)
        if(fnode!==null) // if my trie was altered during this turn, revert the change
            fnode[index]=-1
    }
    dfs(root)
    //return the results, which have already been calculated 
    return queries.map( ([node,val])=>res[node][val])
};
```
* **Complexity**

O(N) Time and Space