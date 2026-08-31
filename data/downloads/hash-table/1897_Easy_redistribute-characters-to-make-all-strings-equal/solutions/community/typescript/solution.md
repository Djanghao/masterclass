# facil solution

**Author:** irwinekabakti
**Votes:** 1
**Link:** [https://leetcode.com/problems/redistribute-characters-to-make-all-strings-equal/solutions/4476240/](https://leetcode.com/problems/redistribute-characters-to-make-all-strings-equal/solutions/4476240/)

---

# Complexity
- Time complexity: O(n * m)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```typescript []
function makeEqual(words: string[]): boolean {
  const map: { [char: string]: number } = {};

  for (const word of words) {
    for (const char of word) {
      map[char] = (map[char] || 0) + 1;
    }
  }

  for (const char in map) {
    if (map[char] % words.length !== 0) return false;
  }

  return true;
}
```

```golang []
func makeEqual(words []string) bool {
    charCount := make(map[rune]int)

	for _, word := range words {
		for _, char := range word {
			charCount[char]++
		}
	}

	for _, count := range charCount {
		if count%len(words) != 0 {
			return false
		}
	}

	return true
}
```

```ruby []
def make_equal(words)
  char_count = Hash.new(0)

  words.each do |word|
    word.each_char { |char| char_count[char] += 1 }
  end

  char_count.values.all? { |count| count % words.length == 0 }
end
```

```rust []
impl Solution {
    pub fn make_equal(words: Vec<String>) -> bool {
        let mut char_count = std::collections::HashMap::new();

        for word in &words {
            for c in word.chars() {
                *char_count.entry(c).or_insert(0) += 1;
            }
        }

        char_count.values().all(|&count| count % words.len() == 0)
    }
}
```