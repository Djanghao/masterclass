# Absolute Worst Possible Ruby Solution, Simple as

**Author:** tomrendle
**Votes:** 0
**Link:** [https://leetcode.com/problems/lemonade-change/solutions/5809379/](https://leetcode.com/problems/lemonade-change/solutions/5809379/)

---

Humbling indeed. I thought this would be simple and found out it is I who is simple. 
# Code
```ruby []
# @param {Integer[]} bills
# @return {Boolean}
def lemonade_change(bills)
    fives = 0
    tens = 0
    twenties = 0
    change = 0
    bills.each do |b|
    change = 0
        if b == 5
            fives += 1
        elsif b == 10
            tens += 1
        else 
            twenties += 1
        end
        if b - 5 > 0
            change = b - 5
        end
        if change >= 20 && twenties > 0
            num = change / 20
            if num > twenties
            twenties -= num
            change -= 20
            else
            change -= (num * 20)
            twenties -= num
            end
        end
        if change >= 10 && tens > 0
            num = change / 10
            if num > tens
            tens -= num
            change -= 10
            else
            change -= (num * 10)
            tens -= num
            end
        end
        if change >= 5 && fives > 0
            num = change / 5
            if num > fives
            fives -= num
            change -= num*5
            else
            change -= (num * 5)
            fives -= num
            end
        end
    return false if change != 0 || fives < 0
    end
    return  true
end
```