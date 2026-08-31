# [C++] Two Solutions with Math Proof

**Author:** davidchai
**Votes:** 6
**Link:** [https://leetcode.com/problems/incremental-memory-leak/solutions/1210903/](https://leetcode.com/problems/incremental-memory-leak/solutions/1210903/)

---

## Solution 1 -- Simulation:
#### (If you can come up with this solution, you can skip the first one and read the second solution.)
*Idea:*
This is the most straightforward soultion that one can come up with at the first glance. I guess it can pass the OJ becuase its time is O(sqrt(n)).

*Code:*
```
class Solution {
public:
    vector<int> memLeak(int memory1, int memory2) {
        int time = 1;
        while (max(memory1, memory2) >= time) {
            if (memory1 >= memory2) {
                memory1 -= time;
            } else {
                memory2 -= time;
            }
            ++time;
        }
        return {time, memory1, memory2};
    }
};
```


## Solution 2 -- Math with Explanation:
*Idea:*
If we dive deeper into the problem, we would find that actually the whole simulation can be divided into two parts:
* Make `memory1` and `memory2` as close as possible, or we would continue consume the one much bigger than the other.
		 e.g. `memory1 = 9` and `memory2 = 1`, it will be [9,1] -> [8,1] -> [6, 1] -> [3, 1] (done.)
* From this point on, we would take turns to consume the memories, like `memory1` -> `memory2` -> `memory1` -> `memory2` -> `memory1` -> ... , until the memory is insufficient.

*(For simplicity, we use `m1`, `m2` to represent `memory1` and `memory2` respectively.)*
Based on this, let's first tackle down the first step: how many steps before we can make the two memories **close**?
* what is the length of making them close?
  Ans: maximum length should be `abs(m1 - m2)`
* We started from 1, and assume we stop at `k` to make `sum(1, k) <= abs(m1 - m2)`. Here, `sum(1, k)` means the value sum from integer 1 to k. And it's easy to get `sum(1, k) = k*(k+1)/2`.
  Let `d = abs(m1 - m2)`, and we have `k*(k+1)/2 <= d` => ` k = floor(sqrt(2*d+0.25) - 0.5)`.

After making the two memory blocks **close**, the next task to tackle down is: How can we get to know the final stages of both memory, and what's the total step?
* In order to make it aligned, we would always start that `m1 >= m2`, so if we found `m2 > m1`, just swap the two memory and swap it back before return.
* According to our assumption, `m1` is always bigger or equal to `m2`, so we always start from `m1`.
  Now we would have to prove that the `m1` and `m2` would take turns to be consumed.
  Proof: 
  ```
  Assume starting step = k, and m1 >= m2.
  After first consumption, m1-k < m2, then next stage is (m1-k, m2-k-1) and m1 >= m2 => m1-k > m2-k-1.
  The third stage is (m1-k-k-2, m2-k-1). Because m1-k < m2 => m1-k-k-2 < m2-k-2 < m2-k-1, so on and so on forth...
  ```
  (This is not a strict math proof, but we can get a common sense from it.)
* The question now becomes: how many steps at most can they take before reaching the stop stage?
  Previously, we have taken `k` steps to reach the **close** stage, so the next step length is `k+1`.
  For `m1`, because we take turns to consume the memories, so we have `(k+1) + (k+3) + (k+5) + ... + tail1 <= m1`, where `tail1` is the last step length before reaching stop stage.
  Similarly, we have `(k+2) + (k+4) + (k+6) + ... + tail2 <= m2`.
  Translating them into equations, we have:
  ```
  (k+1+tail1)*(tail1-k+1)/4 <= m1
  (k+2+tail2)*(tail2-k)/4 <= m2
  ```
  So if we can get `tail1` and `tail2`, we would be very close to the answer. Fortunately, we know `k` and `m1`, `m2`. So it's easy to get that
  ```
  tail1 = sqrt(4*m1 +(k+1)*(k-1) + 1) -1 = sqrt(4*m1+k*k)-1
  tail2 = sqrt(4*m2 + (k+2)*k + 1) - 1 = sqrt(4*m2 + (k+1)*(k+1)) - 1
  ```
  **Attention**: our stride is `2` for each memory here, so we need to make their parity aligned, or we would make mistakes.

After all that, we just find the maximum step between `m1` and `m2`. Then, we just get the final answer. Don't forget to swap back the memory if we swapped them earlier.

Hope that helps ;)

*Code:*
```
class Solution {
public:
    vector<int> memLeak(int memory1, int memory2) {
		// first step:
		// make m1 and m2 close
        int d = abs(memory1 - memory2);
        int k = sqrt(2L*d+0.25)-0.5;
        int total = (long)k*(k+1)/2;
        if (memory1 > memory2) {
            memory1 -= total;
        } else {
            memory2 -= total;
        }
        
		// swap m1 and m2 if necessary
        bool changed = false;
        if (memory2 > memory1) {
            swap(memory2, memory1);
            changed = true;
        }
		
		// get tail1 and tail2 from our equation
        int start = k+1;
        int t1 = sqrt(4L*memory1 + (long)start*(start-2) + 1L) - 1.0;
        int t2 = sqrt(4L*memory2 + (long)start*start) - 1.0;
		
		// checking parity
        if ((start&1) ^ (t1&1)) --t1;
        if (((start+1)&1) ^ (t2&1)) --t2;

		// get crash time, as well as the final stage of m1/m2
        int time = max(t1, t2)+1;
        memory1 -= (long)(start+t1)*(t1-start+2)/4;
        memory2 -= (long)(start+t2+1)*(t2-start+1)/4;
        
		// swap m1, m2 if needed
        if (changed) {
            return {time, memory2, memory1};
        }
        return {time, memory1, memory2};
    }
};
```

Time: O(1)