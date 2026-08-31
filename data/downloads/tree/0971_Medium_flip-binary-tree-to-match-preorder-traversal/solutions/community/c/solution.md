# ✅ Simple Preorder Tree Traversal | Short & Easy w/ Explanation

**Author:** archit91
**Votes:** 28
**Link:** [https://leetcode.com/problems/flip-binary-tree-to-match-preorder-traversal/solutions/1132889/](https://leetcode.com/problems/flip-binary-tree-to-match-preorder-traversal/solutions/1132889/)

---

***Solution (Preoder Traversal with Checks)***

The first thing that must be realised is that there is **nothing as minimum number of flips** (just don't flip a node back and forth multiple time\uD83D\uDE05). You can **either flip some nodes** so that re-arranged tree's preorder traversal matches voyage **or the tree couldn't be made  to match the voyage**.

With that out of the way, a recursive solution  can be formed easily. We just traverse the tree and check at each node -
1. If the **root's value** is matching voyage value **`v[i]`**.
2. If the root's left child is matching voyage's next value **`v[i + 1]`**. This needs to be performed since we would require the parent node if a flip needs to be performed.

If at any point **root's value itself is not matching**, then we are unable to perform flip to match the voyage. **Return [-1]**.

If the **left child value is not matching, we can either flip or not**. If right child exists and matches, flip it else we are unable to match the tree with voyage - return [-1].


```
vector<int> flip;
int i;
vector<int> flipMatchVoyage(TreeNode* root, vector<int>& voyage) {
	i = 0;
	// if voyage is matching after some flips, return the flipped nodes, else return [-1]
	return isMatchingVoyage(root, voyage) ? flip : vector<int>{-1};
}
bool isMatchingVoyage(TreeNode* root, vector<int>& v){
	/*
** Base conditions - 
	1. We reached null node meaning we have traversed till end without mismatch so return true.
	2. The root itself is not matching the corresponding voyage (v[i]). This denotes we can't flip any node to match the voyage and hence return false
** Main process - 
	1. If the root -> left value is not equal to corresponding voyage value (v[i]), we have the choice to flip. We will only flip if root -> right matches v[i].
	2. If above flip isn't performed, we can't match the voyage so return false.
** Recurse -
	1. If we haven't yet returned false, the voyage till now has been matched. Just recurse for the remaining tree.
	2. Since the problem asks us that preOrder should match voyage, so recurse left and then right.
	*/
	if(!root) return true;
	if(root -> val != v[i++]) return false;
	// if left node exists and doesn't match voyage
	if(root -> left && root -> left -> val != v[i]) 
		// if right node exists and matches voyage v[i], flip the node, push into vector and continue
		if(root -> right && root -> right -> val == v[i]) flip.push_back(root -> val), swap(root -> left, root -> right);            
		else return false;        
	// recurse till whole tree is traversed - first left and then right.	
	return isMatchingVoyage(root -> left, v) && isMatchingVoyage(root -> right, v);
}
```

***Time Complexity :*** **`O(N)`**, where `N` is the number of nodes in the tree.
***Space Complexity :*** **`O(N)`**

-----
-----

The above swap and modification to the tree doesn't really needs to be done. We can just modify the recursive call order. Rest solution is the same.

```
    vector<int> flip;
    int i;
    vector<int> flipMatchVoyage(TreeNode* root, vector<int>& voyage) {
        i = 0;
        return isMatchingVoyage(root, voyage) ? flip : vector<int>{-1};
    }
    bool isMatchingVoyage(TreeNode* root, vector<int>& v){
        if(!root) return true;
        if(root -> val != v[i++]) return false;
        if(root -> left && root -> left -> val != v[i]){
            flip.push_back(root -> val);
            return isMatchingVoyage(root -> right, v) && isMatchingVoyage(root -> left, v);
        }
        return isMatchingVoyage(root -> left, v) && isMatchingVoyage(root -> right, v);
    }
```
