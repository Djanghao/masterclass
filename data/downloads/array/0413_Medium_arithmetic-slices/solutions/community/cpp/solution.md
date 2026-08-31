# c++ Solutions using Recursion, DP and Formula in O(n) time

**Author:** Nick_Pantomath
**Votes:** 19
**Link:** [https://leetcode.com/problems/arithmetic-slices/solutions/812284/](https://leetcode.com/problems/arithmetic-slices/solutions/812284/)

---

```

//Recursion
class Solution {
public:
    int sum = 0;
    int numberOfArithmeticSlices(vector<int>& A) {
        
                slices(A, A.size() - 1);
        return sum;

        
    }
    
    
     int slices(vector<int>& A, int i) {
        if (i < 2)
            return 0;
        int ap = 0;
        if (A[i] - A[i - 1] == A[i - 1] - A[i - 2]) {
            ap = 1 + slices(A, i - 1);
            sum += ap;
        } else
            slices(A, i - 1);
        return ap;
    }
};

//DP

class Solution {
public:
    int sum = 0;
    int numberOfArithmeticSlices(vector<int>& A) {
        
   vector<int> dp(A.size());
        int sum = 0;
        for (int i = 2; i < dp.size(); i++) {
            if (A[i] - A[i - 1] == A[i - 1] - A[i - 2]) {
                dp[i] = 1 + dp[i - 1];
                sum += dp[i];
            }
        }
        return sum;
     
    }
    
    
    
};


//DP with constant space

class Solution {
public:
    int sum = 0;
    int numberOfArithmeticSlices(vector<int>& A) {
        
        int sum = 0,cur = 0;
        for (int i = 2; i < A.size(); i++) {
            if (A[i] - A[i - 1] == A[i - 1] - A[i - 2]) {
                cur += 1;
                sum += cur;
            }
            else
                cur = 0;
        }
        return sum;
     
    }
    
    
    
};

//Using Formula

class Solution {
public:
    int sum = 0;
    int numberOfArithmeticSlices(vector<int>& A) {
        
               int count = 0;
        int sum = 0;
        for (int i = 2; i < A.size(); i++) {
            if (A[i] - A[i - 1] == A[i - 1] - A[i - 2]) {
                count++;
            } else {
                sum += (count + 1) * (count) / 2;
                count = 0;
            }
        }
        return sum += count * (count + 1) / 2;
    }
    
    
    
};


```