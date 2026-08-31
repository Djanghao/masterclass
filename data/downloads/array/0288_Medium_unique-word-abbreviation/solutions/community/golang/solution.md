# Effective Go solution with description

**Author:** dimau777
**Votes:** 0
**Link:** [https://leetcode.com/problems/unique-word-abbreviation/solutions/2949750/](https://leetcode.com/problems/unique-word-abbreviation/solutions/2949750/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The most effictive way is to use a map with keys as abbreviations and slices of strings as values

# Approach
<!-- Describe your approach to solving the problem. -->
1. First we should make a map from dictionary in contructor. Calc abbreviation for each string and use this abbreviation as a key, add string in the value for this key
2. IsUnique is very simple method that just check that we have in map the same abbreviation that the word has and then check that all strings with the same abbreviation are equal to the word

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
Constructor = O(n) for creating map
IsUnique = O(n) in the worst case when all the strings in dictionary have the same abbreviation

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(n) because we should to keep the map

# Code
```
type ValidWordAbbr struct {
  dict map[string][]string 
}


func Constructor(dictionary []string) ValidWordAbbr {
  var res = ValidWordAbbr{dict: map[string][]string{}}
  for _, str := range dictionary {
    var abbr = calcAbbr(str)
    res.dict[abbr] = append(res.dict[abbr], str)
  } 
  return res
}


func (this *ValidWordAbbr) IsUnique(word string) bool {
  var abbr = calcAbbr(word)
  var similar, ok = this.dict[abbr]
  
  // There is no word with the same abbreviation
  if ok != true {
    return true
  }

  // Check that we had in dictionary the same word
  for _, str := range similar {
    if word != str {
      return false 
    }
  }

  return true 
}

func calcAbbr(str string) string {
  if len(str) < 3 {
    return str
  }
  return string(str[0]) + strconv.Itoa(len(str) - 2) + string(str[len(str) - 1])
}


/**
 * Your ValidWordAbbr object will be instantiated and called as such:
 * obj := Constructor(dictionary);
 * param_1 := obj.IsUnique(word);
 */
```