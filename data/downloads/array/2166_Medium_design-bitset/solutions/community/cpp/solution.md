# The easiest C++ Code using two strings

**Author:** Uncle_John
**Votes:** 13
**Link:** [https://leetcode.com/problems/design-bitset/solutions/1748967/](https://leetcode.com/problems/design-bitset/solutions/1748967/)

---

Store both the bitset and inverted bitset as string. Keep updating both in each operation.
Also store a counter to keep track of set bits.
```
class Bitset {
    string bitset, inv_bitset;
    int sz;
    int counter;
public:
    Bitset(int size) {
        for(int i = 0; i < size; i++) {
            bitset.push_back('0');
            inv_bitset.push_back('1');
        }
        sz = size;
        counter  = 0;
    }
    
    void fix(int idx) {
        if(bitset[idx] == '0') counter++;
        bitset[idx] = '1';
        inv_bitset[idx] = '0';
    }
    
    void unfix(int idx) {
        if(bitset[idx] == '1') counter--;
        bitset[idx] = '0';
        inv_bitset[idx] = '1';
    }
    
    void flip() {
        swap(bitset, inv_bitset);
        counter = sz - counter;
    }
    
    bool all() {
        return counter == sz;
    }
    
    bool one() {
        return counter > 0;
    }
    
    int count() {
        return counter;
    }
    
    string toString() {
        return bitset;
    }
};
```