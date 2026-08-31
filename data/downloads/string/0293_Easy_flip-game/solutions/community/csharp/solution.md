# C# || O(n) solution

**Author:** timmok2022
**Votes:** 0
**Link:** [https://leetcode.com/problems/flip-game/solutions/3665768/](https://leetcode.com/problems/flip-game/solutions/3665768/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The main question of this problem is finding all permutations of a given input string where "++" to be changed to "--", but not the other way.  Converting the input as an array of chars for easy changes of two sequential '+' char.

# Approach
<!-- Describe your approach to solving the problem. -->
1. Declare two variables: new List<string> **list** for the answer and **arr** that is a conversion of the input string as a char array.
2. Create a for loop that loops through two sequential array elements if both are equal to the '+' character.  If yes, replace those chars with '-' and then convert the array to a string and add it to **list**.  The for loop iterates from index 0 to input string length - 2 (or **arr**.Length - 2 -- thus the condition is **i < arr.Length - 1**) since the code inside goes up to string length - 1.
3. As part of step 2, revert the two chars to '+' to preserve the input data.
4. Return **list**.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n)

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(n)

# Code
```
public class Solution {
    public IList<string> GeneratePossibleNextMoves(string currentState) {

        var list = new List<string>();
        var arr = currentState.ToCharArray();

        for (int i = 0; i < currentState.Length - 1; i++)
        {
            if (arr[i] == arr[i+1] && arr[i] == '+')
            {
                arr[i] = arr[i+1] = '-';
                list.Add(new string(arr));
                arr[i] = arr[i+1] = '+';
            }
        }
        return list;
    }
}
```