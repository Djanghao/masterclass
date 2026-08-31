# [C++] Concise Sol. w/ comments | 2 Approaches | With gcd & Without gcd

**Author:** vaibhav4859
**Votes:** 4
**Link:** [https://leetcode.com/problems/simplified-fractions/solutions/1758254/](https://leetcode.com/problems/simplified-fractions/solutions/1758254/)

---

**Method - 1: ( Using gcd)**
```
class Solution {
public:
    vector<string> simplifiedFractions(int n) {
        vector<string> ans;
        for(int i = 1; i < n; i++)
            for(int j = i + 1; j <= n; j++)
                if(gcd(i, j) == 1)
                    ans.push_back(to_string(i) + '/' + to_string(j));
                
        return ans;
    }
};
```

**Method - 2: (Without using gcd)**
```
class Solution {
public:
    // Write your own gcd function which check if a fraction is valid or not ,i.e, can be simplified further or not?
    bool canBeSimplifed(int num1, int num2){ 
        for(int i = 2; i <= num1; i++){
            if(num1 % i == 0 && num2 % i == 0) // they have a common divisor, hence can be simplified further
                return true;
        }
        return false;
    }
    
    vector<string> simplifiedFractions(int n) {
        vector<string> ans;
        for(int i = 1; i < n; i++){
            for(int j = i + 1; j <= n; j++){
                if(i / j == 1) continue;
                if(canBeSimplifed(i, j)) continue; // check if fraction can be simplified
                ans.push_back(to_string(i) + "/" + to_string(j));
            }
        }
        return ans;
    }
};
```