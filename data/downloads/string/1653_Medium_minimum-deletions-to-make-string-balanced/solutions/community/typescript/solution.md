# 96%+ beats in Every Language | Simple Code 🔥🔥

**Author:** PrinceHiremath
**Votes:** 3
**Link:** [https://leetcode.com/problems/minimum-deletions-to-make-string-balanced/solutions/5556002/](https://leetcode.com/problems/minimum-deletions-to-make-string-balanced/solutions/5556002/)

---

# Complexity
- Time complexity: O(N)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```cpp []
class Solution {
public:
    int minimumDeletions(string s) {
        int deletions = 0, counts = 0;
        for (char ch : s) {
            if (ch == 'b') {
                counts += 1;
            } else if (counts) {
                deletions += 1;
                counts -= 1;
            }
        }
        return deletions;
    }
};
```
```java []
class Solution {
    public int minimumDeletions(String s) {
        int deletions = 0, counts = 0;
        for (char ch : s.toCharArray()) {
            if (ch == 'b') {
                counts += 1;
            } else if (counts > 0) {
                deletions += 1;
                counts -= 1;
            }
        }
        return deletions;
    }
}
```
```python3 []
class Solution:
    def minimumDeletions(self, s: str) -> int:
        deletions, counts = 0, 0
        for ch in s:
            if ch == 'b':
                counts += 1
            elif counts:
                deletions += 1
                counts -= 1
        return deletions
```
```c []
int minimumDeletions(char* s) {
    int deletions = 0, counts = 0;
    for (int i = 0; s[i] != '\\0'; ++i) {
        if (s[i] == 'b') {
            counts += 1;
        } else if (counts > 0) {
            deletions += 1;
            counts -= 1;
        }
    }
    return deletions;
}
```
```javascript []
/**
 * @param {string} s
 * @return {number}
 */
var minimumDeletions = function(s) {
    let deletions = 0, counts = 0;
    for (let ch of s) {
        if (ch === 'b') {
            counts += 1;
        } else if (counts > 0) {
            deletions += 1;
            counts -= 1;
        }
    }
    return deletions;
};
```
```typescript []
function minimumDeletions(s: string): number {
    let deletions = 0, counts = 0;
    for (let ch of s) {
        if (ch === 'b') {
            counts += 1;
        } else if (counts > 0) {
            deletions += 1;
            counts -= 1;
        }
    }
    return deletions;
};
```
```php []
class Solution {

    /**
     * @param String $s
     * @return Integer
     */
    function minimumDeletions($s) {
    $deletions = 0;
    $counts = 0;
    $length = strlen($s);
    for ($i = 0; $i < $length; $i++) {
        if ($s[$i] === 'b') {
            $counts += 1;
        } elseif ($counts > 0) {
            $deletions += 1;
            $counts -= 1;
        }
    }
    return $deletions;
    }
}
```
```kotlin []
class Solution {
    fun minimumDeletions(s: String): Int {
    var deletions = 0
    var counts = 0
    for (ch in s) {
        if (ch == 'b') {
            counts += 1
        } else if (counts > 0) {
            deletions += 1
            counts -= 1
        }
    }
    return deletions
    }
}
```

