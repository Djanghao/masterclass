# Ruby solution

**Author:** alobzov
**Votes:** 0
**Link:** [https://leetcode.com/problems/magical-string/solutions/5646022/](https://leetcode.com/problems/magical-string/solutions/5646022/)

---


# Code
```
# @param {Integer} n
# @return {Integer}
def magical_string(n, mag = '122', sz = 3)
  2.upto(n + 1) { |i|
    mag[i] == ?2 ? ((mag += mag.end_with?(?2) ? '11' : '22') and sz += 2) : ((mag += mag.end_with?(?2) ? '1' : '2') and sz += 1)
    return mag[0, n].count('1') if sz >= n }
end
```