# PHP Priority Queue 4ms with comments O(N) time O(1) space beats 100%

**Author:** maxmtmn
**Votes:** 2
**Link:** [https://leetcode.com/problems/reorganize-string/solutions/815594/](https://leetcode.com/problems/reorganize-string/solutions/815594/)

---

```
class Solution {
    //O(N) time O(1) space
    function reorganizeString($S) {
        //calculate char frequencies
        //since English language has just 26 chars we will get space complexity of O(26), which is equal to O(1)
        //O(N) time O(1) space
        $hashMap = [];
        for($i = 0;$i < strlen($S); $i++)
            $hashMap[$S[$i]] = ($hashMap[$S[$i]] ?? 0) + 1;
        
        //build priority queue by frequency
        //O(1) time O(1) space, because max size of priority queue is 26
        $priorityQueue = new SplPriorityQueue();
        $priorityQueue->setExtractFlags(3);
        foreach($hashMap as $char => $count){
            $priorityQueue->insert($char, $count);
        }
        
        //free some memory and set default values
        unset($hashMap);
        $reorganized = "";
        $pendingInsert = new SplStack();
        
        //now we can try to insert the most frequent chars first
        //stack will help us to avoid insertion of the most frequent char 2 times one by one
        //in the worst case we have to iterate through entire string, which gives us O(N) time complexity
        //extract and insert operations we can treat as O(1) because maximum size of priority queue is 26
        //O(N) time O(1) space
        while(!$priorityQueue->isEmpty()) {
            $next = $priorityQueue->extract();
            
            //this will recover old top value after extraction
            while(!$pendingInsert->isEmpty()){
                $pending = $pendingInsert->pop();
                $priorityQueue->insert($pending[0], $pending[1]);
            }
            
            $char = $next['data'];
            $count = $next['priority'];
            $reorganized .= $char;
            $count--;
            
            //return char back to the queue if char's quatity greater than zero
            if($count > 0)
                $pendingInsert->push([$char, $count]);
        }
        return $pendingInsert->isEmpty() ? $reorganized : "";
    }
}
```