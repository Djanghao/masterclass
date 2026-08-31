# O(n)time/BEATS 99.97% MEMORY/SPEED 0ms MAY 2022

**Author:** darian-catalin-cucer
**Votes:** 9
**Link:** [https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/solutions/2008737/](https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/solutions/2008737/)

---

```
```

(Note: This is part of a series of Leetcode solution explanations. If you like this solution or find it useful, ***please upvote*** this post.)
***Take care brother, peace, love!***

```
```

```
```

```
```

The best result for the code below is ***0ms / 38.2MB*** (beats 92.04% / 24.00%).
* ***Java***
```
public List<List<Integer>> zigzagLevelOrder(TreeNode root) {
   TreeNode c=root;
   List<List<Integer>> ans =new ArrayList<List<Integer>>();
   if(c==null) return ans;
   Stack<TreeNode> s1=new Stack<TreeNode>();
   Stack<TreeNode> s2=new Stack<TreeNode>();
   s1.push(root);
   while(!s1.isEmpty()||!s2.isEmpty())
   {
       List<Integer> tmp=new ArrayList<Integer>();
        while(!s1.isEmpty())
        {
            c=s1.pop();
            tmp.add(c.val);
            if(c.left!=null) s2.push(c.left);
            if(c.right!=null) s2.push(c.right);
        }
        ans.add(tmp);
        tmp=new ArrayList<Integer>();
        while(!s2.isEmpty())
        {
            c=s2.pop();
            tmp.add(c.val);
            if(c.right!=null)s1.push(c.right);
            if(c.left!=null)s1.push(c.left);
        }
        if(!tmp.isEmpty()) ans.add(tmp);
   }
   return ans;
}
```

```
```

```
```

The best result for the code below is ***0ms / 7.0MB*** (beats 100.00% / 100.00%).
* ***C++***
```
class Solution {
public:
    void helper(TreeNode*root,vector<vector<int>>&res,int level)
    {
        if(!root) return;   
        if(level>=res.size())
            res.push_back({});
        res[level].push_back(root->val);
        helper(root->left,res,level+1);
        helper(root->right,res,level+1);
    }
    vector<vector<int>> zigzagLevelOrder(TreeNode* root) {
        vector<vector<int>>res;
        if(!root)   return res;
        helper(root,res,0); 
        for(int i=1;i<res.size();i=i+2)
        {
            reverse(res[i].begin(),res[i].end());
        }
        return res;
    }
};
```

```
```

```
```


The best result for the code below is ***26ms / 12.2MB*** (beats 95.42% / 82.32%).
* ***Python***
```
def zigzagLevelOrder(self, root: TreeNode) -> List[List[int]]:
	if not root: return []
	queue = collections.deque([root])
	res = []
	even_level = False
	while queue:
		n = len(queue)
		level = []
		for _ in range(n):
			node = queue.popleft()
			level.append(node.val)
			if node.left:
				queue.append(node.left)
			if node.right:
				queue.append(node.right)
		if even_level:
			res.append(level[::-1])
		else:
			res.append(level)
		even_level = not even_level
	return res
```

```
```

```
```

The best result for the code below is ***51ms / 34.2MB*** (beats 100.00% / 84.12%).
* ***JavaScript***
```
function zigzagLevelOrder(root) {
  let res = [];
  go(root, 0, res);
  return res;
}

function go(node, l, res) {  // l means level
  if (!node) return;

  if (res[l] == null) {
    res.push([]);
  }

  if (l % 2 === 0) {
    res[l].push(node.val);
  } else {
    res[l].unshift(node.val);
  }

  go(node.left, l + 1, res);
  go(node.right, l + 1, res);
}
```

```
```

```
```

The best result for the code below is ***68ms / 44.2MB*** (beats 100.00% / 45.25%).
* ***Kotlin***
```
 fun zigzagLevelOrder(root: TreeNode?): List<List<Int>> {
        val queue : Queue<TreeNode> = LinkedList()
        val result = mutableListOf<LinkedList<Int>>()
        if (root == null) return result
        var leftToRight = true // if true, add elements in normally else add in reverse
        queue.add(root)
        while (queue.isNotEmpty()) {
            val thisLevel = LinkedList<Int>()
            var size = queue.size
            while (size > 0) {
                var current = queue.poll()
                if (leftToRight.not()) thisLevel.addFirst(current.`val`) // reverse
                else thisLevel.add(current.`val`) // normal
                current.left?.let { queue.offer(it) }
                current.right?.let { queue.offer(it) }
                --size
            }
            result.add(thisLevel)
            leftToRight = leftToRight.not()
        }
        return result
    }
```

```
```

```
```

The best result for the code below is ***12ms / 32.2MB*** (beats 95% / 84%).
* ***Swift***
```
class Solution {
    // - Complexity:
    //   - time: O(n), where n is the number of nodes.
    //   - space: O(n), where n is the number of nodes.

    func zigzagLevelOrder(_ root: TreeNode?) -> [[Int]] {
        var ans = [[Int]]()
        dfs(root, level: 0, ans: &ans)
        return ans
    }


    private func dfs(_ node: TreeNode?, level: Int, ans: inout [[Int]]) {
        guard let node = node else { return }
        if ans.count <= level { ans.append([Int]()) }

        if level % 2 == 0 {
            ans[level].append(node.val)
        } else {
            ans[level].insert(node.val, at: 0)
        }

        dfs(node.left, level: level + 1, ans: &ans)
        dfs(node.right, level: level + 1, ans: &ans)
    }

}
```

```
```

```
```

***"Open your eyes. Expect us." - \uD835\uDCD0\uD835\uDCF7\uD835\uDCF8\uD835\uDCF7\uD835\uDD02\uD835\uDCF6\uD835\uDCF8\uD835\uDCFE\uD835\uDCFC***