# EASY CODE WITH EXPLANATION 🤤 || 💯 % on Runtime

**Author:** IamHazra
**Votes:** 65
**Link:** [https://leetcode.com/problems/number-of-steps-to-reduce-a-number-in-binary-representation-to-one/solutions/5224948/](https://leetcode.com/problems/number-of-steps-to-reduce-a-number-in-binary-representation-to-one/solutions/5224948/)

---

![Screenshot (2928).png](./images/0.png)


# Intuition
The problem requires simulating the process of converting a binary number to 1 by repeatedly performing the following operations:
1. If the number is even, divide it by 2.
2. If the number is odd, add 1 to it.

Given that the input is a binary string, we can leverage the properties of binary numbers and their bits to efficiently determine the steps required. The key insight is to start from the least significant bit (rightmost bit) and move towards the most significant bit (leftmost bit), while maintaining a carry to handle the addition of 1 when the number is odd.

# Approach
1. Initialize `steps` to 0 and `carry` to 0.
2. Iterate through the binary string from the least significant bit (rightmost bit) to the second most significant bit (leftwards).
3. For each bit, check if the bit plus the carry equals 1:
   - If it equals 1, it means the bit was 0 and we added 1 (carry was 1) or the bit was 1 and no carry:
     - Increment `steps` by 2 (one step for the addition, and one for the division).
     - Set `carry` to 1 because adding 1 to an odd number results in an even number with a carry.
   - Otherwise, just increment `steps` by 1 because we simply divided an even number by 2.
4. After the loop, add the `carry` to `steps` to account for any remaining carry at the end.
5. Return the total number of `steps`.

# Complexity
- **Time complexity:** \\(O(n)\\)
  - We iterate through the binary string once, where \\(n\\) is the length of the string.
- **Space complexity:** \\(O(1)\\)
  - We use a constant amount of space for variables `steps` and `carry`.

# Code
```Java []
class Solution {
    public int numSteps(String s) {
        int steps = 0;
        int carry = 0;
        for (int i = s.length() - 1; i > 0; i--) {
            if (s.charAt(i) - '0' + carry == 1) {
                carry = 1;
                steps += 2; 
            } else {
                steps += 1;
            }
        }
        return steps + carry;
    }
}

```
```javascript []
/**
 * @param {string} s
 * @return {number}
 */
var numSteps = function(s) {
    let steps = 0, carry = 0;
    for(let i=s.length-1;i>0;i--){
        if(s.charAt(i) - '0' +carry == 1){
            carry = 1;
            steps += 2;
        }
        else{
            steps++;
        }
    }
    return carry + steps;
};
```
```python []
class Solution(object):
    def numSteps(self, s):
        """
        :type s: str
        :rtype: int
        """
        steps = 0
        carry = 0
        n = len(s) - 1
        for i in range(n, 0, -1):
            if int(s[i]) + carry == 1:
                carry = 1
                steps += 2
            else:
                steps += 1
        return steps + carry

```
```python3 []
class Solution:
    def numSteps(self, s: str) -> int:
        steps = 0
        carry = 0
        n = len(s) - 1
        for i in range(n, 0, -1):
            if int(s[i]) + carry == 1:
                carry = 1
                steps += 2
            else:
                steps += 1
        return steps + carry

        
```
```C++ []
class Solution {
public:
    int numSteps(string s) {
        int carry = 0, steps = 0;
        for(int i = s.length() - 1; i > 0; i--) {
            if((s[i] - '0') + carry == 1) {
                steps += 2;
                carry = 1;
            } else {
                steps++;
            }
        }
        return steps + carry;
    }
};

```

![upvote image.jpg](./images/1.jpeg)

