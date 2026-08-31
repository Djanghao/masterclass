# Simple Constant O(1) Time/Memory Solution in Ruby

**Author:** sarahjschultz
**Votes:** 0
**Link:** [https://leetcode.com/problems/distribute-money-to-maximum-children/solutions/5559630/](https://leetcode.com/problems/distribute-money-to-maximum-children/solutions/5559630/)

---

# Intuition
The intuition for this problem is that we need to need to identify all of the weird scenarios we need to handle in distributing the money. The best way to do this is to submit your solution to see all of the cases you need to handle. 
 
# Approach
My approach is outlined in comments. But roughly it goes like this -- guard against straightfoward cases. Distribute at least 1 to each child to satisfy the first rule. Guard against cases that happen once you have reduced your money pool, then guard against breaking the final rule (no one gets 4). 

# Complexity
- Time complexity: O(1)
- Space complexity: O(1)
# Code
```

def dist_money(money, children)
  # Return -1 (impossible) if we cannot give every child at least 1
  return -1 if money < children

  # Return children if all children can get 8
  return children if children * 8 == money

  # Now distribute 1 to every child to satisfy first constraint
  money -= children

  # If we don't have at least 7 leftover, then no one can get 8
  # So we return 0
  return 0 if money < 7
  # If giving EVERY child 8 would leave money leftover, then we know
  # at least one of the children needs to get the remainder, so we 
  # return one less than total children for our answer 
  return children - 1 if money > children * 7

  # Divide money by 7 to know how many children can get exactly 8 (they already have 1)
  # Keep the remainder for future calcs
  eights, rem = money.divmod(7)

  # If we have one fewer eights than we have children AND our remainder is exactly 3, 
  # then we need to avoid giving the non-8 child 4 by taking away one 8 and redistributing
  # This means we will have eights - 1 as our maximum 8 distribution
  # Otherwise, we can always avoid 4, and thus we return all the eights as our answer
  if eights == children - 1 && rem == 3
    eights - 1
  else
    eights
  end
end
```