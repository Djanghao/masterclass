# Rust - DFS Recursive

**Author:** idiotleon
**Votes:** 0
**Link:** [https://leetcode.com/problems/basic-calculator-iii/solutions/1649101/](https://leetcode.com/problems/basic-calculator-iii/solutions/1649101/)

---

Solution - [github](https://github.com/An7One/leetcode-solutions-rust-an7one/tree/main/src/leetcode/lvl5/lc0772)

<b>Problem List</b>
#ParsingString - [github](https://github.com/An7One/leetcode-problems-by-tag-an7one/blob/main/txt/by_data_structure/string/by_topic/parsing_string.txt)
#DFSRecursive - [github](https://github.com/An7One/leetcode-problems-by-tag-an7one/tree/main/txt/by_algorithm/search/depth_first_search)

```
use std::collections::VecDeque;
/// @author: Leon
/// https://leetcode.com/problems/basic-calculator-iii/
/// Time Complexity:    O(`_len_s`)
/// Space Compleixty:   O(`_len_s`)
/// Reference:
/// https://leetcode.com/problems/basic-calculator-iii/discuss/152092/O(n)-Java-Recursive-Simple-Solution/227715
impl Solution {
    const PAREN_OPEN: char = '(';
    const PAREN_CLOSED: char = ')';
    const SPACE: char = ' ';
    const SIGN_PLUS: char = '+';
    const SIGN_MINUS: char = '-';
    const SIGN_MULTIPLY: char = '*';
    const SIGN_DIVIDE: char = '/';
    pub fn calculate(s: String) -> i32 {
        let len_s: usize = s.len();
        let mut tokens: VecDeque<char> = {
            let mut tokens: VecDeque<char> = VecDeque::with_capacity(len_s);
            for ch in s.chars() {
                tokens.push_back(ch);
            }
            tokens.push_back(Self::SIGN_PLUS);
            tokens
        };
        Self::dfs(&mut tokens)
    }
    fn dfs(tokens: &mut VecDeque<char>) -> i32 {
        let mut op: char = Self::SIGN_PLUS;
        let mut num: i32 = 0;
        let mut sum: i32 = 0;
        let mut prev: i32 = 0;
        while let Some(ch) = tokens.pop_front() {
            match ch {
                '0'..='9' => {
                    num = num * 10 + (ch as i32 - '0' as i32);
                }
                Self::PAREN_OPEN => {
                    num = Self::dfs(tokens);
                }
                _ => {
                    match op {
                        Self::SIGN_PLUS => {
                            sum += prev;
                            prev = num;
                        }
                        Self::SIGN_MINUS => {
                            sum += prev;
                            prev = -num;
                        }
                        Self::SIGN_MULTIPLY => {
                            prev *= num;
                        }
                        Self::SIGN_DIVIDE => {
                            prev /= num;
                        }
                        _ => {}
                    }
                    if ch == Self::PAREN_CLOSED {
                        break;
                    }
                    op = ch;
                    num = 0;
                }
            }
        }
        sum + prev
    }
}
```