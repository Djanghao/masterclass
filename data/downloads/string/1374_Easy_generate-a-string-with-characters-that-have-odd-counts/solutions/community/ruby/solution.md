# hilarious problem

**Author:** Chris1337
**Votes:** 0
**Link:** [https://leetcode.com/problems/generate-a-string-with-characters-that-have-odd-counts/solutions/4078235/](https://leetcode.com/problems/generate-a-string-with-characters-that-have-odd-counts/solutions/4078235/)

---

Honestly, what a joke of a problem lol
# Code
```
# @param {Integer} n
# @return {String}
def generate_the_string(n)

    a = "a"
    b = "b"
    if n.odd?
        return a*n
    else
        return b + (a*(n-1))
    end
end
```