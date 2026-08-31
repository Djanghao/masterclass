# [1490. Clone N-ary Tree](https://leetcode.com/problems/clone-n-ary-tree/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 427 | 17 |

**Tags:** [`hash-table`](https://leetcode.com/tag/hash-table), [`tree`](https://leetcode.com/tag/tree), [`depth-first-search`](https://leetcode.com/tag/depth-first-search), [`breadth-first-search`](https://leetcode.com/tag/breadth-first-search)

**Companies:** `amazon`

## Description

Given a `root` of an N-ary tree, return a **deep copy** (clone) of the tree.

Each node in the n-ary tree contains a val (`int`) and a list (`List[Node]`) of its children.

```

class Node {
    public int val;
    public List&lt;Node&gt; children;
}

```

*Nary-Tree input serialization is represented in their level order traversal, each group of children is separated by the null value (See examples).*

 

**Example 1:**

![image](./images/0.png)

```

Input: root = [1,null,3,2,4,null,5,6]
Output: [1,null,3,2,4,null,5,6]

```

**Example 2:**

![image](./images/1.png)

```

Input: root = [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]
Output: [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]

```

 

**Constraints:**

	- The depth of the n-ary tree is less than or equal to `1000`.

	- The total number of nodes is between `[0, 10^4]`.

 

**Follow up: **Can your solution work for the graph problem?

---

**Links:** [Submissions](https://leetcode.com/problems/clone-n-ary-tree/) | [Solutions](https://leetcode.com/problems/clone-n-ary-tree/)
