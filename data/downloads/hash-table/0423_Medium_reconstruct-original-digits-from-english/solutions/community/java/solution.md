# JAVA Explained Solution

**Author:** HIMANSHUCHHIKARA
**Votes:** 33
**Link:** [https://leetcode.com/problems/reconstruct-original-digits-from-english/solutions/1131491/](https://leetcode.com/problems/reconstruct-original-digits-from-english/solutions/1131491/)

---

**EXPLANATION AND IDEA:**
```
zero = 0
 one  = 1
 two  = 2
 three= 3
 four = 4
 five = 5
 six  = 6
 seven= 7
 eight= 8
 nine = 9
 
 We can observe that some characters are only present in some words only like :
 z(zero) -> 0
 x(six)  -> 6
 u(four) -> 4
 w(two)  -> 2
 g(eigth)-> 8
 f(five+four) -> 5 && 4
 O(one +two + four + zero) -> 1 && 2 && 4 && 0
 t(three + eight + two) -> 3 && 8 && 2
 s(seven + six) -> 7 && 6
 i(nine + five + six + eight) -> 9 && 5 && 6 && 8
```
if x present its mean that it is from 6. so we can find occurance of 6 through x. and we know that 
s is present in both 6 and 7 . i.e digit[6] + digit[7]=map[s] ( frequency of s in given string). we can easily figure out frequency of 6 through x and frequency of s (map[s]) through string . so we can find frequency of 7 easily by:
digit[7]=map[s]-digit[6].
similarly for other combinations .

**CODE:**
```
public String originalDigits(String s) {
        int[] map=new int[26]; //frequency of characters
        for(char ch:s.toCharArray()) map[ch-'a']++;
        
        int[] digit=new int[10]; //frequency of numbers
        
        digit[0]=map['z'-'a'];
        digit[6]=map['x'-'a'];
        digit[4]=map['u'-'a'];
        digit[2]=map['w'-'a'];
        digit[8]=map['g'-'a'];
        digit[5]=map['f'-'a'] - digit[4];
        digit[7]=map['s'-'a'] - digit[6];
        digit[3]=map['t'-'a'] - digit[8] - digit[2];
        digit[1]=map['o'-'a']-digit[2]-digit[4]-digit[0];
        digit[9]=map['i'-'a']-digit[5]-digit[6]-digit[8];
        
        StringBuilder sb=new StringBuilder("");
        for(int i=0;i<10;i++){
            int freq=digit[i];
            while(freq-->0){
                sb.append(i);
            }
        }
        return sb.toString();
    }
```

**Complexity:**
`Time:O(n) and Space:O(1) [Big O Notation]`

Please **UPVOTE** if found it helpful and feel free to reach out to me or comment down if you have any doubt.