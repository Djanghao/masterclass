# Ruby with explanation

**Author:** Fedhii
**Votes:** 0
**Link:** [https://leetcode.com/problems/string-transforms-into-another-string/solutions/1061249/](https://leetcode.com/problems/string-transforms-into-another-string/solutions/1061249/)

---

```
require "set"

def can_convert(str1, str2)
    s2 = Set.new
    s1_map = {}
    
    for i in 0 ... str1.length do 
        s2.add(str2[i])
        
        return false if s1_map.has_key?(str1[i]) && s1_map[str1[i]] != str2[i]
        
        s1_map[str1[i]] = str2[i]
        
        return false if str1 != str2 && s1_map.size == 26 && s2.size == 26
    end
    
    return true
end

=begin
Every character must only be map to one other character. So for every character in str1,
check if we've already mapped it to another character. If we have, return false. Otherwise,
map it to the character that we're at in str2. Keep track of the chars from both strings
because at the end, if the size of those hash maps/sets are 26, that means we have the whole
alphabet already represented in both strings. There are no more chars to map to/from. At that
point, the strs just need to be identical. If they are, return true. If not, return false.
=end
```