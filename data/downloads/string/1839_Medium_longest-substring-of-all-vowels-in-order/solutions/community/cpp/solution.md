# Just 7 lines of code || Easiest Solution

**Author:** ha_vi_ag-
**Votes:** 16
**Link:** [https://leetcode.com/problems/longest-substring-of-all-vowels-in-order/solutions/3149640/](https://leetcode.com/problems/longest-substring-of-all-vowels-in-order/solutions/3149640/)

---

# Approach
<!-- Describe your approach to solving the problem. -->
**Two Pointer Approach**: 

* **count** variable is looking for the all vowels in current substring window.
* The idea behind **count** variable is, it counts all the **"<"** operations. if it equals 5 it implies we got all the vowels.
* if sorted sequence breaks we reset our first pointer **"p"** as well as **count** variable i.e. we reset our current window.


# Complexity
- Time complexity: **O(n)**

- Space complexity: **O(1)**

# Code
```
class Solution {
public:
    int longestBeautifulSubstring(string word) {
        int ans = 0, p = 0, count = 1;
        
        for(int i = 1; i < word.length(); i++) {

            if(word[i-1] < word[i])  count++;
            
            else if(word[i-1] > word[i])
                p = i, count = 1;
            
            if(count == 5) ans = max(ans,i-p+1);
        }

        return ans;
    }
};
```