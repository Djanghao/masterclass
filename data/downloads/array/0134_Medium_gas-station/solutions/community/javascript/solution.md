# 【Video】2 solutions - O(n) time and O(1) space

**Author:** niits
**Votes:** 80
**Link:** [https://leetcode.com/problems/gas-station/solutions/6003362/](https://leetcode.com/problems/gas-station/solutions/6003362/)

---

# Intuition
We need at least enough gas to cover the cost.

---

# Solution Video

https://youtu.be/XLLZAbtaPOU

### \u2B50\uFE0F\u2B50\uFE0F Don't forget to subscribe to my channel! \u2B50\uFE0F\u2B50\uFE0F

**\u25A0 Subscribe URL**
http://www.youtube.com/channel/UC9RMNwYTL3SXCP6ShLWVFww?sub_confirmation=1

Subscribers: 10,432
Thank you for your support!

---

# Approach

Let's see very simple cases.
```
Input: gas = [3,4], cost = [1,2]
```
In this case,
```
At index 0, 

get 3 gas
use 1 gas to move next
remaining 2 gas
----------------------------------------
At index 1,

get 4 gas (= total 6 gas)
use 2 gas to move next.
remaining 4 gas.

We travel around the circuit once in the clockwise direction.
Then return index `0`.
```

Let's change costs.

```
Input: gas = [3,4], cost = [5,2]
```
In this case,
```
At index 0,

get 3 gas
use 5 gas to move next. We are short of gas.

```
That's why we try to start from index `1` instead of index `0`.

```
At index 1,

get 4 gas
use 2 gas to move next
remaining 2 gas
----------------------------------------
At index 0,

get 3 gas(= total 5 gas)
use 5 gas to move next
remaining 0 gas

We travel around the circuit once in the clockwise direction.
Then return index `1`.
```

Let's see `-1` case.

```
Input: gas = [3,4], cost = [1,7]
```
In this case,

```
At index 0,

get 3 gas
use 1 gas to move next
remaining 2 gas
----------------------------------------
At index 1,

get 4 gas (= total 6 gas)
use 7 gas to move next. We are short of gas.
----------------------------------------
Starting from index 1 instead of index 0

get 4 gas
use 7 gas to move next. We are short of gas.

return -1
```

Let's change `-1 case` to `true` case.
We change `3` gas to `4` gas at index `0`.

```
Input: gas = [4,4], cost = [1,7]
```

```
At index 0,

get 4 gas
use 1 gas to move next
remaining 3 gas
----------------------------------------
At index 1,

get 4 gas (= total 7 gas)
use 7 gas to move next
remaining 0 gas

We travel around the circuit once in the clockwise direction.
Then return index `0`.
```



---

\u2B50\uFE0F Points

The key point in solving this problem is that **if the total amount of gas is greater than or eaqul to costs, then even if gas runs out midway, starting from a different location will allow a full circuit.**

Thus, by selecting a starting point where gas does not run out in the end, we can determine the answer.

---
 
```
Input: gas = [1,2,3,4,5], cost = [3,4,5,1,2]
```
In this case,
```
total gas = 15
total cost = 15
```
We can definitely travel around the circuit.

Once we know there is a solution, the problem isn\u2019t too difficult since the solution is guaranteed to be unique.

The main logic is to move the starting point to the current index + 1 whenever the gas falls below `0`.

We will start from index `0`.
```
[1,2,3,4,5](= gas)
[3,4,5,1,2](= cost)
 i

current gas = 0
start = 0
```
`Current gas` is `1` but to move to next index, we have to subtract `cost` from `current gas`.

```
current gas = 1 - 3
= -2
```
We can't move to index `1` from index `0`, so we should move starting point to index `1`. Don't forget to reset `current gas` to `0`, because when we move the starting point, that is a new start.

I'll speed up.
```
[1,2,3,4,5](= gas)
[3,4,5,1,2](= cost)
   i

current gas = 0
start = 1

current gas = 2 - 4
Move start point to next.
Reset current gas to 0.
----------------------------------

[1,2,3,4,5](= gas)
[3,4,5,1,2](= cost)
     i

current gas = 0
start = 2

current gas = 3 - 5
Move start point to next.
Reset current gas to 0.
----------------------------------
[1,2,3,4,5](= gas)
[3,4,5,1,2](= cost)
       i

current gas = 0
start = 3

current gas = 4 - 1
= 3
```
Now we have enough gas to move to next position, so we don't update the starting point.
```
[1,2,3,4,5](= gas)
[3,4,5,1,2](= cost)
         i

current gas = 3
start = 3

current gas = 3 + 5 - 2
= 6
```
```
return index 3
```

We reached end of array with some gas. We are sure that we can travel around the circuit with the `current gas` and `rest of gas`.

If `current gas` becomes negative within the loop, we know that starting from any index up to that point will not allow us to complete the circuit, so we reset `current gas` to `0`, update start to `i + 1`, and attempt to start again from the next index.

`i + 1` will be the answer if we reach end of array from `i + 1`, because we know that gas we have right now and the rest of gas(= `15`) is greater than or euqal to total costs(= `15`). 

We go back to index `0` with `6` gas in this case. We know that total gas is equal to total costs in this case(`15` vs `15`). That means we can travel around the circuit once in the clockwise direction with `6` gas, even if we are short of gas from index `0` to index `2`. We can use `+6` gas between index `0` and index `2`.

```
At the end of array, we have remaining 6 gas.

At index 0
get 1 gas(= total 7)
use 3 gas

remaing gas: 4
---------------------------------
At index 1
get 2 gas(= total 6)
use 4 gas

remaing gas: 2
---------------------------------
At index 2
get 3 gas(= total 5)
use 5 gas

remaing gas: 0
```
We can travel around the circuit once in the clockwise direction.

```
return 3(= index)
```

---

https://youtu.be/bU_dXCOWHls


# Complexity

Based on Python. Other might be different.

- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

```python []
class Solution:
    def canCompleteCircuit(self, gas: List[int], cost: List[int]) -> int:
        if sum(gas) < sum(cost):
            return -1
                
        curernt_gas = 0
        start = 0
        for i in range(len(gas)):
            curernt_gas += gas[i] - cost[i]
            if curernt_gas < 0:
                curernt_gas = 0
                start = i + 1

        return start
```
```javascript []
var canCompleteCircuit = function(gas, cost) {
    if (gas.reduce((a, b) => a + b, 0) < cost.reduce((a, b) => a + b, 0)) {
        return -1;
    }

    let currentGas = 0;
    let start = 0;

    for (let i = 0; i < gas.length; i++) {
        currentGas += gas[i] - cost[i];
        if (currentGas < 0) {
            currentGas = 0;
            start = i + 1;
        }
    }

    return start;    
};
```
```java []
class Solution {
    public int canCompleteCircuit(int[] gas, int[] cost) {
        int totalGas = 0, totalCost = 0;
        for (int i = 0; i < gas.length; i++) {
            totalGas += gas[i];
            totalCost += cost[i];
        }

        if (totalGas < totalCost) {
            return -1;
        }

        int currentGas = 0;
        int start = 0;

        for (int i = 0; i < gas.length; i++) {
            currentGas += gas[i] - cost[i];
            if (currentGas < 0) {
                currentGas = 0;
                start = i + 1;
            }
        }

        return start;        
    }
}
```
```C++ []
class Solution {
public:
    int canCompleteCircuit(vector<int>& gas, vector<int>& cost) {
        int totalGas = 0, totalCost = 0;
        for (int i = 0; i < gas.size(); i++) {
            totalGas += gas[i];
            totalCost += cost[i];
        }

        if (totalGas < totalCost) {
            return -1;
        }

        int currentGas = 0;
        int start = 0;

        for (int i = 0; i < gas.size(); i++) {
            currentGas += gas[i] - cost[i];
            if (currentGas < 0) {
                currentGas = 0;
                start = i + 1;
            }
        }

        return start;        
    }
};
```

# Step by Step Algorithm

### Step 1: Check if a Solution is Possible
```python
if sum(gas) < sum(cost):
    return -1
```

**Explanation:**  
- First, we check if the total gas available is less than the total cost required to complete the circuit.
- `sum(gas)` calculates the total amount of gas at all stations, and `sum(cost)` calculates the total cost to travel between all stations.
- If `sum(gas) < sum(cost)`, then it\u2019s impossible to complete the circuit, so we return `-1` immediately.

### Step 2: Initialize Variables
```python
current_gas = 0
start = 0
```

**Explanation:**  
- `current_gas` will track the current net gas while iterating through the stations. It is initially set to `0`.
- `start` is the index from which we assume we could potentially complete the circuit. We start with the assumption that `start` is `0`.

### Step 3: Iterate Through Each Station
```python
for i in range(len(gas)):
```

**Explanation:**  
- We iterate over each station using a `for` loop. `i` is the current station index.
- By the end of this loop, we will either find the correct `start` index or confirm that completing the circuit is impossible.

### Step 4: Update Current Gas
```python
current_gas += gas[i] - cost[i]
```

**Explanation:**  
- For each station, we update `current_gas` by adding the difference between the gas available (`gas[i]`) and the cost to travel to the next station (`cost[i]`).
- `gas[i] - cost[i]` represents the net gain or loss in gas for traveling from the current station `i`.

### Step 5: Check if Current Gas Falls Below Zero
```python
if current_gas < 0:
    current_gas = 0
    start = i + 1
```

**Explanation:**  
- If `current_gas` becomes negative, it means starting from the current `start` index won\u2019t allow us to complete the circuit.
- When `current_gas < 0`, we reset `current_gas` to `0` because we need to start from a new point.
- We then update `start` to `i + 1`, as the next station is the new candidate for a starting point.
- This is because any start point before this would also fail, so we can safely ignore all stations up to `i`.

---

### Step 6: Return the Starting Index
```python
return start
```

**Explanation:**  
- After completing the loop, `start` will contain the index of the gas station from which we can complete the circuit.
- Since we already checked that a solution exists (Step 1), this `start` index will be the unique solution.


---

# Bonus

The solution above is $$O(n)$$, but we use sum fuction twice, so more precisely, that is $$O(3n)$$.

Here is real $$O(n)$$ solution. If you understand what I said above, it's not difficult to understand.

We find starting point at first. Then at last, we check total gas is greater than or equal to total costs.

In the first solution above, we check total gas vs total costs at first, then try to find starting point. It's kind of opposite order of algorithm.

```python []
class Solution:
    def canCompleteCircuit(self, gas: List[int], cost: List[int]) -> int:
        start = 0
        total_gas = 0
        current_gas = 0

        for i in range(len(gas)):
            fuel_gain = gas[i] - cost[i]
            total_gas += fuel_gain
            current_gas += fuel_gain

            if current_gas < 0:
                current_gas = 0
                start = i + 1

        return -1 if total_gas < 0 else start
```
```javascript []
var canCompleteCircuit = function(gas, cost) {
    let start = 0;
    let totalGas = 0;
    let currentGas = 0;

    for (let i = 0; i < gas.length; i++) {
        const fuelGain = gas[i] - cost[i];
        totalGas += fuelGain;
        currentGas += fuelGain;

        if (currentGas < 0) {
            currentGas = 0;
            start = i + 1;
        }
    }

    return totalGas < 0 ? -1 : start;    
};
```
```java []
class Solution {
    public int canCompleteCircuit(int[] gas, int[] cost) {
        int start = 0;
        int totalGas = 0;
        int currentGas = 0;

        for (int i = 0; i < gas.length; i++) {
            int fuelGain = gas[i] - cost[i];
            totalGas += fuelGain;
            currentGas += fuelGain;

            if (currentGas < 0) {
                currentGas = 0;
                start = i + 1;
            }
        }

        return totalGas < 0 ? -1 : start;        
    }
}
```
```C++ []
class Solution {
public:
    int canCompleteCircuit(vector<int>& gas, vector<int>& cost) {
        int start = 0;
        int totalGas = 0;
        int currentGas = 0;

        for (int i = 0; i < gas.size(); i++) {
            int fuelGain = gas[i] - cost[i];
            totalGas += fuelGain;
            currentGas += fuelGain;

            if (currentGas < 0) {
                currentGas = 0;
                start = i + 1;
            }
        }

        return totalGas < 0 ? -1 : start;        
    }
};
```
---

Thank you for reading my post. Don't forget to upvote the post!

##### \u2B50\uFE0F Subscribe URL
http://www.youtube.com/channel/UC9RMNwYTL3SXCP6ShLWVFww?sub_confirmation=1

##### \u2B50\uFE0F Twitter
https://twitter.com/CodingNinjaAZ

##### \u2B50\uFE0F My previous video
#57 - Insert Interval

https://youtu.be/LpRqRbH4itk


