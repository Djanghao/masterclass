# Easy Swift Solution

**Author:** VighneshC2
**Votes:** 0
**Link:** [https://leetcode.com/problems/divisor-game/solutions/5685253/](https://leetcode.com/problems/divisor-game/solutions/5685253/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
We have to return true if n is even else false 
# Approach
<!-- Describe your approach to solving the problem. -->
Here, I have made a modulo function to determine n is even or not 

Using property Dividend = Divisor*Quotient + Remainder 
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(1)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(1)
# Code
```swift []
class Solution {
    func divisorGame(_ n: Int) -> Bool {
        if(mod(n:n,i:2)==0){
            return true ;
        }
        else{
            return false ;
        }
    }
    func mod(n : Int , i : Int) -> Int{
        var q : Int = n/i ;
        return n - (q*i) ;
    }
}
```