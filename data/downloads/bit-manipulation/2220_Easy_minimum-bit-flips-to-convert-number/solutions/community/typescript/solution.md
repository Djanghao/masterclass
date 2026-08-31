# not bit manipulation just plain string conversion

**Author:** phoenix_sr
**Votes:** 6
**Link:** [https://leetcode.com/problems/minimum-bit-flips-to-convert-number/solutions/5768554/](https://leetcode.com/problems/minimum-bit-flips-to-convert-number/solutions/5768554/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
we convert the bigger number to string and convert the smaller number to string and we compare the two strings and increment the counter where ever we find differences 
# Approach
<!-- Describe your approach to solving the problem. -->
normal to strig () method 
padStart will add leading zeroes to our string 
simply compare and increase count as needed 
return count 
# Complexity
- Time complexity:O(N)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:O(N)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```javascript []
var minBitFlips = function (start, goal) {
    let count = 0
    let s1
    let s2
    if (start > goal) {
        s1 = start.toString(2)
        s2 = goal.toString(2).padStart(s1.length, 0)
    }
    else {
        s1 = goal.toString(2)
        s2 = start.toString(2).padStart(s1.length, 0)
    }
    for (let i = 0; i < s1.length; i++) {
        if (s1[i] !== s2[i]) count++
    }
    return count
};
```
```python []
def min_bit_flips(start: int, goal: int) -> int:
    # XOR the numbers to find differing bits
    xor = start ^ goal
    
    # Count the number of 1s in the binary representation of xor
    count = bin(xor).count('1')
    
    return count

# Example usage
start = 29  # Example start
goal = 15   # Example goal
print(min_bit_flips(start, goal))  # Output the number of bit flips

```
```java []
public class BitFlips {
    public static int minBitFlips(int start, int goal) {
        // Convert start and goal to binary strings
        String s1 = Integer.toBinaryString(start);
        String s2 = Integer.toBinaryString(goal);
        
        // Pad the shorter binary string with leading zeros
        int maxLength = Math.max(s1.length(), s2.length());
        s1 = String.format("%" + maxLength + "s", s1).replace(' ', '0');
        s2 = String.format("%" + maxLength + "s", s2).replace(' ', '0');
        
        // Count the number of differing bits
        int count = 0;
        for (int i = 0; i < s1.length(); i++) {
            if (s1.charAt(i) != s2.charAt(i)) {
                count++;
            }
        }
        return count;
    }

    public static void main(String[] args) {
        int start = 29; // Example start
        int goal = 15;  // Example goal
        System.out.println(minBitFlips(start, goal)); // Output the number of bit flips
    }
}

```
```c []
#include <stdio.h>

int minBitFlips(int start, int goal) {
    int count = 0;
    int xor = start ^ goal; // XOR to find differing bits
    
    // Count the number of set bits in xor
    while (xor > 0) {
        count += xor & 1;
        xor >>= 1;
    }
    
    return count;
}

int main() {
    int start = 29; // Example start
    int goal = 15;  // Example goal
    printf("%d\
", minBitFlips(start, goal)); // Output the number of bit flips
    return 0;
}

```