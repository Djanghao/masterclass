# Решение методом двух указателей

**Author:** tvyach
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximize-distance-to-closest-person/solutions/5223583/](https://leetcode.com/problems/maximize-distance-to-closest-person/solutions/5223583/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
\u0412\u043E\u0437\u043C\u043E\u0436\u043D\u044B 3 \u0441\u0438\u0442\u0443\u0430\u0446\u0438\u0438:
1. \u0421\u043B\u0435\u0432\u0430 \u043D\u0435\u0442 \u043B\u044E\u0434\u0435\u0439
2. \u0421\u043F\u0440\u0430\u0432\u0430 \u043D\u0435\u0442 \u043B\u044E\u0434\u0435\u0439
3. \u0418 \u0441\u043B\u0435\u0432\u0430 \u0438 \u0441\u043F\u0440\u0430\u0432\u0430 \u0435\u0441\u0442\u044C \u043B\u044E\u0434\u0438

\u0412 \u043F\u0435\u0440\u0432\u044B\u0445 \u0434\u0432\u0443\u0445 \u0441\u043B\u0443\u0447\u0430\u044F\u0445 \u0434\u0438\u0441\u0442\u0430\u043D\u0446\u0438\u044E \u043C\u044B \u0441\u0447\u0438\u0442\u0430\u0435\u043C \u043A\u0430\u043A $pos2 - $pos1
\u0433\u0434\u0435 $pos2 \u0438 $pos1 - \u0443\u043A\u0430\u0437\u0430\u0442\u0435\u043B\u0438 \u043F\u043E\u0437\u0438\u0446\u0438\u0439 "1"

\u0412 \u0442\u0440\u0435\u0442\u044C\u0435\u043C \u0441\u043B\u0443\u0447\u0430\u0435 \u0434\u0438\u0441\u0442\u0430\u043D\u0446\u0438\u044F \u0440\u0430\u0432\u043D\u0430 ($pos2-$pos1)/2 \u0442\u0430\u043A \u043A\u0430\u043A \u0441\u0438\u0434\u0438\u043C \u043C\u0435\u0436\u0434\u0443 \u0434\u0432\u0443\u0445 \u043B\u044E\u0434\u0435\u0439

# Approach
<!-- Describe your approach to solving the problem. -->
1. \u0423\u0441\u0442\u0430\u043D\u0430\u0432\u043B\u0438\u0432\u0430\u0435\u043C \u043E\u0431\u0430 \u0443\u043A\u0430\u0437\u0430\u0442\u0435\u043B\u044F \u0432 0 \u043F\u043E\u0437\u0438\u0446\u0438\u044E
2. \u0411\u0435\u0436\u0438\u043C \u043F\u043E \u043C\u0430\u0441\u0441\u0438\u0432\u0443 \u043F\u043E\u043A\u0430 \u043E\u043D \u043D\u0435 \u0437\u0430\u043A\u043E\u043D\u0447\u0438\u0442\u0441\u044F
3. \u0415\u0441\u043B\u0438 \u0432\u0441\u0442\u0440\u0435\u0442\u0438\u043B\u0438 "1" \u0438\u043B\u0438 \u043E\u043A\u0430\u0437\u0430\u043B\u0438\u0441\u044C \u043D\u0430 \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0435\u043C \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0435 \u043C\u0430\u0441\u0441\u0438\u0432\u0430,
\u0442\u043E \u043F\u0440\u043E\u0432\u0435\u0440\u044F\u0435\u043C \u0432 \u043A\u0430\u043A\u043E\u0439 \u0438\u0437 \u0442\u0440\u0435\u0445 \u0441\u0438\u0442\u0443\u0430\u0446\u0438\u0439 \u043E\u043A\u0430\u0437\u0430\u043B\u0438\u0441\u044C
4. \u0421\u0434\u0432\u0438\u0433\u0430\u0435\u043C \u0443\u043A\u0430\u0437\u0430\u0442\u0435\u043B\u044C

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {

    /**
     * @param Integer[] $seats
     * @return Integer
     */
    function maxDistToClosest($seats) {
        $bestDist = 1;
        $lastPosition = 0;
        $countEd = 0;
        for($i=0; $i<count($seats); $i++)
        {
            if($seats[$i] === 1){
                $countEd++;
            }
            if($seats[$i] === 1 || $i === (count($seats)-1)){
                
                if($countEd === 2){
                    $newBestDist = intval(($i-$lastPosition)/2);
                    $countEd=1;
                }else{
                    $newBestDist = $i - $lastPosition;
                }
                
                if($newBestDist > $bestDist){
                    $bestDist = $newBestDist;
                }
                
                $lastPosition = $i;
            }
        }

        return $bestDist;
    }
}
```