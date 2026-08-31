# [C++] Map

**Author:** divyanshu1
**Votes:** 157
**Link:** [https://leetcode.com/problems/create-binary-tree-from-descriptions/solutions/1823687/](https://leetcode.com/problems/create-binary-tree-from-descriptions/solutions/1823687/)

---

We are using a hashmap (**getNode**) to store node for corresponding value. Also, we are using a hashmap (**isChild**) to check if node is a child or not.
Then, we traverse through the *descriptions* array and make the connections accordingly.
* If we haven't created node for corresponding value previously we create it otherwise we get the node from hashmap (*getNode*).
* We connect the child node to parent node as a left or right child according to the value of isLeft.
* And mark child node as *true* in hashmap (*isChild*).

At last we travel through all the nodes in *descriptions* to check which node has no parent (i.e root node) and return the root node.
*descriptions[i] = [parent, child, isLeft]*
I am checking for only parent because checking child node makes no sense and saves some time.

```
class Solution {
public:
    TreeNode* createBinaryTree(vector<vector<int>>& descriptions){
        unordered_map<int, TreeNode*> getNode;                          //to check if node alredy exist
        unordered_map<int, bool> isChild;                               //to check if node has parent or not
        for(auto &v: descriptions){
            if(getNode.count(v[0])==0){
                TreeNode* par = new TreeNode(v[0]);
                getNode[v[0]] = par;
            }
            if(getNode.count(v[1])==0){
                TreeNode* child = new TreeNode(v[1]);
                getNode[v[1]] = child;
            }
            if(v[2]==1) getNode[v[0]]->left = getNode[v[1]];               //left-child
            else getNode[v[0]]->right = getNode[v[1]];                     //right-child
            isChild[v[1]] = true;
        }
        TreeNode* ans = NULL;
        for(auto &v: descriptions){
            if(isChild[v[0]] != true){                  //if node has no parent then this is root node
                ans = getNode[v[0]]; 
                break;
            }
        }
        return ans;
    }
};
```
*If you like the solution, please Upvote \uD83D\uDC4D!!*