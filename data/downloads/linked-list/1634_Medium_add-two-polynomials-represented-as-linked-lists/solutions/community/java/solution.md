# Python 3 & Java | Two Method, Hashmap, Two Pointer | Explanations

**Author:** idontknoooo
**Votes:** 2
**Link:** [https://leetcode.com/problems/add-two-polynomials-represented-as-linked-lists/solutions/915697/](https://leetcode.com/problems/add-two-polynomials-represented-as-linked-lists/solutions/915697/)

---

### Approach #1. Hashmap + Sort
- Create a map/dictionary, set `power` as key and `coefficient` as value
- Iterate over two linkedlist and combine the coefficient
- Use reversed sort to return descending order node
- Time: `O( (M+N) lg (M+N) )`
- Space: `O(M+N)`
<iframe src="https://leetcode.com/playground/KBGVb3Xf/shared" frameBorder="0" width="800" height="500"></iframe>

### Approach #2. Two pointers + Greedy
- Since both linkedlist have already sorted by `power`, use two pointer compare all the situations
- From `poly1` and `poly2`, get the `coefficient` with larger `power` as `cur.next`
	- If `poly1.power == poly2.power`, add their coefficient together
		- if the sum of coefficient is 0, then skip (i.e. `0*X^power` will always be just 0, doesn't make sense to create a node)
- Finally, check if there is any left over in either node
- Time: `O(M+N)`
- Space: `O(1)`
<iframe src="https://leetcode.com/playground/XMwWiakA/shared" frameBorder="0" width="800" height="600"></iframe>