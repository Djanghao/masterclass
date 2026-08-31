# [go] Bitset implementation + detailed explanation

**Author:** luigitni
**Votes:** 4
**Link:** [https://leetcode.com/problems/design-hashset/solutions/3580180/](https://leetcode.com/problems/design-hashset/solutions/3580180/)

---

# Intuition

You can think of a set of ints as an array of bits.

To add an int `n` to the set, we set the bit at position `n` to 1.
To remove an int `n` from the set, we set the nth bit to 0.

A byte is a set of 8 bits, which means that to represent a set of 1M int we need 100000 / 8 = 125k bytes.

To visualise, suppose we only consider ints from 0 to 10.
This is our set:

```
 0 1 2 3 4 5 6 7   8 9 10   <--- n
[0 0 0 0 0 0 0 0 | 0 0 0]
 ----------------
  1 byte = 8 bits
```

To add the number `3` to our set, we have to first identify which byte holds the bit corresponding to 3.
Thats done by doing `3 / 8 = 0`. <-`3` is found in the first byte.
Then, within that byte, we need to identify which bit to set.
That's done by using modulo: `3 % 8 = 3`.

Thus we need to set bit 3 of byte 0 to 1.
Using bits manipulations, that's done by `OR`-ring the 3rd bit:

```go
v |= 1 << bit
```

Once that's understood, removing and checking for existence are implemented using the other bitwise operations.


# Complexity
- Time complexity:
O(1)

- Space complexity:
125KB O(1)

This is wasteful in terms of space. We can dynamically allocate the array if the number to add to the set is larger than the current byte array size but it complicates the code a little bit and incurs an extra cost when expanding the array.

# Code
```
type MyHashSet struct {
    set [125001]byte
}


func Constructor() MyHashSet {
    return MyHashSet{}
}


func (this *MyHashSet) Add(key int)  {
    // find the byte to store the key
    byt := key / 8
    bit := key % 8
    this.set[byt] |= 1 << bit
}


func (this *MyHashSet) Remove(key int)  {
    byt := key / 8
    bit := key % 8
    this.set[byt] &= ^(1 << bit)
}


func (this *MyHashSet) Contains(key int) bool {
    byt := key / 8
    bit := key % 8
    v := this.set[byt]
    return v & (1 << bit) != 0
}


/**
 * Your MyHashSet object will be instantiated and called as such:
 * obj := Constructor();
 * obj.Add(key);
 * obj.Remove(key);
 * param_3 := obj.Contains(key);
 */
```