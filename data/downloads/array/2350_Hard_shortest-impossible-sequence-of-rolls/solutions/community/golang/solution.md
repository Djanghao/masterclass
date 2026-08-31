# [Java/Python/Golang]  One pass

**Author:** sahil_77
**Votes:** 1
**Link:** [https://leetcode.com/problems/shortest-impossible-sequence-of-rolls/solutions/2326157/](https://leetcode.com/problems/shortest-impossible-sequence-of-rolls/solutions/2326157/)

---

Python
```
class Solution:
     def shortestSequence(self, rolls, k):
        """
        [4,2,1,2,3,3,2,4,1]
        
        we first find the index of a complete set
        
        i= 4 (first occurence of three) 
        
        next we iterate through the i-->len(nums)
         finding the next index of complete set that ensures that elemts is resetn atleast two times
         
        i=8
        
        Now since we have reached to end we return how completeset was found +1
        """
        res = 1
        s = set()
        for a in rolls:
            s.add(a)
            if len(s) == k:
                res += 1
                s.clear()
        return res
```

Java
```
class Solution {
        public int shortestSequence(int[] A, int k) {
        int res = 1;
        Set<Integer> s = new HashSet<>();
        for (int a : A) {
            s.add(a);
            if (s.size() == k) {
                res++;
                s.clear();
            }
        }
        return res;
    }
}
```

Golang
```
func shortestSequence(rolls []int, k int) int {
    var s = map[int]bool{}
    var curr, res int = 0, 1
    for _, a := range rolls {
        if !s[a] {
            curr ++
            s[a] = true
        }
        // when we've collected all k nums, ++
        if curr == k {
            res ++
            curr = 0
            s = map[int]bool{}
        }
    }
    return res
}
```