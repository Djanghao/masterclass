# Swift solution (Functional style)

**Author:** OrchidHunter
**Votes:** 0
**Link:** [https://leetcode.com/problems/lonely-pixel-ii/solutions/1469699/](https://leetcode.com/problems/lonely-pixel-ii/solutions/1469699/)

---

```
func findBlackPixel(_ picture: [[Character]], _ target: Int) -> Int {
   let possibleCols = // create a set of columns indices that have exactly target # of B's 
      Set(picture.reduce([Int: Int]()) { // map is [column index: # of B's in column]
            var map = $0
            for (index, ch) in $1.enumerated() {
              if ch == "B" {
                map[index, default: 0] += 1 
              }
            }
            return map
          }
          .filter { $0.value == target } // remove columns that don't have exact target # of B's
          .keys)
  return picture.reduce([String: Int]()) { // map string patterns to string pattern instance counts (e.g, ["WWBWWB": #])
          var map = $0
          map[String($1), default: 0] += 1
          return map
        }
        .map {  stringPattern, stringPatternCount in
          var sum = 0
          if stringPatternCount == target && stringPattern.filter({ $0 == "B" }).count == target { 
            for (colIndex, ch) in stringPattern.enumerated()  {
              if possibleCols.contains(colIndex) && ch == "B" {
                sum += target
              }
            }
          }
          return sum
        }
        .reduce(0, +) // aggregate string pattern matches; `findBlackPixel` always returns a multiple of `target`
}
```