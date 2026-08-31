# Ruby, Two Arrays and Sort

**Author:** kahtava
**Votes:** 1
**Link:** [https://leetcode.com/problems/sort-even-and-odd-indices-independently/solutions/4834320/](https://leetcode.com/problems/sort-even-and-odd-indices-independently/solutions/4834320/)

---

# Code
```
def sort_even_odd(nums)
  even = []
  odd = []
  
  (0...nums.length).each do |i|
    if i.even?
      even.push(nums[i])
    else
      odd.push(nums[i])
    end
  end

  even.sort!
  odd.sort!.reverse!

  even.zip(odd).flatten.compact 
end
```