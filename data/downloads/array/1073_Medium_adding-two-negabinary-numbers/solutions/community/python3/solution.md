# Python 3 | Math, Two Pointers | Explanation

**Author:** idontknoooo
**Votes:** 2
**Link:** [https://leetcode.com/problems/adding-two-negabinary-numbers/solutions/1384126/](https://leetcode.com/problems/adding-two-negabinary-numbers/solutions/1384126/)

---

### Explanation
- Math fact for -2 based numbers
	- `1 + 1 = 0, carry -1`
	- `-1 + 0 = 1, carry 1` 
	- `1 + 0 = 1, carry 0`
	- `0 + 0 = 0, carry 0`
	- `0 + 1 = 1, carry 0`
	- `-1 + 1 = 0, carry 0`
	- `-1 + -1 is not possible`
- Based on above fact, we can do a two pointer addition from right to left
- Remember to count the `carry` and remove the leading `0` before return the answer
### Implementation
```
class Solution:
    def addNegabinary(self, arr1: List[int], arr2: List[int]) -> List[int]:
        ans = list()
        m, n = len(arr1), len(arr2)
        i, j = m-1, n-1
        def add(a, b):                                         # A helper function to add -2 based numbers
            if a == 1 and b == 1:
                cur, carry = 0, -1
            elif (a == -1 and b == 0) or (a == 0 and b == -1):    
                cur = carry = 1
            else:    
                cur, carry = a+b, 0
            return cur, carry                                  # Return current value and carry
        carry = 0
        while i >= 0 or j >= 0:                                # Two pointers from right side
            cur, carry_1, carry_2 = carry, 0, 0
            if i >= 0:
                cur, carry_1 = add(cur, arr1[i])
            if j >= 0:    
                cur, carry_2 = add(cur, arr2[j])
            carry = carry_1 + carry_2
            ans.append(cur)
            i, j = i-1, j-1
        ans = [1,1] + ans[::-1] if carry == -1 else ans[::-1]  # Add [1, 1] if there is a carry -1 leftover
        for i, v in enumerate(ans):                            # Remove leading zero and return
            if v == 1:
                return ans[i:]
        else:
            return [0]
```