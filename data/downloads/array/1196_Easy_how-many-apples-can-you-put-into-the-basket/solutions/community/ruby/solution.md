# Ruby Solution beats 100%

**Author:** gonzogeek
**Votes:** 0
**Link:** [https://leetcode.com/problems/how-many-apples-can-you-put-into-the-basket/solutions/4149608/](https://leetcode.com/problems/how-many-apples-can-you-put-into-the-basket/solutions/4149608/)

---

```
# @param {Integer[]} weight
# @return {Integer}
def max_number_of_apples(weight)
  weight.sort!
  total_weight = 0
  weight.each_with_index do |apple, i|
    total_weight += apple
    if total_weight > 5000
      return i
    end
  end
  weight.length
end
```