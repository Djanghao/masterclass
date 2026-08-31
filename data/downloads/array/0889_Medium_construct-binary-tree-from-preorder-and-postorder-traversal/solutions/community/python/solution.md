# Python3 Solution with a Detailed Explanation - Construct Binary Tree from

**Author:** peyman_np
**Votes:** 45
**Link:** [https://leetcode.com/problems/construct-binary-tree-from-preorder-and-postorder-traversal/solutions/748216/](https://leetcode.com/problems/construct-binary-tree-from-preorder-and-postorder-traversal/solutions/748216/)

---

Make sure you understand the preorder and postorder traversal and how the nodes are arranged in each, with respect to the other one. [This](https://www.***.org/if-you-are-given-two-traversal-sequences-can-you-construct-the-binary-tree/) might help. I also find [this](https://www.***.org/full-and-complete-binary-tree-from-given-preorder-and-postorder-traversals/) explanation helpful. The solution that I'll show below comes from reading different posts on leetcode and elsewhere. 

Some relations between the two orders include: 1) the first node of `pre` is root, same as the last node of `post`. 2) The second node of `pre` is left subtree root, while the second to the last node of `post` is the right subtree root. Now think for a moment about `post`. The last number is `root` value, if we do `post.pop()`, what is the last element now? The root of right subtree, right? What if we do that again? The last node now is the root of a deeper subtree on the right side again (`7`). 

Check out this example! `pre = [1,2,4,5,3,6,7], post = [4,5,2,6,7,3,1]`. This can correspond to a tree like this (note that we can construct many trees given `pre` and `post`): 

					   1
				2             3
			  4	 5           6  7

The node of right subtrees are `3`, and then `7`. If you check the `post`, you'll see that they appear from right after `root`. We'll use this in the solution. We do some prechecking to see whether tree is empty of not. If there has zero nodes, we return `None`. If there is one node, it's root, we `return TreeNode(post.pop())`. Line `#3` adds the last element of `post` to the tree as the `root` of that level. Then, in line `#4`, it finds the  index in `pre` corresponding to the last element of `post` after popping (the `root` of right subtree in that level) because that element is the start of right subtree in `pre` (check the example). After we `pop` the root (`1`) from `post`, the root of right subtree is `3`. Now, in `pre`, anything before `3` corresponds to the left subtree with `2` being the root of it. 

Now comes the recursive part of solution. We split the `pre` into two parts, one for right subtree (line `#1`) and one for left subtree (line `#2`). We add them to `node.right` and `node.left`, respectively. Imaging you're at the `root` level, in line `#3`, you add the root to `node`. Then, line `#1` after recursion produces the whole right subtree, and line `#2` produces the whole left subtree. Finally, `node` is returned which includes all the elements. Keep reading! 

			
```
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def constructFromPrePost(self, pre: List[int], post: List[int]) -> TreeNode:
        # read this: https://www.techiedelight.com/construct-full-binary-tree-from-preorder-postorder-sequence/
        def helper(pre,post):
            print('pre is: ', pre, 'post is: ', post)
            if not pre:
                return None
        
            if len(pre)==1:
                return TreeNode(post.pop())
        
        
            node=TreeNode(post.pop()) #3
            ind=pre.index(post[-1]) #4
        
            node.right=helper(pre[ind:],post) #1
            node.left=helper(pre[1:ind],post) #2
            return node
    
        return helper(pre,post)
```

If you print `pre` and `post` everytime the `helper` function is called, you get something like this: 
			
```
pre is:  [1, 2, 4, 5, 3, 6, 7] post is:  [4, 5, 2, 6, 7, 3, 1] # initial
pre is:  [3, 6, 7] post is:  [4, 5, 2, 6, 7, 3] # right subtree depth 1 (right side of root) 
pre is:  [7] post is:  [4, 5, 2, 6, 7] #  right subtree depth 2 (right side of root)
pre is:  [6] post is:  [4, 5, 2, 6] # line 2 is called for left subtree of level 2 (right side of root)
pre is:  [2, 4, 5] post is:  [4, 5, 2] # line 2 is called for level one left subtree (left side of root)
pre is:  [5] post is:  [4, 5] # line 1 is called for right subtree of level 2 (left side of root)
pre is:  [4] post is:  [4] # line 2 is called for left subtree of level 2 (left side of root)
```

The `pre` and `post` here show each of the traversals once `helper` is called. For example, at first row, initial `pre` and `post` are shown. Next row, is when `helper` is called in line `#1`. Now, we have a new `pre` and `post`. The `pre` is the one that gets splited in each calling of `helper` while `post` pops its last element every time `helper` is called. As you can see, `post` looses one element at a time. 

I hope it's clear. Let me know if there is any ambiquity anywhere. 

========================================================================
Final note: Please let me know if you found any typo/error/etc. I'll try to fix them. 
