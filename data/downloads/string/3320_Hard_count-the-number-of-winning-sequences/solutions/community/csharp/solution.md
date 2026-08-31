# C# solution

**Author:** Fetss
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-the-number-of-winning-sequences/solutions/5958899/](https://leetcode.com/problems/count-the-number-of-winning-sequences/solutions/5958899/)

---

# Intuition
I keep track of a list of the amount of sequences that result in a certain amount of difference in points. Then add up the amount of sequences that result in a win.
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
I use a multidimensional array.
The amount of sequences that have a difference in score of "x" and ends in a "F" for example, is stored in wins[x + n + 1, 0].
The score of any additional battle is only determined by the current score, the next move, and because of the fact that we can't do 2 moves in a row, the last move that we did. We can traverse the input sequence, simulating every battle step by step, manipulating the array to keep track of all possible outcome.
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n^2)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```csharp []
public class Solution {
    public int CountWinningSequences(string s) {
        int n = s.Length;
        int m = (int)(1e9) + 7;
        Dictionary<char, int> dict = new Dictionary<char, int>();
        dict['F'] = 0;
        dict['W'] = 1;
        dict['E'] = 2;
        int[,] wins = new int[2*n + 3,6];

        wins[comp(dict[s[0]], 0) + n+1, 0] = 1;
        wins[comp(dict[s[0]], 1) + n+1, 1] = 1;
        wins[comp(dict[s[0]], 2) + n+1, 2] = 1;

        for (int i = 1; i < n; i++){
            int f = (i%2)*3;
            int c = dict[s[i]];
            for (int j = 1; j < 2 * n + 2; j++){
                wins[j, 0 + f] = (wins[j + comp(0, c), 1 + (3-f)] + wins[j + comp(0, c), 2 + (3-f)]) % m;
                wins[j, 1 + f] = (wins[j + comp(1, c), 2 + (3-f)] + wins[j + comp(1, c), 0 + (3-f)]) % m;
                wins[j, 2 + f] = (wins[j + comp(2, c), 0 + (3-f)] + wins[j + comp(2, c), 1 + (3-f)]) % m;
            }
        }

        int su = 0;
        for (int i = 0; i < n+1; i++){
            su = (su + wins[i, ((n-1)%2) * 3 + 0]) % m;
            su = (su + wins[i, ((n-1)%2) * 3 + 1]) % m;
            su = (su + wins[i, ((n-1)%2) * 3 + 2]) % m;
        }
        return su;
    }

    public int comp(int a, int b){
        return ((a-b+3)%3+1)%3-1;
    }

}
```