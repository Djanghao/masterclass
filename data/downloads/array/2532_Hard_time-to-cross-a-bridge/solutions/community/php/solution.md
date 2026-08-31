# PHP two heaps 763ms

**Author:** henrychen222
**Votes:** 0
**Link:** [https://leetcode.com/problems/time-to-cross-a-bridge/solutions/3038816/](https://leetcode.com/problems/time-to-cross-a-bridge/solutions/3038816/)

---

```
class Worker {
    public $startTime;
    public $endTime;
    public $idx;
    public $LR;
    public $pickOld;
    public $RL;
    public $putNew;
    function __construct($startTime, $endTime, $idx, $LR, $pickOld, $RL, $putNew) {
        $this->startTime = $startTime;
        $this->endTime = $endTime;
        $this->idx = $idx;
        $this->LR = $LR;
        $this->pickOld = $pickOld;
        $this->RL = $RL;
        $this->putNew = $putNew;
    }
    function show() {
        return $this->startTime." ".$this->endTime." ".$this->idx." ".$this->LR." ".$this->pickOld." ".$this->RL." ".$this->putNew;
    }
}

class MinHeap extends SplHeap {
    function compare($x, $y) {
        return $y->startTime - $x->startTime;
    }
}

class MaxHeap extends SplHeap { // PHP comparator is opposite to Java
    function compare($x, $y) {
        if ($x->endTime != $y->endTime) return $x->endTime - $y->endTime;
        if ($x->LR + $x->RL != $y->LR + $y->RL) return ($x->LR + $x->RL) - ($y->LR + $y->RL);
        if ($x->idx != $y->idx) return $x->idx - $y->idx;
    }
}

class Solution {
    function findCrossingTime($n, $k, $time) {
        $collect = new MinHeap(); // $collect = new SplMinHeap(); also works using built-in SplMinHeap
        $waiting = new MaxHeap();
        for ($i = 0; $i < sizeof($time); $i++) {
            $item = new Worker(0, 0, $i, $time[$i][0], $time[$i][1], $time[$i][2], $time[$i][3]);
            $collect->insert($item);
        }
        $clock = 0;
        $np = $n;
        while (1) {
           if ($waiting->count() == 0 && $collect->top()->startTime > $clock) $clock = $collect->top()->startTime;
           while ($collect->count() && $collect->top()->startTime <= $clock) $waiting->insert($collect->extract());
           $cur = $waiting->extract();
           if ($cur->endTime != 0 || $np != 0) {
             $nextClock = 0;
             if ($cur->endTime == 0) {
                $np--;
                $cur->endTime = 1;
                $nextClock = $clock + $cur->LR;
                $cur->startTime = $clock + $cur->LR + $cur->pickOld;
             } else {
                if (--$n == 0) return $clock + $cur->RL;
                $cur->endTime = 0;
                $nextClock = $clock + $cur->RL;
                $cur->startTime = $clock + $cur->RL + $cur->putNew;
             }
             $clock = $nextClock;
             $collect->insert($cur);
           }
        }
    }
}
```
Javascript version:
https://leetcode.com/problems/time-to-cross-a-bridge/solutions/3025339/javascript-two-heap-pq-357ms/