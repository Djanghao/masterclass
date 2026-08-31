# java 1ms pigeonhole principle solution with detailed explanation

**Author:** pangeneral
**Votes:** 16
**Link:** [https://leetcode.com/problems/rabbits-in-forest/solutions/289038/](https://leetcode.com/problems/rabbits-in-forest/solutions/289038/)

---

The basic thought is: if answers[i] == anwers[j], we take them as the same color as far as **possible**. 
What does the possible mean? Well, we can see a example: 
Condider a anwer sequence [2, 2, 2, 2]. According to the **Pigeonhole Principle**, we cannot take all of them as the same color since there are at most 3 pigeonhole and 4 pigeons.

The solution is using a array ```color``` to record the color message. Each time a pigeonhole is full when reset corresponding element in ```color```.

```
public int numRabbits(int[] answers) {
    int result = 0;
    int color[] = new int[1001];
    for(int i = 0; i < answers.length; i++) {
        if( color[answers[i] + 1] == answers[i] + 1 ) { // a pigeonhole is full
            result += answers[i] + 1;
            color[answers[i] + 1] = 1;
        }
        else {
            color[answers[i] + 1]++;
        }
    }
    for(int i = 0; i < color.length; i++) // sum the number of colors
        result += color[i] != 0 ? i : 0;
    return result;
}
```