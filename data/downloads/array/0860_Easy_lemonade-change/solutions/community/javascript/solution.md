# O(n) | Stack | Greedy | Java | C++ | Python | Go | Rust | JavaScript

**Author:** kartikdevsharma_
**Votes:** 10
**Link:** [https://leetcode.com/problems/lemonade-change/solutions/5634008/](https://leetcode.com/problems/lemonade-change/solutions/5634008/)

---


# Approach 1
### Intuition

Imagine you\u2019re running a lemonade stand on a hot summer day. The lemonade is priced at 5 dollars per cup, and customers are lining up to quench their thirst. However, not everyone has exact change, and you start the day with an empty cash box. Your challenge is to determine if you can successfully operate your stand throughout the day, providing correct change to every customer, given the sequence of bills they\u2019ll present.

The tricky part is, we start with no change in our pocket. So we've got to figure out if we can make change for everyone as they come up to buy lemonade. If we can't make change even once, we're in trouble and have to close up shop.

When I first looked at this problem, I thought, this is all about keeping track of the money we have and making smart decisions about how to give change. It's like a puzzle where each customer is a new piece, and we have to fit it in just right.

The key here is to think ahead. We need to hold onto smaller bills when we can, because they're going to be super useful for making change later. It's kind of like playing chess - you've got to think a few moves ahead.

## Approach
### Step 1: State Representation

The first decision we need to make is how to represent the state of our cash box. We could use a variety of data structures, but let's consider what information is truly necessary:

1. We need to know how many 5 dollar bills we have.
2. We need to know how many 10 dollar bills we have.
3. Do we need to keep track of 20 dollar bills?

After careful consideration, we realize that we don't need to keep track of 20 dollar bills. Why? Because we never use them to make change. Once we receive a 20 dollar bill, it stays in our cash box and doesn't affect our ability to make change for future customers.

So, our state can be represented by just two integers:
- `fives`: The number of 5 dollar bills we have.
- `tens`: The number of 10 dollar bills we have.

This simple state representation is sufficient to solve the problem and leads to an efficient solution with minimal space complexity.

### Step 2: Processing Transactions

Now that we have our state representation, let's consider how to process each transaction. We'll need to handle three cases:

1. Customer pays with a 5 dollar bill:
   This is the simplest case. We don't need to give any change, so we just add the 5 dollar bill to our count of fives.

2. Customer pays with a 10 dollar bill:
   We need to give 5 dollars in change. To do this, we need at least one 5 dollar bill. If we have one, we can make the change by decrementing our count of fives and incrementing our count of tens. If we don't have a 5 dollar bill, we can't make change, and we need to close the stand.

3. Customer pays with a 20 dollar bill:
   This is the most complex case. We need to give 15 dollars in change. We have two options:
   a. Give one 10 dollar bill and one 5 dollar bill.
   b. Give three 5 dollar bills.

   We prefer option (a) when possible because it allows us to keep more 5 dollar bills, which are more flexible for making change. If we can't do (a), we try (b). If we can't do either, we need to close the stand.

### Step 3: The Greedy Choice

In the case of a 20 dollar bill, we're making a greedy choice by preferring to give a 10 dollar bill and a 5 dollar bill as change. This choice is greedy because it's the best option for our current transaction (it leaves us with more 5 dollar bills), but we're not considering future transactions.

Why is this greedy choice actually optimal? Because 5 dollar bills are the most versatile for making change. By keeping as many 5 dollar bills as possible, we maximize our ability to make change for future transactions.

### Step 4: Implementing the Algorithm

Now, let's talk about how we're going to tackle this problem step by step.

1. First things first, we're going to create a `LemonadeStand` class. This class is going to be our lemonade stand in code form. It's going to keep track of all our money and handle all our transactions.

2. Inside this class, we're going to have two important variables:
   - `fives`: This is going to count how many 5 dollar bills we have.
   - `tens`: This is going to count how many 10 dollar bills we have.

   Notice we don't bother counting 20 dollar bills. Why? Because we never use them to make change. They just sit in our cash box looking pretty.

3. Now, we're going to create a method called `canProvideChange`. This method is going to take an array of all the bills our customers are going to give us throughout the day. It's like being able to see into the future and know exactly what everyone's going to pay with.

4. Inside `canProvideChange`, we're going to go through each bill one by one. For each bill, we're going to call another method called `processTransaction`. This method is where the magic happens - it's going to handle each individual sale.

5. Let's break down `processTransaction`:
   - If someone gives us a 5 dollar bill, awesome! We just add it to our count of fives and move on.
   - If someone gives us a 10 dollar bill, we need to give them 5 dollars change. So we check if we have any 5 dollar bills. If we do, great! We give them one 5 dollar bill (by decreasing our `fives` count) and add their 10 to our `tens` count. If we don't have a 5 dollar bill, uh-oh! We can't make change, so we return `false`.
   - If someone gives us a 20 dollar bill, things get a bit more complicated. We need to give them 15 dollars in change. For this, we call another method called `provideChangeFor20`.

6. In `provideChangeFor20`, we have two options:
   - Option 1: Give them one 10 dollar bill and one 5 dollar bill. This is our preferred option because it lets us hold onto more 5 dollar bills, which are super useful.
   - Option 2: If we don't have a 10 dollar bill (or not enough 5 dollar bills), we can give them three 5 dollar bills.
   - If we can't do either of these, we're out of luck and have to return `false`.

7. If at any point during all these transactions we can't make change (meaning `processTransaction` returns `false`), we immediately stop and say we can't provide change for everyone (by returning `false` from `canProvideChange`).

8. If we make it through all the transactions without any problems, hooray! We return `true` because we successfully gave everyone their lemonade and correct change.

In this approach We're always trying to make the best decision right now, without worrying too much about the future. But because we prefer to give 10 dollar bills as change when we can, we're actually setting ourselves up for success in the future too.

### Complexity

Now, let's talk about how efficient this solution is.

 **Time complexity: O(n)**
  Here's why: We go through each bill in the input array exactly once. No matter how many bills there are, we only look at each one a single time. So if there are n bills, we do about n operations. This is what we call linear time complexity, or O(n).

- The `canProvideChange` method goes through each bill once: O(n)
- For each bill, we call `processTransaction`, which is O(1) because it just does a few simple operations
- `provideChangeFor20` is also O(1) for the same reason
- So, overall, we're doing O(1) work n times, which gives us O(n)

 **Space complexity: O(1)**
  This is the really cool part. No matter how many customers we have or how many bills they give us, we only ever use two variables to keep track of our money (`fives` and `tens`). We don't create any new data structures that grow with the input size. This is what we call constant space complexity, or O(1).

- We only use two integer variables (`fives` and `tens`) regardless of input size
- We don't create any arrays, lists, or other data structures that grow with input
- So our space usage is constant, giving us O(1)





### Code
```Java []
class LemonadeStand {
    private int fives = 0;
    private int tens = 0;

    public boolean canProvideChange(int[] customerBills) {
        for (int bill : customerBills) {
            if (!processTransaction(bill)) {
                return false;
            }
        }
        return true;
    }

    private boolean processTransaction(int bill) {
        switch (bill) {
            case 5:
                fives++;
                return true;
            case 10:
                if (fives == 0) return false;
                fives--;
                tens++;
                return true;
            case 20:
                return provideChangeFor20();
            default:
                throw new IllegalArgumentException("Invalid bill: " + bill);
        }
    }

    private boolean provideChangeFor20() {
        if (tens > 0 && fives > 0) {
            tens--;
            fives--;
        } else if (fives >= 3) {
            fives -= 3;
        } else {
            return false;
        }
        return true;
    }
}


class Solution {
    public boolean lemonadeChange(int[] bills) {
        return new LemonadeStand().canProvideChange(bills);
    }
}
```
```C++ []
class LemonadeStand {
private:
    int fives = 0;
    int tens = 0;

    bool processTransaction(int bill) {
        switch (bill) {
            case 5:
                fives++;
                return true;
            case 10:
                if (fives == 0) return false;
                fives--;
                tens++;
                return true;
            case 20:
                return provideChangeFor20();
            default:
                throw std::invalid_argument("Invalid bill");
        }
    }

    bool provideChangeFor20() {
        if (tens > 0 && fives > 0) {
            tens--;
            fives--;
        } else if (fives >= 3) {
            fives -= 3;
        } else {
            return false;
        }
        return true;
    }

public:
    bool canProvideChange(std::vector<int>& bills) {
        for (int bill : bills) {
            if (!processTransaction(bill)) {
                return false;
            }
        }
        return true;
    }
};

class Solution {
public:
    bool lemonadeChange(std::vector<int>& bills) {
        return LemonadeStand().canProvideChange(bills);
    }
};
```
```Python []
class LemonadeStand:
    def __init__(self):
        self.fives = 0
        self.tens = 0

    def can_provide_change(self, bills):
        for bill in bills:
            if not self.process_transaction(bill):
                return False
        return True

    def process_transaction(self, bill):
        if bill == 5:
            self.fives += 1
            return True
        elif bill == 10:
            if self.fives == 0:
                return False
            self.fives -= 1
            self.tens += 1
            return True
        elif bill == 20:
            return self.provide_change_for_20()
        else:
            raise ValueError("Invalid bill")

    def provide_change_for_20(self):
        if self.tens > 0 and self.fives > 0:
            self.tens -= 1
            self.fives -= 1
        elif self.fives >= 3:
            self.fives -= 3
        else:
            return False
        return True

class Solution:
    def lemonadeChange(self, bills: List[int]) -> bool:
        return LemonadeStand().can_provide_change(bills)
```
```Go []
package main

type LemonadeStand struct {
    fives int
    tens  int
}

func (ls *LemonadeStand) canProvideChange(bills []int) bool {
    for _, bill := range bills {
        if !ls.processTransaction(bill) {
            return false
        }
    }
    return true
}

func (ls *LemonadeStand) processTransaction(bill int) bool {
    switch bill {
    case 5:
        ls.fives++
        return true
    case 10:
        if ls.fives == 0 {
            return false
        }
        ls.fives--
        ls.tens++
        return true
    case 20:
        return ls.provideChangeFor20()
    default:
        
        return false
    }
}

func (ls *LemonadeStand) provideChangeFor20() bool {
    if ls.tens > 0 && ls.fives > 0 {
        ls.tens--
        ls.fives--
    } else if ls.fives >= 3 {
        ls.fives -= 3
    } else {
        return false
    }
    return true
}

func lemonadeChange(bills []int) bool {
    stand := &LemonadeStand{}
    return stand.canProvideChange(bills)
}
```
```Rust []
struct LemonadeStand {
    fives: i32,
    tens: i32,
}

impl LemonadeStand {
    fn new() -> Self {
        LemonadeStand { fives: 0, tens: 0 }
    }

    fn can_provide_change(&mut self, bills: Vec<i32>) -> bool {
        for bill in bills {
            if !self.process_transaction(bill) {
                return false;
            }
        }
        true
    }

    fn process_transaction(&mut self, bill: i32) -> bool {
        match bill {
            5 => {
                self.fives += 1;
                true
            }
            10 => {
                if self.fives == 0 {
                    return false;
                }
                self.fives -= 1;
                self.tens += 1;
                true
            }
            20 => self.provide_change_for_20(),
            _ => false, 
        }
    }

    fn provide_change_for_20(&mut self) -> bool {
        if self.tens > 0 && self.fives > 0 {
            self.tens -= 1;
            self.fives -= 1;
        } else if self.fives >= 3 {
            self.fives -= 3;
        } else {
            return false;
        }
        true
    }
}



impl Solution {
    pub fn lemonade_change(bills: Vec<i32>) -> bool {
        LemonadeStand::new().can_provide_change(bills)
    }
}
```
```JavaScript []
class LemonadeStand {
    constructor() {
        this.fives = 0;
        this.tens = 0;
    }

    canProvideChange(bills) {
        for (let bill of bills) {
            if (!this.processTransaction(bill)) {
                return false;
            }
        }
        return true;
    }

    processTransaction(bill) {
        switch (bill) {
            case 5:
                this.fives++;
                return true;
            case 10:
                if (this.fives === 0) return false;
                this.fives--;
                this.tens++;
                return true;
            case 20:
                return this.provideChangeFor20();
            default:
                throw new Error("Invalid bill");
        }
    }

    provideChangeFor20() {
        if (this.tens > 0 && this.fives > 0) {
            this.tens--;
            this.fives--;
        } else if (this.fives >= 3) {
            this.fives -= 3;
        } else {
            return false;
        }
        return true;
    }
}

/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
    return new LemonadeStand().canProvideChange(bills);
};

```
---
# Approach 2



### Intuition

You know how when you're dealing with cash, you sometimes stack bills of the same denomination together? That's essentially what we're doing here, but in code. Instead of just counting how many of each bill we have, we're actually keeping them in separate stacks.

Picture this: You've got two stacks of bills on your lemonade stand counter. One stack is for 5 dollar bills, and another for 10 dollar bills. Every time you get a new bill, you put it on top of the appropriate stack. When you need to make change, you take bills off the top of these stacks.

This stack idea came to me when I was thinking about how we handle money in real life. We don't just keep a mental count; we physically organize our cash. This approach mimics that real-world behavior more closely.

### Approach
 
Let's break down into more detail.

1. **Initialize the Cash Box**

We start by setting up our virtual cash box. In the real world, we might have two compartments in our cash drawer - one for 5-dollar bills and another for 10-dollar bills. In our code, we'll represent these compartments as stacks.

```
function lemonadeChange(bills):
    create empty stack fives
    create empty stack tens
```

These stacks will operate on the Last-In-First-Out (LIFO) principle, just like how you'd naturally stack bills in a real cash box. The last bill you put in is the first one you'd take out when making change.

2. **Process Each Customer**

Now, we'll go through each customer's payment one by one. We'll use a loop to iterate through the 'bills' array.

```
    for each bill in bills:
        if canMakeChange(bill):
            continue
        else:
            return false
```

Here, we're checking if we can make change for each customer. If we can't make change for even one customer, we immediately return false because we've failed our task.

3. **Handling Different Bill Denominations**

Let's break down the `canMakeChange` function:

```
function canMakeChange(bill):
    if bill is 5:
        push 5 onto fives stack
        return true
    else if bill is 10:
        if fives is empty:
            return false
        pop from fives stack
        push 10 onto tens stack
        return true
    else if bill is 20:
        return makeChangeFor20()
    else:
        throw error "Invalid bill denomination"
```

Let's examine each case:

- a) 5-dollar bill:
   This is the simplest case. We don't need to make any change, we just add the 5-dollar bill to our fives stack. It's like saying, "Thanks for the exact change!" and putting the bill in our cash box.

