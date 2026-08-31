# Rust one liner popcnt solution

**Author:** user0844gX
**Votes:** 10
**Link:** [https://leetcode.com/problems/number-of-1-bits/solutions/1648157/](https://leetcode.com/problems/number-of-1-bits/solutions/1648157/)

---

This problem is equivelent to the famous popcnt instruction, e.g count the number of ones in a binary number. This is a realitivley foundamental operation and has hardware support on (most modern) cpus.

The promissed one line solution comes as a standard function for i32 

```rust
pub fn hammingWeight (n: u32) -> i32 {
        n.count_ones() as i32
}
```

If we look at the diassembly we see that this is acutally only rellying on a single popcnt instruction and some movs.  This is assembly taken from this [godbolt](https://godbolt.org/z/WfYE8aYnv) session with the rust 1.57 compiler targetting haswell cpus.

```asm
example::hammingWeight:
        push    rax
        popcnt  eax, edi ; HERE is the main show
        mov     dword ptr [rsp + 4], eax
        mov     eax, dword ptr [rsp + 4]
        mov     dword ptr [rsp], eax
        mov     eax, dword ptr [rsp]
        pop     rcx
        ret
```
