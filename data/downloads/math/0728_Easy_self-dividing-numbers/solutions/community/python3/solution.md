# Beating 99.2% Easiest Explained Python Solution

**Author:** celestial2897
**Votes:** 5
**Link:** [https://leetcode.com/problems/self-dividing-numbers/solutions/3463114/](https://leetcode.com/problems/self-dividing-numbers/solutions/3463114/)

---


![image.png](./images/0.png)
# Approach
<!-- Describe your approach to solving the problem. -->
Firstly, initiated one empty list. Then staretd a loop from left to right to find the self dividing numbers in the range[left,right]. 
Now, initiated a flag element to check whether the number in the range is a self dividing number or not. Now, we checked if the number contanins zero, then it is not a self dividing number. 
If it doestn't contain zero, then checked whether that number can be divided fully by all its digits, if yes then we append the number in the list.
Then, finally we have returned the list.

# Code
```
class Solution(object):
    def selfDividingNumbers(self, left, right):
        """
        :type left: int
        :type right: int
        :rtype: List[int]
        """
        l=[]
        for i in range(left,right+1):
            fl,a=0,i
            if '0' in str(i):
                fl=1
""" Please Upvote and support """
            else:
                while a!=0:
                    if i%(a%10)!=0:
                        fl=1
                        break
                    a=a//10
            if fl==0:
                l.append(i)
        return l

```