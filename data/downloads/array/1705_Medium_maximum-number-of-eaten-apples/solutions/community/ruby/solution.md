# [Ruby] PriorityQueue/Heap. Sort queue by date when apples will rot

**Author:** shhavel
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-number-of-eaten-apples/solutions/988183/](https://leetcode.com/problems/maximum-number-of-eaten-apples/solutions/988183/)

---

# Explanation

Keep available apples within expiration date is a priority queue. Sort queue by expiration date.
At each iteration remove record from the queue while expiration date has come.
Eat one apple onn each day if present. Eat apple with lesser expiration date (first is the queue).

# Ruby code

```ruby
# Add element in ASC sorted Array. Maintain Array sorting. (Kind of a min-heap). 
def heappush(arr, x)
  idx = arr.bsearch_index { |y| (y <=> x) >= 0 } || arr.size
  arr.insert(idx, x)
end

EXPIRATION_DATE = 0
APPLES = 1

def eaten_apples(apples, days)
  eaten_count = 0
  pq = []
  today = 0
  while pq.any? || apples.any?
    pq.shift while pq.any? and (pq.first[EXPIRATION_DATE] <= today or pq.first[APPLES] == 0)

    if apples.any?
      apples_count, shelf_life = apples.shift, days.shift
      heappush(pq, [today + shelf_life, apples_count]) if apples_count > 0 and shelf_life > 0
    end

    if pq.any?
      pq.first[APPLES] -= 1
      eaten_count += 1
    end

    today += 1
  end
  eaten_count
end
```

Time complexity: `O((N + max(days)) * log(N))`