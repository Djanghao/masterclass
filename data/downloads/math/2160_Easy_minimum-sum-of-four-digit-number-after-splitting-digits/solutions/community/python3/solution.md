# Python - simple & fast with explanation - no permutation

**Author:** fatamorgana
**Votes:** 67
**Link:** [https://leetcode.com/problems/minimum-sum-of-four-digit-number-after-splitting-digits/solutions/1747018/](https://leetcode.com/problems/minimum-sum-of-four-digit-number-after-splitting-digits/solutions/1747018/)

---

Please upvote if you like my solution. Let me know in the comments if you have any suggestions to increase performance or readability. 

**Notice** that:
1. We do not need to generate all possible combinations of spliting the input into two numbers. In the ideal solution, num1 and num2 will always be of equal length.
2. We will step by step build num1 and num2 as we go through the algorithm. It is not necessary to generate all combinations of num1 and num2 (with both numbers having equal length).
3. We do not need to save num1 and num2 in a variable. We can keep adding to the total sum as we go through the algorithm. 
4. The algorithm below works for any input length. If you want you can simplify it, since you know the input length is 4. 

**My algorithm** goes as follows:
1. convert the input into a list of digits
2. sort the list of digits in descending order
3. iterate through the list of digits
3.1 with each iteration, multiply the current digit with 10*current position in num1/num2. 
3.2 add the current digit to the result
3.3 if you already added an even number of digits to the total of results, then increase the current position by one
4. return result

```
class Solution:
    def minimumSum(self, num: int) -> int:
        num = sorted(str(num),reverse=True)
        n = len(num)    
        res = 0
        even_iteration = False
        position = 0
        for i in range(n):
            res += int(num[i])*(10**position)
            if even_iteration:
                position += 1
                even_iteration = False
            else:
                even_iteration = True
        return res
```

if you know that the input is going to be exaclty 4 digits, you can simplify it:

```
class Solution:
    def minimumSum(self, num: int) -> int:
        num = sorted(str(num),reverse=True)
        return int(num[0]) + int(num[1]) + int(num[2])*10 + int(num[3])*10
```
