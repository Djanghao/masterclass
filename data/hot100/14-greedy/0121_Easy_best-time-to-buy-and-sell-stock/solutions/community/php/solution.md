# PHP | FASTER THAN 100%

**Author:** arianrin
**Votes:** 6
**Link:** [https://leetcode.com/problems/best-time-to-buy-and-sell-stock/solutions/813030/](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/solutions/813030/)

---

Faster than 100%
 function maxProfit($prices) {
 
        $min = $prices[0]; $max = 0;
    
         for($i = 1; $i < count($prices); $i++){
           if($prices[$i] - $min > $max) $max = $prices[$i] - $min;
           if($prices[$i] < $min) $min = $prices[$i];
        }
    
        return $max;
}

**+-----------------------+------------------------+----------------------+**

Faster than 68%

function maxProfit($prices) {   
      
        $min = $prices[0]; $max = 0;
    
        for($i = 1; $i < count($prices); $i++){
          $max = max($prices[$i] - $min, $max);
          $min = min($prices[$i], $min);
        }
    
        return $max;
      
}