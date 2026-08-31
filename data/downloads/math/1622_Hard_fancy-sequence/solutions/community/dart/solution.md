# 🔥🔥The fastest in dart🔥🔥

**Author:** ahmed___
**Votes:** 0
**Link:** [https://leetcode.com/problems/fancy-sequence/solutions/3867632/](https://leetcode.com/problems/fancy-sequence/solutions/3867632/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
Instance Variables:

sequence: This list holds the modified sequence of integers. Each value is modified by the addInc and multInc values before being stored in this sequence.

addInc: This variable holds the cumulative increment that needs to be added to each appended value in the sequence.

multInc: This variable holds the cumulative multiplier that needs to be applied to each appended value in the sequence.

Constructor:

The constructor initializes the Fancy object. It sets the initial values of the instance variables. At the start, the sequence is empty, and addInc is 0, and multInc is 1.
Methods:

append(int val): Appends a value to the sequence. The value is adjusted by subtracting addInc and then dividing by multInc to handle the cumulative effects of the operations. The adjusted value is then stored in the sequence list.

addAll(int inc): Increments the addInc value by the specified constant. This operation doesn't affect the existing values in the sequence. It accumulates the addition operation to be applied to future appended values.

multAll(int m): Multiplies both the addInc and multInc values by the specified constant. This operation doesn't affect the existing values in the sequence. It accumulates the multiplication operation to be applied to future appended values.

getIndex(int idx): Retrieves the value at the specified index from the sequence. The value is adjusted by multiplying with multInc and then adding addInc to handle the cumulative effects of the operations.

Helper Methods:

_modInverse(int x): This method calculates the modular inverse of a given value using Fermat's Little Theorem.

_modPow(int base, int exponent): This method calculates modular exponentiation of a given base and exponent.
# Complexity
- Time complexity:
 O(1)
- Space complexity:
O(n)
# Code
```
class Fancy {
  static const int MOD = 1000000007;

  List<int> sequence=[];
  int addInc=0;
  int multInc=0;

  Fancy() {
    sequence = [];
    addInc = 0;
    multInc = 1;
  }

  void append(int val) {
    val = ((val - addInc) * _modInverse(multInc)) % MOD;
    sequence.add(val);
  }

  void addAll(int inc) {
    addInc = (addInc + inc) % MOD;
  }

  void multAll(int m) {
    addInc = (addInc * m) % MOD;
    multInc = (multInc * m) % MOD;
  }

  int getIndex(int idx) {
    if (idx >= sequence.length) {
      return -1;
    }
    return (sequence[idx] * multInc + addInc) % MOD;
  }

  int _modInverse(int x) {
    // Calculate modular inverse using Fermat's Little Theorem
    return _modPow(x, MOD - 2);
  }

  int _modPow(int base, int exponent) {
    if (exponent == 0) {
      return 1;
    }
    if (exponent % 2 == 1) {
      return (base * _modPow(base, exponent - 1)) % MOD;
    }
    int half = _modPow(base, exponent ~/ 2);
    return (half * half) % MOD;
  }
}
/**
 * Your Fancy object will be instantiated and called as such:
 * Fancy obj = Fancy();
 * obj.append(val);
 * obj.addAll(inc);
 * obj.multAll(m);
 * int param4 = obj.getIndex(idx);
 */
```