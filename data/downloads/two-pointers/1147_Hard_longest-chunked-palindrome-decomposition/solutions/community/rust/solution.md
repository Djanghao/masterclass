# rust 0ms double 100% solution, time complexity O(n), with explain

**Author:** sovlynn
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-chunked-palindrome-decomposition/solutions/5118520/](https://leetcode.com/problems/longest-chunked-palindrome-decomposition/solutions/5118520/)

---


![image.png](./images/0.png)
# Intuition
The best way is getting two pointer, one from front to end, another from back to end. Then compare the string they have scanned.

Typically each compare will cost $O(n)$ time, and that leaves total runtime $O(n^2)$. What if you can find a structure that can conviently compare two string, one constructed from start to end, another constructed from back to start?

Use [hash](https://leetcode.com/problems/find-substring-with-given-hash-value/description/).

This hash in problem 2156 can be constucted from start or from end. Each addition will take $O(1)$ time. That leaves total time $O(n)$

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(1)$$ if you rewrite recursion to iteration.

# Code
```
impl Solution {
    const P:usize=29usize;
    const MOD:usize=1000000007usize;
    pub fn longest_decomposition(text: String) -> i32 {
        Self::helper(text.as_bytes(), 0)
    }
    fn helper(text: &[u8], mut i:usize)->i32{
        if i>(text.len()-1)/2{
            0
        }else{
            let mut j=text.len()-1-i;
            let J=j;
            let mut l=0;
            let mut r=0;
            let mut s=1;
            while i<=J{
                l+=(text[i]-b'a')as usize*s;
                l%=Self::MOD;
                s=(s*Self::P)%Self::MOD;
                r=(r*Self::P)%Self::MOD;
                r+=(text[j]-b'a')as usize;
                r%=Self::MOD;
                if l==r{
                    break;
                }
                i+=1;
                j-=1;
            }
            (if i==J{1}else{2})+Self::helper(text, i+1)
        }
    }
}
```