# C++ 100% in place

**Author:** mivklo
**Votes:** 4
**Link:** [https://leetcode.com/problems/remove-vowels-from-a-string/solutions/875338/](https://leetcode.com/problems/remove-vowels-from-a-string/solutions/875338/)

---



class Solution {
public:
    std::string removeVowels(std::string S) {
        
        size_t dst = 0;
        size_t src = 0;
        
        while( src < S.size() )
        {            
            if( isVowel( S[src]) )
            {
                ++src;    
            }
            else
            {
                S[dst] = S[src];
                ++dst;
                ++src;
            }    
        }
        
        S.resize( dst );
        return S;
    }
    
    bool isVowel(char c)
    {
        switch(c)
        {
            case 'a':
            case 'e':
            case 'o':
            case 'i':
            case 'u':
                return true;
            default :
                return false;
        }
    }
};