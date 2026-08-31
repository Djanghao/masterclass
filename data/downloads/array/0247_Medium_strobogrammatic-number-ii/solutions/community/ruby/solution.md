# 3 lines Ruby, 5 lines Python

**Author:** StefanPochmann
**Votes:** 52
**Link:** [https://leetcode.com/problems/strobogrammatic-number-ii/solutions/67328/](https://leetcode.com/problems/strobogrammatic-number-ii/solutions/67328/)

---

Build them inside out from the middle.

Ruby

    def find_strobogrammatic(n)
      strobs = [[''], '018'.chars][n%2]
      (n/2).times { strobs.map! { |s| %W{0#{s}0 1#{s}1 8#{s}8 6#{s}9 9#{s}6} }.flatten! }
      strobs.select { |s| n < 2 || s[0] > '0' }
    end

Python

    def findStrobogrammatic(self, n):
        nums = n%2 * list('018') or ['']
        while n > 1:
            n -= 2
            nums = [a + num + b for a, b in '00 11 88 69 96'.split()[n<2:] for num in nums]
        return nums