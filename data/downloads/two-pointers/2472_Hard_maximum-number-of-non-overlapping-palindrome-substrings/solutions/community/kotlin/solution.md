# Koltin | Approach Explained | Beats 100%

**Author:** Mahoraga_JJK
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-non-overlapping-palindrome-substrings/solutions/4367440/](https://leetcode.com/problems/maximum-number-of-non-overlapping-palindrome-substrings/solutions/4367440/)

---

# Intuition
This problem is a combination of Non-overlapping intervals and Number of Palindromic Substrings
https://leetcode.com/problems/non-overlapping-intervals/
https://leetcode.com/problems/palindromic-substrings/

# Approach
Start by finding all palindromic substrings with length >= k and update result according to make sure the current interval is the optimal and we cover maximum number of intervals. Using last to store the end index of substring if last is less than the current substring start we know we have a new interval to add and its end index is the new last or else if start is lower than last and end is also lower than last then we can replace this current substring with the last one to have more substring in our result. 

# Complexity
- Time complexity:
    $$O(nk)$$

- Space complexity:
    $$Constant$$

# Code
```
class Solution {
    fun maxPalindromes(s: String, k: Int): Int {
        val n: Int = s.length
        var last: Int = Int.MIN_VALUE
        var ans = 0
        var place = -1
        while(++place<2*n) {
            var left = place/2
            var right = left + place%2
            while(left>=0 && right<n && s[left]==s[right]){
                if (right+1-left>=k) {
                    if (left>=last) {
                        last=right+1
                        ans++
                    }
                    else if (right+1<last) last = right+1
                    break
                }  
                left--
                right++
            }
        }
        return ans   
    }
}

//class Solution {
//    fun maxPalindromes(s: String, k: Int): Int {
//        val n: Int = s.length
//        var last: Int = Int.MIN_VALUE
//        var ans = 0
//        val intervals: MutableList<List<Int>> = ArrayList()
//        var place = -1
//        while(++place<2*n) {
//            var left = place/2
//            var right = left + place%2
//            while(left>=0 && right<n && s[left]==s[right]){
//                if (right+1-left>=k) {
//                    intervals.add(listOf(left,right+1))
//         
//                    break
//                }  
//                left--
//                right++
//            }
//        }
//        intervals.forEach{
//            if (it.get(0)>=last) {
//                last = it.get(1)
//                ans++
//            }
//            else if (it.get(1)<last) 
//                last = it.get(1)
//        }
//        return ans   
//    }
//}

```