# Easy PHP Solution

**Author:** mohamednagy767
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-senior-citizens/solutions/5691171/](https://leetcode.com/problems/number-of-senior-citizens/solutions/5691171/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```php []
class Solution {

    /**
     * @param String[] $details
     * @return Integer
     */
    function countSeniors($details) {

        $count = 0;

        foreach($details as $detail) 
        {
            $age = (int)($detail[11] . $detail[12]);
            
            if($age > 60)
            {
                $count++;
            } 
        }

        return $count;

    }
}
```