# Python one-liner using eval function (28ms, 14MB)

**Author:** seankala
**Votes:** 72
**Link:** [https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/solutions/812200/](https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/solutions/812200/)

---

Solution is relatively straightforward. You just have to make sure to cast `n` to be a string.

```Python
def subtractProductAndSum(n)t:
    return eval('*'.join(str(n))) - eval('+'.join(str(n)))
```

The time complexity of this solution is O(n) due to the two `join` operations.

### Edit
As somebody said in the comments section, it's worth noting that the `eval` function of Python isn't safe. For those of you curious why, there's a great [Stack Overflow question](https://stackoverflow.com/questions/35804961/python-eval-is-it-still-dangerous-if-i-disable-builtins-and-attribute-access) and also an [in-depth blog post](https://nedbatchelder.com/blog/201206/eval_really_is_dangerous.html).

It's worth noting that if you use the `eval` function during an interview, the interviewers may ask you if you're aware of the security implications.

Happy coding!