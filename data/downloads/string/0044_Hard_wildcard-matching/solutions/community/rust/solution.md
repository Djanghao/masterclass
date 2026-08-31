# My attempt at solving this problem, 0ms

**Author:** couldnt_care_less
**Votes:** 0
**Link:** [https://leetcode.com/problems/wildcard-matching/solutions/5881673/](https://leetcode.com/problems/wildcard-matching/solutions/5881673/)

---

# Intuition
Take the normal byte by byte matching with a loop, and expand on it

# Approach
Match a byte in s to a byte in p, account for ? and *. Since it's impossible to know how many bytes a * would end up representing, every time it's possible to move on to the next byte in p from a *, the previous state is stored. If it turns out that the strings don't match, the previous state is restored, with * representing one more byte in s now. consecutive *s in p are treated like a single *. If there is no previous state to go back to, and the strings don't match, returns false. It can probably be improved further, but it's good enough for me. Someone has probably done it better already anyway.

# Complexity
- Time complexity:
Hard to estimate, it depend on a number of non-consecutive *s . Something like $$O(n + l^m)$$, where m is a number of non-consecutive *s in p and l is an average number (geometric mean) of substrings a * can represent. Though on average it should be more like $$O(n)$$

- Space complexity:
$$O(n + m)$$, where m is a number of non-consecutive *s in p

# Code
```rust []
impl Solution {
    pub fn is_match(s: String, p: String) -> bool {
        let s_bytes: Vec<u8> = s.bytes().collect();
        let mut p_bytes: Vec<u8> = p.bytes().collect();
        let s_len = s.len();
        let p_len = p.len();
        // if the length aren't equal and there is no * in p they cannot match
        if p_len != s_len && !p_bytes.contains(&42) {
            return false;
        }
        // if p consists only of stars it matches everything
        if p_bytes.iter().filter(|&byte| *byte != 42).count() == 0 {
            return true;
        }
        let mut pointer_array: Vec<isize> = vec![0];
        let mut pointer = 0;
        let mut s_pointer_array: Vec<isize> = vec![0];
        let mut s_pointer = 0;
        while s_pointer_array[s_pointer] < s_len as isize {
            // if pointer carried over the last element in p, it mast not match, reset to the previous pointers
            if pointer_array[pointer] as usize == p_len {
                if pointer > 0 {
                    pointer_array.pop();
                    pointer -= 1;
                    s_pointer_array.pop();
                    s_pointer -= 1;
                }
                else {
                    return false;
                }
            }
            // check if bytes are equal, and p isn't ? or *
            if s_bytes[s_pointer_array[s_pointer] as usize] != p_bytes[pointer_array[pointer] as usize] && p_bytes[pointer_array[pointer] as usize] != 63 && p_bytes[pointer_array[pointer] as usize] != 42 {
                // if not, and is posible to reset - reset
                if pointer > 0 {
                    pointer_array.pop();
                    pointer -= 1;
                    s_pointer_array.pop();
                    s_pointer -= 1;
                }
                // else strings must not match
                else {
                    return false;
                }
            }
            // if the current byte in p is a *
            if p_bytes[pointer_array[pointer] as usize] == 42 {
                // if the current byte in s is the last one and the current byte in p is the last one they match
                if s_pointer_array[s_pointer] as usize == s_len - 1 && pointer_array[pointer] as usize == p_len - 1 {
                    return true;
                }
                // if not possible to move on from a * decrement pointer for p
                if pointer_array[pointer] + 1 < p_len as isize && p_bytes[(pointer_array[pointer] + 1) as usize] != s_bytes[s_pointer_array[s_pointer] as usize] && p_bytes[(pointer_array[pointer] + 1) as usize] != 42 && p_bytes[(pointer_array[pointer] + 1) as usize] != 63 || pointer_array[pointer] as usize == p_len - 1 {
                    pointer_array[pointer] -= 1;
                }
                // if possible to move on from a *, save the pointers and do so
                else if pointer_array[pointer] + 1 < p_len as isize && (p_bytes[(pointer_array[pointer] + 1) as usize] == s_bytes[s_pointer_array[s_pointer] as usize] || p_bytes[(pointer_array[pointer] + 1) as usize] == 63) {
                    pointer_array.push(pointer_array[pointer]);
                    s_pointer_array.push(s_pointer_array[s_pointer]);
                    s_pointer_array[s_pointer] += 1;
                    pointer += 1;
                    pointer_array[pointer] += 1;
                    s_pointer += 1;
                }
                // if the current byte is a star and the next one is as well, decrement pointer for s
                else if pointer_array[pointer] + 1 < p_len as isize && p_bytes[(pointer_array[pointer] + 1) as usize] == 42 && p_bytes[pointer_array[pointer] as usize] == 42 {
                    s_pointer_array[s_pointer] -= 1;
                }
            }
            // increment pointers
            pointer_array[pointer] += 1;
            s_pointer_array[s_pointer] += 1;
        }
        // if the loop ended and there is more p left, and it's not all stars - strings don't match
        if s_pointer_array[s_pointer] as usize == s_len && (pointer_array[pointer] as usize) < p_len && p_bytes.split_off(pointer_array[pointer] as usize).iter().filter(|&byte| *byte != 42).count() != 0 {
            return false;
        }
        // if reached here - strings match
        true
    }
}
```