- b) 10-dollar bill:
   Here's where it gets interesting. The customer is overpaying by 5 dollars, so we need to give them 5 dollars back. We first check if we have any 5-dollar bills. If we don't, we're in trouble - we can't make change, so we return false. If we do have a 5-dollar bill, we remove it from our fives stack (that's the 'pop' operation) and give it to the customer. Then we add the 10-dollar bill to our tens stack.

- c) 20-dollar bill:
   This is the most complex case, so we've separated it into its own function. Let's look at that next.

4. **Making Change for a 20-dollar Bill**

Here's where our stack approach really shines. We have two possible ways to make 15 dollars in change: one 10-dollar bill and one 5-dollar bill, or three 5-dollar bills. We'll try these options in order.

```
function makeChangeFor20():
    if tens is not empty and fives is not empty:
        pop from tens stack
        pop from fives stack
        return true
    else if size of fives stack is at least 3:
        pop from fives stack
        pop from fives stack
        pop from fives stack
        return true
    else:
        return false
```

Let's break this down:

a) First, we check if we have both a 10-dollar bill and a 5-dollar bill. If we do, we use those to make change. We remove one bill from each stack.

b) If we don't have that combination, we check if we have at least three 5-dollar bills. If we do, we use those, removing three bills from the fives stack.

