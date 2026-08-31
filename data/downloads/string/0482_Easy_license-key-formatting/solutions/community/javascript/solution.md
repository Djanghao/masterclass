# Python/JS/C++ O(n) by string operation. [w/ Explanation]

**Author:** brianchiang_tw
**Votes:** 52
**Link:** [https://leetcode.com/problems/license-key-formatting/solutions/540266/](https://leetcode.com/problems/license-key-formatting/solutions/540266/)

---

O(n) by string operation.

---

**Explanation**:

First, eliminate all dashes.

Second, start **grouping with size = K**,
Remember to make a special handle for first group in case that len(S) is not divisible by K.

Third, link each group togetger, separated by dash, '-', at the junction point.

Finally, return the result in **uppercase**.

---
**Implementation**:

**Python**:

```
class Solution:
    def licenseKeyFormatting(self, S: str, K: int) -> str:
        
        # Eliminate all dashes
        S = S.replace('-', '')
        
        head = len(S) % K
        
        grouping = []
        
        # Special handle for first group
        if head:
            grouping.append( S[:head] )
        
        # General case:
        for index in range(head, len(S), K ):
            grouping.append( S[ index : index+K ] )
        
        
        # Link each group togetger and separated by dash '-'
        return '-'.join( grouping ).upper()
```

---

**Javascript**:

```
var licenseKeyFormatting = function(s, k) {
    
    //  Eliminate all dashes
    const regex = /\\-/g;
    s = s.replace(regex, "");
    
    let head = s.length % k;
    
    let grouping = [];
    
    // Special handle for first group
    if( head ){
        grouping.push( s.substring(0, head) );
    }
    
    // General cases:
    for( let i = head ; i < s.length ; i += k ){
        grouping.push( s.substring(i, i+k) );
    }
    
    return grouping.join("-").toUpperCase();
    
    
};
```

---

**C++**

```
class Solution {
public:
    string licenseKeyFormatting(string s, int k) {
        
        // Eliminate all dashes
        s = std::regex_replace(s, std::regex("\\-"), "");
        
        int head = s.length() % k;
        
        vector<string> grouping;
        
        // Special handle for first group
        if( head ){
            grouping.emplace_back( s.substr(0, head) );
        }
        
        // General cases
        for( int i = head ; i < s.length() ; i += k ){
             grouping.emplace_back( s.substr(i, k) );
        }
        
        // Link each group togetger and separated by dash '-'
        s = join(grouping, "-");
        
        // to uppercase
        transform(s.begin(), s.end(), s.begin(), [](unsigned char c){ return std::toupper(c); } );
        return s;
    }
    
private:
    string join(const std::vector<string> &lst, const string &delim)
    {
        std::string ret;
        for(const auto &s : lst) {
            if(!ret.empty())
                ret += delim;
            ret += s;
        }
        return ret;
    }
    
};
```

----

Reference:

[1] [Python official docs about slicing syntax [ start : end : step ]](https://docs.python.org/3/whatsnew/2.3.html?highlight=slicing#extended-slices)

[2] [Python official docs about str.join( ... )](https://docs.python.org/3/library/stdtypes.html?highlight=join#str.join)

[3] [Python official docs about str.upper( )](https://docs.python.org/3/library/stdtypes.html?highlight=join#str.upper)