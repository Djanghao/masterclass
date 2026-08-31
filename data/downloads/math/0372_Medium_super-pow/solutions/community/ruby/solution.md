# Ruby Solution

**Author:** cdragon1116
**Votes:** 1
**Link:** [https://leetcode.com/problems/super-pow/solutions/1307063/](https://leetcode.com/problems/super-pow/solutions/1307063/)

---


```
# @param {Integer} a
# @param {Integer[]} b
# @return {Integer}

def super_pow(a, b)
  return 0 if a == 0
  
  ans = 1
  b.each do |i|
    ans = (((ans ** 10) % 1337) * ((a ** i) % 1337)) % 1337
  end
  
  ans
end
```


for example:
b = [3, 2, 5]
a ^ 325 = a ^ ((3 * 10 + 2) * 10 + 5)

We can loop through the array and calculate the final result. 
To aviod memory brusting, always mod the numbers in the process.
