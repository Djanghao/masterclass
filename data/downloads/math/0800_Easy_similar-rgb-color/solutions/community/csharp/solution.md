# C# Solution

**Author:** panaeimi
**Votes:** 0
**Link:** [https://leetcode.com/problems/similar-rgb-color/solutions/3361053/](https://leetcode.com/problems/similar-rgb-color/solutions/3361053/)

---

# Code
```
public class Solution {
    public string SimilarRGB(string color) {
        StringBuilder sb = new StringBuilder();
        sb.Append("#"); 
        for(int i = 1; i < color.Length; i += 2) {
            int hexcolor = Convert.ToInt16(color.Substring(i, 2), 16);
            sb.Append(GetMinShortHand(hexcolor));
        }

        return sb.ToString();
    }

    private string GetMinShortHand(int  color) {
        HashSet<string> hexes = new HashSet<string>() { "0x00", "0x11", "0x22", "0x33", "0x44", "0x55", "0x66", "0x77", "0x88", "0x99", "0xaa", "0xbb", "0xcc", "0xdd", "0xee", "0xff"};
        int minSimilarity = Int32.MaxValue;
        string minShColor = string.Empty;
        foreach(string shColor in hexes) {
            int hexcolor = Convert.ToInt16(shColor, 16);
            int diff = hexcolor - color;
            int curSimiarity = (int) Math.Pow(diff, 2);
            if(curSimiarity < minSimilarity) {
                minSimilarity = curSimiarity;
                minShColor = shColor.Substring(2);
            }
        }
      
        return minShColor;
    }
}
```