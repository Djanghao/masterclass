# Minimum Window Substring Using Dart

**Author:** shubhamsinha2009
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-window-substring/solutions/3058444/](https://leetcode.com/problems/minimum-window-substring/solutions/3058444/)

---


# Code
```
class Solution {
  String minWindow(String s, String t) {
             var map = <int,int>{};

        for(var ch in t.codeUnits){
          map[ch] = (map[ch] ?? 0) + 1;
        }

    
        int n = s.length;
        int minStart = 0;
        int minLength = n+1;
        int charTLeft = t.length;

     
        for(int i =0 ,j=0;i<n;i++){
            var ch = s.codeUnitAt(i);

            if(map.containsKey(ch)){
                   int count =  map[ch]!;

                   if(count>0) charTLeft--;
                   map[ch] = count-1 ;

            }
            while(charTLeft == 0){
                int curWindowLength = i-j+1;
                if(minLength> curWindowLength ){
                    minLength = curWindowLength;
                    minStart = j;
                }
                var chh = s.codeUnitAt(j);
                if(map.containsKey(chh)){
                    int count =  map[chh]!;
                   if(count==0) charTLeft++;
                   map[chh] = count+1;
                }
                 j++;
            }
        }

        return minLength == n + 1 ? "": s.substring(minStart,minLength+minStart);
        
  }
}
```