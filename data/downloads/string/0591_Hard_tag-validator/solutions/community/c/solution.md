# [ 0591 ][ C++ ] Tag Validator

**Author:** JasonChiuCC
**Votes:** 2
**Link:** [https://leetcode.com/problems/tag-validator/solutions/1033017/](https://leetcode.com/problems/tag-validator/solutions/1033017/)

---

```
bool isValidTAG( string s ){
    if( s.size() < 1 || s.size() > 9 )  return false;
    for( char c : s){ if( !isupper(c) ) return false; }
    return true;
}

class Solution {
public:
    bool isValid(string code) {
        if( code[0] != '<' || code[code.size()-1] != '>') return false;
        vector<string> v;
        for( int idx = 0 ; idx < code.size() ; ++idx)
        {
            if( idx > 0 && v.empty() ) return false;
            int close_index = 0;
            if ( code[idx] == '<') 
            {
                // ------------------- 
                // CDATA
                // ------------------- 
                if ( code[idx+1] == '!') 
                {
                    if( v.empty() ){ return false; }
                    if( code.substr( idx, 9 ) != "<![CDATA[" ) return false; 
                    close_index  = code.find( "]]>", idx); if( close_index == string::npos ) return false; 
                    close_index += 2;  
                } 
                // ------------------- 
                // End Tag
                // ------------------- 
                else if ( code[idx+1] == '/')  
                {
                    close_index     = code.find( ">", idx); if( close_index == string::npos ) return false; 
                    string TAG_NAME = code.substr( idx+2, close_index-(idx+2) );
                    if( !isValidTAG(TAG_NAME) ) return false; 
                    if(  v.empty() || v.back() != TAG_NAME ) return false;
                    v.pop_back();
                }
                // ------------------- 
                // Start Tag
                // ------------------- 
                else
                {
                    close_index     = code.find( ">", idx); if( close_index == string::npos ) return false;
                    string TAG_NAME = code.substr( idx+1, close_index-(idx+1) );
                    if( !isValidTAG(TAG_NAME) ) return false; 
                    v.push_back(TAG_NAME);
                }                
                idx = close_index;
            }
        }
        return v.empty();
    }
};
```