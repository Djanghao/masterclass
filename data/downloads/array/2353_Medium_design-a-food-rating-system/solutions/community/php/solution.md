# PHP | fight with TLE....

**Author:** Meacue
**Votes:** 0
**Link:** [https://leetcode.com/problems/design-a-food-rating-system/solutions/4421992/](https://leetcode.com/problems/design-a-food-rating-system/solutions/4421992/)

---


# Code
```
class FoodRatings {
    /**
     * @param String[] $foods
     * @param String[] $cuisines
     * @param Integer[] $ratings
     */

    private $cuisinesFoodsRatings = [];
    private $cuisines = [];

    function __construct($foods, $cuisines, $ratings) {
         for($i=0;$i<count($foods);$i++){
             $this->cuisinesFoodsRatings[$cuisines[$i]][$foods[$i]] = $ratings[$i];
             $this->cuisines[$foods[$i]] = $cuisines[$i];
        }
    }
  
    function changeRating($food, $newRating) {

        $foodCuisine = $this->cuisines[$food];

        $this->cuisinesFoodsRatings[$foodCuisine][$food] = $newRating;
    }
  
    function highestRated($cuisine) {        

        $foodsRatings = $this->cuisinesFoodsRatings[$cuisine];
        $maxFoodsRatings = max($foodsRatings);
        $foodMax = array_keys($foodsRatings, $maxFoodsRatings);    

        if (isset($foodMax[1])) {
            sort($foodMax);
        }

        return $foodMax[0];

    }
}

/**
 * Your FoodRatings object will be instantiated and called as such:
 * $obj = FoodRatings($foods, $cuisines, $ratings);
 * $obj->changeRating($food, $newRating);
 * $ret_2 = $obj->highestRated($cuisine);
 */
```