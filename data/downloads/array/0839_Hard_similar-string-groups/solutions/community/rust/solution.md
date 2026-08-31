# Rust, union-find, 3ms

**Author:** dfomin
**Votes:** 1
**Link:** [https://leetcode.com/problems/similar-string-groups/solutions/3463815/](https://leetcode.com/problems/similar-string-groups/solutions/3463815/)

---

# Intuition
Just compare each pair of words and calculate number of components (if words are "similar" there is a connection) using union-find.

# Code
```
enum SwappingChars {
    Idle,
    Swapping(char, char),
    Swapped,
}

impl Solution {
    pub fn num_similar_groups(strs: Vec<String>) -> i32 {
        let mut components: Vec<usize> = (0..strs.len()).collect();
        let mut result = strs.len() as i32;

        for i in 0..strs.len() {
            for j in i + 1..strs.len() {
                if Solution::is_equal(&strs[i], &strs[j]) {
                    Solution::union(i, j, &mut components, &mut result);
                    if result == 1 {
                        return result;
                    }
                }
            }
        }

        return result;
    }

    fn is_equal(s1: &str, s2: &str) -> bool {
        let mut state = SwappingChars::Idle;
        let chars1 = s1.chars();
        let chars2 = s2.chars();
        for (ch1, ch2) in chars1.zip(chars2) {
            if ch1 != ch2 {
                match state {
                    SwappingChars::Idle => {
                        state = SwappingChars::Swapping(ch1, ch2);
                    },
                    SwappingChars::Swapping(new_ch1, new_ch2) => {
                        if new_ch1 == ch2 && new_ch2 == ch1 {
                            state = SwappingChars::Swapped;
                        } else {
                            return false;
                        }
                    },
                    Swapped => return false,
                }
            }
        }

        return !matches!(state, SwappingChars::Swapping(_, _));
    }

    fn union(n1: usize, n2: usize, components: &mut Vec<usize>, result: &mut i32) {
        let p1 = Solution::find(n1, components);
        let p2 = Solution::find(n2, components);
        if p1 != p2 {
            components[p2] = p1;
            *result -= 1;
        }
    }

    fn find(n: usize, components: &mut Vec<usize>) -> usize {
        let mut p = components[n];
        if p != n {
            p = Solution::find(p, components);
            components[n] = p;
        }

        return p;
    }
}
```