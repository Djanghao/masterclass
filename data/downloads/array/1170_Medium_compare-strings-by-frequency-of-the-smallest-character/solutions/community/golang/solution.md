# 0ms 100% fastest golang

**Author:** gene-rode
**Votes:** 0
**Link:** [https://leetcode.com/problems/compare-strings-by-frequency-of-the-smallest-character/solutions/4823905/](https://leetcode.com/problems/compare-strings-by-frequency-of-the-smallest-character/solutions/4823905/)

---


```
func numSmallerByFrequency(queries []string, words []string) []int {
    countFreq := func(word string) int {
        d := [26]int{}
        mn := math.MaxInt
         for _ , v := range word {
            ch := v - 'a'
            d[ch]++
            mn = min(mn, int(ch))
        }
        return d[mn]
    }

    m := [11]int{}
    for _ , word := range words {
        m[countFreq(word)]++
    }
    
    res := []int{}
    for _, q := range queries {
         r := 0
         for frq := countFreq(q) + 1; frq < len(m); r,frq = r+ m[frq], frq+1  {}
         res = append(res, r)
    }

return res
}
```