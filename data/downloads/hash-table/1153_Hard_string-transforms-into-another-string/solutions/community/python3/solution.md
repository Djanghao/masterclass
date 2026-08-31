# Simple to read solution with explaination

**Author:** jesus805
**Votes:** 10
**Link:** [https://leetcode.com/problems/string-transforms-into-another-string/solutions/697567/](https://leetcode.com/problems/string-transforms-into-another-string/solutions/697567/)

---

You can apply the concepts of a [function domain/range](https://www.cuemath.com/functions/domain-and-range-of-a-function/) to this problem.
1) Every element in the domain set should map to only one element in the range set. However multiple elements in the domain set can map to an element in the range set. 
Ex. 
'a' -> 'z' 'b' -> 'z' is valid
'a' -> 'b' 'a' -> 'c' is not
2) If the domain and range is a one-to-one map. It is only considered valid if and only if the two strings are equal.
3) The alphabet size (26) only takes into consideration letters a-z, if non-english alphabet characters were in the alphabet, this would be a different number.
```
class Solution:
    def canConvert(self, str1: str, str2: str) -> bool:
        # Zero conversion
        if str1 == str2:
            return True
        
        # Alphabet size [a-z]
        alphabet_size = 26
        
        domain_to_range_map = {}
        range_to_domain_map = collections.defaultdict(list)
        
        for i in range(len(str1)):
            src = str1[i]
            dst = str2[i]
            
            if src not in domain_to_range_map:
                
                domain_to_range_map[src] = dst
                range_to_domain_map[dst].append(src)
            else:
                # An element in the domain set cannot map to two elements in the range set
                if domain_to_range_map[src] != dst:
                    return False
        
        # There is a one-to-one map between the domain and range over the entire alphabet
        # The strings are not equal therefore it is impossible to map from str1 -> str2
        if len(range_to_domain_map) == alphabet_size:
            return False
        
        return True
```