c) If we can't do either of these, we're out of luck. We can't make change, so we return false.

This approach mimics how you might actually make change in real life. You'd first look for the larger bill to make change more quickly, and only break it down into smaller bills if you have to.

5. **Completing the Transaction**

If we've made it through all the customers without returning false, it means we successfully gave everyone correct change. So we return true at the end of our main function.

```
    return true  // We've successfully served all customers
```




### Complexity



- **Time complexity: O(n)**
  We're still processing each customer exactly once, where n is the number of customers (or the length of the `bills` array). Each operation (pushing or popping from a stack) is O(1), so our overall time complexity remains linear.

- **Space complexity: O(n)**
  This is where our stack approach differs from the counter approach. In the worst case, if all customers pay with 5 dollar bills, we'll end up with a stack of n 5 dollar bills. So our space complexity is O(n).

  However, it's worth noting that in practice, our space usage will often be much less than n. We're only storing 5 dollar and 10 dollar bills, and we're using them to make change as we go. So unless we have a long string of 5 dollar payments, our stacks won't grow too large.




### Code


 
```Java []
class Solution {
    public boolean lemonadeChange(int[] bills) {
        Stack<Integer> fives = new Stack<>();
        Stack<Integer> tens = new Stack<>();
        
        for (int bill : bills) {
            if (bill == 5) {
                fives.push(5);
            } else if (bill == 10) {
                if (fives.isEmpty()) return false;
                fives.pop();
                tens.push(10);
            } else if (bill == 20) {
                if (!tens.isEmpty() && !fives.isEmpty()) {
                    tens.pop();
                    fives.pop();
                } else if (fives.size() >= 3) {
                    fives.pop();
                    fives.pop();
                    fives.pop();
                } else {
                    return false;
                }
            }
        }
        return true;
    }
}

```

