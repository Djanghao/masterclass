# Swift | Set (beats 100%)

**Author:** vologirov
**Votes:** 4
**Link:** [https://leetcode.com/problems/smallest-number-in-infinite-set/solutions/3454241/](https://leetcode.com/problems/smallest-number-in-infinite-set/solutions/3454241/)

---

# Set approach

```
class SmallestInfiniteSet {
    private var excluded = Set<Int>()
    private var smallest = 1

    func popSmallest() -> Int {
        defer { 
            excluded.insert(smallest)
            smallest = ((smallest+1)...1001).first { !excluded.contains($0) }! 
        }
        return smallest        
    }
    
    func addBack(_ num: Int) {
        if num < smallest {
            smallest = num
        }
        excluded.remove(num)
    }
}
```

> ***Please upvote if you like it***