# Java Binary Search

**Author:** darkrwe
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-font-to-fit-a-sentence-in-a-screen/solutions/1405372/](https://leetcode.com/problems/maximum-font-to-fit-a-sentence-in-a-screen/solutions/1405372/)

---

```
class Solution {
    public int maxFont(String text, int w, int h, int[] fonts, FontInfo fontInfo) {
        int left = 0;
        int right = fonts.length -1;
        int result = -1;
        while (left <= right) {
            int mid = left + (right - left) / 2;
            if (getWidth(text, fonts[mid],fontInfo) <= w && fontInfo.getHeight(fonts[mid]) <= h) {
                result = fonts[mid]; //found a valid font candidate
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return result; // returning last valid font candidate
    }
    private int getWidth(String text,int font, FontInfo fontInfo){
        int sum = 0;
        for(char c: text.toCharArray())
            sum += fontInfo.getWidth(font, c);
        return sum;
    }
}
```