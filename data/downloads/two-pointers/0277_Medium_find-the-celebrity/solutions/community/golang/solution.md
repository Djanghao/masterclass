# Simple solution

**Author:** moranilt
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-celebrity/solutions/6116045/](https://leetcode.com/problems/find-the-celebrity/solutions/6116045/)

---

# Complexity
- Time complexity: $$O(2n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```golang []
/**
 * The knows API is already defined for you.
 *     knows := func(a int, b int) bool
 */
func solution(knows func(a int, b int) bool) func(n int) int {
    return func(n int) int {
      celeb := 0
      for i := range n {
        if knows(celeb, i) {
          celeb = i
        }
      }

      for i := range n {
        if celeb == i {
          continue
        }

        if knows(celeb, i) || !knows(i, celeb) {
          return -1
        }
      }


      return celeb
    }
}
```