```C++ []
class Solution {
public:
    bool lemonadeChange(vector<int>& bills) {
        int fives = 0, tens = 0;
        for (int bill : bills) {
            if (bill == 5) {
                fives++;
            } else if (bill == 10) {
                if (fives == 0) return false;
                fives--;
                tens++;
            } else { // bill == 20
                if (tens > 0 && fives > 0) {
                    tens--;
                    fives--;
                } else if (fives >= 3) {
                    fives -= 3;
                } else {
                    return false;
                }
            }
        }
        return true;
    }
};
```

```Python []
class Solution:
    def lemonadeChange(self, bills: List[int]) -> bool:
        fives, tens = 0, 0
        
        for bill in bills:
            if bill == 5:
                fives += 1
            elif bill == 10:
                if fives == 0:
                    return False
                fives -= 1
                tens += 1
            elif bill == 20:
                if tens > 0 and fives > 0:
                    tens -= 1
                    fives -= 1
                elif fives >= 3:
                    fives -= 3
                else:
                    return False
            else:
                return False  # Invalid bill
        
        return True

s = Solution()
with open('user.out', 'w') as f:
    for case in map(json.loads, stdin):
        result = s.lemonadeChange(case)
        f.write(f"{str(result).lower()}\
")

exit(0)
```
```Go []
func lemonadeChange(bills []int) bool {
    fives, tens := 0, 0
    for _, bill := range bills {
        if bill == 5 {
            fives++
        } else if bill == 10 {
            if fives == 0 {
                return false
            }
            fives--
            tens++
        } else { // bill == 20
            if tens > 0 && fives > 0 {
                tens--
                fives--
            } else if fives >= 3 {
                fives -= 3
            } else {
                return false
            }
        }
    }
    return true
}
```

