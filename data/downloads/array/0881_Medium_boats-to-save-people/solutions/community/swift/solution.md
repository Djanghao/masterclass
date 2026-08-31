# Swift & Python Solution Code

**Author:** murad928
**Votes:** 3
**Link:** [https://leetcode.com/problems/boats-to-save-people/solutions/1879361/](https://leetcode.com/problems/boats-to-save-people/solutions/1879361/)

---

# ***Swift Code:***
```*

/* Swift Solution Code: */

class Solution {
    func numRescueBoats(_ people: [Int], _ limit: Int) -> Int {
        let arr = people.sorted()
        var c = 0
        var i = 0
        var j = arr.count-1
        while i<=j{
            c += 1
            if arr[i] + arr[j] <= limit{
                i += 1
            }
            j -= 1
        }
        return c
    }
}

# Python Code:


/* 

Python Solution Code:
class Solution:
    def numRescueBoats(self, people: List[int], limit: int) -> int:
        arr = sorted(people)
        c = 0
        i = 0 
        j = len(arr)-1
        while i <= j:
            c += 1
            if arr[i] + arr[j] <= limit:
                i += 1
            j -= 1
        return c
*/

```