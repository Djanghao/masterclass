# c++ solution|| O(N) || 100.00% faster

**Author:** deleted_user
**Votes:** 37
**Link:** [https://leetcode.com/problems/count-nodes-equal-to-average-of-subtree/solutions/2018178/](https://leetcode.com/problems/count-nodes-equal-to-average-of-subtree/solutions/2018178/)

---

So I am calling at every node and asking total sum and total number of node including that node itself so every subtree will return total sum of tree and total number of node. gobal variable will keep updating.
```
int count=0;
pair<int,int> valueSum(TreeNode* root){
	if(root==NULL) return {0,0};
	auto left=valueSum(root->left);
	auto right=valueSum(root->right);
	int sum=(left.first+right.first+root->val);
	int n=(left.second+right.second+1);        
	count+=((sum/n)==root->val);
	return {sum,n};
}
int averageOfSubtree(TreeNode* root) {
	auto p1=valueSum(root);
	return count;
}
```