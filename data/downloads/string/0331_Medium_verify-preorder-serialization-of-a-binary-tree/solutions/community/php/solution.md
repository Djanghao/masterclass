# php solution

**Author:** punkundead
**Votes:** 0
**Link:** [https://leetcode.com/problems/verify-preorder-serialization-of-a-binary-tree/solutions/1427517/](https://leetcode.com/problems/verify-preorder-serialization-of-a-binary-tree/solutions/1427517/)

---

```php
class Solution
{

    /**
     * @param String $preorder
     *
     * @return Boolean
     */
    function isValidSerialization($preorder)
    {
        $list = explode(',', $preorder);

        for ($i = $c = 0; $c >= 0 && $i < count($list); $i++) {
            if ($list[$i] === '#') {
                $c--;
            } else {
                $c++;
            }
        }

        return $c === -1 && $i === count($list);
    }
}