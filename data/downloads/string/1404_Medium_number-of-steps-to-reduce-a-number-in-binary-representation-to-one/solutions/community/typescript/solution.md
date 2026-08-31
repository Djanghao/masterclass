# Simulating the binary reduction process || Beats 100% uses with Java & C++ || python3 || typescript

**Author:** SanketSawant18
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-steps-to-reduce-a-number-in-binary-representation-to-one/solutions/5223965/](https://leetcode.com/problems/number-of-steps-to-reduce-a-number-in-binary-representation-to-one/solutions/5223965/)

---

# Approach
Simulating the binary reduction process

# Complexity
- Time complexity: O(n)

- Space complexity: O(1)

# Explanation
1. **Initialization:**

- steps to count the total steps needed.
- carry to manage the carry when adding 1.
2. **Loop through the String (Right to Left, Except the First Character):**

- If the current bit is 1:
    - No Carry: Two steps (add 1 to make it 0, then divide).
    - With Carry: One step (just divide, since it remains 1).
3. **If the current bit is 0:**
- No Carry: One step (just divide).
- With Carry: Two steps (turn 0 to 1, then divide).
4. **Handle the Most Significant Bit:**

- If there is a carry left after the loop, add one more step.

---

```java []
class Solution {
    public int numSteps(String s) {
        int steps = 0;
        int carry = 0;

        // Traverse from the last bit to the first bit (excluding the most significant bit initially)
        for (int i = s.length() - 1; i > 0; i--) {
            if (s.charAt(i) == '1') {
                if (carry == 0) {
                    // Encountering 1 with no carry, turn this 1 to 0 and propagate the carry.
                    steps += 2;  // 1 addition step to turn 1 into 0 and 1 division step for the next loop iteration.
                    carry = 1;
                } else {
                    // Encountering 1 with carry, it stays 1 and we only need a division step
                    steps += 1;
                }
            } else {  // s.charAt(i) == '0'
                if (carry == 0) {
                    // Encountering 0 with no carry, we only need a division step.
                    steps += 1;
                } else {
                    // Encountering 0 with carry, turn it into 1 and the carry stays.
                    steps += 2;  // 1 addition step to turn 0 into 1 and 1 division step.
                }
            }
        }

        // Finally, deal with the leftmost bit which is always 1
        if (carry == 1) {
            steps += 1;
        }

        return steps;
    }
}
```
```C++ []
#include <iostream>
#include <string>

class Solution {
public:
    int numSteps(const std::string& s) {
        int steps = 0;
        int carry = 0;
        
        // Traverse from the last bit to the first bit (excluding the first bit)
        for (int i = s.length() - 1; i > 0; --i) {
            if (s[i] == '1') {
                if (carry == 0) {
                    steps += 2;  // Add 1 (turn to 0) + divide
                    carry = 1;
                } else {
                    steps += 1;  // Just divide
                }
            } else {  // s[i] == '0'
                if (carry == 0) {
                    steps += 1;  // Just divide
                } else {
                    steps += 2;  // Turn to 1 + divide
                }
            }
        }
        
        // Handle the most significant bit (always '1')
        if (carry == 1) {
            steps += 1;
        }
        
        return steps;
    }
};

```
```python3 []
class Solution:
    def numSteps(self, s: str) -> int:
        steps = 0
        carry = 0
        # Traverse from the last bit to the first bit
        for i in range(len(s) - 1, 0, -1):
            if s[i] == '1':
                if carry == 0:
                    # Encountering 1 with no carry, we need to turn this 1 to 0 and propagate the carry.
                    steps += 2  # 1 addition step to turn 1 into 0 and 1 division step for the next loop iteration.
                    carry = 1
                else:
                    # Encountering 1 with carry, it stays 1 and we only need a division step
                    steps += 1
            else:  # s[i] == '0'
                if carry == 0:
                    # Encountering 0 with no carry, we only need a division step.
                    steps += 1
                else:
                    # Encountering 0 with carry, turn it into 1 and the carry stays.
                    steps += 2  # 1 addition step to turn 0 into 1 and 1 division step.
        
        # Finally, deal with the leftmost bit which is always 1
        if carry == 1:
            steps += 1
        
        return steps
```
```Typescript []
function numSteps(s: string): number {
    let steps = 0;
    let carry = 0;

    // Traverse from the last bit to the first bit (excluding the most significant bit initially)
    for (let i = s.length - 1; i > 0; i--) {
        if (s.charAt(i) === '1') {
            if (carry === 0) {
                steps += 2;  // Add 1 (turn to 0) + divide
                carry = 1;
            } else {
                steps += 1;  // Just divide
            }
        } else {  // s.charAt(i) === '0'
            if (carry === 0) {
                steps += 1;  // Just divide
            } else {
                steps += 2;  // Turn to 1 + divide
            }
        }
    }

    // Handle the most significant bit (always '1')
    if (carry === 1) {
        steps += 1;
    }

    return steps;
}
```
