# Clean Codes🔥🔥|| Full Explanation✅|| Depth First Search✅|| C++|| Java|| Python3

**Author:** N7_BLACKHAT
**Votes:** 57
**Link:** [https://leetcode.com/problems/find-duplicate-subtrees/solutions/3238342/](https://leetcode.com/problems/find-duplicate-subtrees/solutions/3238342/)

---

# Intuition :
- Here we have to find all the subtrees in a binary tree that occur more than once and return their roots.
<!-- Describe your first thoughts on how to solve this problem. -->

# Detail Explanation to Approach :
- Here we are using a `depth-first search` approach to traverse the tree and encode each subtree into a string using a preorder traversal.
- The encoding includes the value of the current node and the encoding of its left and right subtrees, separated by a special character ("#").
-  **For example,** the subtree consisting of just the root node with value `1` would be encoded as `"1##"` (with two "#" characters to indicate that there are no left or right subtrees).
```
final String encoded = root.val + "#" + encode(root.left, count,ans)
 + "#" + encode(root.right, count, ans);
```
**OR YOU CAN WRITE IT AS**
```
String left = encode(root.left, count, ans);
String right = encode(root.right, count, ans);
final String encoded = root.val + "#" + left + "#" + right;
```
- The encoding is then added to a HashMap that counts the number of occurrences of each subtree.
-  If the encoding already exists in the map, its count is incremented by 1 using the `Integer::sum` function. 
- If it doesn't exist, a new entry is added with a count of 1. This ensures that each subtree encoding is counted exactly once in the map.
```
count.merge(encoded, 1, Integer::sum);
```
- If a subtree's encoding appears more than once (i.e., its count in the HashMap is 2), its root is added to a result list. 
```
if (count.get(encoded) == 2)//duplicate subtree
            ans.add(root);//add the roots
```
- Finally, return the list of duplicate subtrees.
```
return ans;
```
<!-- Describe your approach to solving the problem. -->

# Complexity :
- Time complexity : O(n^2)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity : O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Please Upvote\uD83D\uDC4D\uD83D\uDC4D
```
Thanks for visiting my solution.\uD83D\uDE0A

```
*Let's Code it Up .
There may be minor syntax difference in C++ and Python*
# Codes [C++ |Java |Python3] : With Comments

```C++ []
class Solution {
 public:
  vector<TreeNode*> findDuplicateSubtrees(TreeNode* root) {
    vector<TreeNode*> ans;
    unordered_map<string, int> count;
    encode(root, count, ans);
    return ans;
  }

 private:
  string encode(TreeNode* root, unordered_map<string, int>& count,
                vector<TreeNode*>& ans) {
    if (root == nullptr)
      return "";

    const string encoded = to_string(root->val) + "#" +
                           encode(root->left, count, ans) + "#" +
                           encode(root->right, count, ans);
                           //# for encoding null left and right childs
    if (++count[encoded] == 2)//duplicate subtree
      ans.push_back(root);//add the roots
    return encoded;
  }
};
```
```Java []
class Solution 
{
    public List<TreeNode> findDuplicateSubtrees(TreeNode root) 
    {
        List<TreeNode> ans = new ArrayList<>();
        Map<String, Integer> count = new HashMap<>();

        encode(root, count, ans);
        return ans;
    }
    private String encode(TreeNode root, Map<String, Integer> count, List<TreeNode> ans)
    {
        if (root == null)
            return "";
        
        final String encoded = root.val + "#" + encode(root.left, count, ans) + "#" + encode(root.right, count, ans);//# for encoding null left and right childs
        count.merge(encoded, 1, Integer::sum);
        //used to add the encoding to the count map. If the encoding already exists in the map, its count is incremented by 1 using the Integer::sum function. If it doesn't exist, a new entry is added with a count of 1. This ensures that each subtree encoding is counted exactly once in the map.
        if (count.get(encoded) == 2)//duplicate subtree
            ans.add(root);//add the roots
        return encoded;
    }
}
```
```Python []
class Solution:
  def findDuplicateSubtrees(self, root: Optional[TreeNode]) -> List[Optional[TreeNode]]:
    ans = []
    count = collections.Counter()

    def encode(root: Optional[TreeNode]) -> str:
      if not root:
        return ''

      encoded = str(root.val) + '#' + \\
          encode(root.left) + '#' + \\
          encode(root.right)
      count[encoded] += 1
      if count[encoded] == 2:
        ans.append(root)
      return encoded

    encode(root)
    return ans
```
# Please Upvote\uD83D\uDC4D\uD83D\uDC4D
![ezgif-3-22a360561c.gif](./images/0.gif)

