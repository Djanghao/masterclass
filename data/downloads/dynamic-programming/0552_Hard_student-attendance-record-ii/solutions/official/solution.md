# Official Solution

**Link:** [https://leetcode.com/problems/student-attendance-record-ii/solution/](https://leetcode.com/problems/student-attendance-record-ii/solution/)

---

[TOC]

## Solution

---

### Approach 1: Top-Down Dynamic Programming with Memoization

#### Intuition  

A trivial way to approach this problem would be to generate all possible combinations of `'P'`, `'A'`, and `'L'` of length `n`, and then check whether the currently generated combination is eligible for an attendance award (for convenience, let's call the combination eligible for an attendance award a **valid combination**, and its opposite an **invalid combination**). 

![all_combinations](../Figures/552/Slide1.jpg)

> **Note:** This approach will generate all possible combinations, so it is a sub-optimal approach and will result in a TLE. However, understanding this approach is a stepping stone to further optimization.

<br /> 


To generate all combinations of length `n`, we will choose a character from `'P'`, `'A'`, and `'L'` for all `n` positions one by one. 

When we choose a character for the first position, we will be left with `n - 1` positions, so now we have to make a combination of length `n - 1`. We can use a recursive approach here as our bigger problem reduces to a smaller similar sub-problem with each step.    
We choose any character from `'P'`, `'A'`, and `'L'` for the current position and then recursively generate the remaining combination of length `n - 1`.

**Note:** This article uses recursion techniques; if you are not familiar with recursion, check out our [recursion explore card](https://leetcode.com/explore/learn/card/recursion-i/250/principle-of-recursion/1439/).



**Determining the recurrence relation:**

We define a recursive function `generate_combination(n)` that generates combinations of length `n`.   
First, we choose a character for the current position (choose, `'P'`, `'A'`, and `'L'` one by one), and then we recursively get the combinations of length `n - 1` using the function `generate_combination(n - 1)` to make combinations of length `n`. 

```python3
current_subproblem_combinations  = 'P' + generate_combination(n - 1) 
current_subproblem_combinations += 'A' + generate_combination(n - 1) 
current_subproblem_combinations += 'L' + generate_combination(n - 1) 
```


Instead of getting combinations of length `n - 1`  three times, we will get those combinations once and store and use them three times. Thus, saving us some runtime.

```python3
smaller_subproblem_combinations = generate_combination(n - 1)

current_subproblem_combinations  = 'P' + smaller_subproblem_combinations 
current_subproblem_combinations += 'A' + smaller_subproblem_combinations 
current_subproblem_combinations += 'L' + smaller_subproblem_combinations 
```

<br />

**Determining the base case:**

If `n` is `0`, it means we have to generate a combination of length `0`, thus, we can return an empty string from here.

<br />

```python
def generate_combination(n) -> List:
    # Base case.
    if n == 0:
        return ['']

    # Get all combinations of length 'n - 1'.
    smaller_subproblem_combinations = generate_combination(n - 1)

    # Generate and return all combinations of length 'n' using combinations of length 'n - 1'.
    current_subproblem_combinations  = 'P' + smaller_subproblem_combinations 
    current_subproblem_combinations += 'A' + smaller_subproblem_combinations 
    current_subproblem_combinations += 'L' + smaller_subproblem_combinations
    return current_subproblem_combinations

# Get all combinations.
all_combinations = generate_combination(n)
# Then check all combinations eligible for the award.
```

![recursion_image](../Figures/552/Slide2.jpg)


In this approach, we can see a problem: if the combination becomes invalid at the beginning, then there is no benefit in generating all the combinations of suffixes that follow it.

![early_exit](../Figures/552/Slide3.jpg)

<br />

**Optimizing the recursion:**

If the current combination so far is invalid, it is best to stop the recursive call early to save some time. Remember that the problem states that we can have at most `1` `'A'` and `2` consecutive `'L'`, so these conditions can be used to perform the early exit.   

To do this, while generating combinations we need to keep track of the total number of `'A'` (absences) so far and the number of consecutive `'L'` (lates) at the end of our combination so far.     
When we choose a character for the current position, we change the respective counts and then make the next recursive call so that our combination doesn't exceed the maximum allowed counts.


When `n` becomes `0`, it will be guaranteed that the combination is eligible for the award, otherwise, we would have already exited from the function. Previously, we were returning the whole combination string as we were required to verify if that particular combination would be eligible for the award or not, but this is not required now, so we can return `1` to indicate that we will count this combination.     
Similarly, we will return `0` whenever we exit from the function and do not need to count the combinations.

```python
# Exit condition / Base case.
if total_absences >= 2 or consecutive_lates >= 3: return 0
if n == 0: return 1
```

<br />

So, our function will now return the number of combinations of length `n` eligible for the award, `eligible_combinations(n, total_absences, consecutive_lates) -> int`. 


Whenever we choose an option either `'P'`, `'A'`, or `'L'`, we increment their counts in subsequent recursive calls to keep track of the number of absences and consecutive lates.

1. If we choose `'P'`, it will not change the total number of absences, but it will reset the number of consecutive lates to zero in our combination.
2. If we choose `'A'`, it will increase the total number of absences in our combination by one and reset the number of consecutive lates to zero.
3. If we choose `'L'`, it will not change the total number of absences, but it will increase the number of consecutive lates by one in our combination.


```python
def eligible_combinations(n, total_absences, consecutive_lates) -> int:
    # Do not generate further combinations if the combination is not eligible for the award.
    if total_absences >= 2 or consecutive_lates >= 3: return 0
    # We have created a combination of length 'n' which is eligible for the award, thus, include it in the count.
    if n == 0: return 1

    # Choose a character for the current position and make further recursive calls.
    counts = eligible_combinations(n - 1, total_absences, 0) # Choose 'P'.
    counts += eligible_combinations(n - 1, total_absences + 1, 0) # Choose 'A'.
    counts += eligible_combinations(n - 1, total_absences, consecutive_lates + 1) # Choose 'L'.
    return counts 
```

<br />

**Memoization:**

We can also see that some of the sub-problems recur; this can be better understood if we draw the recursive call tree; for example, in the image below we would have to compute `eligible_combinations(2, 0, 1)` and `eligible_combinations(2, 0, 0)` many times.

![recursive_tree](../Figures/552/Slide4.jpg)

By caching the result of each subproblem, we can avoid recalculating previously seen sub-problems, thus improving the time complexity.

> This optimization technique of storing the results of the expensive function calls and returning the cached result when the input occurs again is called memoization.

Each subproblem is defined by three variables `n`, `total_absences`, and `consecutive_lates`.                  
So, we will store the subproblem results in a three-dimensional array `memo[n][total_absences][consecutive_lates]`.



#### Algorithm

1. Initialization:
    - Create a constant `MOD` equal to `1000000007`.
    - Create the cache `memo` as a 3D vector.
2. Define a function `eligible_combinations(n, total_absences, consecutive_lates)`:
    - If the combination is not eligible for the award (`total_absences>= 2` or `consecutive_lates >= 3`), return `0`.
    - If we created a combination eligible for award (`n == 0`), return `1`.
    - If the sub-problem has been solved earlier, then, return the stored result from the cache.
    - Initialize a variable `count` to `0`.
    - Recursively call the function for three choices and perform the modular addition of the respective recursive call result with `count`:
        - Choose `'P'` for the current position: `count = eligible_combinations(n - 1, total_absences, 0)`.
        - Choose `'A'` for the current position: `count = (count + eligible_combinations(n - 1, total_absences + 1, 0)) % MOD`.
        - Choose `'L'` for the current position: `count = (count + eligible_combinations(n - 1, total_absences, consecutive_lates + 1)) % MOD`.
    - Store the result in the cache and return `count`.
3. In `checkRecord(n)` function:
    - Initialize an empty cache `memo` with dimensions `(n + 1) x 2 x 3` and fill it with `-1` indicating we have not stored the result of sub-problems (as counts will always be `0` or more).
    - Return the result given by `eligible_combinations` function with initial parameters `(n, 0, 0)` indicating no absence and no consecutive late count in the initial combination.



#### Implementation

<iframe src="https://leetcode.com/playground/kqRsRkfg/shared" frameBorder="0" width="100%" height="500" name="kqRsRkfg"></iframe>

#### Complexity Analysis

* Time complexity: $O(n)$  
    - Our recursive function will only evaluate $n \times 2 \times 3$ unique sub-problems due to memoization. 
    - So, this approach will take $O(6 \cdot n) = O(n)$ time.
* Space complexity: $O(n)$
    - We initialized an additional array `memo` of size $n \times 2 \times 3$ that takes $O(n)$ space.
    - The recursive call stack will also take $O(n)$ space in the worst-case.
    - So, this approach will take $O(6 \cdot n + n) = O(n)$ space.


<br />

---


### Approach 2: Bottom-Up Dynamic Programming

#### Intuition  

The previous recursive dynamic programming approach can also be converted to an iterative dynamic programming approach.                
In the iterative dynamic programming (tabulation), we create a dp table, fill in the results of the smaller sub-problems, and solve the larger sub-problems iteratively. 

From the previous approach, we know that the state of each sub-problem depends on three variables `n`, `total_absences`, and `consecutive_lates`.                  
Therefore, we will store the results of the sub-problem in a three-dimensional array `dp`, where `dp[len][total_absences][consecutive_lates]` stores the number of combinations of length `len` eligible for the award having `total_absences` `'A'` and `consecutive_lates` `'L'` at the end of the combination.

<br />

**Determining the base case:**

The simplest case to fill in the table is to store the sub-problem results when the combination length is `0`.
- `dp[0][0][0] = 1`, as there is only one combination of length `0` with zero `'A'` and zero consecutive `'L'`.
- All other cases like `dp[0][x][y]` will store `0`, because it's not possible to make a combination of length `0` with any number of `'A'` or `'L'` in it.

<br />

**Generating bigger sub-problem result using a smaller sub-problem:**

We will iterate on all sub-problems using nested for loops (combination length `len` will go from `0` to `n - 1`, `total_absences` from `0` to `1`, and `consecutive_lates` from `0` to `2`) and try to generate the bigger sub-problem result using the current smaller sub-problem result.

Say we are at the current sub-problem `dp[len][total_absences][consecutive_lates]`, using this sub-problem we will generate results for a bigger sub-problem when we append `'P'`, `'A'`, or `'L'` at the end.

1. If we choose `'P'`:    
    - We can append `'P'` to all combinations of the current sub-problem, `bigger_subproblem_result = dp[len][total_absences][consecutive_lates]`
    - Appending `'P'` will increase `len` by `1`, keep the `total_absences` same, and reset `consecutive_lates` to `0`, so we store the result at `dp[len + 1][total_absences][0]`, i.e. `dp[len + 1][total_absences][0] += bigger_subproblem_result` in the table. 
2. If we choose `'A'`:    
    - We can append `'A'` to all combinations of the current sub-problem if it has `total_absences = 0`, `bigger_subproblem_result = dp[len][total_absences][consecutive_lates]` 
    - If the combinations of the current sub-problem have `total_absences > 0`, then adding one more `'A'` will increase the count of absences to `2` or more and will make the combination invalid, so, there is no need to count these combinations.
    - Appending `'A'` will increase the `len` and `total_absences` by `1` and reset `consecutive_lates` to `0`, so we store the result at `dp[len + 1][total_absences+ 1][0]`, i.e. `dp[len + 1][total_absences+ 1][0] += bigger_subproblem_result` in the table. 
3. If we choose `'L'`:    
    - We can append `'L'` to all combinations of the current sub-problem if it has `consecutive_lates = 0 or 1`, `bigger_subproblem_result = dp[len][total_absences][consecutive_lates]`
    - If the combinations of the current sub-problem have `consecutive_lates > 1`, then adding one more `'L'` will increase the count of consecutive lates to `3` or more and will make the combination invalid, so, there is no need to count these combinations.
    - Appending `'L'` will increase the `len` and `consecutive_lates` by `1` but keep the `total_absences` same, so we store the result at `dp[len + 1][total_absences][consecutive_lates + 1]`, i.e. `dp[len + 1][total_absences][consecutive_lates + 1] += bigger_subproblem_result` in the table. 

<br />
 

**Calculating required result:**

In the end, to calculate the final result (count of all eligible combinations of length `n`) we will need to sum all the valid combinations of length `n`, thus, counting all the results stored in `dp[n][0 to 1][0 to 2]`.

<br />

#### Algorithm

1. Initialization:
    - Create a constant `MOD` equal to `1000000007`.
    - Create the cache `dp` as a 3D vector with dimensions `(n + 1) x 2 x 3` and fill it with `0`.
2. Set `dp[0][0][0] = 1`.
3. Iterate over the sub-problems using three nested loops for `len`, `total_absences`, and `consecutive_lates`.
    - If we choose `'P'`: `dp[len + 1][total_absences][0] = (dp[len + 1][total_absences][0] + dp[len][total_absences][consecutive_lates]) % MOD`
    - If we choose `'A'` and `total_absences < 1`: `dp[len + 1][total_absences + 1][0] = (dp[len + 1][total_absences + 1][0] + dp[len][total_absences][consecutive_lates]) % MOD`
    - If we choose `'L'` and `consecutive_lates < 2`: `dp[len + 1][total_absences][consecutive_lates + 1] = (dp[len + 1][total_absences][consecutive_lates + 1] + dp[len][total_absences][consecutive_lates]) % MOD;`
4. Sum up the `counts` for all combinations of length `n` with different `total_absences` and `consecutive_lates` counts using modular addition with `MOD`.
5. Return the final `count`.


#### Implementation

<iframe src="https://leetcode.com/playground/LJjsiYFN/shared" frameBorder="0" width="100%" height="500" name="LJjsiYFN"></iframe>

#### Complexity Analysis

* Time complexity: $O(n)$  
    - We iterate over $n \times 2 \times 3$ sub-problems using nested for loops.
    - Thus, this approach will take $O(6 \cdot n) = O(n)$ time.
* Space complexity: $O(n)$
    - We initialized an additional array of size $n \cdot 2 \cdot 3$.
    - Thus, this approach will take $O(6 \cdot n) = O(n)$ space.


<br />

---


### Approach 3: Bottom-Up Dynamic Programming, Space Optimized

#### Intuition  

> **Note:** The previous approaches will be sufficient during the limited time availability of a real interview setting. Here we offer a more optimized approach based on it, which will also likely appear as a follow-up question.

In the previous approach, when computing the numbers of combinations of length `len `, we only need the numbers of combinations of length `len - 1`. The shorter combinations of length `len - 2`, `len - 3`, etc. are no longer needed.    
It means all other length sub-problem results are kept unnecessarily in the `dp` table.    


![dp](../Figures/552/Slide5.jpg)

<br />

Thus, instead of keeping one 3-dimensional `dp` array, we can keep two 2-dimensional arrays `dp_curr_state`, and `dp_next_state`.

`dp_curr_state[total_absences][consecutive_lates]` and `dp_next_state[total_absences][consecutive_lates]` will store the number of valid combinations of current length `len` and next length `len + 1`, respectively with `total_absences` `'A'` and `consecutive_lates` `'L'`. The values eligible for the award are `0, 1` for `total_absences` and `0, 1, 2`, for `consecutive_lates`; thus, these 2-dimensional arrays will have size `2 x 3` each.    

Using the current length `len` combination counts stored in `dp_curr_state` we will compute the next length `len + 1` combination counts and store them in `dp_next_state`. Then, length `len + 1` will become our current length, `dp_next_state` will become `dp_curr_state` and similarly, we will compute the next length `len + 2`  combination counts and continue.

<br />

#### Algorithm

1. Initialization:
    - Create a constant `MOD` equal to `1000000007`.
    - Create the two 2-dimensional arrays `dp_curr_state` and `dp_next_state` with dimensions `2 x 3` and fill it with `0`.
2. Set `dp_curr_state[0][0] = 1`.
3. Iterate over the sub-problems using a for loop for `len`:
    - Iterate over the combinations of `total_absences`, and `consecutive_lates` using nested for loops:
        - If we choose `'P'`: `dp_next_state[total_absences][0] = (dp_next_state[total_absences][0] + dp_curr_state[total_absences][consecutive_lates]) % MOD`
        - If we choose `'A'` and `total_absences < 1`: `dp_next_state[total_absences + 1][0] = (dp_next_state[total_absences + 1][0] + dpCurrState[total_absences][consecutive_lates]) % MOD;`
        - If we choose `'L'` and `consecutive_lates < 2`: `dp_next_state[total_absences][consecutive_lates + 1] = (dp_next_state[total_absences][consecutive_lates + 1] + dp_curr_state[total_absences][consecutive_lates]) % MOD`
    - Set the `dp_curr_state` to `dp_next_state` and reset `dp_next_state` to `0`.
4. Sum up the `counts` for all combinations of length `n` (`dp_curr_state`) with different `total_absences` and `consecutive_lates` counts using modular addition with `MOD`.
5. Return the final `count`.


#### Implementation

<iframe src="https://leetcode.com/playground/FYFbUVMn/shared" frameBorder="0" width="100%" height="500" name="FYFbUVMn"></iframe>

#### Complexity Analysis

* Time complexity: $O(n)$  
    - We iterate over $2 \times 3 \times n$ states once using the nested for-loops.
    - Thus, this approach will take $O(6 \cdot n) = O(n)$ time.
* Space complexity: $O(1)$
    - We use two $2 \times 3$ arrays and a handful of variables. Since the space used is not affected by the size of $n$, we only use constant space in this approach.