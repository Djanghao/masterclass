# Simple php solution (hash map)

**Author:** bafsi
**Votes:** 0
**Link:** [https://leetcode.com/problems/random-pick-index/solutions/1424288/](https://leetcode.com/problems/random-pick-index/solutions/1424288/)

---

Store a list of indexes in a hash-map

```php
final class Solution {
   private $nums;

    function __construct(array $nums) {
        foreach ($nums as $i => $n) {
            $this->nums[$n] = $this->nums[$n] ?? [];
            $this->nums[$n][] = $i;
        }
    }
  
    function pick(int $target): int {
        $list = $this->nums[$target];
        return $list[(int) rand(0, count($list) - 1)];
    }
}
```