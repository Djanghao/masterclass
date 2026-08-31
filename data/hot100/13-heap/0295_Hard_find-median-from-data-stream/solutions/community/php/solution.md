# PHP Simple using heap

**Author:** maxmtmn
**Votes:** 3
**Link:** [https://leetcode.com/problems/find-median-from-data-stream/solutions/1015596/](https://leetcode.com/problems/find-median-from-data-stream/solutions/1015596/)

---

This solution is added to demonstrate that it can be easy implemented in PHP using Spl heap classes on interview in short time without inventing the wheel
The idea is to split elements into two storages, first is the lowest half of size N and right is the highest half of the size M. 
We need to keep N = M for even numbers and N = M + 1 for odd numbers. Using heaps for both parts we can get median in constant time

```
class MedianFinder {
    private $lowStorage;
    private $highStorage;
    
    function __construct() {
        $this->lowStorage = new SplMaxHeap();
        $this->highStorage = new SplMinHeap();
    }
  
    function addNum($num) {
        //insert with extraction to balance values on left and right part
        $this->highStorage->insert($num);
        $this->lowStorage->insert($this->highStorage->extract());
        //if the left part is bigger than right part + 1 move the highest element from the left part to the right part
        if($this->lowStorage->count() > $this->highStorage->count() + 1) {
            $this->highStorage->insert($this->lowStorage->extract());
        }
    }
  
    function findMedian() {
        if($this->getTotalCount() % 2 != 0) {
            return $this->lowStorage->top();
        }
        return ($this->lowStorage->top() + $this->highStorage->top()) / 2;
    }
    
    function getTotalCount() {
        return $this->lowStorage->count() + $this->highStorage->count();
    }
}
```