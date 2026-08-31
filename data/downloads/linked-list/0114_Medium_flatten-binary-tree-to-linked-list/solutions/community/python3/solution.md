# [Python3] Iterative Solution With Explanation

**Author:** nikhilsmanu
**Votes:** 47
**Link:** [https://leetcode.com/problems/flatten-binary-tree-to-linked-list/solutions/940394/](https://leetcode.com/problems/flatten-binary-tree-to-linked-list/solutions/940394/)

---

```
class Solution:
    def flatten(self, root: TreeNode) -> None:
        cur = root
        while cur:
            if cur.left:
                prev = cur.left
                while prev.right:
					prev = prev.right    # We go to left Subtree's rightMost Node
                
                prev.right = cur.right   #We make current Node's right Subtree prev's right Subtree
                cur.right = cur.left    # We make it right Subtree
                cur.left = None   # Removing left 
            
            cur = cur.right
```

Initial Tree:    	

							1
						   / \\
						  2   5
						 / \\   \\
						3   4   6
						
Then:  Since cur.left is True, we move to cur.left's right most child ...ie.... here 4
          Then we make  Node (4).right, Node(1).right ...ie...
		  
							 1
						   / 
						  2   
						 / \\   
						3   4   
							   \\
								 5
								   \\
								     6

Then: we make current Node(1).right = Node(1).left....ie........

							1
							  \\
								2   
							   /  \\   
							  3    4   
							     	   \\
										 5
										   \\
											 6
						   
						 
Then:

							1
							  \\
								2   
							   /     
							  3    
						        \\
								  4   
								    \\
									  5
									    \\
										  6
								
		
Then:
				
							1
							  \\
								2
								  \\
								    3    
									   \\
										  4   
											\\
											  5
												\\
												  6
								  
								  
							  
If any Doubts plz fell free to ask


