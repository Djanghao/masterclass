# Simple java Recursion with explanation O(n)

**Author:** ruchita56
**Votes:** 22
**Link:** [https://leetcode.com/problems/construct-binary-tree-from-preorder-and-postorder-traversal/solutions/1249734/](https://leetcode.com/problems/construct-binary-tree-from-preorder-and-postorder-traversal/solutions/1249734/)

---

Simple Algo steps we have to follow:-
1.preorder first element is the root, add that in TreeNode.
2.now find the next element from preorder, then its index from postorder map.
3.for left tree , elements will be from start upto the index of next element from postorder array
4.for right tree, elements will be from next index of the above element found upto end-1, because we already added root element into the tree, which is last in postorder array.

```
 int postpreindex=0;
 public  TreeNode constructFromPrePost(int[] pre, int[] post) {
			 
			 HashMap<Integer,Integer> map=new HashMap<>();
		        for(int i=0;i<post.length;i++) {
		        	map.put(post[i], i);
		        }
		       return helper(pre,post,map,0,post.length-1);
		    }


	private  TreeNode helper(int[] preorder, int[] postorder,HashMap<Integer, Integer> map, int start, int end) {
			if(start>end) {
				return null;
			}
			TreeNode root=new TreeNode(preorder[postpreindex++]);
			
			if(start==end) {
				return root;
			}
			
			int index=map.get(preorder[postpreindex]);
			
			root.left=helper(preorder,postorder,map,start,index);
			root.right=helper(preorder,postorder,map,index+1,end-1);
			return root;
		}
```