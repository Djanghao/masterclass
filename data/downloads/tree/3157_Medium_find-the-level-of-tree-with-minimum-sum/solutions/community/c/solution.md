# bfs ˆˆ

**Author:** andrii_khlevniuk
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-level-of-tree-with-minimum-sum/solutions/5257741/](https://leetcode.com/problems/find-the-level-of-tree-with-minimum-sum/solutions/5257741/)

---

```
int minimumLevel(TreeNode* r) 
{
	stack<TreeNode*> s{{r}}, s1;
	int i{1}, i_{};
	long sum{}, sum_{INT_MAX};
	for( ; !empty(s); ++i)
	{
		for( ; !empty(s); )
		{
			auto x = s.top(); s.pop();
			sum += x->val;
			if(x->left)  s1.push(x->left);
			if(x->right) s1.push(x->right);
		}
		if(sum<sum_) i_=i, sum_=sum;
		sum = 0;
		swap(s, s1);
	}
	return i_;
}
```