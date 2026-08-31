# simple solution using BFS and hashset in C#

**Author:** samy-timalsina
**Votes:** 0
**Link:** [https://leetcode.com/problems/bulb-switcher-ii/solutions/5813628/](https://leetcode.com/problems/bulb-switcher-ii/solutions/5813628/)

---



# Code
```csharp []
public class Solution {
    public int FlipLights(int n, int presses) {
            char[] bulbStatus = new char[n + 1];
            for(int i = 1; i <= n; i++) {
                bulbStatus[i] = '1';
            }
            bulbStatus[0] = '0';
            int states = 0;
            HashSet<(string status, int count)> hs = new HashSet<(string, int count)>();
            Queue<(char[] status, int pressCount)> q = new Queue<(char[], int)>();
            q.Enqueue((bulbStatus, 0));
            while(q.Count > 0) {
                char[] rem = q.Peek().status;
                int count = q.Peek().pressCount;

                q.Dequeue();

                if(hs.Contains((new string(rem), count)) || count > presses) continue;
                hs.Add((new string(rem), count));
                char[] btn1 = GetFreshChars(rem);
                char[] btn2 = GetFreshChars(rem);
                char[] btn3 = GetFreshChars(rem);
                char[] btn4 = GetFreshChars(rem);

                //step1
                for(int i = 1; i <= n; i++) {
                    if(btn1[i] == '0') btn1[i] = '1';
                    else btn1[i] = '0';
                }
                //step2
                for(int i = 1; i <= n; i++) {
                    if(i % 2 == 0) {
                        if(btn2[i] == '0') btn2[i] = '1';
                        else btn2[i] = '0';
                    }
                }
                //step3
                for(int i = 1; i <= n; i++) {
                    if(i % 2 != 0) {
                        if(btn3[i] == '0') btn3[i] = '1';
                        else  btn3[i] = '0';
                    }
                }
                //step4
                int k = 0;
                int index = 3 * k + 1;
                while(index <= n) {
                    if(btn4[index] == '0') btn4[index] = '1';
                    else btn4[index] = '0';
                    k++;
                    index = 3 * (k) + 1;
                }

                string btnStr1 = new string(btn1);
                string btnStr2 = new string(btn2);
                string btnStr3 = new string(btn3);
                string btnStr4 = new string(btn4);

                q.Enqueue((btn1, count + 1));
                q.Enqueue((btn2, count + 1));
                q.Enqueue((btn3, count + 1));
                q.Enqueue((btn4, count + 1));
            }

            int tot = hs.Count(x => x.count == presses);

            return tot;
    }

    private char[] GetFreshChars(char[] rem){
        char[] freshChars = new char[rem.Length];
        for(int i=1;i<rem.Length;i++)
            freshChars[i] = rem[i];
        freshChars[0] = '0';
        return freshChars;
    }
}
```