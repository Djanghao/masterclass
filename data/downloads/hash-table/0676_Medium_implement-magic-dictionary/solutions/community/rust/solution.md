# brute

**Author:** hansblx
**Votes:** 0
**Link:** [https://leetcode.com/problems/implement-magic-dictionary/solutions/5897758/](https://leetcode.com/problems/implement-magic-dictionary/solutions/5897758/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```rust []
#[derive(Debug)]
struct MagicDictionary {
    word_bits: Vec<Vec<char>>,
}


/** 
 * `&self` means the method takes an immutable reference.
 * If you need a mutable reference, change it to `&mut self` instead.
 */
impl MagicDictionary {

    fn new() -> Self {
        MagicDictionary {
            word_bits: vec![vec![]],
        }
    }
    
    fn build_dict(&mut self, dictionary: Vec<String>) {
        let mut d = Vec::new();
        for word in dictionary.iter() {
            let chars = word.chars().collect();
            d.push(chars);
        }
        self.word_bits = d;
    }
    
    fn search(&self, search_word: String) -> bool {
        let mut diffs = 0;
        let mut res = false;
        let bits = &self.word_bits;
        let chars = search_word.chars().collect::<Vec<char>>();
        for (idx, b) in bits.into_iter().enumerate() {
            diffs = 0;
            if chars.len() != b.len() {
                continue;
            }
            for (idx_inner, b_inner) in b.into_iter().enumerate() {
                if idx_inner > chars.len() - 1 {
                    continue;
                }
                let c = chars[idx_inner];
                if b_inner != &c {
                    diffs += 1;
                    // println!("{b_inner:?} {c:?}");
                }
               
            }
            if diffs == 1 {
                res = true;
            }
        }
       // println!("{bits:?}");
        res
    }
}

/**
 * Your MagicDictionary object will be instantiated and called as such:
 * let obj = MagicDictionary::new();
 * obj.build_dict(dictionary);
 * let ret_2: bool = obj.search(searchWord);
 */
```