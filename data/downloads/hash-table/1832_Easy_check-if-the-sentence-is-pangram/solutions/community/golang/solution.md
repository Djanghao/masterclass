# Golang short solution

**Author:** sansaian
**Votes:** 3
**Link:** [https://leetcode.com/problems/check-if-the-sentence-is-pangram/solutions/2715080/](https://leetcode.com/problems/check-if-the-sentence-is-pangram/solutions/2715080/)

---

O(n) store O(n)
```
func checkIfPangram(sentence string) bool {
    store:=make(map[rune]struct{})
    for _,ch:=range sentence{
        if _,ok:=store[ch];!ok{
            store[ch]=struct{}{}
        }
    }
    return len(store)==26
}
```