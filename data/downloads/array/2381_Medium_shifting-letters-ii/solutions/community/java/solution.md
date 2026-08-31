# Prefix Sum (Range Update) | O(n) | Java | 6 ms | 100%

**Author:** akrchaubey
**Votes:** 28
**Link:** [https://leetcode.com/problems/shifting-letters-ii/solutions/2454324/](https://leetcode.com/problems/shifting-letters-ii/solutions/2454324/)

---

```
  public String shiftingLetters(String s, int[][] shifts) {
        char[] ch = s.toCharArray();
        int[] count = new int[s.length()+1];
        
        for(int[] shift : shifts){
            int value = shift[2] == 1 ? 1 : -1;
            count[shift[0]] += value;
            count[shift[1] + 1] -= value;
        }
        
        int sum = 0;
        for(int i = 0; i < count.length - 1; i++){
            sum += count[i];
            int newChar = ((ch[i] - 'a') + sum) % 26;
            if(newChar < 0) newChar+= 26;
            ch[i] =  (char)('a' + newChar);
        }
        
        return String.valueOf(ch);
    }
```