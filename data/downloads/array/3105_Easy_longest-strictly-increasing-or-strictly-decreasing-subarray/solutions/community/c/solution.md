# C++ || short code and just a single loop || O(n) time

**Author:** heder
**Votes:** 20
**Link:** [https://leetcode.com/problems/longest-strictly-increasing-or-strictly-decreasing-subarray/solutions/4989720/](https://leetcode.com/problems/longest-strictly-increasing-or-strictly-decreasing-subarray/solutions/4989720/)

---

# Approach 1: single loop, ternary operators
We keep track of strictly incremeting and strictly decrementing sequences independently. If either condition is violated we reset ```inc``` and ```dec``` to 1.

```cpp
    int longestMonotonicSubarray(const vector<int>& nums) {
        int ans = 1;
        for (int inc = 1, dec = 1, i = 1; i < ssize(nums); ++i) {
            inc = nums[i - 1] < nums[i] ? inc + 1 : 1;
            dec = nums[i - 1] > nums[i] ? dec + 1 : 1;
            ans = max({ans, inc, dec});
        }
        return ans;
    }
```

**Complexity Analysis**
Let $$n$$ be the length of the input array ```nums``` then the 

* Time complexity is $$O(n)$$ as we are doing a single scan over the input, and the

* Space comlexity is $$O(1)$$ as all we need is 4 integers to keep track of state.

**Looking at the assembly code**
It's intersting to look at the generated assembly code for this problem: https://godbolt.org/z/nxq33oqaM

```inc``` (```r8d```) and ```dec``` (```r9d```) are unconditionally incremented and then reset if needed. clang also doesn't generated a branch for this except the main loop and an early jump if the input is too short. All the rest are just conditional moves. ```esi``` is just used to hold the 1 to reset ```inc``` and ```dec``` if needed.

```asm
longestMonotonicSubarray(std::vector<int, std::allocator<int> > const&): # @longestMonotonicSubarray(std::vector<int, std::allocator<int> > const&)
        mov     rcx, qword ptr [rdi]
        mov     rdx, qword ptr [rdi + 8]
        sub     rdx, rcx
        sar     rdx, 2
        mov     eax, 1
        cmp     rdx, 2
        jl      .LBB0_3
        mov     esi, 1
        mov     edi, 1
        mov     r8d, 1
        mov     r9d, 1
.LBB0_2:                                # =>This Inner Loop Header: Depth=1
        mov     r10d, dword ptr [rcx + 4*rdi - 4]
        inc     r8d
        inc     r9d
        cmp     r10d, dword ptr [rcx + 4*rdi]
        cmovge  r8d, esi
        cmovle  r9d, esi
        cmp     eax, r8d
        cmovle  eax, r8d
        cmp     eax, r9d
        cmovl   eax, r9d
        inc     rdi
        cmp     rdx, rdi
        jne     .LBB0_2
.LBB0_3:
        ret
```

_As always: Feedback, questions, and comments are welcome. Leaving an up-vote sparks joy! :)_

**p.s. Join us on the [LeetCode The Hard Way Discord Server](https://discord.gg/hFUyVyWy2E)!**
