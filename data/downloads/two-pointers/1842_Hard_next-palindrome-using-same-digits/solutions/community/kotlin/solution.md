# Readable and easy Kotlin solution with O(n) time complexity

**Author:** DFedonnikov
**Votes:** 0
**Link:** [https://leetcode.com/problems/next-palindrome-using-same-digits/solutions/2807742/](https://leetcode.com/problems/next-palindrome-using-same-digits/solutions/2807742/)

---

Since the palindrome is mirror of two halves, we can ignore the right part and focus only on left one. 
We need to find the next closest biggest number in that part that can be created from the digits that we have
The idea is to find a peak from middle toward start (no peak, no next biggest num)
Once peak is found we need to swap the value behind it (on the left) with the first value (from center towards peak) that will be bigger or equal to value behind the peak
Then we need to reverse the part of num between the peak and middle (the middle would have the smallest number in that range -> we will get the next closest biggest num possible)
Finally all we have to do is to mirror left part so we can restore our palindrome.

```
class Solution {
    fun nextPalindrome(num: String): String {
        if (num.length < 4) return ""
        val array = num.toCharArray()
        val peak = array.findPeak()
        if (peak == 0) return ""
        array.findNextLargest(peak)
        array.mirror()
        return String(array)
    }
    
    private fun CharArray.findPeak(): Int {
        var index = size / 2 - 1
        while (index > 0 && this[index - 1] >= this[index]) {
            index--
        }
        return index
    }
    
    private fun CharArray.findNextLargest(peak: Int) {
        var index = size / 2 - 1
        while (index >= peak && this[index] <= this[peak - 1]) {
            index--
        }
        swap(peak - 1, index)
        reverse(peak, size / 2 - 1)
    }
    
    private fun CharArray.swap(from: Int, to: Int) {
        if (this[from] == this[to]) return
        val temp = this[from]
        this[from] = this[to]
        this[to] = temp
    }
    
    private fun CharArray.reverse(from: Int, to: Int) {
        var left = from
        var right = to
        while (left <= right) {
            swap(left, right)
            left++
            right--
        }
    }
    
    private fun CharArray.mirror() {
        var left = size / 2 - 1
        var right = if (size.rem(2) == 0) left + 1 else left + 2
        while (left >= 0) {
            this[right++] = this[left--]
        }
    }
}
```