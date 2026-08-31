# Simple C Solution

**Author:** StoatScript
**Votes:** 0
**Link:** [https://leetcode.com/problems/valid-palindrome-iv/solutions/6017458/](https://leetcode.com/problems/valid-palindrome-iv/solutions/6017458/)

---

```
bool makePalindrome(char* s) {
    int mistakes = 0;
    int l = 0;
    int r = strlen(s) - 1;
    while(l < r){
        if(s[l] != s[r]){
            if(mistakes < 2){
                mistakes++;
            }else{
                return false;
            }
        }
        l++;
        r--;
    }
    return true;
}
```