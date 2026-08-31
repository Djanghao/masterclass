# 0ms rust one long line

**Author:** rcode0
**Votes:** 1
**Link:** [https://leetcode.com/problems/shortest-distance-to-target-string-in-a-circular-array/solutions/2974918/](https://leetcode.com/problems/shortest-distance-to-target-string-in-a-circular-array/solutions/2974918/)

---

```
impl Solution {
    pub fn closet_target(words: Vec<String>, t: String, s: i32) -> i32 {
        words[s as usize..].iter().chain(words.iter()).zip(words[..=s as usize].iter().rev().chain(words.iter().rev())).position(|(s1,s2)|s1==&t||s2==&t).map_or(-1,|x| x as i32)
    }
}
```

Given `[A,B,C,D,E]`, where `target = A` and `start = C`, we:
1. Generate an iterator moving to the right, yielding: `[C,D,E,A,B,C,D,E]`:
```
words[s as usize..].iter().chain(words.iter())
```
2. Generate an iterator moving to the left, yielding: `[C,B,A,E,D,C,B,A]`:
```
words[..=s as usize].iter().rev().chain(words.iter().rev())
```
3. zip them together to yield the sequence `[(C,C),(D,B),(E,A),(A,E),(B,D),...]`:
```
words[s as usize..].iter().chain(words.iter())
.zip(
    words[..=s as usize].iter().rev().chain(words.iter().rev())
)
```
4. Count how many pairs we have to get through before we find the target:
```
...
.position(|(s1,s2)|s1==&t||s2==&t)
```
5. Finally, account for the case that we don't find anything with:
```
...
.map_or(-1,|x| x as i32)
```