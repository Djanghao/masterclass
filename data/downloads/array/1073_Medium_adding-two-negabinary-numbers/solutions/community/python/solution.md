# python, from engineer thinking

**Author:** journeyboy
**Votes:** 11
**Link:** [https://leetcode.com/problems/adding-two-negabinary-numbers/solutions/303983/](https://leetcode.com/problems/adding-two-negabinary-numbers/solutions/303983/)

---

simple and not optimized.
write a func to convert from negabinary to dec and vice versa.

```
class Solution(object):
    def negabinary_to_dec(self,arr):
        s = 0
        d = 1
        i = len(arr)-1
        while i>=0:
            s += arr[i]*d
            i -= 1
            d *= -2
        return s
    
    def dec_to_negabinary(self,n):
        if n==0: return [0]
        ret = []
        while n != 0:
            a = abs(n%(-2))
            ret.append(a)
            n = (n-a)//(-2)
        return ret[::-1]
    
    def addNegabinary(self, arr1, arr2):
        """
        :type arr1: List[int]
        :type arr2: List[int]
        :rtype: List[int]
        """
        
        a = self.negabinary_to_dec(arr1)
        b = self.negabinary_to_dec(arr2)
        return self.dec_to_negabinary(a+b)
```