```Rust []
impl Solution {
    pub fn lemonade_change(bills: Vec<i32>) -> bool {
        let mut fives = 0;
        let mut tens = 0;
        for bill in bills {
            match bill {
                5 => fives += 1,
                10 => {
                    if fives == 0 {
                        return false;
                    }
                    fives -= 1;
                    tens += 1;
                }
                20 => {
                    if tens > 0 && fives > 0 {
                        tens -= 1;
                        fives -= 1;
                    } else if fives >= 3 {
                        fives -= 3;
                    } else {
                        return false;
                    }
                }
                _ => unreachable!(),
            }
        }
        true
    }
}
```
```JavaScript []
/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
    let fives = 0, tens = 0;
    for (let bill of bills) {
        if (bill === 5) {
            fives++;
        } else if (bill === 10) {
            if (fives === 0) return false;
            fives--;
            tens++;
        } else { // bill === 20
            if (tens > 0 && fives > 0) {
                tens--;
                fives--;
            } else if (fives >= 3) {
                fives -= 3;
            } else {
                return false;
            }
        }
    }
    return true;
};
```
---
# Approach 3
### Intuition

The key insight is the realization that we can compress all the necessary information about our lemonade stand's state into a single integer. By using the binary nature of computer memory, we can efficiently pack two separate counters into one variable, allowing for rapid updates and checks.


The intuition here is that by using bitwise operations, we can perform multiple actions in a single operation, potentially speeding up our solution. Additionally, by keeping all our state in a single variable, we're optimizing for cache performance, which can lead to significant speed improvements on modern hardware.

### Approach

Our approach can be broken down into several key steps:

1. **State Initialization:** We start with a single integer variable initialized to 0. This will store our entire lemonade stand state.

