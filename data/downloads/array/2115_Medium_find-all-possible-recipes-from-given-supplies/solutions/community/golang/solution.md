# DFS with Loop Detection and Caching

**Author:** janakagoon
**Votes:** 2
**Link:** [https://leetcode.com/problems/find-all-possible-recipes-from-given-supplies/solutions/3004912/](https://leetcode.com/problems/find-all-possible-recipes-from-given-supplies/solutions/3004912/)

---

# Intuition
Do a DFS search using a map. 

# Approach
In a map, keep track of weather something can be "made" or not. 
If it in the supplies list, init those values to CAN_MAKE
If it is in the recipies list, init those to UNKNOWN, since we don't
know at the begining if a recipie can be made or not.

Then for each recipie, do a DFS search, by looking up the 
ingredients and testing if that is already set to CAN_MAKE.

Update the map with results as you unwind the DFS search.

Need a "TESTING" state, to avoid loops.  

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
const CAN_MAKE = 1
const CANNOT_MAKE = 2
const UNKNOWN = 3
const TESTING = 4

func canMakeRec(recipe string, ingredientsMap map[string][]string, query map[string]int) bool {
    if _, ok := query[recipe]; !ok {
        return false
    }

    if query[recipe] == TESTING {
        return false
    } else if query[recipe] == CAN_MAKE {
        return true
    } else if query[recipe] == CANNOT_MAKE {
        return false
    }

    query[recipe] = TESTING

    for _, item := range ingredientsMap[recipe] {
        if !canMakeRec(item, ingredientsMap, query) {
            query[recipe] = CANNOT_MAKE
            return false
        }
    }

    query[recipe] = CAN_MAKE
    return true
}

func findAllRecipes(recipes []string, ingredients [][]string, supplies []string) []string {
    query := make(map[string]int)

    for _, s := range supplies {
        query[s] = CAN_MAKE
    }

    ingredientsMap := make(map[string][]string)

    for i, r := range recipes {
        query[r] = UNKNOWN
        ingredientsMap[r] = ingredients[i]
    }

    res := []string{}
    for _, r := range recipes {
        if canMakeRec(r, ingredientsMap, query) {
            res = append(res, r)
        }
    }
    
    return res
}
```