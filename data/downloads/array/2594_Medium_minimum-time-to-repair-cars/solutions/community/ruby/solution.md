# Ruby, Binary Search (Using Range#bsearch)

**Author:** kahtava
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-time-to-repair-cars/solutions/5337327/](https://leetcode.com/problems/minimum-time-to-repair-cars/solutions/5337327/)

---

# Code
```
def repair_cars(ranks, cars)
  can_repair = ->(target) do
    total_cars = 0
    ranks.each do |rank|
      total_cars += Math.sqrt(target / rank).to_i
      return true if total_cars >= cars
    end
    false
  end

  (1..ranks.max * cars ** 2).bsearch { |target| can_repair.call(target) }
end
```