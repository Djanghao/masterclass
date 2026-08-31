# Java Solution | Using parseInt | O(1) space | O(n) Time

**Author:** _sakthivel_
**Votes:** 27
**Link:** [https://leetcode.com/problems/check-if-numbers-are-ascending-in-a-sentence/solutions/1525199/](https://leetcode.com/problems/check-if-numbers-are-ascending-in-a-sentence/solutions/1525199/)

---

```
// Space Complexity: O(1)
// Time Complexity: O(n)
class Solution {
    public boolean areNumbersAscending(String s) {
        int prev = 0;
        
        for(String token: s.split(" ")) {
            try {
                int number = Integer.parseInt(token);
                if(number <= prev)
                    return false;
                prev = number;
            }
            catch(Exception e) {}
        }
        
        return true;
    }
}
```