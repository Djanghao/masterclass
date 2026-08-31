# One Line Ruby Solution

**Author:** magiclin
**Votes:** 6
**Link:** [https://leetcode.com/problems/power-of-two/solutions/64075/](https://leetcode.com/problems/power-of-two/solutions/64075/)

---

    def is_power_of_two(n)
      return n > 0 && n.to_s(2).count("1") == 1
    end