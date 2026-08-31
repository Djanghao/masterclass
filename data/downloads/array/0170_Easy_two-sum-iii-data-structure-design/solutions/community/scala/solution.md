# Functional Solution

**Author:** cachemiss
**Votes:** 0
**Link:** [https://leetcode.com/problems/two-sum-iii-data-structure-design/solutions/4336101/](https://leetcode.com/problems/two-sum-iii-data-structure-design/solutions/4336101/)

---

```
class TwoSum() {

    private var cache: Map[Int, Int] = Map.empty
    
    def add(number: Int) {
        cache = cache + (number -> (cache.getOrElse(number, 0) + 1))
    }

    def find(value: Int): Boolean = {
        cache.find{case(num, _) => 
            cache.get(value - num).fold(false){ count => 
                if(num == (value - num)) count > 1 else true
            }
        }.nonEmpty
    }
}

/**
 * Your TwoSum object will be instantiated and called as such:
 * var obj = new TwoSum()
 * obj.add(number)
 * var param_2 = obj.find(value)
 */
```