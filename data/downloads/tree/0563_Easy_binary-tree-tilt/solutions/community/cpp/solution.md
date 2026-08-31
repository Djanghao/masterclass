# C++ easy to solve solution || Beginner friendly algo with detailed explanations

**Author:** Cosmic_Phantom
**Votes:** 32
**Link:** [https://leetcode.com/problems/binary-tree-tilt/solutions/1617477/](https://leetcode.com/problems/binary-tree-tilt/solutions/1617477/)

---

**Depressed doge digging algortihm || DFS Algorithm  :** 

After reading this question, the first intuition that we get is that we have to use depth first search for digging the depths of the tree i.e for finding the` tilt( | left-right | )` .Now let's see how to apply this :)

**Algorithm :-** 
1. Everytime we go to a node we see whether that node has a child nodes or not 
2. If no nodes were to be found we make the leaf nodes as 0
3. If there are some child nodes then we find out the absolute difference of it i.e (|left-right|) and put this inside a `result` variable
4. The 2 and 3 process will be repeated till the end
5. In the end return the total sum .

**Code**
```
//Comment and Upvote

class Solution {
public:
    int result = 0;
    int depthfirstsearch(TreeNode *root) {
		//Checking if there are some child tree and if its true dfs it or else the node is leaf node therfore make it 0
        int left = (root->left ? depthfirstsearch(root->left) : 0), right = (root->right ? depthfirstsearch(root->right) : 0);
        // Finding the current tilt( |left-right| )
		result += abs(left - right);
		// returning the total sum
        return left + right + root->val;
    }
    int findTilt(TreeNode* root) {
        if (root) depthfirstsearch(root);
        return result;
    }
};
```


 ..... *Continuation from the previous posts,
As the legends told that, there was a another Dr Cheems whose mind was deepfreezed during 1947. So to find this out there were some excavation done on his landmark and the archaeologists found some old laboratory's with some ruins and there was a laboratory which was sealed by a mysterious cage of doors. Archaeologists tried to open it but they weren't able to open that door.Then a mysterious call came to one of the archaeologist . To be continued in the next post* ......