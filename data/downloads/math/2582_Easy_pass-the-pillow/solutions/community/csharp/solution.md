# C# Solution for Pass The Pillow Problem

**Author:** Aman_Raj_Sinha
**Votes:** 1
**Link:** [https://leetcode.com/problems/pass-the-pillow/solutions/5430041/](https://leetcode.com/problems/pass-the-pillow/solutions/5430041/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The intuition behind this solution is to directly simulate the passing of the pillow from one person to the next, keeping track of the direction (forward or backward). This approach does not rely on mathematical cycles but rather on straightforward iteration and direction reversal at the ends of the line.

# Approach
<!-- Describe your approach to solving the problem. -->
1.	Initialization:
	\u2022	Start with the pillow at person 1.
	\u2022	Set the initial direction to forward (true).
2.	Simulate Passing:
	\u2022	Iterate over each second until the given time is reached.
	\u2022	Update the position based on the current direction:
	    \u2022	If moving forward:
	        \u2022	Increment the position if it\u2019s not at the end (n).
	        \u2022	Reverse the direction if it reaches the end (n) and decrement the position.
	    \u2022	If moving backward:
	        \u2022	Decrement the position if it\u2019s not at the start (1).
	        \u2022	Reverse the direction if it reaches the start (1) and increment the position.
	3.	Return Position:
	\u2022	After time seconds, return the current position of the pillow.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
The time complexity of the solution is  O(\	ext{time}) . This is because we iterate through each second up to the given time, updating the position and direction.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
The space complexity of the solution is  O(1) . This is because we only use a fixed number of variables (position, forward, and t) to keep track of the current state, regardless of the size of n or time.

# Code
```
public class Solution {
    public int PassThePillow(int n, int time) {
        int position = 1;
        bool forward = true;

        for (int t = 0; t < time; t++) {
            if (forward) {
                if (position == n) {
                    forward = false;
                    position--;
                } else {
                    position++;
                }
            } else {
                if (position == 1) {
                    forward = true;
                    position++;
                } else {
                    position--;
                }
            }
        }

        return position;
    }
}
```