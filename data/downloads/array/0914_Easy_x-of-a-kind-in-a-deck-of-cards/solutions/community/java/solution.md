# [Java] Simple solution with description

**Author:** shaojiazhao
**Votes:** 18
**Link:** [https://leetcode.com/problems/x-of-a-kind-in-a-deck-of-cards/solutions/759833/](https://leetcode.com/problems/x-of-a-kind-in-a-deck-of-cards/solutions/759833/)

---

This solution uses a Hashmap to store the number of cards of each integer in the deck. Then we iterate through the hashmap and find the lowest value (# of cards of the same type). With this number, we do a for loop iterating down to 2. Inside the for loop, we iterate through the hash and try to identify if s number between the lowest value and 2 can divide all of hash cleanly. If it can, return true.



```
class Solution {
    public boolean hasGroupsSizeX(int[] deck) {
        
        // Hashmap to store cards and the number of times they occurr
        HashMap<Integer, Integer> hash = new HashMap<>();
        
        // Loop through the deck building the hashmap
        for (int i = 0; i < deck.length; i++) {
            hash.put(deck[i], hash.getOrDefault(deck[i], 0)+1);
        }
        
        // Get the lowest count value of a card
        int lowest = Integer.MAX_VALUE;
        for (int i : hash.keySet()) {
            lowest = Math.min(lowest, hash.get(i));
        }
        
        // Iterate from lowest integer down to 2 to see if a least common denominator exists
        for (int i = lowest; i >= 2; i--) {
            // Flag to detect if a number is a lcd
            boolean lcd = true;
            
            // Loop through the HashMap
            for (int j : hash.keySet()) {
                if (hash.get(j) % i != 0) lcd = false;
            }
            
            // If lcd is true, then the j value can divide all items in hash
            if (lcd == true) return true;
        }
        
        return false;
    }
}
```