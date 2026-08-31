# Ruby || O(n)/O(1)

**Author:** alecn2002
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-ways-to-divide-a-long-corridor/solutions/4337919/](https://leetcode.com/problems/number-of-ways-to-divide-a-long-corridor/solutions/4337919/)

---


# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(1)$$

# Code
```ruby
MOD = 10**9 + 7
SEAT = 'S'
PLANT = 'P'

def number_of_ways(corridor)
    curS, wereSeats, curPlants = 0, false, 0
    ways = corridor.chars.inject(1)  {|res, c|
        case c
            when SEAT
                res = (res * (curPlants + 1)) % MOD if curS.positive? && curS.even?
                curS += 1
                curPlants = 0
            when PLANT then curPlants += 1
        end
        res
    }
    (curS.positive? && curS.even?) ? ways : 0
end
```