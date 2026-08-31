# Scala solution with count

**Author:** khokhlin
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-items-matching-a-rule/solutions/1685992/](https://leetcode.com/problems/count-items-matching-a-rule/solutions/1685992/)

---

```scala
def countMatches(items: List[List[String]], ruleKey: String, ruleValue: String): Int = {
    val idx = ruleKey match {
      case "type" => 0
      case "color" => 1
      case "name" => 2
    }
    items.count(item => item(idx) == ruleValue)
  
```