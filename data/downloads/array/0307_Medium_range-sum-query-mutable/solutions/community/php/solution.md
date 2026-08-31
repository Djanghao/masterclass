# PHP Construct O(n) time O(n) space, update in O(log N) Segment Tree solution, beats 100% time/space

**Author:** maxmtmn
**Votes:** 0
**Link:** [https://leetcode.com/problems/range-sum-query-mutable/solutions/782461/](https://leetcode.com/problems/range-sum-query-mutable/solutions/782461/)

---

1) Build segment tree in O(n) time / space
2) For update operation we actually can use segment tree increment operation by value equal to new_value minus old_value. Old value we can get in O(1) time by keeping indixes of each leaf in separate array. We can do it in O(log N) time
3) Use range sum query to get sum between specific indices

```
class NumArray {
    
    private $segmentTree;
    
    /**
     * @param Integer[] $nums
     */
    //O(n) time O(n) space
    function __construct($nums) {
        $this->segmentTree = new SegmentTree($nums);    
    }
  
    /**
     * @param Integer $i
     * @param Integer $val
     * @return NULL
     */
    //O(log n) time
    function update($i, $val) {
        $this->segmentTree->set($i,$val);
    }
  
    /**
     * @param Integer $i
     * @param Integer $j
     * @return Integer
     */
    //O(log n) time
    function sumRange($i, $j) {
        return $this->segmentTree->rangeSum($i,$j);
    }
}

class SegmentTree {
    private $items;
    private $low = 0;
    private $high = 0;
    private $pendingUpdates = [];
    private $sequenceIndexes = [];
    
    public function __construct(&$array){
        $this->items = [];
        $this->high = count($array) - 1;
        if(count($array) > 0)
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
            $this->sequenceIndexes[$low] = $pos;
            return;
        }
        $mid = (int) floor(($low + $high)/2);
        $this->buildTree($dataArray, $low, $mid, $pos * 2 + 1);
        $this->buildTree($dataArray, $mid+1, $high, $pos * 2 + 2);
        $this->items[$pos] = $this->items[$pos * 2 + 1] + $this->items[$pos * 2 + 2];
    }
    
    //O(log n)
    public function set($index, $val){
        $this->increment($index, $val - $this->items[$this->sequenceIndexes[$index]]);
    }
    
    //O(log n)
    public function increment($index, $incr, $low = null, $high = null, $pos = 0){
        if(is_null($low))
            $low = $this->low;
        if(is_null($high))
            $high = $this->high;
        
        //no overlap
        if($index < $low || $index > $high)
            return;
            
        //increment if either partial or full overlap
        $this->items[$pos] += $incr;
                
        if($low === $high) {
            return;
        }
        
        //partial overlap
        $mid = (int) floor(($low + $high)/2);
        $this->increment($index, $incr, $low, $mid, $pos * 2 + 1);
        $this->increment($index, $incr, $mid+1, $high, $pos * 2 + 2);
    }
    
    //O(log n)
    public function rangeSum($queryLow, $queryHigh, $low = null, $high = null, $pos = 0){
        if(is_null($low))
            $low = $this->low;
        if(is_null($high))
            $high = $this->high;
        //full overlap
        if($low >= $queryLow && $high <= $queryHigh)
            return $this->items[$pos];
        //no overlap
        elseif($queryHigh < $low || $queryLow > $high)
            return 0;
        else {
            //partial overlap
            $mid = (int) floor(($low + $high)/2);
            return 
                $this->rangeSum($queryLow, $queryHigh, $low, $mid, $pos * 2 + 1) +
                $this->rangeSum($queryLow, $queryHigh, $mid+1, $high, $pos * 2 + 2);
        }
    }
}
```