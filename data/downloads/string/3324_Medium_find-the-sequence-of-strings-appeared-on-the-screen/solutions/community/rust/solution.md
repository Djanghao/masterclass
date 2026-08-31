# Backwards Approach

**Author:** sunnyb179
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-the-sequence-of-strings-appeared-on-the-screen/solutions/5968931/](https://leetcode.com/problems/find-the-sequence-of-strings-appeared-on-the-screen/solutions/5968931/)

---

# Approach
This approach start with pushing the result first and working backwards. Doing it backwards do not need a current to hold, which saves memory.

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->



# Code
```rust []
impl Solution {
    pub fn string_sequence(mut target: String) -> Vec<String> {
        let mut result: Vec<String> = Vec::new();
        while target.len() != 0 {
            if !target.ends_with('a') {
                result.insert(0, target.clone());
                if let Some(last_char) = target.pop() {
                    let new_char = (last_char as u8 -1) as char;
                    target.push(new_char);
                }
            } else {
                result.insert(0, target.clone());
                target.pop();
            }
        }
        result
    }
}
```