# VM

**Author:** venturamendo
**Votes:** 0
**Link:** [https://leetcode.com/problems/total-cost-to-hire-k-workers/solutions/6071704/](https://leetcode.com/problems/total-cost-to-hire-k-workers/solutions/6071704/)

---

```php []
class Solution {

    /**
     * @param Integer[] $costs
     * @param Integer $k
     * @param Integer $candidates
     * @return Integer
     */
    function totalCost($costs, $k, $candidates) {
        // We just use two min heaps (head, tail) and sort candidates by lowest cost.
        // Costs of candidates in between are stored in a DoublyLinkedList.
        // When a candidate is elected, we refill that place with the next cost of the DLL.
        $count = count($costs);
        $headQueue = new SplMinHeap();
        $tailQueue = new SplMinHeap();
        $reserve = new SplDoublyLinkedList();

        for ($i=0; $i<$candidates; $i++) {
            $headQueue->insert($costs[$i]);
        }
        for ($i=$candidates; $i<($count-$candidates); $i++) {
            $reserve->push($costs[$i]);
        }
        for ($i=$headQueue->count()+$reserve->count(); $i<$count; $i++) {
            $tailQueue->insert($costs[$i]);
        }

        $totalCost = 0;
        for ($i=0; $i<$k; $i++) {
            if (!$headQueue->isEmpty() && !$tailQueue->isEmpty()) {
                if ($headQueue->top() <= $tailQueue->top()) {
                    $totalCost += $headQueue->extract();
                    if (!$reserve->isEmpty()) {
                        $cost = $reserve->shift();  // Take from left side.
                        $headQueue->insert($cost);  
                    }
                }
                else {
                    $totalCost += $tailQueue->extract();
                    if (!$reserve->isEmpty()) {
                        $cost = $reserve->pop();  // Take from right side.
                        $tailQueue->insert($cost);
                    }
                }
            }
            else if (!$headQueue->isEmpty()) {
                $totalCost += $headQueue->extract();
            }
            else if (!$tailQueue->isEmpty()) {
                $totalCost += $tailQueue->extract();
            }
            else break;
        }

        return $totalCost;
    }
}
```