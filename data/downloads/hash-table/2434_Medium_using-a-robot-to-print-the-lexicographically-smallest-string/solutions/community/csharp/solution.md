# [C#] Beats 100%, readable code, explanation

**Author:** maross
**Votes:** 1
**Link:** [https://leetcode.com/problems/using-a-robot-to-print-the-lexicographically-smallest-string/solutions/5306487/](https://leetcode.com/problems/using-a-robot-to-print-the-lexicographically-smallest-string/solutions/5306487/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
First, we must realize that the string t is actually a stack, and the robot is pushing/popping letters onto/from it. Next is the rules.

To achieve lexicographic order, we only want to write a letter from the stack onto the paper if there are no smaller letters left in the string. To avoid iterating over the string every time, we can have a frequency map of each remaining character in the string.

We update this frequency map every time we put a letter onto the stack. There are exactly 26 letters in English alphabet, so this operation is constant.

# Approach
<!-- Describe your approach to solving the problem. -->
1. Initialize the frequency map for each letter in English alphabet to the number of occurrences of the letter in our string
2. Iterate over the string
- Push the letter onto the stack and decrease its frequency by 1
- Look at our frequency map and get the smallest letter in the remainder of the string
- If there is no smaller letter left in the string, pop the top of the stack and add it to the answer (repeat this while the condition holds)
3. Return the now lexicographically smallest string

## Optimizations made
The trick to get a good runtime and beat 100% of other C# solutions is to use an array for the frequency map and to store the result of smallestRemainingChar() in a variable instead of calling it directly in the while loop condition.

# Complexity
- Time complexity: $$O(n)$$ - we iterate over each character once
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$ - the stack will take up at most n space
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
public class Solution
{
    private int[] frequency = new int[26];

    public string RobotWithString(string s)
    {
        Stack<char> stack = new();
        StringBuilder answer = new();

        foreach (char c in s)
            frequency[c - 'a']++;

        foreach (char c in s)
        {
            stack.Push(c);
            frequency[c - 'a']--;
            char smallest = smallestRemainingChar();
            while (stack.Count > 0 && stack.Peek() <= smallest)
                answer.Append(stack.Pop());
        }

        return answer.ToString();
    }

    private char smallestRemainingChar()
    {
        for (int i = 0; i < 26; i++)
        {
            if (frequency[i] > 0)
                return (char)(i + 'a');
        }
        return 'z';
    }
}
```