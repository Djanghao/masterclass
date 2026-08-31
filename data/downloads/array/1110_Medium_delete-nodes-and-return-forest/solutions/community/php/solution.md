# PHP BFS + HashMap Beats 100% Time/Space, O(MAX(M,N)) SPACE O(MAX(M,N))

**Author:** maxmtmn
**Votes:** 1
**Link:** [https://leetcode.com/problems/delete-nodes-and-return-forest/solutions/813681/](https://leetcode.com/problems/delete-nodes-and-return-forest/solutions/813681/)

---

Time/Space complexity is O(MAX(M,N)) where M is size of tree and N is size of to_delete array, because we need to store results array in the worst case of M size and we need to make a HashMap for quick lookups from to_delete array with O(N) time/space complexity.
Solution is very simple - we are building results array during BFS traversal

```
class Solution {
    //O(MAX(M,N)) SPACE O(MAX(M,N)) TIME
	//where M is size of tree and N is size of to_delete array
    function delNodes($root, $to_delete) {
        $queue = new SplQueue();
        $queue->enqueue($root);
        
        //convert array to hashmap
        $deleteMap = array_flip($to_delete);
        $results = [];
        
        if(!isset($deleteMap[$root->val]))
            $results[] = $root;
        
        while(!$queue->isEmpty()){
            $node = $queue->dequeue();

            //traverse and detach child nodes
            foreach(['left', 'right'] as $leaf){
                if($node->{$leaf}) {
                    $queue->enqueue($node->{$leaf});
                    //detach removed leaf
                    if(isset($deleteMap[$node->{$leaf}->val]))
                        $node->{$leaf} = null;
                }
            }
            
            //make separate trees from removed child nodes
            if(isset($deleteMap[$node->val])){
                foreach(['left', 'right'] as $leaf){
                    if($node->{$leaf}) {
                        $results[] = $node->{$leaf};
                        $node->{$leaf} = null;
                    }
                }
            }
        }
        return $results;
    }
}
```