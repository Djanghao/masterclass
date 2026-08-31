# [Javascript] DFS + Adding trees on the go

**Author:** George_Chrysochoou
**Votes:** 1
**Link:** [https://leetcode.com/problems/merge-bsts-to-create-single-bst/solutions/1332564/](https://leetcode.com/problems/merge-bsts-to-create-single-bst/solutions/1332564/)

---

**Idea**
Build the tree from the top down.
**Issues**
There are a couple edge cases that need to be considered. Namely, problems arise when:
* There are cycles, for example   [2,null,3] , [3,2,null]
* Some mini trees are not used at all
* The resulting tree is not a BST

**Implementation**
One dfs will determine the indegrees of each node and will place pointers in each node to their parent, such that replacing can be easy, even when currently at the node itself. The node with the indegree===0, is the main root, from which a second dfs will form the resulting tree. Finally, after each edge case has been dealt with, the root node will be returned.

```
var canMerge = function(trees) {
    let Node={},indeg={}
    // traverse the mini trees and put back pointers to their parents, also figure out the indegree of each node
    let dfs=(node,leftparent=null,rightparent=null)=>{
        if(!node)return
        indeg[node.val]=indeg[node.val]||Number(leftparent!==null||rightparent!==null)
        node.lp=leftparent,node.rp=rightparent
        dfs(node.left,node,null),dfs(node.right,null,node)
    }
    for(let root of trees)
        Node[root.val]=root,
        dfs(root)
    //there are a lot of potential roots=> no bueno
    if(Object.values(indeg).reduce((a,b)=>a+b)!=Object.keys(indeg).length-1)
        return null
    //find THE root
    let bigRoot,timesMerged=0
    for(let root of trees)
        if(indeg[root.val]===0)
            bigRoot=root
    // traverse the tree while replacing each leaf that can be replaced
    let rec=(node=bigRoot)=>{
        if(!node)
            return
        if(!node.left&&!node.right){
            let toadd=Node[node.val]
            Node[node.val]=undefined //invalidating the trees you already used
            if(toadd===undefined)
                return
            //make the change
            if(node.lp===null&&node.rp===null)
                return
            else if(node.lp!==null)
                node.lp.left=toadd
            else
                node.rp.right=toadd
            timesMerged++
            rec(toadd)
        }
        else
            rec(node.left),rec(node.right)
    }
    rec()
    var isValidBST = function(node,l=-Infinity,r=Infinity) { //l and r are the limits node.val should be within
        if(!node)
            return true
        if(node.val<l || node.val >r)
            return false
        return isValidBST(node.left,l,node.val-1)&&isValidBST(node.right,node.val+1,r)
    };
    //check if every item was used and if the result bst is valid 
    return !isValidBST(bigRoot)||timesMerged!==trees.length-1?null:bigRoot
};
```