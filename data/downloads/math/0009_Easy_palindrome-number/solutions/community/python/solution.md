# Python 3 -> 1 solution is 89.20% faster. 2nd is 99.14% faster. Explanation added

**Author:** mybuddy29
**Votes:** 728
**Link:** [https://leetcode.com/problems/palindrome-number/solutions/785314/](https://leetcode.com/problems/palindrome-number/solutions/785314/)

---

**Suggestions to make them better are always welcomed.**

**Solution 1: 89.20% faster**
This is the easiest way to check if integer is palindrome. 

Convert the number to string and compare it with the reversed string.

I wrote this working solution first and then found in the description that we need to solve this problem without converting the input to string. Then I wrote solution 2.
```
def isPalindrome(self, x: int) -> bool:
	if x < 0:
		return False
	
	return str(x) == str(x)[::-1]
```

If we don't want to convert the number to string, then recreate a new number in reverse order.
```
def isPalindrome(self, x: int) -> bool:
	if x<0:
		return False

	inputNum = x
	newNum = 0
	while x>0:
		newNum = newNum * 10 + x%10
		x = x//10
	return newNum == inputNum
```

**Solution 2: 99.14% faster.**
I'd recommend you to solve leetcode question 7 (reverse integer) to understand the logic behind this solution.

Python3 int type has no lower or upper bounds. But if there are constraints given then we have to make sure that while reversing the integer we don't cross those constraints.

So, instead of reversing the whole integer, let's convert half of the integer and then check if it's palindrome.
But we don't know when is that half going to come. 

Example, if x = 15951, then let's create reverse of x in loop. Initially, x = 15951, revX = 0
1. x = 1595, revX = 1
2. x = 159, revX = 15
3. x = 15, revX = 159

We see that revX > x after  3 loops and we crossed the half way in the integer bcoz it's an odd length integer.
If it's an even length integer, our loop stops exactly in the middle.

Now we can compare x and revX, if even length, or x and revX//10 if odd length and return True if they match.

There's a difference between / and // division in Python3. Read it here on [stackoverflow](https://stackoverflow.com/questions/183853/what-is-the-difference-between-and-when-used-for-division).
```
def isPalindrome(self, x: int) -> bool:
	if x < 0 or (x > 0 and x%10 == 0):   # if x is negative, return False. if x is positive and last digit is 0, that also cannot form a palindrome, return False.
		return False
	
	result = 0
	while x > result:
		result = result * 10 + x % 10
		x = x // 10
		
	return True if (x == result or x == result // 10) else False
```

 **If you like the solutions, please upvote it for better reach to other people.**