# Euclidean algorithm for GCD

**Author:** georgynet
**Votes:** 0
**Link:** [https://leetcode.com/problems/insert-greatest-common-divisors-in-linked-list/solutions/5767367/](https://leetcode.com/problems/insert-greatest-common-divisors-in-linked-list/solutions/5767367/)

---

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(1)$$

# Code
```php []
class Solution
{
    public function insertGreatestCommonDivisors(ListNode $head): ListNode
    {
        $prev = $head;
        $curr = $head->next;

        while ($curr !== null) {
            $gcd = new ListNode($this->gcd($prev->val, $curr->val), $curr);
            $prev->next = $gcd;

            $prev = $curr;
            $curr = $curr->next;
        }

        return $head;
    }

    private function gcd($left, $right): int
    {
        $max = max($left, $right);
        $min = min($left, $right);
        while ($min !== 0) {
            $res = $max % $min;
            $max = $min;
            $min = $res;
        }

        return $max;
    }
}
```