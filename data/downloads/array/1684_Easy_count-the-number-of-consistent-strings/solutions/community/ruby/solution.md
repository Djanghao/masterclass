# 3 approaches (hash set, bit manipulation, regex)

**Author:** valentinech
**Votes:** 2
**Link:** [https://leetcode.com/problems/count-the-number-of-consistent-strings/solutions/5787622/](https://leetcode.com/problems/count-the-number-of-consistent-strings/solutions/5787622/)

---

# Approach 1: hash set
```cpp []
class Solution {
public:
    int countConsistentStrings(const std::string& allowed,
                               const std::vector<std::string>& words) {
        std::unordered_set<char> set{allowed.begin(), allowed.end()};
        return std::count_if(
            words.begin(),
            words.end(),
            [&set] (const std::string& i) -> bool {
                return std::all_of(
                    i.begin(),
                    i.end(),
                    [&set] (char j) -> bool {
                        return set.contains(j);
                    }
                );
            }
        );
    }
};
```
```rust []
use std::collections::HashSet;

impl Solution {
    pub fn count_consistent_strings(
        allowed: String,
        words: Vec<String>
    ) -> i32 {
        let set: HashSet<char> = allowed.chars().collect();
        words
            .iter()
            .filter(|&i| i.chars().all(|j| set.contains(&j)))
            .count() as i32
    }
}
```
```python3 []
class Solution:
    def countConsistentStrings(self, allowed: str, words: List[str]) -> int:
        chars = set(allowed)
        return sum(1 for i in words if all(j in chars for j in i))
```
```ruby []
# @param {String} allowed
# @param {String[]} words
# @return {Integer}
def count_consistent_strings(allowed, words)
    set = allowed.chars.to_set
    words.count {|i| i.chars.all? {|j| set.include?(j)}}
end
```
```c []
typedef struct {
    char key;
    UT_hash_handle hh;
} HashNode;

bool contains(HashNode* set, char c) {
    HashNode* node;
    HASH_FIND(hh, set, &c, sizeof(char), node);
    return node != NULL;
}

void insert(HashNode** set, char c) {
    if (!contains(*set, c)) {
        HashNode* node = malloc(sizeof(HashNode));
        node->key = c;
        HASH_ADD(hh, *set, key, sizeof(char), node);
    }
}

void freeSet(HashNode* set) {
    HashNode *curr, *next;
    HASH_ITER(hh, set, curr, next) {
        HASH_DEL(set, curr);
        free(curr);
    }
}

int countConsistentStrings(char* allowed, char** words, int wordsSize) {
    HashNode* set = NULL;
    for (char* i = allowed; *i != '\\0'; ++i) {
        insert(&set, *i);
    }
    int result = 0;
    for (char** i = words; i < (words + wordsSize); ++i) {
        bool ok = true;
        for (char* j = *i; *j != '\\0'; ++j) {
            if (!contains(set, *j)) {
                ok = false;
                break;
            }
        }
        if (ok) ++result;
    }
    freeSet(set);
    return result;
}
```

# Approach 2: bit manipulation
```cpp []
class Solution {
public:
    int countConsistentStrings(const std::string& allowed,
                               const std::vector<std::string>& words) {
        uint32_t mask{std::accumulate(
            allowed.begin(),
            allowed.end(),
            uint32_t(),
            [] (uint32_t mask, char i) -> uint32_t {
                return mask | (uint32_t(1) << (i - 'a'));
            }
        )};
        return std::count_if(
            words.begin(),
            words.end(),
            [mask] (const std::string& i) -> bool {
                return std::all_of(
                    i.begin(),
                    i.end(),
                    [mask] (char j) -> bool {
                        return mask & (uint32_t(1) << (j - 'a'));
                    }
                );
            }
        );
    }
};
```
```rust []
impl Solution {
    pub fn count_consistent_strings(
        allowed: String,
        words: Vec<String>
    ) -> i32 {
        let mask = allowed
            .bytes()
            .fold(0, |mask, i| mask | (1 << (i - b'a')));
        words
            .iter()
            .filter(|&i| i.bytes().all(|j| mask & (1 << (j - b'a')) != 0))
            .count() as i32
    }
}
```
```python3 []
class Solution:
    def countConsistentStrings(self, allowed: str, words: List[str]) -> int:
        mask = reduce(
            lambda mask, i: mask | (1 << (ord(i) - ord('a'))),
            allowed,
            int()
        )
        return sum(1 for i in words if all(
            mask & (1 << (ord(j) - ord('a'))) for j in i
        ))
```
```ruby []
# @param {String} allowed
# @param {String[]} words
# @return {Integer}
def count_consistent_strings(allowed, words)
    mask = allowed.chars.inject(0) {|mask, i| mask | (1 << (i.ord - 'a'.ord))}
    words.count {|i| i.chars.all? {|j| mask & (1 << (j.ord - 'a'.ord)) != 0}}
end
```
``` c []
int countConsistentStrings(char* allowed, char** words, int wordsSize) {
    uint32_t mask = 0;
    for (char* i = allowed; *i != '\\0'; ++i) {
        mask |= ((uint32_t) 1 << (*i - 'a'));
    }
    int result = 0;
    for (char** i = words; i < (words + wordsSize); ++i) {
        bool ok = true;
        for (char* j = *i; *j != '\\0'; ++j) {
            if (!(mask & ((uint32_t) 1 << (*j - 'a')))) {
                ok = false;
                break;
            }
        }
        if (ok) ++result;
    }
    return result;
}
```

# Approach 3: regex
```cpp []
class Solution {
public:
    int countConsistentStrings(const std::string& allowed,
                               const std::vector<std::string>& words) {
        std::regex pattern{std::format("^[{}]+$", allowed)};
        return std::count_if(
            words.begin(),
            words.end(),
            [&pattern] (const std::string& i) -> bool {
                return std::regex_match(i, pattern);
            }
        );
    }
};
```
```rust []
use regex::Regex;

impl Solution {
    pub fn count_consistent_strings(
        allowed: String,
        words: Vec<String>
    ) -> i32 {
        let pattern = Regex::new(&format!("^[{}]+$", &allowed)).unwrap();
        words
            .iter()
            .filter(|&i| pattern.is_match(i))
            .count() as i32
    }
}
```
```python3 []
class Solution:
    def countConsistentStrings(self, allowed: str, words: List[str]) -> int:
        pattern = f"^[{allowed}]+$"
        return sum(1 for i in words if re.match(pattern, i))
```
```ruby []
# @param {String} allowed
# @param {String[]} words
# @return {Integer}
def count_consistent_strings(allowed, words)
    words.grep(/^[#{allowed}]+$/).size
end
```
``` c []
int countConsistentStrings(char* allowed, char** words, int wordsSize) {
    char* pattern = malloc(sizeof(char) * (strlen(allowed) + 6));
    sprintf(pattern, "%s%s%s", "^[", allowed, "]+$");
    regex_t regex;
    regcomp(&regex, pattern, REG_EXTENDED);
    free(pattern);
    int result = 0;
    for (char** i = words; i < (words + wordsSize); ++i) {
        if (!regexec(&regex, *i, 0, NULL, 0)) ++result;
    }
    regfree(&regex);
    return result;
}
```

# Bonus approach (for strictly 8-bit encoded strings)
```cpp []
using BitSet = std::bitset<std::numeric_limits<unsigned char>::max() + 1>;

class Solution {
public:
    int countConsistentStrings(const std::string& allowed,
                               const std::vector<std::string>& words) {
        BitSet bits{std::accumulate(
            allowed.begin(),
            allowed.end(),
            BitSet(),
            [] (BitSet bits, char i) -> BitSet {
                return bits[static_cast<unsigned char>(i)] = true, bits;
            }
        )};
        return std::count_if(
            words.begin(),
            words.end(),
            [bits] (const std::string& i) -> bool {
                return std::all_of(
                    i.begin(),
                    i.end(),
                    [bits] (char j) -> bool {
                        return bits[static_cast<unsigned char>(j)];
                    }
                );
            }
        );
    }
};
```
```c []
#define CHUNK_SIZE (sizeof(int) * CHAR_BIT)

int countConsistentStrings(char* allowed, char** words, int wordsSize) {
    int chunks[(UCHAR_MAX + 1) / CHUNK_SIZE] = {0};
    for (unsigned char* i = allowed; *i != '\\0'; ++i) {
        chunks[*i / CHUNK_SIZE] |= 1 << (*i % CHUNK_SIZE);
    }
    int result = 0;
    for (char** i = words; i < (words + wordsSize); ++i) {
        bool ok = true;
        for (unsigned char* j = *i; *j != '\\0'; ++j) {
            if (!(chunks[*j / CHUNK_SIZE] & (1 << (*j % CHUNK_SIZE)))) {
                ok = false;
                break;
            }
        }
        if (ok) ++result;
    }
    return result;
}
```