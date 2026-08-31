# Simple implementation in constant space ,O(n) time complexity || Easy

**Author:** Have-To-Do-Every-Thing
**Votes:** 4
**Link:** [https://leetcode.com/problems/best-poker-hand/solutions/5596448/](https://leetcode.com/problems/best-poker-hand/solutions/5596448/)

---

## Problem Overview
The problem asks to determine the best possible hand you can have in poker, given two vectors:
one for the ranks of the cards and one for the suits. The possible hands are "Flush," "Three of a
Kind," "Pair," or "High Card."
### Solution Explanation
1. **Check for Flush:**
 - First, you iterate through the `suits` vector to check if all the suits are the same.
 - If all the suits are the same, it's a "Flush."
2. **Count Ranks:**
 - You create a vector `ran` of size 14 (to account for all possible card ranks 1-13) initialized to 0.
 - Then, you iterate through the `ranks` vector and increment the count in `ran` for each rank.
3. **Determine the Best Hand:**
 - You find the maximum count in the `ran` vector.
 - If the maximum count is 3 or more, it's a "Three of a Kind."
 - If the maximum count is 2, it's a "Pair."
 - If none of the above conditions are met, the hand is a "High Card."
### Explanation of Edge Cases and Complexity
### **Edge Cases:**
 - If all cards are of the same suit, it's automatically a "Flush."
 - The case where all cards have unique ranks and suits is handled by the "High Card" return.
### **Time Complexity:**
 - The solution runs in O(n) time, where `n` is the number of cards. It checks the suits and counts
the ranks in separate passes through the input vectors.
### **Space Complexity:**
 - The space complexity is O(1) since the `ran` vector is of fixed size 14, regardless of the input
size.

### Code Implementation
```cpp []
class Solution {
public:
    string bestHand(vector<int>& ranks, vector<char>& suits) {
        vector<int> ran(14,0);
        
        int i = 1 ;
        int n = suits.size();
        for(; i < suits.size(); i++){
            if(suits[i-1] != suits[i]) break;
        }

        if(i == n){
            return "Flush";
        }

        for(int i = 0 ; i < ranks.size() ; i++){
            ran[ranks[i]]++;
        }
        int res = 0;
        for(int i =0 ; i < ran.size() ; i++){
            res = max(res,ran[i]);
        }
        if(res >= 3){
            return "Three of a Kind";
        }else if(res == 2){
            return "Pair";
        }  
        return "High Card";
    }
};
```

``` JavaScript []

class Solution {
    bestHand(ranks, suits) {
        let ran = new Array(14).fill(0);
        
        let i = 1;
        let n = suits.length;
        for (; i < suits.length; i++) {
            if (suits[i - 1] !== suits[i]) break;
        }

        if (i === n) {
            return "Flush";
        }

        for (let i = 0; i < ranks.length; i++) {
            ran[ranks[i]]++;
        }

        let res = 0;
        for (let i = 0; i < ran.length; i++) {
            res = Math.max(res, ran[i]);
        }

        if (res >= 3) {
            return "Three of a Kind";
        } else if (res === 2) {
            return "Pair";
        }  
        return "High Card";
    }
}

```

``` Java []

import java.util.*;

class Solution {
    public String bestHand(int[] ranks, char[] suits) {
        int[] ran = new int[14];
        
        int i = 1;
        int n = suits.length;
        for (; i < suits.length; i++) {
            if (suits[i - 1] != suits[i]) break;
        }

        if (i == n) {
            return "Flush";
        }

        for (int j = 0; j < ranks.length; j++) {
            ran[ranks[j]]++;
        }

        int res = 0;
        for (int j = 0; j < ran.length; j++) {
            res = Math.max(res, ran[j]);
        }

        if (res >= 3) {
            return "Three of a Kind";
        } else if (res == 2) {
            return "Pair";
        }  
        return "High Card";
    }
}

```

``` Python []
class Solution:
    def bestHand(self, ranks, suits):
        ran = [0] * 14
        
        n = len(suits)
        for i in range(1, len(suits)):
            if suits[i - 1] != suits[i]:
                break
        else:
            return "Flush"

        for rank in ranks:
            ran[rank] += 1

        res = max(ran)

        if res >= 3:
            return "Three of a Kind"
        elif res == 2:
            return "Pair"
        return "High Card"


```



