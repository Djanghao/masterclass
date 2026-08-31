# Dart DFS

**Author:** Dartist
**Votes:** 0
**Link:** [https://leetcode.com/problems/pseudo-palindromic-paths-in-a-binary-tree/solutions/4687359/](https://leetcode.com/problems/pseudo-palindromic-paths-in-a-binary-tree/solutions/4687359/)

---

# Intuition
We need to traverse the tree in a DFS order to get all the possible sequences of numbers and then test them if they are pseudo palindroms. To be a pseudo palindrom, we count the frequency of each number. The frequencies should be all even, except for one at most.  

# Approach
I started with a simple recursive DFS but that ended with a Stack Overflow on test case #53. So I replaced the recursion with an equivalent stack array. I also got the Time Limit Exceed because I was recalculating the sequence every time, I took care of it but using a Map to count the frequencies and updating it while traversing the tree.

# Complexity
- Time complexity: O(n)
- Space complexity: O(n)

# Code
```
class Solution {
  int count = 0;
  int pseudoPalindromicPaths(TreeNode? root) {
    List<TreeNode?> stack = [root];
    List<int> nums = [];
    Map<int, int> frequency = {};

    while (stack.isNotEmpty) {
      var node = stack.last;
      if (node!.val == 0) {
        frequency[nums.last] = (frequency[nums.last] ?? 0) - 1;
        stack.removeLast();
        nums.removeLast();
        continue;
      }
      nums.add(node.val);
      frequency[node.val] = (frequency[node.val] ?? 0) + 1;
      node.val = 0; // set to 0 to mean already visited
      // is End node?
      if (node.left == null && node.right == null) {
        if (frequency.values.fold(0, (v, e) => e.isOdd ? v + 1 : v) <= 1) {
          count++;
        }
      } else {
        if (node.right != null) stack.add(node.right);
        if (node.left != null) stack.add(node.left);
      }
    }
    return count;
  }
}
```