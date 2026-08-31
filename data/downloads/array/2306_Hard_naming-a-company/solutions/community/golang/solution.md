# GO Solution - BEATS 100% 🔥🔥

**Author:** DenizBraven
**Votes:** 1
**Link:** [https://leetcode.com/problems/naming-a-company/solutions/3163823/](https://leetcode.com/problems/naming-a-company/solutions/3163823/)

---


# Code
```
func distinctNames(ideas []string) int64 {
    dct := make(map[string]map[string]bool)
    ans := 0

    for _, idea := range ideas {
        if _, ok := dct[idea[:1]]; !ok {
            dct[idea[:1]] = make(map[string]bool)
        }
        dct[idea[:1]][idea[1:]] = true
    }

    keys := make([]string, 0, len(dct))
    for k := range dct {
        keys = append(keys, k)
    }
    sort.Strings(keys)

    for i, init1 := range keys {
        for _, init2 := range keys[i+1:] {
            suff1, suff2 := dct[init1], dct[init2]
            c := 0
            for suff := range suff1 {
                if _, ok := suff2[suff]; ok {
                    c++
                }
            }
            ans += (len(suff1) - c) * (len(suff2) - c)
        }
    }

    return int64(ans * 2)
}
```