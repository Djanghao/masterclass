# GoLang beats 100%

**Author:** leetcodesujitraman
**Votes:** 1
**Link:** [https://leetcode.com/problems/design-hit-counter/solutions/1604632/](https://leetcode.com/problems/design-hit-counter/solutions/1604632/)

---

```
type Hit struct {
    Timestamp int
    Count int
}

type HitCounter struct {
    Clock int
    HitsCount int
    HitsArr []Hit
}


func Constructor() HitCounter {
    return HitCounter{ 0, 0, []Hit{} }
}


func (this *HitCounter) Hit(timestamp int)  {
    n := len(this.HitsArr)
    if n > 0 && this.HitsArr[n - 1].Timestamp == timestamp {
        this.HitsArr[n - 1].Count++
    } else {
        this.HitsArr = append(this.HitsArr, Hit{ timestamp, 1 })
    }
    this.HitsCount++
}


func (this *HitCounter) GetHits(timestamp int) int {
    for len(this.HitsArr) > 0 && (this.HitsArr[0].Timestamp <= timestamp - 300) {
        this.HitsCount -= this.HitsArr[0].Count
        this.HitsArr =  this.HitsArr[1:]
    }
    return this.HitsCount
}

 ```