# Solution

**Author:** prabex
**Votes:** 0
**Link:** [https://leetcode.com/problems/fancy-sequence/solutions/4956203/](https://leetcode.com/problems/fancy-sequence/solutions/4956203/)

---

# Intuition
We can maintain the sequence of integers using a list. However, to handle the operations efficiently, we need to apply modular arithmetic to prevent overflow and keep the values within the desired range. Additionally, we'll need to utilize the properties of modular arithmetic to efficiently implement the multiplication operation.

# Approach
1. **Initialization:** We initialize the `Fancy` object with an empty sequence, and initialize `add` and `mult` variables to keep track of the current values for addition and multiplication operations.

2. **Append Operation:** When appending a value, we first adjust the value by subtracting `add` to neutralize the effect of previous additions, and then we divide by `mult` to neutralize the effect of previous multiplications. We then add this adjusted value to the sequence.

3. **AddAll Operation:** This operation simply updates the `add` variable by adding the given value, modulo the chosen constant `MOD`.

4. **MultAll Operation:** This operation updates both the `add` and `mult` variables by multiplying them with the given value, again modulo `MOD`.

5. **GetIndex Operation:** To get the value at a specific index, we retrieve the value from the sequence, adjust it by the current `add` and `mult` values, and return the result modulo` MOD`.

# Complexity
- **Time complexity:** The time complexity of each operation (`Append, AddAll, MultAll, GetIndex`) is constant, as each operation involves only a few arithmetic operations and list manipulation. Hence, the overall time complexity is constant.
- **Space complexity:** The space complexity is $O(n)$,where n is the number of operations performed, as we store the sequence of integers in a list.

# Code
```
public class Fancy {
    private const int MOD = 1000000007;
    private List<long> sequence;
    private long add;
    private long mult;

    public Fancy() {
        sequence = new List<long>();
        add = 0;
        mult = 1;
    }
    
    public void Append(int val) {
        long newVal = (val - add + MOD) % MOD;
        newVal = (newVal * Inverse(mult)) % MOD;
        sequence.Add(newVal);
    }
    
    public void AddAll(int inc) {
        add = (add + inc) % MOD;
    }
    
    public void MultAll(int m) {
        add = (add * m) % MOD;
        mult = (mult * m) % MOD;
    }
    
    public int GetIndex(int idx) {
        if (idx >= sequence.Count)
            return -1;
        
        long val = (sequence[idx] * mult) % MOD;
        val = (val + add) % MOD;
        return (int)val;
    }

    private long Inverse(long x) {
        long result = 1;
        long power = MOD - 2;
        while (power > 0) {
            if (power % 2 == 1) {
                result = (result * x) % MOD;
            }
            x = (x * x) % MOD;
            power /= 2;
        }
        return result;
    }
}
```