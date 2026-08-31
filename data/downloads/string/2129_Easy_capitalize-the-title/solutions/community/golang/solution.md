# Golang: 100% fast

**Author:** torexanovich
**Votes:** 2
**Link:** [https://leetcode.com/problems/capitalize-the-title/solutions/3228807/](https://leetcode.com/problems/capitalize-the-title/solutions/3228807/)

---


```
func capitalizeTitle(title string) string {
    title = strings.ToLower(title)
    v := strings.Split(title, " ")

    for i := 0; i < len(v); i++ {
        if len(v[i]) < 3 {
            v[i] = strings.ToLower(v[i])
        } else {
            v[i] = strings.Title(v[i])
        }
    }

    title = strings.Join(v, " ")
    return title
}
```