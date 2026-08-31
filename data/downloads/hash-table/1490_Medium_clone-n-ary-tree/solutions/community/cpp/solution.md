# two 4-liners ^^

**Author:** andrii_khlevniuk
**Votes:** 2
**Link:** [https://leetcode.com/problems/clone-n-ary-tree/solutions/942855/](https://leetcode.com/problems/clone-n-ary-tree/solutions/942855/)

---

**1**
```
Node* cloneTree(Node* r) 
{
	if(!r) return 0;
	auto c = new Node(r->val, r->children);
	for(auto & i : c->children) i = cloneTree(i);
	return c;        
}
```
**2**
```
Node* cloneTree(Node* r, Node* && c = 0) 
{
	if(!r) return 0;
	c = new Node(r->val, r->children);
	for(auto i{0}; i<r->children.size(); cloneTree(r->children[i], move(c->children[i])), ++i);        
	return c;
}
```