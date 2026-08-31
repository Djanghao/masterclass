# Use Stack (Python, O(n) time/space)

**Author:** _Maximus_
**Votes:** 59
**Link:** [https://leetcode.com/problems/maximum-binary-tree/solutions/870093/](https://leetcode.com/problems/maximum-binary-tree/solutions/870093/)

---

Hi everyone. I liked this problem so much that I decided to write this article about my approach to solving this problem. So let us dive into it.

My first thoughts about a recursive solution were exactly the same as in the official guide:
1. Find the maximum `max` and make it the `root` of the tree
1. Divide the array into two parts. Generate left child from left subarray, and right child from right subarray.
1. Return the `root`

But it turns out that time complexity in the worst case was `O(n ** 2)`. That is definitely not good... The problem is that despite the fact that you will traverse the array just once to create all the nodes, you will have to traverse it several times to find the maximum element in each recursive call. Then I came up with idea that I do not have to know the maximum of the range of values in the array. I just have to know that at the left side of the current node there are just nodes with bigger values, and at the right side with smaller values.

**The algorithm:**
```
class Solution:
    def constructMaximumBinaryTree(self, nums: List[int]) -> TreeNode:
        nodes = []
        for num in nums:
            node = TreeNode(num)
            while nodes and nodes[-1].val < num:
                node.left = nodes.pop()

            if nodes:
                nodes[-1].right = node

            nodes.append(node)

        return nodes[0]
```

**Complexity:**
Time: in the worst case, you will access the initial array or stack elements  `O(2n)` times, or just `O(n)`.
Space: it is obvious that the result will take space proportional to the length of the initial array, hence space complexity is `O(n)`.

\uD83D\uDCE2 *If you think that that solution is good enough to be recommended to other LeetCoders then upvote.*