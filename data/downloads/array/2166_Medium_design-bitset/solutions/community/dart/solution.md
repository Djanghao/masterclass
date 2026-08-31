# [Dart] O(1) & Clean code & Explained

**Author:** shinewanna97
**Votes:** 0
**Link:** [https://leetcode.com/problems/design-bitset/solutions/3276706/](https://leetcode.com/problems/design-bitset/solutions/3276706/)

---

# Intuition
As we found any functions could call 10^5 times except toString(). Should O(1) to all funtions except toString().


# Code
```
class Bitset {
  late List<int> bits;
  bool isFlip = false;
  int onesCount = 0;

  Bitset(int size) {
    bits = List.filled(size, 0);
  }

  // Set 1 and increase count. If flipped, set 0
  void fix(int idx) {
    if (!isFlip) {
      if (bits[idx] == 0) {
        bits[idx] = 1;
        onesCount++;
      }
    } else {
      if (bits[idx] == 1) {
        bits[idx] = 0;
        onesCount++;
      }
    }
  }

  // Set 0 and decrease count. If flipped, set 1
  void unfix(int idx) {
    if (!isFlip) {
      if (bits[idx] == 1) {
        bits[idx] = 0;
        onesCount--;
      }
    } else {
      if (bits[idx] == 0) {
        bits[idx] = 1;
        onesCount--;
      }
    }
  }

  // Flip, update onesCount
  void flip() {
    isFlip = !isFlip;
    onesCount = bits.length - onesCount;
  }


  bool all() {
    return onesCount == bits.length;
  }

  bool one() {
    return onesCount >= 1;
  }

  int count() {
    return onesCount;
  }

  String toString() {
    if (!isFlip) {
      return bits.join();
    } else {
      String s = '';
      for (var e in bits) {
        s += e == 0 ? '1' : '0';
      }
      return s;
    }
  }
}

/**
 * Your Bitset object will be instantiated and called as such:
 * Bitset obj = Bitset(size);
 * obj.fix(idx);
 * obj.unfix(idx);
 * obj.flip();
 * bool param4 = obj.all();
 * bool param5 = obj.one();
 * int param6 = obj.count();
 * String param7 = obj.toString();
 */
```