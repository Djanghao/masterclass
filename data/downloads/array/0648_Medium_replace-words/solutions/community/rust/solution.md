# ✅[Trie] Learn to use the right data structure. Best solution

**Author:** nisaacdz
**Votes:** 2
**Link:** [https://leetcode.com/problems/replace-words/solutions/5272009/](https://leetcode.com/problems/replace-words/solutions/5272009/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity

$$a$$ represents the length of the `sentence`
$$b$$ represents the length of the `dictionary`
$$c$$ represents the `average` length each word in `dictionary`
- Time complexity: $$O(a + b * c)$$ 
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(b * c)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```rust []
struct Trie {
    dict: [Option<Box<Self>>; 26],
    ends_here: bool,
}

impl Trie {
    const fn new() -> Self {
        Self {
            dict: [None, None, None, None, None, None, None, None, None, None, None, None, None, None,None, None, None, None, None, None, None, None, None, None, None, None],
            ends_here: false,
        }
    }

    fn insert(&mut self, val: &str) {
        if val.is_empty() { return self.ends_here = true }
        self.dict[(val.as_bytes()[0] - b'a') as usize].get_or_insert_with(|| Box::new(Self::new())).insert(&val[1..])
    }

    fn exists(&self, bc: u8) -> Option<&Self> {
        self.dict[(bc - b'a') as usize].as_ref().map(|v| &**v)
    }
}

impl Solution {
    pub fn replace_words(dictionary: Vec<String>, sentence: String) -> String {
        let mut trie = Trie::new();
        for word in dictionary {
            trie.insert(&word);
        }

        let mut idx = 0;
        let mut node = &trie;
        let mut res = String::with_capacity(sentence.len());
        while idx < sentence.len() {
            while idx < sentence.len() && sentence.as_bytes()[idx] == b' ' {
                idx += 1;
                res.push(' ');
            }
            let ptr = idx;
            let mut exists = None;
            while exists.is_none() && idx < sentence.len() && sentence.as_bytes()[idx] != b' ' {
                if let Some(t) = node.exists(sentence.as_bytes()[idx]) {
                    node = t;
                    idx += 1;
                    exists = node.ends_here.then_some(idx);
                } else {
                    break;
                }
            }

            while idx < sentence.len() && sentence.as_bytes()[idx] != b' ' {
                idx += 1;
            }

            if let Some(ptr_end) = exists {
                res.push_str(&sentence[ptr..ptr_end])
            } else {
                res.push_str(&sentence[ptr..idx])
            }

            node = &trie;
        }

        res
    }
}
```