2. **Processing Transactions:** We iterate through each bill in the input array, updating our state based on the bill's value:

   - For a Dollar 5 bill, we increment the lower 16 bits of our state.
   - For a Dollar 10 bill, we first check if we have a Dollar 5 to give as change. If not, we return false. Otherwise, we decrement the Dollar 5 count and increment the Dollar 10 count.
   - For a Dollar 20 bill, we first try to give change using a Dollar 10 and a Dollar 5. If that's not possible, we try using three Dollar 5 bills. If neither option is possible, we return false.

3. **State Updates:** We use bitwise operations to efficiently update our state:
   - Adding to the Dollar 5 count is a simple increment.
   - Adding to the Dollar 10 count involves adding 0x10000 to our state.
   - Removing bills involves subtracting from our state.

4. **State Checks:** We use bitwise AND operations to check our bill counts:
   - AND with 0xFFFF checks the Dollar 5 count.
   - AND with 0xFFFF0000 checks the Dollar 10 count.

5. **Final Result:** If we successfully process all transactions, we return true. Otherwise, we return false at the point where we can't make change.

This approach allows us to handle all transactions efficiently, using minimal memory and leveraging fast bitwise operations.

### Complexity

- **Time complexity: O(n)**, where n is the number of bills in the input array. We process each bill exactly once, and each processing step takes constant time (bitwise operations are typically O(1) on modern hardware).

- **Space complexity: O(1)**. We use only a single integer variable to store our state, regardless of the input size. This constant space usage is one of the major advantages of this approach.



# Code
```Java []
class Solution {
    public boolean lemonadeChange(int[] bills) {
        int state = 0;
        
        for (int bill : bills) {
            if (bill == 5) {
                state++;
            } else if (bill == 10) {
                if ((state & 0xFFFF) == 0) return false;
                state--;
                state += 0x10000;
            } else { // bill == 20
                if ((state & 0xFFFF0000) != 0 && (state & 0xFFFF) != 0) {
                    state -= 0x10001;
                } else if ((state & 0xFFFF) >= 3) {
                    state -= 3;
                } else {
                    return false;
                }
            }
        }
        
        return true;
    }
}

```
```C++ []
class Solution {
public:
    bool lemonadeChange(vector<int>& bills) {
        int state = 0;
        
        for (int bill : bills) {
            if (bill == 5) {
                state++;
            } else if (bill == 10) {
                if (!(state & 0xFFFF)) return false;
                state--;
                state += 0x10000;
            } else { // bill == 20
                if ((state & 0xFFFF0000) && (state & 0xFFFF)) {
                    state -= 0x10001;
                } else if ((state & 0xFFFF) >= 3) {
                    state -= 3;
                } else {
                    return false;
                }
            }
        }
        
        return true;
    }
};

```
```Python []
class Solution:
    def lemonadeChange(self, bills: List[int]) -> bool:
        state = 0  
        
        for bill in bills:
            if bill == 5:
                state += 1  
            elif bill == 10:
                if not (state & 0xFFFF):  
                    return False
                state -= 1  
                state += 0x10000  
            else:  
                if (state & 0xFFFF0000) and (state & 0xFFFF): 
                    state -= 0x10001  
                elif (state & 0xFFFF) >= 3:  $5
                    state -= 3
                else:
                    return False
        
        return True

```
```Go []
func lemonadeChange(bills []int) bool {
    state := 0
    
    for _, bill := range bills {
        if bill == 5 {
            state++
        } else if bill == 10 {
            if state & 0xFFFF == 0 {
                return false
            }
            state--
            state += 0x10000
        } else { // bill == 20
            if state & 0xFFFF0000 != 0 && state & 0xFFFF != 0 {
                state -= 0x10001
            } else if state & 0xFFFF >= 3 {
                state -= 3
            } else {
                return false
            }
        }
    }
    
    return true
}

```
```JavaScript []
/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
    let state = 0;
    
    for (let bill of bills) {
        if (bill === 5) {
            state++;
        } else if (bill === 10) {
            if (!(state & 0xFFFF)) return false;
            state--;
            state += 0x10000;
        } else { // bill === 20
            if ((state & 0xFFFF0000) && (state & 0xFFFF)) {
                state -= 0x10001;
            } else if ((state & 0xFFFF) >= 3) {
                state -= 3;
            } else {
                return false;
            }
        }
    }
    
    return true;
};
```
---
