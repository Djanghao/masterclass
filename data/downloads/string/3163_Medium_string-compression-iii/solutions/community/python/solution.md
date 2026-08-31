# ✅ One Line Solution

**Author:** MikPosp
**Votes:** 7
**Link:** [https://leetcode.com/problems/string-compression-iii/solutions/6005822/](https://leetcode.com/problems/string-compression-iii/solutions/6005822/)

---

(Disclaimer: this is not an example to follow in a real project - it is written for fun and training mostly)

# Code #1
Time complexity: $$O(n)$$. Space complexity: $$O(1)$$.
```python3
class Solution:
    def compressedString(self, s: str) -> str:
        return re.sub(r'(.)\\1{,8}',lambda m:f'{len(m[0])}{m[1]}',s)
```

# Code #2
Time complexity: $$O(n)$$. Space complexity: $$O(1)$$.
```python3
class Solution:
    def compressedString(self, s: str) -> str:
        return ''.join((q:=len([*p]))//9*f'9{c}'+f'{q%9}{c}'[:q%9*2] for c,p in groupby(s))
```

(Disclaimer 2: code above is just a product of fantasy packed into one line, it is not claimed to be 'true' oneliners - please, remind about drawbacks only if you know how to make it better)