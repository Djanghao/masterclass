# 【Video】2 solutions - Using remainder and two pointers

**Author:** niits
**Votes:** 188
**Link:** [https://leetcode.com/problems/happy-number/solutions/5732946/](https://leetcode.com/problems/happy-number/solutions/5732946/)

---

# Intuition
Using remainder.

# Solution Video

https://youtu.be/1x2XPCR2YHI

### \u2B50\uFE0F\u2B50\uFE0F Don't forget to subscribe to my channel! \u2B50\uFE0F\u2B50\uFE0F

**\u25A0 Subscribe URL**
http://www.youtube.com/channel/UC9RMNwYTL3SXCP6ShLWVFww?sub_confirmation=1

Subscribers: 8,223
Thank you for your support!

---

# Solution 1 - remainder

I think there two points to solve this question.

---

1. How do you obtain the digit in the ones place?
2. How do you move from the ones place to the tens place?

---

##### How do you obtain the digit in the ones place?

My strategy is to use the remainder after dividing by 10.

For example,
```
15 % 10 = 5
28 % 10 = 8
10 % 10 = 0
```

##### How do you move from the ones place to the tens place?

It's similar to the first question but for this question, we use an answer by dividing 10.

For example,

```
15 // 10 = 1
28 // 10 = 2
9 // 10 = 0
```

We use those two idea to calculate a happy number.

Let's see one by one.

```
Input: n = 19
```
```
9 = 19 % 10 (= ones place)
81 += 9 * 9 (= output, 0 + 81)
1 = 19 // 10 (= next digit)

1 = 1 % 10 (= ones place)
82 += 1 * 1 (= output, 81 + 1)
0 = 1 // 10 (= next digit)
```
Current output is `82`. It's not `1`. Let's continue.
```
1 = 82 % 10 (= ones place)
4 += 2 * 2 (= output, 0 + 4)
8 = 82 // 10 (= next digit)

8 = 8 % 10 (= ones place)
68 += 8 * 8 (= output, 4 + 64)
0 = 8 // 10 (= next digit)
```
Current output is `68`. It's not `1`. Let's continue.
```
8 = 68 % 10 (= ones place)
64 += 8 * 8 (= output, 0 + 64)
6 = 68 // 10 (= next digit)

6 = 6 % 10 (= ones place)
100 += 6 * 6 (= output, 64 + 36)
0 = 8 // 10 (= next digit)
```
Current output is `100`. It's not `1`. Let's continue.
```
0 = 100 % 10 (= ones place)
0 += 0 * 0 (= output, 0 + 0)
10 = 100 // 10 (= next digit)

0 = 10 % 10 (= ones place)
0 += 0 * 0 (= output, 0 + 0)
1 = 10 // 10 (= next digit)

1 = 1 % 10 (= ones place)
1 += 1 * 1 (= output, 0 + 1)
0 = 1 // 10 (= next digit)
```
Current output is `1`.
```
return True
```

One more thing, we use `set` to prevent revisiting the same number. If we find the same number in `set`, that means we are in the infinity cycle. In that case, we should return `False`.

Easy!\uD83D\uDE04
Let's see solution codes! 

---

https://youtu.be/bU_dXCOWHls


# Complexity
- Time complexity: $$O(log n)$$

In the isHappy function, the sum of the squares of each digit is calculated to generate the next number. Repeating this operation will eventually cause the sequence to converge within a certain range. Specifically, no matter how large the starting number is, continuously calculating the sum of the squares will always cause the sequence to converge to a single-digit or two-digit number.

Due to this convergence, the number of iterations in the while loop is bounded within a certain range. Specifically, the number of iterations until the sequence converges to a single-digit or two-digit number is limited, and this is the constant $$k$$. Therefore, the number of iterations is bounded by a constant, making the time complexity $$O(k)$$.

Since $$O(k)$$ is a small constant, the time complexity can be simplified from $$O(k * log n)$$ to $$O(log n)$$. Here, $$O(log n)$$ represents the time to calculate the sum of the squares of each digit.

- Space complexity: $$O(k)$$

`k` is the number of unique numbers encountered and stored in the visit set before a cycle is detected or the number `1` is found.


```python []
class Solution:
    def isHappy(self, n: int) -> bool:    
        visit = set()
        
        def get_next_number(n):    
            output = 0
            
            while n:
                digit = n % 10
                output += digit ** 2
                n = n // 10
            
            return output

        while n not in visit:
            visit.add(n)
            n = get_next_number(n)
            if n == 1:
                return True
        
        return False
```
```javascript []
var isHappy = function(n) {
    var visit = new Set();
    
    var getNextNumber = function(n) {
        var output = 0;
        
        while (n > 0) {
            var digit = n % 10;
            output += digit * digit;
            n = Math.floor(n / 10);
        }
        
        return output;
    };

    while (!visit.has(n)) {
        visit.add(n);
        n = getNextNumber(n);
        if (n === 1) {
            return true;
        }
    }

    return false;    
};
```
```java []
class Solution {
    public boolean isHappy(int n) {
        Set<Integer> visit = new HashSet<>();
        
        while (!visit.contains(n)) {
            visit.add(n);
            n = getNextNumber(n);
            if (n == 1) {
                return true;
            }
        }
        
        return false;
    }

    private int getNextNumber(int n) {
        int output = 0;
        
        while (n > 0) {
            int digit = n % 10;
            output += digit * digit;
            n = n / 10;
        }
        
        return output;
    }
}
```
```C++ []
class Solution {
public:
    bool isHappy(int n) {
        unordered_set<int> visit;
        
        while (visit.find(n) == visit.end()) {
            visit.insert(n);
            n = getNextNumber(n);
            if (n == 1) {
                return true;
            }
        }
        
        return false;
    }

private:
    int getNextNumber(int n) {
        int output = 0;
        
        while (n > 0) {
            int digit = n % 10;
            output += digit * digit;
            n = n / 10;
        }
        
        return output;
    }
};
```

# Step by Step Algorithm

### 1. Initialize a Set to Track Visited Numbers
```python
visit = set()
```
- **Explanation:** Creates an empty set called `visit` to keep track of numbers that have already been seen during the process. This helps in detecting cycles. By storing previously encountered numbers, the algorithm can identify if it revisits a number, which indicates the presence of a cycle in the sequence. Without this set, the algorithm might enter an infinite loop if the number is part of a cycle.

### 2. Define the Helper Function to Get the Next Number
```python
def get_next_number(n):
    output = 0
```
- **Explanation:** Defines a helper function `get_next_number` that computes the sum of the squares of the digits of `n`. Initializes `output` to 0 to accumulate the result.

### 3. Process Each Digit to Calculate the Sum of Squares
```python
while n:
    digit = n % 10
    output += digit ** 2
    n = n // 10
```
- **Explanation:** This `while` loop processes each digit of `n`:
  - `digit = n % 10` extracts the last digit of `n`.
  - `output += digit ** 2` adds the square of the digit to `output`.
  - `n = n // 10` removes the last digit from `n` by performing integer division by 10.
- This continues until all digits of `n` have been processed.

### 4. Return the Calculated Next Number
```python
return output
```
- **Explanation:** Returns the computed `output`, which is the sum of the squares of the digits.

### 5. Loop Until a Cycle is Detected or the Number is 1
```python
while n not in visit:
    visit.add(n)
    n = get_next_number(n)
    if n == 1:
        return True
```
- **Explanation:**
  - `while n not in visit:` Continues the loop as long as `n` has not been seen before.
  - `visit.add(n)` Adds the current number `n` to the `visit` set.
  - `n = get_next_number(n)` Updates `n` to the next number in the sequence by calling the `get_next_number` function.
  - `if n == 1:` Checks if the updated `n` is 1. If it is, the number is a happy number, so it returns `True`.

### 6. Return False if a Cycle is Detected
```python
return False
```
- **Explanation:** If the loop exits (which means `n` was found in the `visit` set), it indicates a cycle has been detected and the number is not a happy number, so it returns `False`.



---

# Solution 2 - two pointers

Solution 2 is based on almost the same idea as Solution 1. How can we quickly find the number 1?

My answer is to use two pointers.

```
Input: n = 19
```
$$1^2$$ + $$9^2$$ = $$82$$ 
$$8^2$$ + $$2^2$$ = $$68$$
$$6^2$$ + $$8^2$$ = $$100$$
$$1^2$$ + $$0^2$$ + $$0^2$$ = $$1$$

Let's say we have a `slow` pointer and a `fast` pointer.

`slow` pointer move once.
`fast` pointer move twice.

If input is `19`, we will have

```
19 \u2192 82 \u2192 68 \u2192 100 \u2192 1 
```
Let's move the two pointers. Every time `slow` move once and `fast` move twice.  We stop if both pointers are the same number.

```
19 \u2192 82 \u2192 68 \u2192 100 \u2192 1 
sf
--------------------------
slow calculated 19.
fast calculated 19 and 82.

19 \u2192 82 \u2192 68 \u2192 100 \u2192 1 
     s    f
--------------------------
slow calculated 82.
fast calculated 68 and 100.

19 \u2192 82 \u2192 68 \u2192 100 \u2192 1 
          s          f
--------------------------
slow calculated 68.
fast calculated 1 and 1. (= 1 produces 1)

19 \u2192 82 \u2192 68 \u2192 100 \u2192 1 \u2192 1 \u2192 1 
                s            f
  
--------------------------
slow calculated 100.
fast calculated 1 and 1. (= 1 produces 1)

19 \u2192 82 \u2192 68 \u2192 100 \u2192 1 \u2192 1 \u2192 1 \u2192 1 \u2192 1 
                     s               f
```
Now `slow` and `fast` pointer are both `1`, that means `19` is a happy number.

Moreover, if `fast` pointer is `1`, we can immediately return `True` **because `1` produces `1`. We know that in the end `slow` pointer will become `1` at some point, because `slow` pointer will touch each number one by one.**

##### But why do you use two pointers?

In solution 1, I use `set` to prevent revisiting the same number. In other word, I try to prevent an infinity looping. I'm trying to achieve the same thing using two pointers.

To prove that, let's see `false` case.

```
20 \u2192 4 \u2192\u300016 \u2192 37 \u2192 58 \u2192 89 \u2192 145 \u2192 42 \u2192 (20...)
sf
------------------------------
slow calculated 20.
fast calculated 20 and 4.

20 \u2192 4 \u2192 16 \u2192 37 \u2192 58 \u2192 89 \u2192 145 \u2192 42 \u2192 (20...)
     s   f 
------------------------------
slow calculated 4.
fast calculated 16 and 37.

20 \u2192 4 \u2192 16 \u2192 37 \u2192 58 \u2192 89 \u2192 145 \u2192 42 \u2192 (20...)
         s          f 
------------------------------
slow calculated 16.
fast calculated 58 and 89.

20 \u2192 4 \u2192 16 \u2192 37 \u2192 58 \u2192 89 \u2192 145 \u2192 42 \u2192 (20...)
              s               f 
------------------------------
slow calculated 37.
fast calculated 145 and 42.

20 \u2192 4 \u2192 16 \u2192 37 \u2192 58 \u2192 89 \u2192 145 \u2192 42 \u2192 (20...)
f                   s               
------------------------------
slow calculated 58.
fast calculated 20 and 4.

20 \u2192 4 \u2192 16 \u2192 37 \u2192 58 \u2192 89 \u2192 145 \u2192 42 \u2192 (20...)
         f              s               
------------------------------
slow calculated 89.
fast calculated 16 and 37.

20 \u2192 4 \u2192 16 \u2192 37 \u2192 58 \u2192 89 \u2192 145 \u2192 42 \u2192 (20...)
                   f          s               
------------------------------
slow calculated 145.
fast calculated 58 and 89.

20 \u2192 4 \u2192 16 \u2192 37 \u2192 58 \u2192 89 \u2192 145 \u2192 42 \u2192 (20...)
                              f    s               
------------------------------
slow calculated 42.
fast calculated 145 and 42.

20 \u2192 4 \u2192 16 \u2192 37 \u2192 58 \u2192 89 \u2192 145 \u2192 42 \u2192 (20...)
fs               
```
The `fast` pointer touched all numbers and we didn't find `1`.

Now the `slow` pointer and the `fast` pointer are both `20`, **that means the `fast` pointer has calculated all the numbers and looped back around because the `fast` pointer caught up with the `slow` pointer from behind.** That's why we can return `false`.

Easy!\uD83D\uDE04
Let's see solution codes!

---

# Complexity
- Time complexity: $$O(log n)$$


- Space complexity: $$O(1)$$

```python []
class Solution:
    def isHappy(self, n: int) -> bool:    
        
        def get_next_number(n):    
            output = 0
            
            while n:
                digit = n % 10
                output += digit ** 2
                n = n // 10
            
            return output

        slow = get_next_number(n)
        fast = get_next_number(get_next_number(n))

        while slow != fast:
            if fast == 1: return True
            slow = get_next_number(slow)
            fast = get_next_number(get_next_number(fast))

        return slow == 1
```
```javascript []
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    function getNextNumber(n) {
        let output = 0;
        while (n > 0) {
            let digit = n % 10;
            output += digit * digit;
            n = Math.floor(n / 10);
        }
        return output;
    }

    let slow = getNextNumber(n);
    let fast = getNextNumber(getNextNumber(n));

    while (slow !== fast) {
        if (fast === 1) return true;
        slow = getNextNumber(slow);
        fast = getNextNumber(getNextNumber(fast));
    }

    return slow === 1;    
};
```
```java []
class Solution {
    public boolean isHappy(int n) {
        int slow = getNextNumber(n);
        int fast = getNextNumber(getNextNumber(n));

        while (slow != fast) {
            if (fast == 1) return true;
            slow = getNextNumber(slow);
            fast = getNextNumber(getNextNumber(fast));
        }

        return slow == 1;
    }

    private int getNextNumber(int n) {
        int output = 0;
        
        while (n > 0) {
            int digit = n % 10;
            output += digit * digit;
            n = n / 10;
        }
        
        return output;
    }
}
```
```C++ []
class Solution {
public:
    bool isHappy(int n) {
        int slow = getNextNumber(n);
        int fast = getNextNumber(getNextNumber(n));

        while (slow != fast) {
            if (fast == 1) return true;
            slow = getNextNumber(slow);
            fast = getNextNumber(getNextNumber(fast));
        }

        return slow == 1;
    }

private:
    int getNextNumber(int n) {
        int output = 0;
        
        while (n > 0) {
            int digit = n % 10;
            output += digit * digit;
            n = n / 10;
        }
        
        return output;
    }
};
```

# Step by Step Algorithm

### Step 1: Define the `get_next_number` Function
```python
def get_next_number(n):    
    output = 0
            
    while n:
        digit = n % 10
        output += digit ** 2
        n = n // 10
            
    return output
```
- **Purpose**: This function calculates the next number in the sequence by summing the squares of the digits of the input number `n`.
- **Process**:
  - Initialize `output` to `0`.
  - While `n` is not zero, extract the last digit of `n` using `n % 10`.
  - Square the extracted digit and add it to `output`.
  - Remove the last digit from `n` by performing integer division `n // 10`.
  - Repeat the process until `n` becomes zero.
  - Finally, return `output`, which is the next number in the sequence.

### Step 2: Initialize `slow` and `fast` Pointers
```python
slow = get_next_number(n)
fast = get_next_number(get_next_number(n))
```
- **Purpose**: Initialize two pointers, `slow` and `fast`, using the `get_next_number` function.
- **Process**:
  - `slow` is set to the next number of the original input `n`.
  - `fast` is set to the next number of the next number of `n`, meaning it moves twice as fast as `slow`.

### Step 3: Loop Until `slow` Meets `fast`
```python
while slow != fast:
    if fast == 1: return True
    slow = get_next_number(slow)
    fast = get_next_number(get_next_number(fast))
```
- **Purpose**: Use the fast and slow pointer technique (Floyd\u2019s Cycle-Finding Algorithm) to detect if a cycle exists.
- **Process**:
  - As long as `slow` and `fast` are not equal, continue the loop.
  - Check if `fast` has reached `1`. If it has, return `True`, indicating that the number is happy.
  - Move `slow` to the next number.
  - Move `fast` two steps forward by applying `get_next_number` twice.
  - If `slow` and `fast` meet, a cycle is detected, and the loop terminates.

### Step 4: Return the Result
```python
return slow == 1
```
- **Purpose**: Determine if the input number `n` is a happy number.
- **Process**:
  - After the loop, if `slow` equals `1`, return `True`, indicating that the number is happy.
  - If `slow` is not `1`, return `False`, indicating that the number is not happy.

---

Thank you for reading my post. Please upvote it and don't forget to subscribe to my channel!

### \u2B50\uFE0F Subscribe URL
http://www.youtube.com/channel/UC9RMNwYTL3SXCP6ShLWVFww?sub_confirmation=1

### \u2B50\uFE0F Twitter
https://twitter.com/CodingNinjaAZ

### \u2B50\uFE0F Related Video

#141 Linked List Cycle

https://youtu.be/cBs5ko1ye4Q


