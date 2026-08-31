# JS, Python, Java, C++ | Easy BFS Solution w/ Explanation

**Author:** sgallivan
**Votes:** 136
**Link:** [https://leetcode.com/problems/average-of-levels-in-binary-tree/solutions/1094405/](https://leetcode.com/problems/average-of-levels-in-binary-tree/solutions/1094405/)

---

*(Note: This is part of a series of Leetcode solution explanations. If you like this solution or find it useful,* ***please upvote*** *this post.)*

---

#### ***Idea:***

A problem talking about levels in a binary tree should immediately bring to mind a **breadth-first search** (**BFS**) approach. The classic BFS approach for a binary tree is to use a **queue** and push each queue entry's children onto the end of the queue. This way, the queue will run to the end of the row/level before moving onto the next level.

When a problem requires you to isolate a level, you can simply take the length of the queue at the start of the row and then once you've processed that many nodes from the queue, you'll know that you're ready to start the next row.

So as long as the queue exists, we'll take each row, sum the row's values (**row**), then divide by the length of the row (**qlen**) to find the average, pushing each average into our answer array (**ans**).


---

#### ***Implementation:***

The code for all four languages is almost identical.

---

#### ***Javascript Code:***

The best result for the code below is **84ms / 43.2MB** (beats 98% / 73%).
```javascript
var averageOfLevels = function(root) {
    let q = [root], ans = []
    while (q.length) {
        let qlen = q.length, row = 0
        for (let i = 0; i < qlen; i++) {
            let curr = q.shift()
            row += curr.val
            if (curr.left) q.push(curr.left)
            if (curr.right) q.push(curr.right)
        }
        ans.push(row/qlen)
    }
    return ans
};
```

---

#### ***Python Code:***

The best result for the code below is **44ms / 16.3MB** (beats 92% / 100%).
```python
class Solution:
    def averageOfLevels(self, root: TreeNode) -> List[float]:
        q, ans = [root], []
        while len(q):
            qlen, row = len(q), 0
            for i in range(qlen):
                curr = q.pop(0)
                row += curr.val
                if curr.left: q.append(curr.left)
                if curr.right: q.append(curr.right)
            ans.append(row/qlen)
        return ans
```

---

#### ***Java Code:***

The best result for the code below is **2ms / 40.5MB** (beats 82% / 97%).
```java
class Solution {
    public List<Double> averageOfLevels(TreeNode root) {
        Queue<TreeNode> q = new LinkedList<>(List.of(root));
        List<Double> ans = new ArrayList<>();
        while (q.size() > 0) {
            double qlen = q.size(), row = 0;
            for (int i = 0; i < qlen; i++) {
                TreeNode curr = q.poll();
                row += curr.val;
                if (curr.left != null) q.offer(curr.left);
                if (curr.right != null) q.offer(curr.right);
            }
            ans.add(row/qlen);
        }
        return ans;
    }
}
```

---

#### ***C++ Code:***

The best result for the code below is **8ms / 22.3MB** (beats 99% / 99%).
```c++
class Solution {
public:
    vector<double> averageOfLevels(TreeNode* root) {
        queue<TreeNode*> q;
        q.push(root);
        vector<double> ans;
        while (q.size()) {
            double qlen = q.size(), row = 0;
            for (int i = 0; i < qlen; i++) {
                TreeNode* curr = q.front(); q.pop();
                row += curr->val;
                if (curr->left) q.push(curr->left);
                if (curr->right) q.push(curr->right);
            }
            ans.push_back(row/qlen);
        }
        return ans;
    }
};
```