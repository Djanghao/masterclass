# O(N*logN) ➡️ O(N) || Full explained || Beats 100% || [Java/C++/Python/Go/Ruby]

**Author:** Shivansu_7
**Votes:** 5
**Link:** [https://leetcode.com/problems/destroying-asteroids/solutions/4494347/](https://leetcode.com/problems/destroying-asteroids/solutions/4494347/)

---

# Intuition
1. We need to increase the mass of the planet by adding the mass of asteriod to it.
2. But we need to take care that the mass of asteroid should not be greater than the planet, otherwise planet will be destroyed.
3. So we will add the mass of smaller asteriod.

# Approach Brute
1. **Sorting:** The array of asteroid masses (asteroids) is sorted in ascending order using Arrays.sort(asteroids).
2. **Initialization:** A variable mass is initialized with the provided initialMass value, cast to a long to handle potential overflow during summation.
3. **Iteration through Asteroids:**
    - The code iterates through each asteroid in the sorted array.
    - For each asteroid:
        If the asteroid's mass is greater than the current total mass (mass), the method returns false immediately, indicating that the mass is insufficient to destroy the remaining asteroids.
        Otherwise, the asteroid's mass is added to the total mass (mass).
4. **Completion:** If the loop completes without returning false, it implies that the mass, combined with the masses of the asteroids, is enough to destroy all asteroids. The method returns true.


# Complexity
- Time complexity: $$O(n*logn)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```Java []
class Solution {
    public boolean asteroidsDestroyed(int mass, int[] asteroids) {

         Arrays.sort(asteroids);
         long mass = (long)mas;

         for(int i=0; i<asteroids.length; i++){
             if(asteroids[i] > mass){
                 return false;
             }
             else {
                 mass += asteroids[i];
             }
         }
         return true;        
    }
}
```
```C++ []
class Solution {
public:
    bool asteroidsDestroyed(int initialMass, vector<int>& asteroids) {
        sort(asteroids.begin(), asteroids.end());
        long mass = static_cast<long>(initialMass);

        for (int i = 0; i < asteroids.size(); i++) {
            if (asteroids[i] > mass) {
                return false;
            } else {
                mass += asteroids[i];
            }
        }

        return true;
    }
};
```
```Python3 []
class Solution:
    def asteroidsDestroyed(self, initial_mass: int, asteroids: List[int]) -> bool:
        asteroids.sort()
        total_mass = initial_mass

        for asteroid in asteroids:
            if asteroid > total_mass:
                return False
            else:
                total_mass += asteroid

        return True
```
```JavaScript []
/**
 * @param {number} mass
 * @param {number[]} asteroids
 * @return {boolean}
 */
var asteroidsDestroyed = function(mass, asteroids) {
    asteroids.sort((a, b) => a - b);
    let totalMass = mass;

    for (const asteroid of asteroids) {
        if (asteroid > totalMass) {
            return false;
        } else {
            totalMass += asteroid;
        }
    }

    return true;
};
```
```Go []
package main

import (
	"fmt"
	"sort"
)

func asteroidsDestroyed(mass int, asteroids []int) bool {
	sort.Ints(asteroids)
	totalMass := mass

	for _, asteroid := range asteroids {
		if asteroid > totalMass {
			return false
		} else {
			totalMass += asteroid
		}
	}

	return true
}
```
```Ruby []
# @param {Integer} mass
# @param {Integer[]} asteroids
# @return {Boolean}
def asteroids_destroyed(mass, asteroids)
  asteroids.sort!
  total_mass = mass

  asteroids.each do |asteroid|
    if asteroid > total_mass
      return false
    else
      total_mass += asteroid
    end
  end

  true
end
```

---


---


# Approach Optimal
1. **Initialization:**
    - Initialize a variable newMass with the provided mass value, cast to a long to handle potential overflow during summation.
    - Create an empty stack (`st`) to simulate the asteroids' positions.
2. **Iteration through Asteroids:**
    - Iterate through each asteroid in the array asteroids.
    - For each asteroid (`val`):
        - Push the asteroid's mass onto the stack.
        - Enter a while loop as long as the stack is not empty and the top asteroid's mass (st.peek()) is less than or equal to newMass.
        - Inside the loop, pop the top asteroid from the stack and add its mass to newMass.
3. **Completion Check:**
    - After processing all asteroids, check if the stack is empty.
    - If the stack is empty, it means all the asteroids have been destroyed, and the method returns true.
    - If the stack is not empty, it means some asteroids are left, and the method returns false.
    - # Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
# Code
```Java []
class Solution {
    public boolean asteroidsDestroyed(int mass, int[] asteroids) {
        long newMass = mass;
        Stack<Integer> st = new Stack<>();

        for(int val : asteroids) {
            st.push(val);
            while(!st.isEmpty() && st.peek() <= newMass) {
                newMass += st.pop();
            }
        }
        return st.isEmpty();
    }
}
```
```C++ []
class Solution {
public:
    bool asteroidsDestroyed(int mass, vector<int>& asteroids) {
        long newMass = mass;
        stack<int> st;

        for (int val : asteroids) {
            st.push(val);
            while (!st.empty() && st.top() <= newMass) {
                newMass += st.top();
                st.pop();
            }
        }
        return st.empty();
    }
};
```
```Python3 []
class Solution:
    def asteroidsDestroyed(self, mass: int, asteroids: List[int]) -> bool:
        new_mass = mass
        stack = []

        for val in asteroids:
            stack.append(val)
            while stack and stack[-1] <= new_mass:
                new_mass += stack.pop()

        return not stack
```
```JavaScript []
/**
 * @param {number} mass
 * @param {number[]} asteroids
 * @return {boolean}
 */
var asteroidsDestroyed = function(mass, asteroids) {
    let newMass = mass;
    let stack = [];

    for (let val of asteroids) {
        stack.push(val);
        while (stack.length > 0 && stack[stack.length - 1] <= newMass) {
            newMass += stack.pop();
        }
    }

    return stack.length === 0;
};
```