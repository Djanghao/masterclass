# 🧠 C# Compact Dynamic Programming

**Author:** ivanvinogradov207
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-distance-to-type-a-word-using-two-fingers/solutions/5962611/](https://leetcode.com/problems/minimum-distance-to-type-a-word-using-two-fingers/solutions/5962611/)

---

## Intuition:
Use dynamic programming to calculate the minimum movement distance between keys on a keyboard. Track the positions of two fingers and decide which finger should move to the next character for optimal distance.

## Approach:
1. Represent the positions of two fingers using a 3D `memory` array.
2. Calculate the minimum movement using a recursive DP function that considers moving each finger to the next character.
3. Use Manhattan distance to compute movements between characters on a 6x5 keyboard grid.
4. Memoize intermediate results to avoid recalculating the same state.

P.S. The reason we use 27 instead of 26 is to handle the initial case where one or both fingers have not yet been placed on any letter

## Complexity:
- **Time complexity**:  
  $$O(n \	imes 27 \	imes 27)$$  
  `n` is the word length, 27 represents all possible finger positions including no letter.
  
- **Space complexity**:  
  $$O(n \	imes 27 \	imes 27)$$ due to the memoization array.

# Code:
```csharp []
public class Solution {

    private int[,,] memory;

    private string word;

    public int MinimumDistance(string word) {
        Init(word);
        return DP(0, 26, 26);
    }

    private void Init(string word) 
    {
        this.word = word;
        this.memory = new int[word.Length,27,27];
        for (int i = 0; i < word.Length; i++)
            for (int j = 0; j < 27; j++)
                for (int k = 0; k < 27; k++)
                    this.memory[i,j,k] = -1;
    }

    private int DP(int i, int f1, int f2)
    {
        if (i == word.Length) return 0;
        if (memory[i,f1,f2] != -1) return memory[i,f1,f2];

        var current = word[i] - 'A';
        var result = Math.Min(
            DP(i+1, current, f2) + Dist(f1, current),
            DP(i+1, f1, current) + Dist(f2, current)
        );

        memory[i,f1,f2] = result;
        return result;
    }

    private int Dist(int a, int b)
    {
        if (a == 26) return 0;
        int x1 = a / 6, y1 = a % 6;
        int x2 = b / 6, y2 = b % 6;
        return Math.Abs(x1-x2) + Math.Abs(y1-y2);
    }
}
```