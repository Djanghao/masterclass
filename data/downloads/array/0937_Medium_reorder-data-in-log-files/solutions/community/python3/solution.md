# [Python3] Sort the list use key

**Author:** zhanweiting
**Votes:** 118
**Link:** [https://leetcode.com/problems/reorder-data-in-log-files/solutions/352878/](https://leetcode.com/problems/reorder-data-in-log-files/solutions/352878/)

---

*  define a function to label the item in logs with 0 if the rest is alphabet, with 1 if the rest is number.
*  sort the list according to the label.
```
#Python String | split()
split() method returns a list of strings after breaking the given string by the specified separator.
Syntax :
str.split(separator, maxsplit)
word = 'I, like, algorithm, and, datastructure'
  
# maxsplit: 0 
print(word.split(', ', 0)) 
 >>['I, like, algorithm, and, datastructure'] 

# maxsplit: 4 
print(word.split(', ', 4)) 
>>['I', 'like', 'algorithm', 'and', 'datastructure']


# maxsplit: 1 
print(word.split(', ', 1)) 
>>['I', 'like, algorithm, and, datastructure']

```
```
Input: logs = [
				"dig1 8 1 5 1",
				"let1 art can",
				"dig2 3 6",
				"let2 own kit dig",
				"let3 art zero"]
				
# a, b = log.split(" ", 1)

a: a1      b:  9 2 3 1
a: g1      b:  act car
a: zo4    b:  4 7
a: ab1    b:  off key dog
a: a8      b:  act zoo

Output = [
			"let1 art can",
			"let3 art zero",
			"let2 own kit dig",
			"dig1 8 1 5 1",
			"dig2 3 6"]
```
By default, sort(key) means to sort the list by key in increasing order.
if b[0] is letter: key = (0,b,a)
If b[0] is not letter: key = (1,None,None)
 **effect of use (None,None) is when you sort letter-logs, the digit-logs remain in the same order.**
(1,) is short for (1,None,None). 
step 1: 0 < 1: so letter-logs come before any digit-log.
we get:
["let1 art can","let2 own kit dig","let3 art zero","dig1 8 1 5 1","dig2 3 6"]
step 2: b and None The letter-logs are sorted lexicographically by contend(b), the digit-logs remain in the same order
We get:
["let1 art can","let3 art zero","let2 own kit dig","dig1 8 1 5 1","dig2 3 6"]
step3: a and None, The letter-logs are sorted lexicographically by identifier(a), the digit-logs remain in the same order.
We get:
["let1 art can","let3 art zero","let2 own kit dig","dig1 8 1 5 1","dig2 3 6"]

```
class Solution:
    def reorderLogFiles(self, logs: List[str]) -> List[str]:
        return sorted(logs,key = self.sort)
    def sort(self,logs):
            a,b = logs.split(' ', 1)
            if b[0].isalpha():
                return (0,b,a)
            else:
                return (1,None,None)
```