# [Rust] Backtracking

**Author:** u3ih
**Votes:** 1
**Link:** [https://leetcode.com/problems/iterator-for-combination/solutions/1576841/](https://leetcode.com/problems/iterator-for-combination/solutions/1576841/)

---

Runtime: 12 ms, faster than 100.00% of Rust online submissions for Iterator for Combination.
Memory Usage: 3.6 MB, less than 100.00% of Rust online submissions for Iterator for Combination.
```
struct CombinationIterator {
    characters: Vec<String>
}

/** 
 * `&self` means the method takes an immutable reference.
 * If you need a mutable reference, change it to `&mut self` instead.
 */
impl CombinationIterator {
    
    fn generateCombinations(combinations: &mut Vec<String>, chars: &String, index: usize, combinationLength: i32, combination: &String) {
        if (combinationLength <= 0) {
            combinations.push(combination.clone());
            return;
        } else if (index >= chars.len()) {
            return;
        } else {
            CombinationIterator::generateCombinations(combinations, chars, index+1, combinationLength-1, &(combination.to_owned()+&chars.chars().nth(index).unwrap().to_string()));
            CombinationIterator::generateCombinations(combinations, chars, index+1, combinationLength, combination);
        }
    }

    fn new(characters: String, combinationLength: i32) -> Self {
        let mut res: Vec<String> = Vec::new();
        CombinationIterator::generateCombinations(&mut res, &characters, 0, combinationLength, &String::new());
        Self {
            characters: res
        }
    }
    
    fn next(&mut self) -> String {
        return self.characters.remove(0);
    }
    
    fn has_next(&self) -> bool {
        return if self.characters.len() > 0 {true} else {false};
    }
}