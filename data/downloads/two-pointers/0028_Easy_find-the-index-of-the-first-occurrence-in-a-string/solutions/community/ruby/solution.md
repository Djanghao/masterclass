# ✅100% faster || C++ || Java || Python || C# || Javascript || Php || Go || Ruby || Typescript || Dart

**Author:** tamim447
**Votes:** 7
**Link:** [https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/solutions/2768073/](https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/solutions/2768073/)

---

**C++ Solution:**

```
class Solution {
public:
    int strStr(string haystack, string needle) {
        
        return haystack.find(needle);
    }
};
```

**Java Solution:**

```
class Solution {
    public int strStr(String haystack, String needle) {
        
        return haystack.indexOf(needle);
    }
}
```

 **Python Solution:**
 
```
class Solution(object):
    def strStr(self, haystack, needle):
        """
        :type haystack: str
        :type needle: str
        :rtype: int
        """
        return haystack.find(needle)
```

 **Javascript Solution:**
 
```
var strStr = function(haystack, needle) {
    return haystack.indexOf(needle);
};
```

 **Go Solution:** 
 
```
func strStr(haystack string, needle string) int {
    
    return strings.Index(haystack, needle);
}
```

**C# Solution:**
```
public class Solution {
    public int StrStr(string haystack, string needle) {
        return haystack.IndexOf(needle);
    }
}
```

 **Typescript Solution:**
 
```
function strStr(haystack: string, needle: string): number {
    return haystack.indexOf(needle);
};
```

 **Ruby Solution:**
 
```
def str_str(haystack, needle)

    return haystack.index(needle) != nil ? haystack.index(needle) : -1
        
end
```

 **Dart Solution:**

```
class Solution {
  int strStr(String haystack, String needle) {
      return haystack.indexOf(needle);
  }
}
```

**PHP Solution:** 
```
class Solution {

    /**
     * @param String $haystack
     * @param String $needle
     * @return Integer
     */
    function strStr($haystack, $needle) {
        echo strpos($haystack, $needle);
        if (strpos($haystack, $needle) !== false) {
            return strpos($haystack, $needle);
        } else {
            return -1;
        }
    }
}
```

