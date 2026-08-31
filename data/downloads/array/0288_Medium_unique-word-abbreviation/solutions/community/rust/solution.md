# Rust | HashMap + HashSet

**Author:** AlexandruGG
**Votes:** 1
**Link:** [https://leetcode.com/problems/unique-word-abbreviation/solutions/1091207/](https://leetcode.com/problems/unique-word-abbreviation/solutions/1091207/)

---

The problem is fairly straightforward even though it doesn't have the best description.

When we **instantiate** our ValidWordAbbr follow this process to store each word in the dictionary:
1. compute the abbreviation: "door" -> "d2r". This will be they key in our HashMap
2. under each key we store a HashSet of the original words. If the key already exists, we insert into the set

To determine if a given word **is_unique**, we do the following:
- check if we have its abbreviation as a key in our map -> if we don't, it's unique
- if the key exists, we check that the set under it has only one element and that element is the given word

Note the string slice indexing in **abbreviate** is fine in this case because the problem states we only have English alphabet letters in the dictionary.



```
use std::collections::{HashMap, HashSet};

struct ValidWordAbbr {
    map: HashMap<String, HashSet<String>>,
}

impl ValidWordAbbr {
    fn new(dictionary: Vec<String>) -> Self {
        let mut map = HashMap::new();
        for word in &dictionary {
            let entry = map
                .entry(abbreviate(&word))
                .or_insert(HashSet::new());
            entry.insert(word.to_owned());
        }
                
        Self { map }
    }

    fn is_unique(&self, word: String) -> bool {
        if let Some(entry) = self.map.get(&abbreviate(&word)) {
            return entry.len() == 1 && entry.contains(&word);
        }

        true
    }
}

fn abbreviate(word: &str) -> String {
    let n = word.len();
    if n <= 2 {
        return word.to_owned();
    }

    [&word[0..1], &(n - 2).to_string(), &word[n - 1..n]].concat()
}
