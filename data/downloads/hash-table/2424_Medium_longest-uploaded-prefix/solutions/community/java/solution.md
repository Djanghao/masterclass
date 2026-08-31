# Most Easy and Short solution + Meme

**Author:** HarshitMaurya
**Votes:** 36
**Link:** [https://leetcode.com/problems/longest-uploaded-prefix/solutions/2646491/](https://leetcode.com/problems/longest-uploaded-prefix/solutions/2646491/)

---

**Self explanatory solution**

```
class LUPrefix {
    Set<Integer> set;
    int max=0;
    public LUPrefix(int n) {
        set=new HashSet<>();
    }
    public void upload(int video) {
        set.add(video);
        while(set.contains(max+1)) max++;
    }
    public int longest() {
        return max;
    }
}
```

meme :

![image](./images/0.jpeg)

***let's connect :***

\uD83D\uDE80 [www.linkedin.com/in/harshitmaurya](https://www.linkedin.com/in/harshitmaurya/)
\uD83D\uDE80 [twitter.com/HarshitMaurya_](https://twitter.com/HarshitMaurya_)



