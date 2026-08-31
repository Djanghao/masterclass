# C# Solution | Recursion | Backtracking | Permutation and Combinations | O(n!)

**Author:** anshulgarg904
**Votes:** 1
**Link:** [https://leetcode.com/problems/letter-tile-possibilities/solutions/3732370/](https://leetcode.com/problems/letter-tile-possibilities/solutions/3732370/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n!)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n!)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
public class Solution {
    HashSet<string> hashSet;
    bool[] considered;

    public int NumTilePossibilities(string tiles) {
        hashSet = new();
        considered = new bool[tiles.Length];

        for(int i=0; i<tiles.Length; i++){
            GetTilesPossibilities(tiles, i, new StringBuilder());
        }

        return hashSet.Count;
    }

    private void GetTilesPossibilities(string tiles, int idx, StringBuilder sb){
        sb.Append(tiles[idx]);
        considered[idx] = true;
        hashSet.Add(sb.ToString());

        for(int i=0; i<tiles.Length; i++){
            if(!considered[i]){
                GetTilesPossibilities(tiles, i, sb);
            }
        }

        sb.Length--;
        considered[idx] = false;
    }
}
```