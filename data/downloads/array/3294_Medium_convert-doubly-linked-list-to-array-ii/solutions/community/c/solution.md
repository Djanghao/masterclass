# C++ solution O(n)

**Author:** OleksaM
**Votes:** 0
**Link:** [https://leetcode.com/problems/convert-doubly-linked-list-to-array-ii/solutions/5807805/](https://leetcode.com/problems/convert-doubly-linked-list-to-array-ii/solutions/5807805/)

---

```
// Please, upvote if you like it. Thanks :-)
vector<int> toArray(Node *node){
	Node* root = node;
	while (root->prev)
		root = root->prev;
	vector<int> res{};
	while (root) {
		res.push_back(root->val);
		root = root->next;
	}
	return res;
}
```