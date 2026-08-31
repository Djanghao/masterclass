# Python/Python3 solution with explanation ans easy understanding

**Author:** prasanthksp1009
**Votes:** 7
**Link:** [https://leetcode.com/problems/positions-of-large-groups/solutions/1180846/](https://leetcode.com/problems/positions-of-large-groups/solutions/1180846/)

---

**Code:**
```
class Solution:
    def largeGroupPositions(self, s: str) -> List[List[int]]:
        lis =[]#empty list to store the index of the repeated elements >= 3
        j = 0 #variable to the starting index. 
        for i in range(len(s)): #run through the loop
            if i == len(s) - 1 or s[i] != s[i+1]: #if i reaches the last character or if s[i] is not equal to s[i+1] enter the if condition
                if i - j + 1 >= 3: # subtract the index value so the that you get the repeated index if it is >= 3 append it to the list
                    lis.append([j,i])
                j = i + 1 #increment j to i + 1 index for every iteration if it entrs the 1st if condition
        return lis
```

***We rise by lifting others***