# C++, easy short solution

**Author:** naman_nm
**Votes:** 7
**Link:** [https://leetcode.com/problems/check-if-word-is-valid-after-substitutions/solutions/247653/](https://leetcode.com/problems/check-if-word-is-valid-after-substitutions/solutions/247653/)

---

class Solution {
public:
    bool isValid(string S) {
        
        while(!S.empty())
        {
            auto posn = S.find( "abc" );
            if( posn == string::npos )
                return 0;
            S.erase(posn, 3 );
        }
        return 1;
    }
};