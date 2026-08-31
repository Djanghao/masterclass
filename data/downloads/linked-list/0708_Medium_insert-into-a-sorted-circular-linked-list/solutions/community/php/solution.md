# PHP solution

**Author:** mamyta
**Votes:** 1
**Link:** [https://leetcode.com/problems/insert-into-a-sorted-circular-linked-list/solutions/4496610/](https://leetcode.com/problems/insert-into-a-sorted-circular-linked-list/solutions/4496610/)

---

# Code
```
class Solution {
    function insert($head, $insertVal) {
        $new = new Node($insertVal);
        if($head == null){
            $new->next = $new;
            return $new;
        }
        
        $pre = $head;        
        $curr = $head->next;
        while($curr !== $head){
            if(
                // 1 (pre) -> 10 (curr) val 5
                ($pre->val <= $insertVal && $insertVal < $curr->val) || 
                // 10 (pre) -> 1 (curr) val 10+ 
                ($pre->val > $curr->val  && $pre->val  <= $insertVal ) || 
                // 10 (pre) -> 1 (curr) val 1-
                ($pre->val > $curr->val  && $insertVal <= $curr->val )    
            ){
               break;
            }

            $pre = $curr;
            $curr = $curr->next;
        }

        $pre->next = $new;
        $new->next = $curr;
        return $head;
    }
}
```