# Simplest and performatic solution

**Author:** davischoll84
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-days-spent-together/solutions/5949844/](https://leetcode.com/problems/count-days-spent-together/solutions/5949844/)

---

```ruby []
# @param {String} arrive_alice
# @param {String} leave_alice
# @param {String} arrive_bob
# @param {String} leave_bob
# @return {Integer}
def count_days_together(arrive_alice, leave_alice, arrive_bob, leave_bob)
  return 0 if arrive_alice > leave_bob || arrive_bob > leave_alice

  arrive_date = [arrive_alice, arrive_bob].max
  leave_date  = [leave_alice, leave_bob].min

  days_quantity(leave_date) - days_quantity(arrive_date) + 1
end

def days_quantity(date)
  days_per_month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

  month, day = date.split('-')

  days = day.to_i

  days_per_month.each_with_index do |d, i|
    days += d if i < month.to_i - 1
  end

  days
end
```