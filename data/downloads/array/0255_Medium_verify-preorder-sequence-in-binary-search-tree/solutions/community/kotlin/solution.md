# O(1) space solution, stack simulation

**Author:** vaimer
**Votes:** 0
**Link:** [https://leetcode.com/problems/verify-preorder-sequence-in-binary-search-tree/solutions/5044839/](https://leetcode.com/problems/verify-preorder-sequence-in-binary-search-tree/solutions/5044839/)

---


# Code
```
class Solution {
     fun verifyPreorder(preorder: IntArray): Boolean {
        var low = Int.MIN_VALUE
        var iterator = 0
        
        for(value in preorder) {
            while(iterator > 0 && value > preorder[iterator - 1]) {
                low = preorder[iterator - 1]
                iterator--
            }

            if(value <= low) {
                return false
            }
            
            preorder[iterator] = value
            iterator++
        }
        
        return true
    }
}
```