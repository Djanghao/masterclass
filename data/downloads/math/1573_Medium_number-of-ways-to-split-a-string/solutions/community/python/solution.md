# Python | Combination concept Mathematics | Explained with Concept and Code | Easy Solution

**Author:** ramanaditya
**Votes:** 24
**Link:** [https://leetcode.com/problems/number-of-ways-to-split-a-string/solutions/830774/](https://leetcode.com/problems/number-of-ways-to-split-a-string/solutions/830774/)

---

<h1>There are two most important part of the solution</h1>

### Basic Observation
- The only part that matters are zeroes that lies on the borders
- Borders are the places from where the string is split, it is **2** here
### 1. When there are only zeroes
- Let's us understand this in terms of following details
- We have n zeroes and we have to place two borders
If we make an observation we can find:
for zeroes = 3: "000", we have ```4 or n + 1 ```  possible places for borders
```
| 0 | 0 | 0 |
```
for zeroes = 4: "0000", we have ```5 or n + 1 ``` possible places for borders
```
| 0 | 0 | 0 | 0 |
```
for zeroes = 5: "00000", we have ```6 or n + 1 ``` possible places for borders
```
| 0 | 0 | 0 | 0 | 0 |
```
But in every case we can find that, the borders in the extreme left and extreme right are not valid,
So the valid number of choices will be ```n + 1 - 2 = n - 1```

Now we have total valid choices as : ```n - 1```

So ways of selecting two borders from ```n - 1``` valid choices can be given as

<sup>(n - 1)</sup>C<sub>r</sub>,  where r = 2
So it will be <sup>(n - 1)</sup>C<sub>2</sub>

which can be simplified as 
```((n - 1) * (n - 2)) / 2```

So few examples for the different values of n
3: 1, 4: 3, 5: 6, 6: 10, 7: 15

### 2. When we have valid number of zeroes on the both borders 
let's take an example: s = ```"100100010100110"```
Upon splitting, such that first and third doesn't have any extra zeroes
```
1001 | 00010100 | 110
```
- Let's think of the middle group ie., ```00010100```, it has ```3 zeroes in the left and 2 zeroes in the right```
- Now the solution will revolve around different combinations of zeroes in the middle group
> We are not focussing on the left and right because that will automatically be validated if we 
> validate the middle one as if we have two choices and if we select one the other one gets 
> selected automatically
-  So now we have 3 zeroes in the left but 4 choices as 3 choices are the 3 zeroes but one choice 
is phi ie., zero isn't present in the left side of the middle group so ```4 choices``` in the left
-  And similarly we have ```3 choices ``` in the right
- Now this has become the question of combination, And we have to select one out of 4 choices for
 the left side of middle group and one out of 3 choices for the right side of the middle group
 
> We can also think it as the number of places where we can put the border, in that case we will have 
4 places on the left side to put the borders and 3 places on the right side to put the border. and we 
will have to select one out of these choices
> Both these ways of attempting the problem will lead to the solution
> 

- so ways of selecting zeroes can be given as

	<h1><b><sup>n</sup>C<sub>r</sub></b></h1>
	
	where **n is the number of choices** and
	**r is 1 here as we have to chose one among n**
	
  - For left
    - n = 4 and r = 1
    - val = <sup>4</sup>C<sub>1</sub> = 4
  - For right
    - n = 3 and r = 1
    - val = <sup>3</sup>C<sub>1</sub> = 3
   
### Important
**Multiplication rule**: Let an event occurs in two stage A and B.If the stage A can occurs in \u2018M' 
ways and stage B can occurs in \u2019N' ways,where A and B are independent of each other,then event 
can occur in ( M\xD7N )ways

**Addition rule**: Let A and B be two disjoint event ( they never occur together). If A occur in \u2018M'
 ways and B occur in \u2019N' ways , then exactly one of the event can occur in (M+N) ways

- Both the actions are independent of each other and can occur simultaneously here so we will have to find the product.
- Hence, the solution will be ```4 * 3 = 12```

> Please solve the problem now, before looking at the code, this will help you understand the actual logic of the problem. 


# Solution

```python
class Solution:
    def numWays(self, s: str) -> int:
        ones = 0

        # Count number of Ones
        for char in s:
            if char == "1":
                ones += 1

        # Can't be grouped equally if the ones are not divisible by 3
        if ones > 0 and ones % 3 != 0:
            return 0

        # Ways of selecting two dividers from n - 1 dividers 
        if ones == 0:
            n = len(s)
			# n = {3: 1, 4: 3, 5: 6, 6: 10, 7: 15 ... }
            return (((n - 1) * (n - 2)) // 2) % ((10 ** 9) + 7)

        # Number of ones in each group
        ones_interval = ones // 3

        # Number of zeroes which lie on the borders
        left, right = 0, 0

        # Iterator
        i = 0
        temp = 0

        # Finding the zeroes on the left and right border
        while i < len(s):
            temp += int(s[i]) & 1
            if temp == ones_interval:
                if s[i] == '0':
                    left += 1
            if temp == 2 * ones_interval:
                if s[i] == '0':
                    right += 1
            i += 1
        
        # The result is the product of number of (left + 1) and (right + 1)
        # Because let's assume it as we only want to fill up the middle group
        # The solution would be if we have zero then there might be a zero in the middle
        # Or there might not be the zero, so this might case is added and then
		# the events are independent so product of both the events
        return ((left + 1) * (right + 1)) % ((10 ** 9) + 7)

```


I am building different Solutions in different languages of different topics of Data Structures and 
Algorithms, So if you want to contribute or want to refer it visit the link given below

**Data Structures and Algorithms:** https://github.com/ramanaditya/data-structure-and-algorithms
**Interview Docs:** http://interview-docs.readthedocs.io/

**GItHub :** https://github.com/ramanaditya
**LinkedIn :**  https://www.linkedin.com/in/ramanaditya/
**Twitter :**  https://twitter.com/_adityaraman
