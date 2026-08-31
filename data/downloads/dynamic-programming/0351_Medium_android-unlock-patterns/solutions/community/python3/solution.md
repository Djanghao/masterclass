# Backtracking Simulation | Commented and Explained

**Author:** laichbr
**Votes:** 2
**Link:** [https://leetcode.com/problems/android-unlock-patterns/solutions/3441163/](https://leetcode.com/problems/android-unlock-patterns/solutions/3441163/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
We can solve this problem with a look up table, but that's not the point of the problem. Instead, we turn to the use of dynamic programming as suggested, and find a solution in simulation with backtracking. For this process, we will use a few key findings in analysis of the problem. 

The first key finding is that there are only 3 types of cells on a keypad. 
- The center most cell 
- The cells on the diagonals of the center 
- The cells on the cross of the center 

This means we can actually speed up our combinations by doing a multiplication by 4 to the result of the latter two cell types instead of calculating for each of these. This is due to the symmetry of the problem space. 

The second key finding is that there are distinct cells that cannot be skipped over for any cell that is not 5. This is from the problem statement consideration, and as such allows us to form a table of edges that cannot be taken if we do not have the center most value already visited. We store this in a table called cant skip, as in you cannot skip the value stored here for these two candidates if you want to go from one to the other. 

We can find these by first considering the rows and columns of the outside of the keypad. This nets us 1 to 3, 1 to 7, 3 to 9 and 7 to 9, all having their own flips as well and storing 2, 4, 6, and 8 respectively. 

Next we should consider 5's role in this mess. Namely, 5 cannot be skipped for any of the diagonal, vertical, or horizontal lines that cross him. This gives us our following considerations of 2 to 8, 4 to 6, 1 to 9 and 3 to 7, along with their own flips, and all storing 5. 

Now we want a calculation approach, for which we can use backtracking to create all of them quite efficiently in this case as we have a limited value of n (namely n cannot be more than 9) and m cannot be less than 1. 

The rest is explained in the approach 

# Approach
<!-- Describe your approach to solving the problem. -->
We start with an initialization function to handle the values of the cant_skip array, and set a cell types array of size 3 with 1, 2, 5 in it. 
We also set a visited array of 0s in range 10. 

Next we need to determine the necessary conditions for a valid selection if going from a key pad number to a new candidate 
The first condition is that the new candidate not be visited already 
The second condition is that the new candidate not be the same key 
The third condition is that either there is not a value that limits us from going from key pad number to candidate (is cant_skip[key_pad_number][candidate] 0?) or if there is a value, we have already visited that value

If the candidate is not visited, and the candidate is not the same as the current key pad number and (their either is not a center limiting us from travel or if there is such a center we have already visited it previously)

This succinctly captures the conditions needed for a valid selection as described in the problem statement, so we may continue to our backtracking process. 

For backtracking, we are going to do so in a blind fashion so that we do not have to store what the combinations are. This lets us then determine our conditions for the recursive function call. 

Our base condition is that if our number of keys pressed is now equal to our number of key presses needed, we can return 1, showing a success. 

Next, we want to determine recursively the number of correct combinations off of this key pad number being pressed. To do, we will first set the number of combinations off of this search at 0, and state that we have now visited this key pad number. Then, for candidate key press in 1 through 9, 
- if the candidate and key pad number form a valid selection 
    - increment number of combinations by a backtracking call using candidate, number of keys pressed + 1, number of key presses 

At end of this, set the visited status of this key pad number to 0 
Return the number of combinations found. 

We can now describe the process for our number of patterns. Start with number of patterns return value of 0. Then, 
For key presses needed in range m to n inclusive
-  set a cumulative sum of 0 
-  for cell in our cell types 
    - get the backtracking result from our backtracking function passing cell, 1, key presses needed 
    - if the cell is not 5, multiply the backtracking result by 4 
    - update the cumulative sum by the backtracking result 
- update the number of patterns by the cumulative sum 

When done return the number of patterns  

# Complexity
- Time complexity: O(N) 
    - The first thing to notice is that our range of key presses needed is bound between 1 and 10. As such, the number of key presses needed is a constant. So, our outer loop of key presses needed is a constant. And our inner loop is a constant of range 3. Which then means we turn to our backtracking function, which can reach a recursive depth again of no more than 10, also a constant. So the maximal combinations is 10 * 3 * 10 * 10, which makese sense in that we can choose a subset of 9^9 total key presses. Suffice it to say that since this is all in a solid numerical form, we run in O(N) 

- Space complexity: O(1) if not counting stack space. O(N) otherwise. 
    - We never actually store anything more than two arrays of values. 
    - If you count recursive stackspace, worst you can say is that it is linear in the combination size as described above. 

# Code
```
class Solution:
    def __init__(self) : 
        self.cant_skip = [[0 for __ in range(10)] for _ in range(10)]
        # cannot go 1 to 3 or 3 to 1 without 2 
        self.cant_skip[1][3] = self.cant_skip[3][1] = 2
        # similar for below 
        self.cant_skip[1][7] = self.cant_skip[7][1] = 4 
        self.cant_skip[3][9] = self.cant_skip[9][3] = 6
        self.cant_skip[7][9] = self.cant_skip[9][7] = 8 
        # deal with the ridiculousness that is 5 being able to reach everywhere 
        # cross pattern 
        self.cant_skip[2][8] = self.cant_skip[4][6] = self.cant_skip[8][2] = self.cant_skip[6][4] = 5
        # x pattern 
        self.cant_skip[1][9] = self.cant_skip[9][1] = self.cant_skip[7][3] = self.cant_skip[3][7] = 5
        self.visited = [0 for _ in range(10)]
        # 1 represents the pieces at diagonal corners of 5 
        # 2 represents the pieces at horizontal and vertical corners of 5 
        # and 5 represents itself. 
        # we can speed up simulation by taking additive results of these sectors 
        self.cell_types = [1, 2, 5]

    def valid_selection(self, candidate, key_pad_number) : 
        # if we have a 0, we can visit 
        can_visit = not self.visited[candidate]
        # unless it is the same thing 
        same = candidate == key_pad_number 
        # weather or not there is a center value we cannot skip 
        can_skip_center = self.cant_skip[key_pad_number][candidate]
        # we can only skip the center value if there is no center value or we already visited it 
        can_be_skipped = not can_skip_center or self.visited[can_skip_center]
        # it's only valid if we can visit it, we do have a value we can skip or we do not have a value to worry about skipping and they are not the same
        return can_visit and can_be_skipped and not same
    
    def backtracking(self, key_pad_number, number_of_key_presses, key_presses_needed) : 
        # succesful combination 
        if number_of_key_presses == key_presses_needed : 
            return 1 
        # recursively count 
        number_of_combinations = 0
        # press this number 
        self.visited[key_pad_number] = 1 
        # candidates 
        for candidate in range(1, 10) : 
            # get candidates that are valid 
            if self.valid_selection(candidate, key_pad_number) : 
                # and increment by their result if we go forward 
                number_of_combinations += self.backtracking(candidate, number_of_key_presses + 1, key_presses_needed)
        # pretend you didn't press this number 
        self.visited[key_pad_number] = 0
        # return combinations 
        return number_of_combinations 

    def numberOfPatterns(self, m: int, n: int) -> int:
        # number of patterns starts at 0 
        number_of_patterns = 0 
        # loop over range of key presses needed 
        for key_presses_needed in range(m, n+1) : 
            # get sum of cell types all told 
            cumulative_sum = 0
            # for either the center spot, or for either of the two types of edges 
            for cell in self.cell_types : 
                # get the backtracking result 
                backtracking_result = self.backtracking(cell, 1, key_presses_needed)
                if cell != 5 : 
                    # if not the center spot, you actually have 4 of these combinations you can combine 
                    backtracking_result = backtracking_result + backtracking_result + backtracking_result + backtracking_result
                # update the cumulative sum 
                cumulative_sum += backtracking_result
            # update the number of patterns 
            number_of_patterns += cumulative_sum 
        # return when done 
        return number_of_patterns
```