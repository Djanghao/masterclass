# Simple solution for kotlin using two pointers Time:  O (logn), Space O (1)

**Author:** pikede
**Votes:** 0
**Link:** [https://leetcode.com/problems/watering-plants-ii/solutions/3626996/](https://leetcode.com/problems/watering-plants-ii/solutions/3626996/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
Uses two opinters checking both start and end; 
start for alice, end for bob, 
decrement alice and bob based on the corresponding value at plants[i], 
check to see if they need to refill during each iteration,
handle each edge case only one plant -> 0,
both meet at same plant -> whoever has more or alice waters,
invalid input throw exception.

# Complexity
- Time complexity:
O (log n)

- Space complexity:
O (1)

# Code
```
class Solution {
    
    fun minimumRefill(plants: IntArray, capacityA: Int, capacityB: Int): Int {
        if(capacityA == 0 || capacityB == 0){
            throw Exception("Invalid Input")
        }

        if(plants.size ==1){
            return 0
        }

        var start =0 
        var end = plants.lastIndex
        var refill = 0
        var alice= capacityA
        var bob= capacityB

        while(start <= end){
            if(start == end){
                // bob waters plant as he has more
                if(bob > alice) {
                    if(bob < plants[end]){
                        refill++   
                    }  
                    return refill
                }
                // else alice waters as she has more or is equal to bob
                if(alice < plants[start]){
                    refill++
                } 
                return refill 
            }

            if(alice < plants[start]){
                refill++
                alice= capacityA
            }
            alice -= plants[start++]

            if(bob < plants[end]){
                refill++
                bob= capacityB
            } 
            bob -= plants[end--]
        }
        return refill 
    }
}

// ask for example 


// two pointers 
// start  end
// if can water water else refill then water (increment refill)
// move pointers start and end 
// return refill at end 
// water is reduce pointer by plants[i]

// 5:47

// if start == end then capacityA must water it 
```