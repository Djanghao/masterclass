# Golang union find

**Author:** csy212
**Votes:** 0
**Link:** [https://leetcode.com/problems/sentence-similarity-ii/solutions/3944017/](https://leetcode.com/problems/sentence-similarity-ii/solutions/3944017/)

---

# Code
```
func areSentencesSimilarTwo(sentence1 []string, sentence2 []string, similarPairs [][]string) bool {
    if len(sentence1) != len(sentence2) || len(similarPairs) == 0{
        return false
    }

    maps := make(map[string]string)

    for _, pair := range similarPairs {
        maps[pair[0]] = pair[0]
        maps[pair[1]] = pair[1]
    }

    for _, pair := range similarPairs {
        find1 := find(maps, pair[0])
        find2 := find(maps, pair[1])
        if find1 != find2 {
            maps[find1] = find2
        }
    }

    for i := 0 ; i < len(sentence1); i++ {
        if sentence1[i] != sentence2[i] && find(maps, sentence1[i]) != find(maps, sentence2[i]) {
            return false
        }
    }

    return true
}

func find(maps map[string]string, target string) string {
    for maps[target] != target {
        maps[target] = maps[maps[target]]
        target = maps[target]
    }
    return target
}
```