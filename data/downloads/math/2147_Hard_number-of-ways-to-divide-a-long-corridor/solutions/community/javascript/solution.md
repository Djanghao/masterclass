# 【Video】Give me 7 minutes - How we think about a solution

**Author:** niits
**Votes:** 16
**Link:** [https://leetcode.com/problems/number-of-ways-to-divide-a-long-corridor/solutions/4340183/](https://leetcode.com/problems/number-of-ways-to-divide-a-long-corridor/solutions/4340183/)

---

# Intuition
Consider two seats as a pair.

---

# Solution Video

https://youtu.be/DF9NXNW0G6E

\u25A0 Timeline of the video

`0:05` Return 0
`0:38` Think about a case where we can put dividers
`4:44` Coding
`7:18` Time Complexity and Space Complexity
`7:33` Summary of the algorithm with my solution code

### \u2B50\uFE0F\u2B50\uFE0F Don't forget to subscribe to my channel! \u2B50\uFE0F\u2B50\uFE0F

**\u25A0 Subscribe URL**
http://www.youtube.com/channel/UC9RMNwYTL3SXCP6ShLWVFww?sub_confirmation=1

Subscribers: 3,258
My first goal is 10,000 (It's far from done \uD83D\uDE05)
Thank you for your support!

**My channel reached 3,000 subscribers these days. Thank you so much for your support!**

---

# Approach
## How we think about a solution


Let's think about simple cases
```
Input: corridor = "SSPS"
```
In this case, we can't create division with `2` seats because we have `3` seats in the corridor.

How about this?
```
Input: corridor = "SSPSPSS"
```
In this case, we can't create division with `2` seats because we have `5` seats in the corridor.

---

\u2B50\uFE0F Points

If we have odd number of seats, return 0

---

Let's think about this case.
```
Input: corridor = "SSPPSPS"
```
We need to have `2` seats in each division. In other words the first `2` seats should be a pair and third seat and fourth seat also should be pair.

That's why we can put dividers only between pairs.
```
"SS|PPSPS"
"SSP|PSPS"
"SSPP|SPS"
```
```
Output: 3
```
- How can you calculate the output?

We can put divider between pairs. In the above example, we have `2` plants between pairs and output is `3`. What if we have `1` plant between pairs
```
Input: corridor = "SSPSPS"
```
```
"SS|PSPS"
"SSP|SPS"
```
```
Output: 2
```
So, number of divider should be `number of plants + 1`. More precisely, we can say `index of thrid seat - index of second seat` is the same as `number of plants + 1`.

```
 0123456
"SSPPSPS"
  \u2191  \u2191

4 - 1 = 3

 012345
"SSPSPS"
  \u2191 \u2191

3 - 1 = 2
```
Let's say we have `2` ways(x and y) to put dividers so far and find `3` new ways(a,b and c) to put dividers, in that case, we have `6` ways to put dividers.

```
x + a
y + a
x + b
y + b
x + c
y + c
= 6 ways
```


---

\u2B50\uFE0F Points

Every time we find new ways, we should multiply number of new ways with current number of ways. That happens when we have more than 2 seats and find odd number of seats (= between pairs).

---

I think we talk about main points.
Let's see a real algorithm!


---



### 1. Initialization:

#### Code:
```python
mod = 10**9 + 7 
res = 1
prev_seat = 0
num_seats = 0
```
#### Explanation:
- Set `mod` to `10**9 + 7` as the modulo value for the final result.
- Initialize `res` to 1. This variable will be updated during iteration and represents the result.
- Initialize `prev_seat` to 0. This variable tracks the index of the previous seat encountered.
- Initialize `num_seats` to 0. This variable counts the number of seats encountered.

### 2. Iteration through the Corridor:

#### Code:
```python
for i, c in enumerate(corridor):
    if c == 'S':
        num_seats += 1

        if num_seats > 2 and num_seats % 2 == 1:
            res *= i - prev_seat

        prev_seat = i
```
#### Explanation:
- Use a for loop to iterate through each character `c` and its index `i` in the corridor.
- Check if the character `c` is equal to 'S', indicating the presence of a seat.
    - Increment `num_seats` by 1, as a seat is encountered.
    - Check if there are more than 2 consecutive seats and an odd number of seats.
        - If the condition is met, update `res` by multiplying it with the distance between the current seat and the previous seat (`i - prev_seat`).
    - Update `prev_seat` to the current index `i`.

### 3. Final Result:

#### Code:
```python
return res % mod if num_seats > 1 and num_seats % 2 == 0 else 0
```

#### Explanation:
- Return the final result, calculated as `res % mod`, only if there are more than 1 seat and an even number of seats. Otherwise, return 0.

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

```python []
class Solution:
    def numberOfWays(self, corridor: str) -> int:
        mod = 10**9 + 7  # Define the modulo value for the final result
        res = 1  # Initialize the result variable to 1 (will be updated during iteration)
        prev_seat = 0  # Initialize the variable to track the index of the previous seat
        num_seats = 0  # Initialize the variable to count the number of seats encountered

        for i, c in enumerate(corridor):
            if c == 'S':
                num_seats += 1  # Increment the seat count when 'S' is encountered
                # Check if there are more than 2 consecutive seats and an odd number of seats
                if num_seats > 2 and num_seats % 2 == 1:
                    # Update the answer using the distance between the current seat and the previous seat
                    res *= i - prev_seat
                prev_seat = i  # Update the previous seat index to the current index

        # Return the answer only if there are more than 1 seat and an even number of seats
        return res % mod if num_seats > 1 and num_seats % 2 == 0 else 0
```
```javascript []
/**
 * @param {string} corridor
 * @return {number}
 */
var numberOfWays = function(corridor) {
    const mod = 1000000007;  // Define the modulo value for the final result
    let res = 1;  // Initialize the result variable to 1 (will be updated during iteration)
    let prevSeat = 0;  // Initialize the variable to track the index of the previous seat
    let numSeats = 0;  // Initialize the variable to count the number of seats encountered

    for (let i = 0; i < corridor.length; i++) {
        const c = corridor.charAt(i);
        if (c === 'S') {
            numSeats += 1;  // Increment the seat count when 'S' is encountered
            // Check if there are more than 2 consecutive seats and an odd number of seats
            if (numSeats > 2 && numSeats % 2 === 1) {
                // Update the answer using the distance between the current seat and the previous seat
                res = res * (i - prevSeat) % mod;
            }
            prevSeat = i;  // Update the previous seat index to the current index
        }
    }

    // Return the answer only if there are more than 1 seat and an even number of seats
    return numSeats > 1 && numSeats % 2 === 0 ? res : 0;    
};
```
```java []
public class Solution {
    public int numberOfWays(String corridor) {
        final int mod = 1000000007;  // Define the modulo value for the final result
        long res = 1;  // Initialize the result variable to 1 (will be updated during iteration)
        int prevSeat = 0;  // Initialize the variable to track the index of the previous seat
        int numSeats = 0;  // Initialize the variable to count the number of seats encountered

        for (int i = 0; i < corridor.length(); i++) {
            char c = corridor.charAt(i);
            if (c == 'S') {
                numSeats += 1;  // Increment the seat count when 'S' is encountered
                // Check if there are more than 2 consecutive seats and an odd number of seats
                if (numSeats > 2 && numSeats % 2 == 1) {
                    // Update the answer using the distance between the current seat and the previous seat
                    res = res * (i - prevSeat) % mod;
                }
                prevSeat = i;  // Update the previous seat index to the current index
            }
        }

        // Return the answer only if there are more than 1 seat and an even number of seats
        return numSeats > 1 && numSeats % 2 == 0 ? (int)res : 0;
    }
}
```
```C++ []
class Solution {
public:
    int numberOfWays(string corridor) {
        const int mod = 1000000007;  // Define the modulo value for the final result
        long res = 1;  // Initialize the result variable to 1 (will be updated during iteration)
        int prevSeat = 0;  // Initialize the variable to track the index of the previous seat
        int numSeats = 0;  // Initialize the variable to count the number of seats encountered

        for (int i = 0; i < corridor.length(); i++) {
            char c = corridor[i];
            if (c == 'S') {
                numSeats += 1;  // Increment the seat count when 'S' is encountered
                // Check if there are more than 2 consecutive seats and an odd number of seats
                if (numSeats > 2 && numSeats % 2 == 1) {
                    // Update the answer using the distance between the current seat and the previous seat
                    res = res * (i - prevSeat) % mod;                    
                }
                prevSeat = i;  // Update the previous seat index to the current index
            }
        }

        // Return the answer only if there are more than 1 seat and an even number of seats
        return numSeats > 1 && numSeats % 2 == 0 ? res : 0;        
    }
};
```

---

Thank you for reading my post.
\u2B50\uFE0F Please upvote it and don't forget to subscribe to my channel!

\u25A0 Subscribe URL
http://www.youtube.com/channel/UC9RMNwYTL3SXCP6ShLWVFww?sub_confirmation=1

\u25A0 Twitter
https://twitter.com/CodingNinjaAZ

### My next daily coding challenge post and video.

post
https://leetcode.com/problems/number-of-1-bits/solutions/4343578/video-give-me-5-minutes-how-we-think-about-a-solution/

video
https://youtu.be/3Vv1jvWc6eg

\u25A0 Timeline of the video

`0:03` Right shift
`1:36` Bitwise AND
`3:09` Demonstrate how it works
`6:03` Coding
`6:38` Time Complexity and Space Complexity

### My previous daily coding challenge post and video.

post
https://leetcode.com/problems/largest-submatrix-with-rearrangements/solutions/4331142/video-give-me-10-minutes-how-we-think-about-a-solution/

video
https://youtu.be/odAv92zWKqs

\u25A0 Timeline of the video

`0:05` How we can move columns
`1:09` Calculate height
`2:48` Calculate width
`4:10` Let's make sure it works
`5:40` Demonstrate how it works
`7:44` Coding
`9:59` Time Complexity and Space Complexity
`10:35` Summary of the algorithm with my solution code
