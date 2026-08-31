# [Python] Half of the Palindromes

**Author:** lee215
**Votes:** 54
**Link:** [https://leetcode.com/problems/find-palindrome-with-fixed-length/solutions/1887170/](https://leetcode.com/problems/find-palindrome-with-fixed-length/solutions/1887170/)

---

# **Intuition**
The first half part of palindrome is ordered.
Not leading zeros allowd, so ther starts with 100000, 100001, 100002..
Every number is added a base in pow of 10.
<br>

# **Explanation**
Find the base that we need to add to every element.
The pow equals to the half of the length `l`.

For each query index `q`,
we firstly turn it `q - 1`, whichis 0-based index,
then add it with the base.

Finally we make it palindrome by add its reversed string.
<br>

# **Complexity**
Time `O(nl)`
Space `O(nl)`
<br>

**Python**
```py
    def kthPalindrome(self, queries, l):
        base = 10 ** ((l - 1) / 2)
        res = [q - 1 + base for q in queries]
        for i,a in enumerate(res):
            a = str(a) + str(a)[-1 - l % 2::-1]
            res[i] = int(a) if len(a) == l else -1
        return res
```
