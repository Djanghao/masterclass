# java accepted solution inorder with clear explanation

**Author:** dani_danielsOO
**Votes:** 52
**Link:** [https://leetcode.com/problems/minimum-absolute-difference-in-bst/solutions/585431/](https://leetcode.com/problems/minimum-absolute-difference-in-bst/solutions/585431/)

---

lets first see what the question says!!!!

we have to find the minimum absolute difference of nodes!!
thus 1st thing that pops in mind-difference of two nodes
second thing-absolute difference
BUT hey stop.we know its a BST 
so we can just compare the parent node.val and child node.val i.e parent.val-child.val!!
this difference will never less than zero(why?
because parent is always > than child!!
	so NO MATH.ABS !!
	now we need to compare in the fly (we are not using any extra space)
	so we need the closest difference together.thus we need increasing order of node values(as we need minimum)
now we need to traverse!!
we have 3 choices!!
inorder,preorder,postorder!!
which will benefit us!!!!
lets try post order!!
we get L R N (left right node)
thus we are getting smallest value first then greatest then intermediate-not useful
lets try preorder
	we get NLR
	we get intermediate ,smallest,greatest-not useful
	oh shit only one option left 
	lets try inorder
	we get LNR
	thus we get smallest ,intermediate,greatest!!
	voila !!!
we get increasing sequence!
now we know we have to traverse INORDER

THEREFORE!!
```
inorder(root.left)
{
some code to find min
}
inorder(root.right)
```
!!
THIS IS THE CORE CONCEPT OF THE QUESTION!!
AND THE THOUGHT PROCESS!
LETS SEE SOME CODE!
```
public class Solution {
    int min = Integer.MAX_VALUE;
    Integer prev = null;
    
    public int getMinimumDifference(TreeNode root) {
        if (root == null) return min;
        
        getMinimumDifference(root.left);
        
        if (prev != null) {
            min = Math.min(min, root.val - prev);
        }
        prev = root.val;
        
        getMinimumDifference(root.right);
        
        return min;
    }
    
}
```


HOPE YOU UNDERSTAND THE LOGIC!!!!!



