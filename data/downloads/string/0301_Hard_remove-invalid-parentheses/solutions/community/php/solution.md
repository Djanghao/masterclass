# Queue T: O(n^2), O(n^2)

**Author:** user1393Nf
**Votes:** 0
**Link:** [https://leetcode.com/problems/remove-invalid-parentheses/solutions/5877984/](https://leetcode.com/problems/remove-invalid-parentheses/solutions/5877984/)

---

# Approach
use Queue

# Complexity
- Time complexity: O(n^2)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n^2)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```php []
class Solution {

    /**
     * @param String $s
     * @return String[]
     */
    function removeInvalidParentheses($s) {
        $res = [];

        $visit = [];
        $q = new SplQueue();

        $q->push($s);
        $visit[$s] = true;
        $fix = false;

        while (!$q->isEmpty()) {
            $check = $q->bottom();
            $q->shift();

            // validate substring 
            $cnt = 0;
            for ($i = 0; $i < strlen($check); $i++) {
                $sym = $check[$i];

                if ($sym === '(') {
                    $cnt++;
                } else if ($sym === ')') {
                    $cnt--;
                } 
                if ($cnt < 0) {
                    break;
                }
            }
            if ($cnt === 0) {
                $res[] = $check;
                $fix = true;
            }

            // lever is fixed
            if ($fix) {
                continue;
            }

            for ($i = 0; $i < strlen($check); $i++) {
                $sym = $check[$i];

                if ($sym !== '(' && $sym !== ')') {
                    continue;
                }

                $tmp = substr($check, 0, $i) . substr($check, $i + 1);

                if (!isset($visit[$tmp])) {
                    $q->push($tmp);
                    $visit[$tmp] = 1;
                }
            }
        }

        return $res;
    }
}
```