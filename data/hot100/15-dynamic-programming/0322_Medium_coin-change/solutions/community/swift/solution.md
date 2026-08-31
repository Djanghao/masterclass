# Swift solution using Dynamic Programming

**Author:** spacepyro
**Votes:** 13
**Link:** [https://leetcode.com/problems/coin-change/solutions/2292176/](https://leetcode.com/problems/coin-change/solutions/2292176/)

---

There are a handful of ways to solve this problem! One way that feels intuitive (to me at least) is to solve this problem is using dynamic programming from a bottom-up approach. 

When approaching a problem that requires finding something that builds on top of itself, we have to consider the following question: can existing sub-solutions help us solve a problem? In this case, it certainly can. What we'll end up doing is solving for smaller amounts in order to build a solution for larger amounts.

Let's use the test case as an example:
```
Coins: [1, 2, 5]
Amount: 11
```
Here, we need to figure out the minimum number of coins we can use to solve for a total amount of 11. What combination of subsolutions could we use to determine this value? In other words, if we knew the minimum number of coins that we needed for 10, then based on observation, we could think that `sol(11)` = `sol(10)` + coin 1 would be a solution. The idea here is that we want to figure out what the solution of smaller amounts is in order to solve for a larger amount.

Consider making an array of size `amount + 1`, which will hold the minimum solution of each sub-amount, up to the total amount. We'll initialize each value inside the array with a large enough value that we know would exceed the highest theoretical amount of coin combinations. In this case, we'll use `amount + 1`. If that sounds confusing, think of it this way: with a total amount of 11, it would be impossible to have 11 + 1 coins as the minimum (let alone, impossible entirely!).

For an amount of 0, we know that there are no coins that could add up to this, so we know intuitively that this must be 0. Our current solution array would look something like this:

```
solution = [0, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12]
```

Now what we should do is iteratively compute each subsolution. We'll start with index `1`. In this for loop, we want to iterate through each coin and determine which one can yield the smallest result. So this would look something like the following:

```swift
var solutions = [Int](repeating: amount + 1, count: amount + 1)
solutions[0] = 0

for currentAmount in 1...amount {
    for coin in coins {
	    // TODO
	}
}
```

#### Iteration 1

For the first iteration, we are trying to solve when `amount = 1`. As we iterate through each coin, we want to utilize previous calculated subsolutions and add this coin on top of that solution. When `coin = 1`, we want to see if there's a solution that exists for the current amount minus the current denomination amount (which is 1). In this case, we want to see if the solution to `amount[0]` + `1` is smaller than what the current value of  `amount[1]` is. In this case, it is, so we'll set this value in our solutions array:

```
solution = [0, 1, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12]
```

The next loop will give us `coin = 2`. But wait: 2 wouldn't even work for `amount = 1`! Additionally, we'd hit an OOB exception here. We'll want to add a conditional to make sure we don't consider values that are impossible to compute (which is shown at the end). The same applies with `coin = 5`.

#### Iteration 2

Now, we move to our next amount: 2. We apply the same logic, with each coin:
1. When `coin = 1`, the minimum number of coins we can use for a solution would be 1 + `amount[2 - 1] => 1` = 2.
2. When `coin = 2`, the minimum number of coins we can use for a solution would be 1 + `amount[2 - 2] => 0` = 1.
3. We can't use `coin = 5` because it is impossible to make an amount of 2 using 5.

We can see here that the iteration will return `1` as the minimum number for `amount[2]`:

```
solution = [0, 1, 1, 12, 12, 12, 12, 12, 12, 12, 12, 12]
```

#### Iteration 3

Same with `amount = 3`:
1. When `coin = 1`, the minimum number of coins we can use for a solution would be 1 + `amount[3 - 1] => 1` = 2.
2. When `coin = 2`, the minimum number of coins we can use for a solution would be 1 + `amount[3 - 2] => 1` = 2.
3. We still can't use `coin = 5`.

Our solution array now becomes:

```
solution = [0, 1, 1, 2, 12, 12, 12, 12, 12, 12, 12, 12]
```

Think about the solution to the above as such: we have already determined that, when the amount we're looking for is 2, the minimum number of coins we can use is 1. Adding another coin to the mix would make the result of that amount equal 2.

#### Iteration 10

A more interesting example would be when `amount = 10` (I've updated the solution array to the 10th iteration):

```
solution = [0, 1, 1, 2, 2, 1, 2, 2, 3, 3, 12, 12]
```

If we took each coin:
1. When `coin = 1`, the minimum number of coins we can use for a solution would be 1 + `amount[10 - 1] => 3` = 4. The optimal amount for this amount is 5 + 2 + 2 **+ 1**.
2. When `coin = 2`, the minimum number of coins we can use for a solution would be 1 + `amount[10 - 2] => 3` = 4. The optimal amount for this amount is 5 + 2 + 1 **+ 2**.
3. When `coin = 5`, the mimimum number of coins we can use for a solution would be 1 + `amount[10 - 5] => 1` = 2. The optimal amount for this amount is 5 **+ 5**.

#### Complexity

The solution boils down to something relatively simple, with a time complexity of `O(N*M)`, where:
- `N` is the amount, and
- `M` is the number of coins.

The space complexity is `O(N)`, as we need to store a value per each subsolution of the total amount.

#### Solution

```swift
// No need to solve for anything if we have an amount of 0.
guard amount > 0 else { return 0 } 

var solutions = [Int](repeating: amount + 1, count: amount + 1)
solutions[0] = 0

for currentAmount in 1...amount {
    for coin in coins where coin <= currentAmount {
		solutions[currentAmount] = min(solutions[currentAmount], solutions[currentAmount - coin] + 1)
	}
}

// We return -1 if a solution was not found (in this case, if the value equals the initial value we set as `amount - 1`).
return solutions[amount] != amount + 1 ? solutions[amount] : -1
```

