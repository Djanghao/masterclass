# Javascript Easy Solution With Clear Explanation [DFS]

**Author:** james2allen
**Votes:** 1
**Link:** [https://leetcode.com/problems/binary-tree-coloring-game/solutions/846589/](https://leetcode.com/problems/binary-tree-coloring-game/solutions/846589/)

---

Okay so the solution to this problem is that we can win on 2 conditions:
* If the player has chosen a node where entire sum of all the nodes in the subtree for their chosen node is less than the sum of the remainder nodes, you will easily win in this case by choosing the parent node to their tree and cutting them off.
* If the left or right subtree of the node they chose contains more nodes than the rest of the remainder nodes, you will then win by chosing the left or right child node and cutting them off.

If none of the above conditions are true, you return false.

```
var btreeGameWinningMove = function(root, n, x) {
    let queue = [root], parents = [];
    let temp = root;
	
	// find the node that has be chosen using dfs
    while(temp.val !== x) {
        temp = queue.shift();
        temp.left ? queue.push(temp.left) : null;
        temp.right? queue.push(temp.right): null;
    }
    
    // get the sum of all the nodes in the sub tree using dfs
    let getSubtreeSum = (node) => {
        if(!node) {
            return 0;
        }
        let q = [node];
        let sub, count = 0;
        while(q.length) {
            count++;
            sub = q.shift();
            sub.left ? q.push(sub.left) : null;
            sub.right? q.push(sub.right): null;
        }
        return count;
    }
    
	// get the sums of both child trees
    let leftSum = getSubtreeSum(temp.left), rightSum = getSubtreeSum(temp.right);
    
	// if the sum of all the nodes in the tree that the other player picked can be cut off, and is less than
	// the remainder return true
    if( n - (leftSum + rightSum + 1 ) > leftSum + rightSum + 1){
        return true;
    }
    
	// If one of the child nodes presents itself as a larger tree than the remainder count of nodes return true
    if(leftSum > n - leftSum || rightSum > n-rightSum) {
        return true;
    }
    
	// return false if none of these conditions can be met
    return false;
    
    
};