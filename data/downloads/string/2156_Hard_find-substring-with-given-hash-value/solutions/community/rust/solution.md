# rust 6ms sulotion with explain

**Author:** sovlynn
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-substring-with-given-hash-value/solutions/5108346/](https://leetcode.com/problems/find-substring-with-given-hash-value/solutions/5108346/)

---

![image.png](./images/0.png)
# Intuition
$$hash(s[i..i+k])=hash(s[i+1..i+1+k])*power+s[i]-s[j]*power^k$$

Just calculate from back to beginning.


# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(1)$$

# Code
```
impl Solution {
    pub fn sub_str_hash(s: String, power: i32, modulo: i32, k: i32, hash_value: i32) -> String {
        let modulo=modulo as u64;
        let power=power as u64;
        let k=k as usize;
        let mut hash_value=hash_value as u64;
        let s=s.as_bytes();

        let mut tmp=0;
        let mut r=1;
        let mut res=s.len();
        for i in (s.len()-k)..s.len(){
            tmp+=(s[i]-96) as u64 * r;
            tmp%=modulo;
            r=(r*power)%modulo;
        }
        if tmp==hash_value{res=s.len()-k;}
        for i in (0..(s.len()-k)).rev(){
            tmp=tmp*power%modulo+modulo;
            tmp-=((s[i+k]-96) as u64*r)%modulo;
            tmp=(tmp+(s[i]-96) as u64)%modulo;
            if tmp==hash_value{res=i;}
        }
        if res<=s.len()-k{
            String::from_utf8(s[res..res+k].to_vec()).unwrap()
        }else{
            "".to_string()
        }
    }
}
```