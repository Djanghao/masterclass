# ✅✅ Beats 100% || RUBY || Easy to understand || 🔥🔥 ||

**Author:** poojalmokariya
**Votes:** 1
**Link:** [https://leetcode.com/problems/largest-palindrome-product/solutions/3967382/](https://leetcode.com/problems/largest-palindrome-product/solutions/3967382/)

---

# Ruby
```
# @param {Integer} n
# @return {Integer}
def largest_palindrome(n)
    return 9 if n == 1
    upper = (10.pow(n)) - 1 
    lower = 10.pow(n-1)
    i =  upper
    (lower).times do
        i = i - 1
        s = i.to_s
        pal = (s + s.reverse).to_i
        lPal = ((pal.pow(0.5))-1).to_i
        j= upper
        (lPal).times do
            j = j-1
            if pal % j == 0 && ((pal / j).to_s).length == n
                return pal % 1337
            end
        end
    end
    return -1    
end
```
# Pythone3
```
class Solution:
    def largestPalindrome(self, n: int) -> int:
        if n == 1:
            return 9
        upper = pow(10, n) - 1
        lower = pow(10, n - 1)
        for i in range(upper, lower-1, -1):
            s = str(i)
            pal = int(s + s[::-1])
            for j in range(upper, int(pow(pal, 0.5))-1, -1):
                if pal % j == 0 and len(str(pal//j)) == n:
                    return pal % 1337
        return -1
```