# Golang 4ms using set

**Author:** zainkai
**Votes:** 0
**Link:** [https://leetcode.com/problems/before-and-after-puzzle/solutions/498701/](https://leetcode.com/problems/before-and-after-puzzle/solutions/498701/)

---

```
import (
  "strings"
  "sort"
)

type tuple struct {
  str string
  idx int
}

func beforeAndAfterPuzzles(phrases []string) []string {
  m := getFirstWordMap(phrases)
  result := map[string]bool{}

  for i, phrase := range phrases {
    lastW := getLastWord(phrase)    
    for _, pair := range m[lastW] {
      if i == pair.idx {
        continue
      }
      result[phrase + pair.str] = true
    }
  }
  
  return getStrArrSorted(result)
}

func getStrArrSorted(m map[string]bool) []string {
  result := []string{}
  for key := range m {
    result = append(result, key)
  }
  
  sort.Slice(result, func(i, j int) bool {
    return strings.Compare(result[i], result[j]) == -1
  })
  return result
}

func getFirstWord(phrase string) (string, string) {
  anchor := 0
  for ;anchor < len(phrase); anchor++ {
    if phrase[anchor] == ' ' {
      break
    }
  }
  
  // return first word and end of phrase
  return phrase[:anchor], phrase[anchor:]
}

func getLastWord(phrase string) string {
  anchor := len(phrase) -1
  for ;anchor >= 0; anchor-- {
    if phrase[anchor] == ' ' {
      break
    }
  }
  
  return phrase[anchor+1:]
}

func getFirstWordMap(phrases []string) map[string][]tuple {
  m := make(map[string][]tuple)
  for i, phrase := range phrases {
    firstW, str := getFirstWord(phrase)
    m[firstW] = append(m[firstW], tuple{str, i})
  }
  
  return m
}

```