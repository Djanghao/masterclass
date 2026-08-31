# Rust: Partial sum with XOR beats 100%

**Author:** kichooo
**Votes:** 0
**Link:** [https://leetcode.com/problems/can-make-palindrome-from-substring/solutions/4791853/](https://leetcode.com/problems/can-make-palindrome-from-substring/solutions/4791853/)

---

# Intuition

Because we can rearrange the characters, we just need to find out how many characters in a substring doesn't have a pair.

For every character in the main string, we calculate a partial sum. Instead of keeping a vector of chars, we can store the state in a single u32 - and then just xor it with its predecessor.

Then to get a u32 representing a difference between two indexes of the string, we can just again xor them. Then we just need to check whether we have enough k changes to make it into a palindrome.

Remember that palindromes with odd number of characters get one spare!

# Complexity
- Time complexity: $$O(n)$$

- Space complexity: $$O(n)$$

# Code
```
impl Solution {
    pub fn can_make_pali_queries(s: String, queries: Vec<Vec<i32>>) -> Vec<bool> {        
        let bytes = s.as_bytes();
        let mut bits = Vec::with_capacity(bytes.len());
        let mut last: u32 = 0;
        for c in bytes {
            bits.push(last);
            let a = 1 << (c - b'a');
            last ^= a;            
        }
        bits.push(last);

        queries
            .into_iter()
            .map(|q| {
                let left_bit = bits[q[0] as usize];
                let right_bit = bits[q[1] as usize + 1];
                let xored = left_bit ^ right_bit;
                let ones = xored.count_ones() as i32;
                ones <= (q[1] - q[0] + 1) % 2 + q[2] * 2 
            })
            .collect()
    }
}

```