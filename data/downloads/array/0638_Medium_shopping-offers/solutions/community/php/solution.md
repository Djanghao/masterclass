# Solution Shopping Offers

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/shopping-offers/solutions/4762678/](https://leetcode.com/problems/shopping-offers/solutions/4762678/)

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
```
class Solution {
    public $min = PHP_INT_MAX;
    
    /**
     * @param Integer[] $price
     * @param Integer[][] $special
     * @param Integer[] $needs
     * @return Integer
     */
    function shoppingOffers($price, $special, $needs) {
        $this->solve(0, $price, $special, $needs, 0);
        return $this->min;
    }
    
    function solve($idx, $price, $special, $needs, $bought) {
        if ($this->isFulfilled($needs)) {
            $this->min = min($this->min, $bought);
            return;
        }
        if ($idx >= count($special)) {
            //if we didnt use any special offers the we buy them individually 
            $total = $bought;
            foreach ($needs as $i => $val) {
                $total += $needs[$i] * $price[$i];
            }
            $this->min = min($this->min, $total);
            return;
        }
        
        //Skip the current special offer.
        $this->solve($idx + 1, $price, $special, $needs, $bought);
        
        //Try to buy the current special offer.
        if ($this->canBuy($needs, $special[$idx])) {
            $newNeeds = $this->buyProduct($needs, $special[$idx]);
            $this->solve($idx, $price, $special, $newNeeds, $bought + $special[$idx][count($needs)]);
        }
    }
    
    function isFulfilled($needs) {
        foreach ($needs as $need) {
            if ($need != 0) {
                return false;
            }
        }
        return true;
    }
    
    function canBuy($needs, $offer) {
        foreach ($needs as $i => $val) {
            if ($needs[$i] < $offer[$i]) {
                return false;
            }
        }
        return true;
    }
    
    function buyProduct($needs, $offer) {
        $newNeeds = $needs;
        foreach ($needs as $i => $val) {
            $newNeeds[$i] -= $offer[$i];
        }
        return $newNeeds;
    }
}

```