# Fastest solution using simple single line looping for middle soldier

**Author:** rajkamallashkari
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-number-of-teams/solutions/5554434/](https://leetcode.com/problems/count-number-of-teams/solutions/5554434/)

---

# Intuition & Approach

We can try picking all the soldiers as a middle soldier of a new team and sum of count of such teams possible for each soldier. Then it becomes just a combination problem, in which total number of ways for anything having multiple parts(two in this case for choosing right and left soldiers) is the product of number of possible ways of those individual parts.

```
Number of teams having current soldier as middle soldier
  = Number of soldiers with lesser rating on left * Number of soldiers with higher rating on right
  + Number of soldiers with higher rating on right * Number of soldiers with lesser rating on right

Answer to problem = Sum of the above equation for all the soldiers
```

# Complexity
- Time complexity: $$O(N^2)$$ // count loops inside each_with_index loop

- Space complexity: $$O(1)$$ // count variable 

# Code
```
# @param {Integer[]} rating
# @return {Integer}
def num_teams(rating)
    count = 0
    rating.each_with_index { |r, i| count += rating[i...].count { |n| n < r } * rating[..i].count { |n| n > r } + rating[i...].count { |n| n > r } * rating[..i].count { |n| n < r } }
    count
end
```
Expanded version for better readability:
```
# @param {Integer[]} rating
# @return {Integer}
def num_teams(rating)
    count = 0
    rating.each_with_index do |r, i|
        count += rating[i...].count { |n| n < r } * rating[..i].count { |n| n > r }
               + rating[i...].count { |n| n > r } * rating[..i].count { |n| n < r }
    end
    count
end
```
Instead of defining the variable count, we can also use map to generate an array and return its sum. But this will increase the space complexity to $$O(n)$$
```
# @param {Integer[]} rating
# @return {Integer}
def num_teams(rating)
    rating.map.with_index { |r, i| count += rating[i...].count { |n| n < r } * rating[..i].count { |n| n > r } + rating[i...].count { |n| n > r } * rating[..i].count { |n| n < r } }.sum
end

```