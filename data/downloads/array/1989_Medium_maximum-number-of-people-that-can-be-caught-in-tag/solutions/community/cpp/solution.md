# Python3 O(N) Time O(N) Space Greedy History of Records Approach

**Author:** 2018hsridhar
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-people-that-can-be-caught-in-tag/solutions/5801867/](https://leetcode.com/problems/maximum-number-of-people-that-can-be-caught-in-tag/solutions/5801867/)

---

# Complexity
Let $$N :=$$ input length
- Time complexity:
$$O(N)$$

- Space complexity:
$$O(N)$$ ( Explicit ) 
$$O(1)$$ ( Implicit )

# Code
```python3 []
'''
1989. Maximum Number of People That Can Be Caught in Tag
URL := https://leetcode.com/problems/maximum-number-of-people-that-can-be-caught-in-tag/description/

Target Complexity Analysis
Let N := length of the input
Time = O(N)
Space = O(N) ( Explicit ) 
        O(1) ( Implicit ) 

'''
class Solution:
    def catchMaximumAmountofPeople(self, team: List[int], dist: int) -> int:
        maxPeople = 0
        itRecords = []
        visited = set()
        for index,member in enumerate(team):
            if(member == 0):
                itRecords.append(index)
        # print(itRecords)
        for index,member in enumerate(team):
            # an "IT" team
            if(member == 1):
                rangeLower = index - dist
                rangeUpper = index + dist
                while(len(itRecords) > 0):
                    leftMostNotItIndex = itRecords[0]
                    if(leftMostNotItIndex > rangeUpper):
                        break
                    else:
                        # Lower or equal, we will pop the value out
                        itRecords.pop(0)
                        if(leftMostNotItIndex >= rangeLower and leftMostNotItIndex <= rangeUpper):
                            maxPeople += 1
                            break
        return maxPeople
```