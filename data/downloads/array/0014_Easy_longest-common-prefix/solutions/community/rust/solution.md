# ✅ Idiomatic and Elegant | Rust solution

**Author:** giluis
**Votes:** 54
**Link:** [https://leetcode.com/problems/longest-common-prefix/solutions/3244957/](https://leetcode.com/problems/longest-common-prefix/solutions/3244957/)

---

# Code
```
impl Solution {
    pub fn longest_common_prefix(input: Vec<String>) -> String {
        input.into_iter().reduce(|acc,cur|{
            acc.chars()
               .zip(cur.chars())
               .take_while(|(a,c)| a== c)
               .map(|(c,_)|c)
               .collect()
        }).unwrap()
    }
}
```

# Intuition
The longest common prefix (LCP) between `input[i+1]` and `input[i+2]` will always be as short or shorter than between `input[i]` and `input[i+1]`.
This means this problem (taking as example input `["flight","flow","flip"]`) can be solved like: `LCP("flat",LCP("flip",LCP("flow", "flight")))`. 
The recursive call of an operation on the previous result of that operation is a classic example of [Iterator::reduce](https://doc.rust-lang.org/std/iter/trait.Iterator.html#method.reduce)

# Approach
1. Apply reduce on the input
2. `acc` starts out as the first string in input.
3. `cur` starts out as the second string, and will become each string as we iterate through the input
4. zip `acc` and `cur`. This will create an iterator over tuples representing pairs of `acc[i]`, `cur[i]`. It will clip the longest one to the size of the shortest.
5. take as many chars as possible while they are equal in each zipped string
6. forget about one element of the tuple, in order to have an iterator over `char`
7. `collect` it into a `String` and return it from the closure. This will be `acc` argument in the next iteration
8. after the iteration, the final `acc` value will be returned. `unwrap` is necessary because `reduce` returns an `Option`
# Complexity
- Time complexity:
**O(n*s)**, where s is the shortest LCP so far.
- Space complexity:
**O(1)**
