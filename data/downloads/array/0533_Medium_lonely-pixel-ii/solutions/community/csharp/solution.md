# Dictionaries for counts and lookups.

**Author:** lucky_mishra
**Votes:** 0
**Link:** [https://leetcode.com/problems/lonely-pixel-ii/solutions/4776166/](https://leetcode.com/problems/lonely-pixel-ii/solutions/4776166/)

---

# Complexity
- O(mn)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

-  O(mn)
# Code
```
public class Solution {
    public int FindBlackPixel(char[][] picture, int target) {
        int m = picture.Length, n = picture[0].Length;
        Dictionary<int, List<int>> rows = new();
        Dictionary<int, List<int>> cols = new();
        Dictionary<string, List<int>> SameRowSign = new();
        Dictionary<int, string> rowSign = new();

        for(int i=0; i< m; i++)
        {
            if(!rows.ContainsKey(i)) rows[i] = new();
            string rowString = new string(picture[i]);
            rowSign[i] = rowString;
            if(!SameRowSign.ContainsKey(rowString)) SameRowSign[rowString] = new();
            SameRowSign[rowString].Add(i);

            for(int j=0; j< n; j++)
            {
                if(!cols.ContainsKey(j)) cols[j] = new();
                if(picture[i][j] == 'B')
                {
                    rows[i].Add(j);
                    cols[j].Add(i);
                }
            }
        }

        int count =0;
        for(int i=0; i< m; i++)
        {
            for(int j=0; j< n; j++)
            {
                if(picture[i][j] != 'B') continue;
                if(rows[i].Count == target && cols[j].Count == target)                       
                {
                    string rs = rowSign[i];
                    if(SameRowSign[rs].SequenceEqual(cols[j]))
                        count++;
                }
                
            }
        }
        return count;
    }
}
```