# Very hard to solve in full

**Author:** ZVV1971
**Votes:** 0
**Link:** [https://leetcode.com/problems/tiling-a-rectangle-with-the-fewest-squares/solutions/4833635/](https://leetcode.com/problems/tiling-a-rectangle-with-the-fewest-squares/solutions/4833635/)

---

# Intuition
Very interesting problem, though already very well solved in Matemetica

# Approach
Step-by-step, actually, it's not the full version since it requires to use permutations

# Complexity
- Time complexity:
$$O(n^2)$$

- Space complexity:
$$O(n^2)$$

# Code
```
public class Solution {
    public int TilingRectangle(int n, int m) {
        
            int[] initRect = new int[] { n ,m};
            int limit;

            limit = Math.Min(initRect[0], initRect[1]);
            List<List<int>> combinations = new List<List<int>>();

            for (int i = limit; i >= 1; i--)
            {
                List<int> genComb = new List<int>();
                for (int l = i; l >= 1; l--)
                {
                    genComb.Add(l);
                }
                combinations.Add(genComb);

                //add one sequence with an empty number
                for (int z = i - 1; z >= 2; z--)
                {
                    genComb = new List<int>();
                    for (int l = i; l >= 1; l--)
                    {
                        if (l != z) genComb.Add(l);
                    }
                    combinations.Add(genComb);
                }

                //add one sequence with two consequent empty numbers
                for (int z = i - 1; z >= 3; z--)
                {
                    genComb = new List<int>();
                    for (int l = i; l >= 1; l--)
                    {
                        if (l != z && l != z - 1) genComb.Add(l);
                    }
                    combinations.Add(genComb);
                }
            }

            int[] results = new int[combinations.Count];
            int k = 0;
            foreach (List<int> currentComb in combinations)
            {
                int[] restRect = new int[] { Math.Min(initRect[0], initRect[1]), Math.Max(initRect[0], initRect[1]) };
                foreach (int j in currentComb)
                {
                    restRect = TileRect(restRect, j, out int cut);
                    results[k] += cut;
                    if (restRect.Length == 0 || restRect[0] == 0) break;
                }
                k++;
            }

            return results.ToArray().Min();
    }

     private int[] TileRect (int[] rect, int square, out int cut)
        {
            if (square > rect[0] || square > rect[1])
            {
                //the square is bigger than the rectangle: cut is not possible, leave the rectangle untouched and cut = 0
                cut = 0;
                return rect;
            }
            if (rect.Length == 2) // Cut from a pure rectangle
            {
                if (rect[0] % square == 0)
                {
                    if (rect[1] % square == 0)
                    {
                        //The rectangle equals to the square -- only one cut is possible -- return an empty rest
                        cut = (rect[0] / square) * (rect[1] / square);
                        return new int[] { };
                    }
                    else
                    {
                        //Height of the rectangle is bigger return a new rectangle smaller in height
                        cut = (rect[0] / square) * (rect[1] / square);
                        return new int[] { Math.Min(rect[1] % square, rect[0]), Math.Max(rect[1] % square, rect[0]) };
                    }
                }
                else if (rect[1] % square == 0)
                {
                    cut = (rect[0] / square) * (rect[1] / square);
                    return new int[] { Math.Min(rect[0] % square, rect[1]), Math.Max(rect[0] % square, rect[1]) };
                }
                else
                {
                    //The rectangle is both wider and heigher -- return a rectanglex
                    cut = (rect[1] / square) * (rect[0] / square);
                    return new int[] { rect[0], rect[1], rect[0] % square, rect[1] % square };
                }
            }
            else // Cut from a rectanglex
            {
                if (square > rect[2] && square > rect[3])
                {
                    //the square is bigger than the rectangle: cut is not possible, leave the rectangle untouched and cut = 0
                    cut = 0;
                    return rect;
                }

                if (rect[3] > rect[2])
                {
                    cut = (rect[0] / square) * (rect[3] / square);
                    if (rect[0] % square == 0)
                    {
                        //The wider tail is completely cut out
                        if (rect[3] % square == 0)
                        {
                            return new int[] { rect[2], rect[1] - rect[3]};
                        }
                        else
                        {
                            return new int[] { rect[0], rect[1] - rect[3] + rect[3] % square, rect[2], rect[3] % square };
                        }
                    }
                    //the rest of the wider tail becomes the part of the tinner one
                    else if (rect[0] % square == rect[2])
                    {
                        return new int[] { rect[2], rect[1] };
                    }
                    //a piece of wider tail still remains uncut
                    else
                    {
                        return new int[] { Math.Max(rect[2], rect[0] % square), rect[1], Math.Min(rect[2], rect[0] % square), rect[2] > rect[0] % square ? rect[1] - rect[3] : rect[3] };
                    }
                }
                else if (rect[3] < rect[2])
                {
                    cut = rect[1] / square;
                    if (rect[1] % square == 0)
                    {
                        //The longer tail is completely cut out
                        return new int[] { Math.Min(rect[3], rect[0] - square), Math.Max(rect[3], rect[0] - square) };
                    }
                    else if (rect[1] % square == rect[3])
                    {
                        return new int[] { rect[3], rect[0] };
                    }
                    else
                    {
                        return new int[] { Math.Min(rect[0], rect[1] % square), Math.Max(rect[0], rect[1] % square), rect[0] < rect[1] % square ? rect[2] : rect[3], rect[0] < rect[1] % square ? rect[3] : rect[2] };
                    }
                }
                else // this is only possible if the rect[3] == rect[2] == 1!
                {
                    cut = rect[1] + rect[0] - 1;
                    return new int[] { };
                }
            }
        }
}
```