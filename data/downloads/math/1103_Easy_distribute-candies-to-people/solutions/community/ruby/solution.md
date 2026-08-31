# Ruby solution: while loop and get index of person by modulo operation.

**Author:** user9697N
**Votes:** 1
**Link:** [https://leetcode.com/problems/distribute-candies-to-people/solutions/788026/](https://leetcode.com/problems/distribute-candies-to-people/solutions/788026/)

---

##### Leetcode: 1103. Distribute Candies to People.

Create loop that iterates until there more than zero candies and two variables amount of candies to give and index, index grows on each iteration and amount grows too. To get index of person to add amount of candies modulo operation could be implemented or rest of division index variable by number of people. In each iteration delete amount from candies. If there less candies than amount for gift give all the rest of candies to a person.

Ruby code:
```Ruby
# Leetcode: 1103. Distribute Candies to People.
# https://leetcode.com/problems/distribute-candies-to-people/
# Runtime: 36 ms, faster than 85.71% of Ruby online submissions for Distribute Candies to People.
# Memory Usage: 9.7 MB, less than 14.29% of Ruby online submissions for Distribute Candies to People.
# @param {Integer} candies
# @param {Integer} num_people
# @return {Integer[]}
def distribute_candies(candies, num_people)
    arr = Array.new(num_people,0)
    i,amount = 0,1
    while candies > 0
        if amount <= candies
            arr[i%num_people] += amount
            candies -= amount
            amount += 1
        else
            arr[i%num_people] += candies
            candies = 0
        end
        i += 1
    end
    arr
end
```