# Ruby Solution 100%/100%

**Author:** dtkalla
**Votes:** 0
**Link:** [https://leetcode.com/problems/design-an-atm-machine/solutions/3436592/](https://leetcode.com/problems/design-an-atm-machine/solutions/3436592/)

---

# Approach
Initialize: store the count of each bill in an array (smallest to largest)

Deposit: increment corresponding parts of the array by the number of bills

Withdraw:
1. Go through an array of bill values backwards (largest to smallest)
2. For each element, subtract is as many times as you can without making the amount of the number of that bill negative
3. If you end with an amount other than zero, the transaction is impossible, so return [-1]
4. If you end with an amount of 0, withdraw the bill in array (by depositing the opposite, -1 instead of 1) and return the array 

# Complexity
- Time complexity:
$$O(1)$$

- Space complexity:
$$O(1)$$

# Code
```
class ATM

    def initialize()
        @bills = [0,0,0,0,0]
    end


    def deposit(banknotes_count)
        banknotes_count.each_with_index { |val,i| @bills[i] += val }
    end


    def withdraw(amount)
        nums = [20,50,100,200,500]
        bills = @bills.dup
        arr = []
        i = 4

        until nums.empty?
            k = 0
            num = nums.pop

            n = [amount/num, bills[i]].min
            amount -= num * n
            bills[i] -= n
            k += n

            arr.unshift(k)
            i -= 1
        end

        return [-1] if amount != 0

        deposit(arr.map { |n| -n })
        arr
    end

end
```