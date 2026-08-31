# Python/JS/Java/C++ O(1) by math [w/ Comment]

**Author:** brianchiang_tw
**Votes:** 19
**Link:** [https://leetcode.com/problems/count-odd-numbers-in-an-interval-range/solutions/772852/](https://leetcode.com/problems/count-odd-numbers-in-an-interval-range/solutions/772852/)

---

O(1) sol by math

---

```
class Solution:
    def countOdds(self, low: int, high: int) -> int:
        
        odd_lowerbound, odd_upperbound = -1, -1
        
        # compute smallest odd number in range
        if low % 2 == 1:
            odd_lowerbound = low
        else:
            odd_lowerbound = low + 1
        
        # compute largest odd number in range
        if high % 2 == 1:
            odd_upperbound = high
        else:
            odd_upperbound = high - 1
            
        
        # compute the number of odd numbers in range
        return (odd_upperbound - odd_lowerbound) // 2 + 1
            
```

---

Javascript:

```
var countOdds = function(low, high) {
    
    let [odd_lowerbound, odd_upperbound] = [-1, -1];
    
    // compute the smallest odd number in range
    if( low % 2 == 1){
        odd_lowerbound = low;
        
    }else{
        odd_lowerbound = low+1;
    }
    
    // compute the largest odd number in range
    if( high % 2 == 1){
        odd_upperbound = high;
        
    }else{
        odd_upperbound = high-1;
    }
    
    
    // compute the number of odd numbers in range
    return 1 + ((odd_upperbound - odd_lowerbound) >> 1);
    
    
};
```

---

C++

```
class Solution {
public:
    int countOdds(int low, int high) {
    
        int odd_lowerbound=-1, odd_upperbound=-1;

        // compute the smallest odd number in range
        if( low % 2 == 1){
            odd_lowerbound = low;

        }else{
            odd_lowerbound = low+1;
        }

        // compute the largest odd number in range
        if( high % 2 == 1){
            odd_upperbound = high;

        }else{
            odd_upperbound = high-1;
        }


        // compute the number of odd numbers in range
        return 1 + ((odd_upperbound - odd_lowerbound) / 2);

    }
};
```

---

**Java**

```
class Solution {
    public int countOdds(int low, int high) {
        int odd_lowerbound=-1, odd_upperbound=-1;

        // compute the smallest odd number in range
        if( low % 2 == 1){
            odd_lowerbound = low;

        }else{
            odd_lowerbound = low+1;
        }

        // compute the largest odd number in range
        if( high % 2 == 1){
            odd_upperbound = high;

        }else{
            odd_upperbound = high-1;
        }


        // compute the number of odd numbers in range
        return 1 + ((odd_upperbound - odd_lowerbound) / 2);
    }
}
```