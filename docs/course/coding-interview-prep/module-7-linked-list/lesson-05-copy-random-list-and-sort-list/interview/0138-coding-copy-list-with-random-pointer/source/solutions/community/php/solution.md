# PHP Iterative solution O(N) time/space

**Author:** maxmtmn
**Votes:** 2
**Link:** [https://leetcode.com/problems/copy-list-with-random-pointer/solutions/915684/](https://leetcode.com/problems/copy-list-with-random-pointer/solutions/915684/)

---

Who struggles in PHP you have to use spl_object_id as hash function so we can use hashmap. All other stuff is trivial

```
class Solution {
    function copyRandomList($head) {
        $map = [];
        $copy = null;
        $copyTail = null;
        $node = $head;
        while($node){
            //pre create new nodes so we can add pointer without coming back
            if(!is_null($node->random) && !isset($map[$this->hash($node->random)])) {
                $map[$this->hash($node->random)] = new Node($node->random->val);
            }
            //use existing or create new node
            $newNode = isset($map[$this->hash($node)]) ? $map[$this->hash($node)] : new Node($node->val);
			//assign random pointer
            if(!is_null($node->random))
                $newNode->random = $map[$this->hash($node->random)];
			//remember created node for random pointers
            if(!isset($map[$this->hash($node)])) 
                $map[$this->hash($node)] = $newNode;
            //add node as new tail
            if(is_null($copyTail)) {
                $copyTail = $newNode;
                $copy = $copyTail;
            }
            else {
                $copyTail->next = $newNode;
                $copyTail = $copyTail->next;
            }
            $node = $node->next;
        }
        return $copy;
    }
    
    function hash($object){
        return spl_object_id($object);
    }
}
```