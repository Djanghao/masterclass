# Ruby - arithmatic sum

**Author:** SWAGLORDFLUFF
**Votes:** 1
**Link:** [https://leetcode.com/problems/sell-diminishing-valued-colored-balls/solutions/1663686/](https://leetcode.com/problems/sell-diminishing-valued-colored-balls/solutions/1663686/)

---

```
# @param {Integer[]} inventory
# @param {Integer} orders
# @return {Integer}
def max_profit(inventory, orders)
  res = 0
  inventory.sort!.reverse!
  inventory << 0
  k = 1 
  
  # First iteration array: [10, 7, 3, 0], k = 1
  # Second iteration: [7, 7, 3, 0], k = 2 because you can decrease both 7s at the same time
  # Third iteration: [3, 3, 3, 0], k = 3 because you can decrease three 3s at the same time
  inventory.each_with_index do |num, i|
    next_num = inventory[i + 1]
    
    if next_num && num > next_num
      diff = num - next_num
      
      if k * diff < orders
        res += k * arithematic_sum(num, next_num)
        orders -= k * diff
      else
        q, r = orders.divmod(k)

        res += k * arithematic_sum(num, num - q)
        res += r * (num - q)

        return res % (10**9 + 7)
      end
    end
    
    k += 1
  end
end

def arithematic_sum(num1, num2)
  diff = num1 - num2
  
  (num1 + num2 + 1) * diff / 2
end
```