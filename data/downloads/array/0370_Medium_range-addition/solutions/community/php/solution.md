# PHP O(max(N,K*logN)) Segment Tree, Range Lazy Increments, beats 100% time/space

**Author:** maxmtmn
**Votes:** 1
**Link:** [https://leetcode.com/problems/range-addition/solutions/782450/](https://leetcode.com/problems/range-addition/solutions/782450/)

---

Solution can use any array as input: doesn't need to have 0 filled array
1) Build segment tree
2) Use rangeIncrement function to increment values on range with lazy updates
3) Use getSequence to traverse tree, lazy updates propagation and getting the final sequence

Please fill free to ask any questions

```
class Solution {

    /**
     * @param Integer $length
     * @param Integer[][] $updates
     * @return Integer[]
     */
    //O(MAX(K*LOG(N),N))
    function getModifiedArray($length, $updates) {
        //O(N) time O(N) space
		$segmentTree = new SegmentTree(array_fill(0,$length,0));
		//O(K*logN) time, O(1) space
        while(count($updates) > 0){
            $update = array_pop($updates);
            $segmentTree->rangeIncrement($update[0],$update[1],$update[2]);
        }
		//logN time O(1) space
        return $segmentTree->getSequence();
    }
}



class SegmentTree {
    private $items;
    private $low = 0;
    private $high = 0;
    private $pendingUpdates = [];
    
    public function __construct($array){
        $this->items = [];
        $this->high = count($array) - 1;
        $this->buildTree($array);
    }
    
    //O(n) time O(n) space
    private function buildTree(&$dataArray, $low = null, $high = null, $pos = 0){
        if(is_null($low))
            $low = $this->low;
        if(is_null($high))
            $high = $this->high;
        
        if($low === $high) {
            $this->items[$pos] = $dataArray[$low];
            return;
        }
        $mid = (int) floor(($low + $high)/2);
        $this->buildTree($dataArray, $low, $mid, $pos * 2 + 1);
        $this->buildTree($dataArray, $mid+1, $high, $pos * 2 + 2);
        $this->items[$pos] = $this->items[$pos * 2 + 1] + $this->items[$pos * 2 + 2];
    }
    
    //O(log N)
    public function rangeIncrement($queryLow, $queryHigh, $incr, $low = null, $high = null, $pos = 0){
        if(is_null($low))
            $low = $this->low;
        if(is_null($high))
            $high = $this->high;
        
        //no overlap
        if($queryHigh < $low || $queryLow > $high)
            return;
            
        //increment if either partial or full overlap
        $total = ($high - $low + 1) * $incr;
        $this->items[$pos] += $total;
        
        //full overlap, we don't need to go deeper due to lazy updates
        if($low >= $queryLow && $high <= $queryHigh) {
            if(!isset($this->pendingUpdates[$pos * 2 + 1]))
                $this->pendingUpdates[$pos * 2 + 1] = 0;
            $this->pendingUpdates[$pos * 2 + 1] += $incr;
            if(!isset($this->pendingUpdates[$pos * 2 + 2]))
                $this->pendingUpdates[$pos * 2 + 2] = 0;
            $this->pendingUpdates[$pos * 2 + 2] += $incr;
            return;
        }
        
        //partial overlap
        $mid = (int) floor(($low + $high)/2);
        $this->rangeIncrement($queryLow, $queryHigh, $incr, $low, $mid, $pos * 2 + 1);
        $this->rangeIncrement($queryLow, $queryHigh, $incr, $mid+1, $high, $pos * 2 + 2);
    }
    
    public function getSequence(){
        $sequence = [];
        $this->getItem($sequence);
        return $sequence;
    }
    
    //O(N)
    private function getItem(&$sequence, $low = null, $high = null, $pos = 0, $pendingUpdate = null){
        if(is_null($low))
            $low = $this->low;
        if(is_null($high))
            $high = $this->high;
        if(isset($this->pendingUpdates[$pos]))
            $pendingUpdate = ($pendingUpdate ?? 0) + $this->pendingUpdates[$pos];
        if(!is_null($pendingUpdate)){
            $this->items[$pos] += ($pendingUpdate * ($high - $low + 1));
            unset($this->pendingUpdates[$pos]);
        }
        if($low === $high){
            $sequence[] = $this->items[$pos];
            return;
        }
        $mid = (int) floor(($low + $high)/2);
        $this->getItem($sequence, $low, $mid, $pos * 2 + 1, $pendingUpdate);
        $this->getItem($sequence, $mid+1, $high, $pos * 2 + 2, $pendingUpdate);
    }
    
}
```