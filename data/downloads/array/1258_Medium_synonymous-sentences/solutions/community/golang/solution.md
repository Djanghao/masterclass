# Go BFS

**Author:** gorpig
**Votes:** 2
**Link:** [https://leetcode.com/problems/synonymous-sentences/solutions/2825685/](https://leetcode.com/problems/synonymous-sentences/solutions/2825685/)

---

Let's be honest. I did not come up with this on my own. Did my best to translate the python bfs solution into Go. God help me if I get this question in an interview. ffs

```
import (
    "strings"
)

func generateSentences(synonyms [][]string, text string) []string {
    graph := make(map[string]map[string]int)
    bfs := []string{}
    for _, synonym := range synonyms {
        k,v := synonym[0],synonym[1]
        if m, ok := graph[k]; !ok {
            graph[k] = map[string]int{v:1}
        } else {
            m[v] = 1 
        }
        
        if m, ok := graph[v]; !ok {
            graph[v] = map[string]int{k:1}
        } else {
            m[k] = 1 
        }
    }
    result := map[string]struct{}{}
    bfs = append(bfs,text)
    for len(bfs) > 0 {
        curT := bfs[0]
        result[curT] = struct{}{}
        words := strings.Split(curT, " ")
        bfs = bfs[1:]
        for i, w := range words {
            if _, ok := graph[w]; ok {
                for newW, _ := range graph[w] {
                    newSent := strings.Join(words[:i], " ")+" "+newW+" "+strings.Join(words[i+1:], " ")
                    newSent = strings.TrimLeft(newSent, " ")
                    newSent = strings.TrimRight(newSent, " ")
                    if _, ok := result[newSent]; !ok {
                        bfs = append(bfs,newSent)
                    }
                } 
            }
        }
    }
    res := []string{}
    for k, _ := range result {
        res = append(res,k)
    }
    sort.Strings(res)
    
    return res
}
```