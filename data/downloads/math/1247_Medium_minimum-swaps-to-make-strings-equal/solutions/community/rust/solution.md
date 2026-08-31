# rust beats 100%

**Author:** sovlynn
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-swaps-to-make-strings-equal/solutions/4769430/](https://leetcode.com/problems/minimum-swaps-to-make-strings-equal/solutions/4769430/)

---

# Intuition
I wrote this last night and I cannot understand it now.


# Complexity
- Time complexity:
O(n)

- Space complexity:
O(1)

# Code
```
impl Solution {
    pub fn minimum_swap(s1: String, s2: String) -> i32 {
        if s1.as_bytes()
        .iter()
        .chain(s2.as_bytes().iter())
        .filter(|x|**x==b'x')
        .count()%2!=0{-1}
        else{
            let (mut c1, mut c2)=(0, 0);
            s1.as_bytes()
            .iter()
            .zip(s2.as_bytes().iter())
            .filter(|x|x.0!=x.1)
            .inspect(|x|if *x.0==b'x'{c1+=1;}else{c2+=1;}).count();
            (c1+c2)/2+c1%2
        }
    }
}
```