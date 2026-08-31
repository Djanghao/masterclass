# Python 3 | 5 lines, defaultdict(set) | Explanation

**Author:** idontknoooo
**Votes:** 5
**Link:** [https://leetcode.com/problems/unique-word-abbreviation/solutions/837448/](https://leetcode.com/problems/unique-word-abbreviation/solutions/837448/)

---

### Explanation
- The problem itself is super simple, but I think there are some traps in the problem description
- For example
	- how abbreviation is composed
	- `isUnique`: only check the uniqueness, it doesn't add the word in 
- Create a `defaultdict(set)`
	- for each word, add abbreviation `s` to the dict and `word` to the set
- If the abbreviation `s` not in `self.abbrev` or the `word` is the only word has abbreviation `s` then return `True`
- else return `False`
### Implementation
```
class ValidWordAbbr:
    def __init__(self, dictionary: List[str]):
        self.shorten = lambda word: word if len(word) <= 2 else word[0]+str(len(word)-2)+word[-1]
        self.abbrev = collections.defaultdict(set)
        for word in dictionary: self.abbrev[self.shorten(word)].add(word)

    def isUnique(self, word: str) -> bool:
        s = self.shorten(word)
        return s not in self.abbrev or word in self.abbrev[s] and len(self.abbrev[s]) == 1
```