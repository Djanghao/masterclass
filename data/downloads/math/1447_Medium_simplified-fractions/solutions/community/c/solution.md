# [C++] || GCD + Set

**Author:** rahul921
**Votes:** 5
**Link:** [https://leetcode.com/problems/simplified-fractions/solutions/2379976/](https://leetcode.com/problems/simplified-fractions/solutions/2379976/)

---

```
class Solution {
public:
    set<string> st ;
    vector<string> simplifiedFractions(int n) {
        
        for(int i = 1 ; i <= n ; ++i ){
            for(int j = i + 1 ;  j <= n ; ++j ){
                int k = __gcd(i,j) , num = i / k , den = j / k ;
                string s = to_string(num) + "/" + to_string(den) ;
                if(st.find(s) == end(st)) st.insert(s);
            }
        }
                
            
        return vector<string>(begin(st),end(st)) ;
    }
};
```