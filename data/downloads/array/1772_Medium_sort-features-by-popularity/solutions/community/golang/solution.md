# Go(lang) Solution

**Author:** 0xedb
**Votes:** 0
**Link:** [https://leetcode.com/problems/sort-features-by-popularity/solutions/2052260/](https://leetcode.com/problems/sort-features-by-popularity/solutions/2052260/)

---

```go
func sortFeatures(features []string, responses []string) []string {   
    none := struct{}{}
    
    featureCount := make(map[string][]int)
    ans := make([]string, 0, len(featureCount)) 
    
    for i, feature := range features {        
        ans = append(ans, feature)
        featureCount[feature] = []int{0, i}
    }   
    
    wordSet := make(map[string]struct{}, len(featureCount))
    
    for _, response := range responses {
        for _, word := range strings.Split(response, " ") {
            wordSet[word] = none            
        }
        
        for key := range wordSet {
            if _, ok := featureCount[key]; ok {
                delete(wordSet, key)
                featureCount[key][0]++
            }
        }
    }
    
    sort.Slice(ans, func(i, j int) bool {
        first := featureCount[ans[i]]
        second := featureCount[ans[j]]
        
        if first[0] == second[0] {
            return first[1] < second[1]
        }        
        
        return first[0] > second[0]
    })
    
    return ans
}
```