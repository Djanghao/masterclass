# C# | Mathematical approach | O(2*num_people) at worst

**Author:** alchemicalflux
**Votes:** 1
**Link:** [https://leetcode.com/problems/distribute-candies-to-people/solutions/4853346/](https://leetcode.com/problems/distribute-candies-to-people/solutions/4853346/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
My first approach was the typical looping over a result array, gradually adding candies to each person until there were none left. While this approach works fine, it can possibly loop many times over the resultant array. Instead, it is possible to only loop at most twice when the pattern is recognized and its mathematical equations are derived.

***The Math***
The following shows the underlying pattern for how candy accumulates over each round for n people:
Round 1: 0n + 1, 0n + 2, 0n + 3, ..., 0n + n
Round 2: 1n + 1, 1n + 2, 1n + 3, ..., 1n + n
Round 3: 2n + 1, 2n + 2, 2n + 3, ..., 2n + n

For a single person over R rounds, their summation is as follows:
Person 1: 0n + 1 + 1n + 1 + 2n + 1 + ... + Rn + 1
Person 2: 0n + 2 + 1n + 2 + 2n + 2 + ... + Rn + 2
Person n: 0n + n + 1n + n + 2n + n + ... + Rn + n

Moving values around, we create the follow summations:
Person 1: 1 + 1 + 1 + ... + 1 + 0n + 1n + 2n + ... + Rn 
Person n: n + n + n + ... + n + 0n + 1n + 2n + ... + Rn 

Which can then be simplified by grouping all the constants R times and calculating the 'triangular number' for the incremental section:
Person 1: 1R + n*(R(R-1)/2)
Person n: nR + n*(R(R-1)/2)

Therefore, over R rounds, the total for all people equals:
All: 1R + n*(R(R-1)/2) + 2R + n*(R(R-1)/2) + ... + nR + n*(R(R-1)/2)

Which rearranges and simplifies as follows:
All: 1R + 2R + ... + nR + n*(R(R-1)/2) + n*(R(R-1)/2) + ... + n*(R(R-1)/2)
=> R*(n(n+1)/2) + n*(n(R(R-1)/2))
=> R*(n^2 + n)/2 + n^2*(R^2 - R)/2
=> (Rn^2 + Rn)/2 + (R^2n^2 - Rn^2)/2
=> (Rn^2 + Rn + R^2n^2 - Rn^2) / 2
=> (R^2n^2 + Rn) / 2

Finally, we want to solve for R when given C candies.
C = (R^2n^2 + Rn) / 2 
=> 2C = R^2n^2 + Rn
=> n^2R^2 + nR - 2C = 0

Notice the quadratic equation (ax^2+bx+c = 0) that forms, where a = n^2, b = n, and c = -2C. Solve for R = (-b+/-sqrt(b^2 - 4ac))/2a by plugging in values for a, b, and c:
R = (-n +/- sqrt(n^2 - 4(n^2)(-2C)) / 2(n^2)
=> (-n +/- sqrt(n^2 + 8Cn^2)) / 2n^2
=> (-n +/- sqrt(n^2 * (1 + 8C))) / 2n^2
=> (-n +/- n*sqrt(1 + 8C)) / 2n^2
=> (-1 +/- sqrt(1 + 8C)) / 2n
There is no need to test for the negative square root value.
=> (sqrt(8C + 1) - 1) / 2n

***The Process***
With the final equation, it is possible to calculate the number of rounds when given C candies. By flooring that value, we will know the number of rounds needed to distribute candies such that everyone recieves their expected full amount for said rounds, with some candies likely remaining. With one pass, the result array can be filled with all accumulations for those rounds and then a second pass can be performed to add any remaining candies.

# Approach
<!-- Describe your approach to solving the problem. -->
1. Calculate number of fully distributed rounds.
    - R = floor((sqrt(8c + 1) - 1) / 2n)
    - Long type needed as max possible candies (10^9) times 8 plus 1 will cause overflow with int's max value (2,147,483,647).
    - Int conversion will round sqrt floating point down.
2. Reduce candy count for all people over the calculated rounds.
    - Reduce by: (R^2n^2 + Rn) / 2
3. Calculate the first person's full distribution accumulation.
    - Value: R + n * (R(R-1)/2)
4. Create and fill the result array with each person's full accumulation.
    - Each person's count will be R more than the previous.
5. Return result if all candies have been distributed.
6. Calculate the last increment needed for the first person.
7. As long as there are equal or more candies remaining,
    1. Add the last increment to the person.
    2. Remove that amount from the remaining candies.
    3. Increment the candy count needed for the next person.
    4. Move to the next person.
8. Assign any remaining candies to the last person.
9. Return result.

# Complexity
- Time complexity: $$O(n)$$ One/two passes over the result array.
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$ Space for the result array.
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
public class Solution {
    public int[] DistributeCandies(int candies, int num_people) {
        // Calculate the number of full rounds.
        // Long needed as 10^9 candies overshoots int.MaxValue (8*10^9 + 1).
        var rounds = (int)((Math.Sqrt(8L * candies + 1L) - 1L) / (2L * num_people));

        // Rather than remove in loop, reduce candies for all full rounds ((R^2n^2 + Rn) / 2).
        candies -= (rounds * rounds * num_people * num_people + rounds * num_people) / 2;
        
        // Calculate amount first person will have after said rounds.
        var allButLast =  rounds + num_people * (rounds * (rounds - 1) / 2);  // 1R + n*R(R-1)/2

        // Build the result with distributions for said rounds.
        var result = new int[num_people];
        var index = 0;
        for(; index < num_people; ++index, allButLast += rounds) { result[index] = allButLast; }

        if(candies == 0) { return result; } // No further processing needed.

        // Determine increment needed for last round and process remaining candies.
        var lastInc = rounds * num_people + 1; // Rn+1
        for(index = 0; candies >= lastInc; ++lastInc, ++index)
        {
            result[index] += lastInc;
            candies -= lastInc;
        }
        result[index] += candies; // Handle final non-full needs.

        return result;
    }
}
```