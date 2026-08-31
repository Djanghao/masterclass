# My simple accepted solution(JAVA)

**Author:** zwangbo
**Votes:** 1335
**Link:** [https://leetcode.com/problems/binary-tree-right-side-view/solutions/56012/](https://leetcode.com/problems/binary-tree-right-side-view/solutions/56012/)

---

The core idea of this algorithm: 

1.Each depth of the tree only select one node.  
2. View depth is current size of result list.

Here is the code: 

    public class Solution {
        public List<Integer> rightSideView(TreeNode root) {
            List<Integer> result = new ArrayList<Integer>();
            rightView(root, result, 0);
            return result;
        }
        
        public void rightView(TreeNode curr, List<Integer> result, int currDepth){
            if(curr == null){
                return;
            }
            if(currDepth == result.size()){
                result.add(curr.val);
            }
            
            rightView(curr.right, result, currDepth + 1);
            rightView(curr.left, result, currDepth + 1);
            
        }
    }
	
