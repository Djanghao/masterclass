# Reverse in-place with 2 pointer

**Author:** ejini6969
**Votes:** 0
**Link:** [https://leetcode.com/problems/faulty-keyboard/solutions/5337051/](https://leetcode.com/problems/faulty-keyboard/solutions/5337051/)

---

# Intuition
Loop with 2 pointer to reverse **in-place** (no use of built-in methods)


# Code
## JavaScript
```
/**
 * @param {string} s
 * @return {string}
 */
var finalString = function(s) {
    let i = 0, n = s.length
    s = [...s]
    while(i < n){
        if(s[i] == 'i'){
            let left = 0, right = i - 1
            while(left < right){
                [s[left], s[right]] = [s[right], s[left]]
                left++
                right--
            }
            s[i] = ""
            i--
        }
        i++
    }
    return s.join("")
};
```
## Python 3
```
class Solution:
    def finalString(self, s: str) -> str:
        i, n, s = 0, len(s), list(s)
        while i < n:
            if s[i] == 'i':
                left, right = 0, i - 1
                while left < right:
                    s[left], s[right] = s[right], s[left]
                    left += 1
                    right -= 1
                s[i] = ""
                i -= 1
            i += 1
        return "".join(s)
```

## Ruby
```
# @param {String} s
# @return {String}
def final_string(s)
    i = 0
    n = s.size
    while i < n
      if s[i] == 'i'
        left = 0
        right = i - 1
        while left < right
          s[left], s[right] = s[right], s[left]
          left += 1
          right -= 1
        end
        s[i] = ""
        i -= 1
      end
      i += 1
    end
    s
end
```