# Rust | Two Pointers and Stack | With Comments

**Author:** wallicent
**Votes:** 6
**Link:** [https://leetcode.com/problems/removing-stars-from-a-string/solutions/2494307/](https://leetcode.com/problems/removing-stars-from-a-string/solutions/2494307/)

---

EDIT 2022-08-30: Thanks to the brilliant suggestion by [BigMih](https://leetcode.com/BigMih/), another revised solution, using a `String` as the stack directly:

**Revised Solution 2**

```
impl Solution {
    pub fn remove_stars(s: String) -> String {
        s.chars().fold(String::new(), |mut rez, c| { 
            match c {
                '*' => { rez.pop(); },
                _ => rez.push(c),
            }; 
            rez
        })
    }
}
```

EDIT 2022-08-29: I had to come back and post a better solution. This just shows how a high-pressure situation like a contest can impair your thinking. During the contest, I switched into "C++ STL stack mode", and I thought that I had to pop the elements of the stack and reverse them to collect the result. But in Rust, we use `Vec`s as stacks, and then we can just collect the `Vec` from left to right at the end to a string. With some practice I will hopefully learn to relax more during contests.

**Revised Solution**

```
impl Solution {
    pub fn remove_stars(s: String) -> String {
        s.chars().fold(vec![], |mut v, c| { 
            match c {
                '*' => { v.pop(); },
                _ => v.push(c),
            }; 
            v
        }).into_iter().collect()
    }
}
```

**Original Post**

This is my unaltered submission to the 2022-08-28 Weekly Contest 308. While a stack could easily be used here, I didn't like the idea of reversing it at the end. When I think about it now, a `VecDeque` would have been a nice choice. But anyway... I allocate a result buffer `rez` of the same length as the input, and then I use a two pointers approach to push characters to `rez`, or to pop the last one off if it's an asterisk. At the end, I `collect` the remaining characters to a result `String`. As usual in LeetCode problems input is ASCII, so I use `as_bytes()`, since each character is one byte.

Time: O(n), we have to visit each character in `s` once.
Space: O(n) for result buffer

Comment: Easy for a "medium" problem, I hesitated a bit too much between using a stack or not. Converting input from LeetCode's C-friendly parameter types is always a bit of a hassle.

```
impl Solution {
    pub fn remove_stars(s: String) -> String {
        let s = s.as_bytes();
        let mut rez = vec![0; s.len()];
        let mut i = 0;
        for b in s {
            match *b {
                b'*' => i -= 1,
                c => {
                    rez[i] = c;
                    i += 1;
                }
            }
        }
        rez.into_iter().take(i).map(|b| b as char).collect()
    }
}
```