# Explained Python Solution using single stack

**Author:** BhavanaKamal
**Votes:** 81
**Link:** [https://leetcode.com/problems/decode-string/solutions/586930/](https://leetcode.com/problems/decode-string/solutions/586930/)

---


Explanation:
Solved using stack
1. Possible inputs are - '[' , ']', alphabet(s) or numbers. Lets talk about each one by one.

2. We will start for loop for traversing through each element of 's'. If we encounter a number, it will be handled by checking isdigit() condition. curNum10+int(c) helps in storing the number in curnum ,when the number is more than single digit.

3.When we encounter a character, we will start it adding to a string named curString. The character can be single or multiple. curString+=c will keep the character string.

4.The easy part is over.Now, when we encounter '[' it means thats a start of a new substring, meaning the previous substring (if there was one) has already been traversed and handled. So , we will append the current curString and curNum to stack and,  reset our curString as empty string and curNum as 0 to use in further porcessing as we have a open bracket which means start of a new substring.

5.Finally when we encounter a close bracket ']', it certainely means we have reached where our substring is complete, now we have to find a way to calculate it. Thats when we go back to stack to find what we have stored there which will help us in calculating the current substring. In the stack we will find a number on top which is popped and then a previous string which we will need to add with the curstringnum, and everything will be stored in curString after calculation.  

6.The calculated curstring will be returned as answer if 's' is over else it will be again appended to stack when an open bracket is encountered. And the above process will be repeated per condition.


```

class Solution(object):
    def decodeString(self, s):
        stack = []; curNum = 0; curString = ''
        for c in s:
            if c == '[':
                stack.append(curString)
                stack.append(curNum)
                curString = ''
                curNum = 0
            elif c == ']':
                num = stack.pop()
                prevString = stack.pop()
                curString = prevString + num*curString
            elif c.isdigit():     # curNum*10+int(c) is helpful in keep track of more than 1 digit number
                curNum = curNum*10 + int(c)
            else:
                curString += c
        return curString
```		