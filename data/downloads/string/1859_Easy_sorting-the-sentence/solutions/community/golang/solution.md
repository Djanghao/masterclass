# Go  / Golang Solution

**Author:** erikrios
**Votes:** 2
**Link:** [https://leetcode.com/problems/sorting-the-sentence/solutions/3063629/](https://leetcode.com/problems/sorting-the-sentence/solutions/3063629/)

---

```
func sortSentence(s string) string {
        words := strings.Split(s, " ")

        results := make([]string, len(words))

        for i := 0; i < len(words); i++ {
                word := words[i]
                indexByte := word[len(word)-1]
                indexStr := string(indexByte)
                index, _ := strconv.Atoi(indexStr)

                results[index-1] = string(word[:len(word)-1])
        }

        var builder strings.Builder

        for i, result := range results {
                builder.WriteString(result)

                if i != len(results)-1 {
                        builder.WriteString(" ")
                }
        }

        return builder.String()
}
```