# Easy python solution with interpretation

**Author:** yang_fan
**Votes:** 3
**Link:** [https://leetcode.com/problems/optimal-division/solutions/101691/](https://leetcode.com/problems/optimal-division/solutions/101691/)

---

The `key point` of the problem is that we should get the `largest numerator` and the `smallest denominator`. The only way to get the result is we always make the  parenthesis `begin from the second number` and `end after the last number`. Such as `"1000/(100/10/2)" or "1000/(2/200/10)"`.  
After finding out the trick, we just need to operate with the strings.The solution is about 38ms. 
```
def optimalDivision(self, nums):
        """
        :type nums: List[int]
        :rtype: str
        """
        if len(nums)<3:
            result=''.join([str(num)+'/' for num in nums])
            return result[:-1]
        result=[]
        result.append(str(nums[0])+'/(')
        for i in range(1,len(nums)):
            result.append(str(nums[i]))
            result.append('/')
        result=result[:-1]
        result.append(')')
        return ''.join(result)
```