# Go slow

**Author:** dchooyc
**Votes:** 0
**Link:** [https://leetcode.com/problems/pyramid-transition-matrix/solutions/3890833/](https://leetcode.com/problems/pyramid-transition-matrix/solutions/3890833/)

---

```
func pyramidTransition(bottom string, allowed []string) bool {
    patterns := genPatterns(allowed)
    return dfs(bottom, patterns)
}

func dfs(bottom string, patterns map[string][]string) bool {
    if len(bottom) == 2 && len(patterns[bottom]) > 0 {
        return true
    }

    layers := []string{}
    genLayers(bottom, "", &layers, patterns)

    for _, layer := range layers {
        if dfs(layer, patterns) {
            return true
        }
    }

    return false
}

func genLayers(bottom, cur string, layers *[]string, patterns map[string][]string) {
    if len(bottom) == 1 {
        *layers = append(*layers, cur)
        return
    }

    pats := patterns[bottom[:2]]

    for _, pat := range pats {
        genLayers(bottom[1:], cur + pat, layers, patterns)
    }
}

func genPatterns(allowed []string) map[string][]string {
    patterns := make(map[string][]string)

    for _, a := range allowed {
        base := string(a[:2])
        top := string(a[2])
        patterns[base] = append(patterns[base], top)
    }

    return patterns
}
```