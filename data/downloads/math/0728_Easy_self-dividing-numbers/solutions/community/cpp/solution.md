# ✅✅Faster || Easy To Understand || C++ Code

**Author:** __KR_SHANU_IITG
**Votes:** 7
**Link:** [https://leetcode.com/problems/self-dividing-numbers/solutions/2522615/](https://leetcode.com/problems/self-dividing-numbers/solutions/2522615/)

---

* ***Math***

* ***Time Complexity :- O(Right - Left)***

* ***Space Complexity :- O(1)***

```
class Solution {
public:
    
    // function for checking, a number is self dividing or not
    
    bool is_possible(int num)
    {
        int n = num;
        
        while(n)
        {
            int digit = n % 10;
            
            if(digit == 0)
                return false;
            
            if(num % digit != 0)
                return false;
            
            n = n / 10;
        }
        
        return true;
    }
    
    vector<int> selfDividingNumbers(int left, int right) {
        
        vector<int> res;
        
        // check every number in range
        
        for(int i = left; i <= right; i++)
        {
            if(is_possible(i))
            {
                res.push_back(i);
            }
        }
        
        return res;
    }
};
```