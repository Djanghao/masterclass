# [Python] Simple HashMap Solution, O(n)

**Author:** Saksham003
**Votes:** 11
**Link:** [https://leetcode.com/problems/finding-3-digit-even-numbers/solutions/1613945/](https://leetcode.com/problems/finding-3-digit-even-numbers/solutions/1613945/)

---

* We need 3 digit numbers so we travese form 100 to 999
* For every num in range we check if its digits are in digits array and frequency of its digits is less than or equal to frequency of digits in digits array.
```
class Solution:
    def findEvenNumbers(self, digits: List[int]) -> List[int]:
        hmap, res = defaultdict(int), []
        for num in digits:
            hmap[num] += 1   #counting frequency of digits of digits array
        
        for num in range(100, 999, 2):  #step 2 because we need even numbers
            checker = defaultdict(int)
            for digit in str(num):
                checker[int(digit)] += 1    #counting frequency of digits of num
            
			#check if every digit in num is in digits array and its frequency is less than or equal to its frequency in digits array
            if all(map(lambda x: x in hmap and checker[x] <= hmap[x], checker)):
                res.append(num)
        
        return res
```