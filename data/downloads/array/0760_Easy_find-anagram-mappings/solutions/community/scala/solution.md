# Scala

**Author:** kamikumakun
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-anagram-mappings/solutions/3115449/](https://leetcode.com/problems/find-anagram-mappings/solutions/3115449/)

---

# Complexity
- Time complexity: O(N)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(N)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
import scala.collection.mutable.{Set, Map}

object Solution {
    def anagramMappings(nums1: Array[Int], nums2: Array[Int]): Array[Int] = {
      
        val map = Map.empty[Int, Set[Int]]
        
        for((number, index) <- nums2.zipWithIndex) {
            map.getOrElseUpdate(number, Set.empty[Int]) += index
        }
        
        
        val output = for(number <- nums1) yield {
            
            val set = map(number)
            val head = set.head
            
            set -= head
            
            head   
        }
        
        output.toArray
    }
}
```