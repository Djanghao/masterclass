# DP with Bitmasking - Java Solution. (Explains memoization primarily)

**Author:** bajaj-11
**Votes:** 4
**Link:** [https://leetcode.com/problems/shopping-offers/solutions/4606913/](https://leetcode.com/problems/shopping-offers/solutions/4606913/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
I've written this solution primarily to showcase the use of memoization with bitmasking. While there are other recursive solutions that explain the idea well, most of them lack the correct way to memoize the data, leading to unnecessary recomputation.

Since maximum value of n is 6, and each value of needs arraylist can be  maximum 10, i.e. we need atmax 4 bits to represent each of needs item. In total we need atmax 24 bits to represent all of the needs. So, we create an integer(32 bit), and use the last 4 bits store needs[0], next 4 bis to store needs[1] and so on. In this way represent a needs arraylist state in the form of an integer, and this will be used in memoization.

        32 bit integer:
        31 30.......23 22 21 20 19 18 17 16..............7 6 5 4 3 2 1 0
                    |_________| |_________|              |_____| |_____|
                         |           |                      |       |
                       needs[5]   needs[4]               needs[1]  needs[0]


# Code
```
class Solution {

    /*
        Since maximum value of n is 6, and each value of needs arraylist can be 
        maximum 10, i.e. we need atmax 4 bits to represent each of needs item. 
        In total we need atmax 24 bits to represent all of the needs. So, we create 
        an integer(32 bit), and use the last 4 bits store needs[0], next 4 bis to 
        store needs[1] and so on. In this way represent a needs arraylist state
        in the form of an integer, and this will be used in memoization.

        32 bit integer:
        31 30.......23 22 21 20 19 18 17 16..............7 6 5 4 3 2 1 0
                    |_________| |_________|              |_____| |_____|
                         |           |                      |       |
                       needs[5]   needs[4]               needs[1]  needs[0]
    */
    private int encodeState(List<Integer> states) {
        int encoded = 0;
        for (int i = 0; i < states.size(); i++) {
            encoded |= states.get(i) << (4 * i);
        }
        return encoded;
    }

    public int helper(List<Integer> price, List<List<Integer>> special, List<Integer> needs, Map<Integer, Integer> map) {
        int encodeState = encodeState(needs);
        if(map.containsKey(encodeState))    return map.get(encodeState); // use the already computed result
        int result = 0;
        for(int i = 0; i < needs.size(); i++) {
            result += needs.get(i) * price.get(i);
        }

        for(int i = 0; i < special.size(); i++) {
            boolean valid = true;
            List<Integer> newNeeds = new ArrayList<>();
            for(int j = 0; j < needs.size(); j++) {
                if(needs.get(j) < special.get(i).get(j)) {
                    valid = false;
                    break;
                }
                newNeeds.add(needs.get(j) - special.get(i).get(j));
            }
            if(valid) {
                result = Math.min(result, special.get(i).get(price.size()) + helper(price, special, newNeeds, map));
            }
        }
        map.put(encodeState, result);
        return result;
    }

    public int shoppingOffers(List<Integer> price, List<List<Integer>> special, List<Integer> needs) {
        Map<Integer, Integer> map = new HashMap<>(); // for memoization
        return helper(price, special, needs, map);
    }
}
```