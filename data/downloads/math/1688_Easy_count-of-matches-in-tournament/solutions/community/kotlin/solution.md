# ✅ 100 % Beats Easy Clean Code ✅✅✅

**Author:** sourav_n06
**Votes:** 22
**Link:** [https://leetcode.com/problems/count-of-matches-in-tournament/solutions/4363621/](https://leetcode.com/problems/count-of-matches-in-tournament/solutions/4363621/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
![Screenshot 2023-12-05 073644.png](./images/0.png)

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(Log N)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(Log N) Stack space
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```C++ []
class Solution {
public:
    int numberOfMatches(int n) {
        if(n == 1) return 0;
        if( n % 2 == 0)
            return n/2 + numberOfMatches(n/2);
        else
            return (n-1)/2 + numberOfMatches((n-1)/2 + 1);
    }
};
```
```javascript []
/**
 * @param {number} n
 * @return {number}
 */
var numberOfMatches = function(n) {
        if(n == 1) return 0
        if( n % 2 == 0)
            return n/2 + numberOfMatches(n/2)
        else
            return (n-1)/2 + numberOfMatches((n-1)/2 + 1)
    };
```
```C []
int numberOfMatches(int n){
        if(n == 1) return 0;
        if( n % 2 == 0)
            return n/2 + numberOfMatches(n/2);
        else
            return (n-1)/2 + numberOfMatches((n-1)/2 + 1);
}
```
```Java []
class Solution {
    public int numberOfMatches(int n) {
        if(n == 1) return 0;
        if( n % 2 == 0)
            return n/2 + numberOfMatches(n/2);
        else
            return (n-1)/2 + numberOfMatches((n-1)/2 + 1);
    }
}
```
```Kotlin []
class Solution {
    fun numberOfMatches(n: Int): Int {
         if(n == 1) return 0;
        if( n % 2 == 0)
            return n/2 + numberOfMatches(n/2);
        else
            return (n-1)/2 + numberOfMatches((n-1)/2 + 1);
    }
}
```
