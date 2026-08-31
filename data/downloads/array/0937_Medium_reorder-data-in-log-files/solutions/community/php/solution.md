# PHP clean solution using MaxHeap

**Author:** maxmtmn
**Votes:** 1
**Link:** [https://leetcode.com/problems/reorder-data-in-log-files/solutions/838911/](https://leetcode.com/problems/reorder-data-in-log-files/solutions/838911/)

---

Instead of splitting up logs into different arrays, we can write custom comparator for Heap and make custom object representing all required sorting parameters. Now all what we need to do is adding all logs to the heap and then extract them.

```
class Solution {
    //O(M * N * LOG N) time
    //O(M * N) space
    function reorderLogFiles($logs) {
        $heap = new LogHeap();
        foreach($logs as $index => $log)
            $heap->insert(new Log($log, $index));
        $i = 0;
        while(!$heap->isEmpty()){
            $logs[$i] = (string) $heap->extract();
            $i++;
        }
        return $logs;
    }
    
}

// LogHeap class will reproduce requested sorting order
class LogHeap extends SplMaxHeap {
    public function compare( $logA, $logB ) {
        if($logA->isNumeric && !$logB->isNumeric)
            return -100000;
        elseif(!$logA->isNumeric && $logB->isNumeric)
            return 100000;
        elseif($logA->isNumeric && $logB->isNumeric)
            return $logB->index - $logA->index;
        else {
            $dataSorting = strcmp($logB->data, $logA->data);
            $indexSorting = strcmp($logB->id, $logA->id);
            return $dataSorting === 0 ? $indexSorting : $dataSorting;
        };
    } 
}

// Log class will parse raw logs and get important log properties
class Log {
    public $id;
    public $isNumeric;
    public $data;
    public $index;
    function __construct($raw, $index){
        $this->id = strtok($raw, ' ');
        $raw = substr($raw,strlen($this->id)+1);
        $this->isNumeric = is_numeric($raw[0]);
        $this->data = $raw;
        $this->index = $index;
    }
    function __toString(){
        return $this->id . ' ' . $this->data;
    }
}
```