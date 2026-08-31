# the best solution i coded here

**Author:** AhsanSoftEngr
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-all-possible-recipes-from-given-supplies/solutions/6045538/](https://leetcode.com/problems/find-all-possible-recipes-from-given-supplies/solutions/6045538/)

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
     * @param String[] $recipes
     * @param String[][] $ingredients
     * @param String[] $supplies
     * @return String[]
     */
    function findAllRecipes($recipes, $ingredients, $supplies) {
        // Convert supplies array to a set (associative array in PHP)
        $supplySet = array_flip($supplies);
        $canMake = [];

        // Loop until no more recipes can be made
        $madeProgress = true;
        while ($madeProgress) {
            $madeProgress = false;
            // Loop through each recipe
            foreach ($recipes as $index => $recipe) {
                // If the recipe is not in supplies and all its ingredients are available, we can make it
                if (!in_array($recipe, $canMake)) {
                    $ingredientsAvailable = true;
                    foreach ($ingredients[$index] as $ingredient) {
                        if (!isset($supplySet[$ingredient])) {
                            $ingredientsAvailable = false;
                            break;
                        }
                    }
                    // If we can make the recipe, add it to the supplies and the result list
                    if ($ingredientsAvailable) {
                        $canMake[] = $recipe;
                        $supplySet[$recipe] = 1; // Mark the recipe as a supply
                        $madeProgress = true; // There was progress, so continue the loop
                    }
                }
            }
        }

        return $canMake;
    }
}

```