# PHP solution with hash map and new ListNode. O(n)

**Author:** mamyta
**Votes:** 0
**Link:** [https://leetcode.com/problems/linked-list-frequency/solutions/4840843/](https://leetcode.com/problems/linked-list-frequency/solutions/4840843/)

---

# Code
```
class Solution {
    function frequenciesOfElements($head) {
        // Initialize an associative array to act as a hash table for element frequencies
        $hash = [];
        // Create a dummy head for the new list to ease node addition
        $newHead = new ListNode();
        // Maintain a tail pointer for ease of appending new nodes to the new list
        $tail = $newHead;

        while($head != null ){
            if(!isset($hash[$head->val])){
                $node = new ListNode(1);
                $tail->next = $node;
                $tail = $tail->next;
                $hash[$head->val]= $node; 
            }else{
                $hash[$head->val]->val +=1;
            }
            $head = $head->next;
        }
        return $newHead->next;
    }
}
```
# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->