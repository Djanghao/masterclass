# Scala code w/ Match

**Author:** itachi26
**Votes:** 1
**Link:** [https://leetcode.com/problems/first-bad-version/solutions/1798728/](https://leetcode.com/problems/first-bad-version/solutions/1798728/)

---

```
class Solution extends VersionControl {
    def firstBadVersion(n: Int): Int = {
	
        var left = 1
        var right = n
        
        while(left<right){
            val mid = left + (right-left)/2
            isBadVersion(mid) match {
                case true => {
                    right = mid
                }
                case false => {
                    left = mid + 1
                }
            }
        }
        right
    }
}
```