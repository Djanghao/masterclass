# [C++] Simplest Greedy Solution Faster than 100%

**Author:** Mythri_Kaulwar
**Votes:** 6
**Link:** [https://leetcode.com/problems/monotone-increasing-digits/solutions/1779683/](https://leetcode.com/problems/monotone-increasing-digits/solutions/1779683/)

---

We need to return the largest number that is less than or equal to the given ```n```, that has monotome increasing digits.

**APPROACH :**

* If the number ```n``` is monotone increasing then, we can return the number itself.
* Otherwise, we start traversing from the last digit.
*  Wherever we find a digit that's less than it's previous digit (ie; ```s[i] < s[i-1]```), we mark that index & decrement the previous index digit by ```1``` (Since we want a number smaller than the given one)
*  To return the largest number possible : We make all the digits from the marked index = ```9```.

**Time Complexity :** O(n)

**Space Complexity :** O(n) - We need to create a string in order to traverse digit by digit.

**Code :**
```
class Solution {
public:
    int monotoneIncreasingDigits(int n) {
        string s = to_string(n);
        int size = s.size(), lim = s.size();
        for(int i=size-1; i>0; i--){
            if(s[i-1] > s[i]) lim = i, s[i-1] -= 1;
        }
        for(int i=lim; i<size; i++) s[i] = '9';
        return stoi(s);
    }
};
```

**Do upvote if you've found my post helpful :)**