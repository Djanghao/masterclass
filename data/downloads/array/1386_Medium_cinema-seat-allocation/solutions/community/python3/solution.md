# Python - Easy HashMap Solution | Faster than 95%

**Author:** WilliamStaudenmeier
**Votes:** 22
**Link:** [https://leetcode.com/problems/cinema-seat-allocation/solutions/3010803/](https://leetcode.com/problems/cinema-seat-allocation/solutions/3010803/)

---

The main difference between this hashset solution and others is mutual exclusivity.  

Instead of going through arrangements of four, we go through arrangements of two.  The middle seats count double, the outer seats count as one.

Then we subtract the tally from the total number of possible solutions. If the cinema were empty, that number would be 2n.  

That's actually my voice in the video.  I sound like an international robot.  

[@easyCodingSolutions](https://youtu.be/o_EF3EQmjHM)

https://youtu.be/o_EF3EQmjHM

# Code
```
class Solution:
  def maxNumberOfFamilies(self, n, reservedSeats):
    # Create a dictionary of sets to store the reserved seats by row
    seats = collections.defaultdict(set)
    # Iterate through the reserved seats
    for i,j in reservedSeats:
      # If the seat is an outside seat in the row, add it to tallies 0 and 1
      if j in {4,5}: 
        seats[i].add(0) 
        seats[i].add(1)
      # If the seat is a middle seat in the row, add it to tallies 1 and 2
      elif j in {6,7}: 
        seats[i].add(1)
        seats[i].add(2)
      # If the seat is another type of seat, add it to the corresponding tally
      elif j in {8,9}: 
        seats[i].add(2)
      elif j in {2,3}:
        seats[i].add(0)
      # Initialize the result to twice the number of rows
      res = 2*n
    # Iterate through the rows of seats
    for i in seats:
      # If a row has all three tallies, subtract two from the result
      if len(seats[i]) == 3: res -= 2
      # Otherwise, subtract one from the result
      else: res -= 1

    # Return the final result
    return res

```

