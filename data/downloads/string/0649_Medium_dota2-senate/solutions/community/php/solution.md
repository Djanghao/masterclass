# VM

**Author:** venturamendo
**Votes:** 0
**Link:** [https://leetcode.com/problems/dota2-senate/solutions/6038173/](https://leetcode.com/problems/dota2-senate/solutions/6038173/)

---

```php []
class Solution {

    /**
     * @param String $senate
     * @return String
     */
    function predictPartyVictory($senate) {
        // Each senator will ban the FIRST IN LINE senator of the other party (smartest choice).
        // We will use 2 queues. When there is only one queue left with senators, that will be the winner party.
        // Once a senator bans another, it goes to the end of its queue (for next round).
        // Note: when a senator goes to the end of the queue, its "index" increases from the max current index
        //       (means that he needs that the rest of senators vote so he can vote again).
        $r = new SplQueue();
        $d = new SplQueue();

        $senate = str_split($senate);
        foreach ($senate as $i => $senator) {
            $senator === 'R' ? $r->enqueue($i) : $d->enqueue($i);
        }

        $lastInLine = count($senate);
        while ($r->count() > 0 && $d->count() > 0) {
            if ($r->dequeue() < $d->dequeue()) {
                // Radiant bans
                $r->enqueue($lastInLine++);
            }
            else {
                // Dire bans
                $d->enqueue($lastInLine++);
            }
        }

        return $r->count() > 0 ? 'Radiant' : 'Dire';
    }
}
```