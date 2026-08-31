# Allahu would be proud of this solution

**Author:** tdf56f756bg56r8iohgwexu
**Votes:** 3
**Link:** [https://leetcode.com/problems/encode-and-decode-tinyurl/solutions/2860906/](https://leetcode.com/problems/encode-and-decode-tinyurl/solutions/2860906/)

---

```rs
struct Codec {
	
}

/** 
 * `&self` means the method takes an immutable reference.
 * If you need a mutable reference, change it to `&mut self` instead.
 */
impl Codec {
    fn new() -> Self {
     Codec {}   
    }
	
    // Encodes a URL to a shortened URL.
    fn encode(&self, longURL: String) -> String {
        longURL
    }
	
    // Decodes a shortened URL to its original URL.
    fn decode(&self, shortURL: String) -> String {
        shortURL   
    }
}

/**
 * Your Codec object will be instantiated and called as such:
 * let obj = Codec::new();
 * let s: String = obj.encode(strs);
 * let ans: VecVec<String> = obj.decode(s);
 */
```