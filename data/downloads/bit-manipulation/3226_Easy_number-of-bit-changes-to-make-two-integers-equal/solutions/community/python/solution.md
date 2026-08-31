# ✅Beats 100% -Explained with [ Video ] -C++/Java/Python/JS - Bit Manipulation - Explained in Detail

**Author:** millenium103
**Votes:** 32
**Link:** [https://leetcode.com/problems/number-of-bit-changes-to-make-two-integers-equal/solutions/5509343/](https://leetcode.com/problems/number-of-bit-changes-to-make-two-integers-equal/solutions/5509343/)

---

![Screenshot 2024-07-21 094758.png](./images/0.png)


# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
You are given two positive integers ( n ) and ( k ). The task is to determine the number of changes needed to make ( n ) equal to ( k ) by turning bits that are `1` in the binary representation of ( n ) to `0`. If it is impossible to make ( n ) equal to ( k ), return `-1`.

1. **Initial Check:** If ( n ) contains bits that ( k ) doesn't have, it is impossible to make ( n ) equal to ( k ). This can be checked using bitwise operations.
2. **Counting Bits:** Count the number of `1` bits in ( n ) and ( k ). The difference between these counts gives the number of changes needed.

# Approach
<!-- Describe your approach to solving the problem. -->
1. **Check Validity:** Use bitwise AND to ensure that ( n ) can be turned into ( k ) by checking if ( (n & k) == k ). If not, return `-1`.
2. **Count `1` Bits:** Count the number of `1` bits in the binary representation of ( n ) and ( k ).
3. **Calculate Changes:** Subtract the count of `1` bits in ( k ) from the count of `1` bits in ( n ) to get the number of changes needed.

# Complexity
- **Time Complexity:** ( O(log n + log k) ) since counting the bits involves iterating over the binary representation of ( n ) and ( k ).
- **Space Complexity:** ( O(1) ) since we use a constant amount of extra space.


# Step By Step Explanation

#### Step 1: Check Validity

- Perform bitwise AND operation: `n & k`. If the result is not equal to ( k ), it means ( n ) has bits set to `1` that cannot be matched to ( k ).


#### Step 2: Count `1` Bits in `n` and `k`

- Convert ( n ) and ( k ) to their binary string representations.
- Count the number of `1` bits in both representations.


#### Step 3: Calculate the Result

- The difference `res` represents the number of changes needed to turn ( n ) into ( k ).

# Example Walkthrough

#### Example 1
- **Input:** ( n = 13 ), ( k = 4 )
- **Binary Representations:** ( n = 1101_2 ), ( k = 0100_2 )
- **Step 1:** `13 & 4 == 4` (Valid)
- **Count `1` Bits:** ( n = 3 ) (`1101` has 3 ones), ( k = 1 ) (`0100` has 1 one)
- **Changes Needed:** ( 3 - 1 = 2 )
- **Output:** `2`

#### Example 2
- **Input:** ( n = 21 ), ( k = 21 )
- **Binary Representations:** ( n = 10101_2 ), ( k = 10101_2 )
- **Step 1:** `21 & 21 == 21` (Valid)
- **Count `1` Bits:** ( n = 3 ) (`10101` has 3 ones), ( k = 3 ) (`10101` has 3 ones)
- **Changes Needed:** ( 3 - 3 = 0 )
- **Output:** `0`

#### Example 3
- **Input:** ( n = 14 ), ( k = 13 )
- **Binary Representations:** ( n = 1110_2 ), ( k = 1101_2 )
- **Step 1:** `14 & 13 != 13` (Invalid)
- **Output:** `-1`

This explanation, along with the tables, should make it clear how the logic works and how to explain it to others.


# Code
```java []
class Solution {
    public int minChanges(int n, int k) {
        if ( (n & k) != k)
            return -1;
        
        int res = 0;
        
        for (char c : Integer.toBinaryString(n).toCharArray()) {
            res += c - '0';    
        }
        
        for (char c : Integer.toBinaryString(k).toCharArray()) {
            res -= c - '0';    
        }
        
        return res;
    }
}
```
```C++ []
class Solution {
public:
    int minChanges(int n, int k) {
        // Step 1: Check if it's possible to convert n to k
        if ((n & k) != k) {
            return -1;
        }
        
        // Step 2: Count the number of 1 bits in n and k
        int res = 0;
        
        string n_bin = bitset<32>(n).to_string();
        string k_bin = bitset<32>(k).to_string();
        
        for (char c : n_bin) {
            res += c - '0';
        }
        
        for (char c : k_bin) {
            res -= c - '0';
        }
        
        // Step 3: Return the number of changes needed
        return res;
    }
};
```
```Python []
class Solution(object):
    def minChanges(self, n, k):
        # Step 1: Check if it's possible to convert n to k
        if (n & k) != k:
            return -1
        
        # Step 2: Count the number of 1 bits in n and k
        res = 0
        
        for c in bin(n)[2:]:
            res += int(c)
        
        for c in bin(k)[2:]:
            res -= int(c)
        
        # Step 3: Return the number of changes needed
        return res
        
```
```JavaScript []
/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var minChanges = function(n, k) {
    // Step 1: Check if it's possible to convert n to k
    if ((n & k) !== k) {
        return -1;
    }
    
    // Step 2: Count the number of 1 bits in n and k
    let res = 0;
    
    for (let c of n.toString(2)) {
        res += parseInt(c);
    }
    
    for (let c of k.toString(2)) {
        res -= parseInt(c);
    }
    
    // Step 3: Return the number of changes needed
    return res;
};
```
![upvote.png](./images/1.png)
