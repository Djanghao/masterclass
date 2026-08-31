# Java Concise BitSet 98% | Problem Explanation

**Author:** Student2091
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimum-number-of-people-to-teach/solutions/2011979/](https://leetcode.com/problems/minimum-number-of-people-to-teach/solutions/2011979/)

---

Let's say we have an interger of 500 bits, then we can set the bit for each person for the language they speak, so if person A speaks langage 1 and 4 out of 4 language, it'd be represented as `0b1001`. We can then just `&`  it with another person's number to find out if they share a common language.

The issue here is that we don't have a 500-bit integer, but we do have a bitset class which can represent that and has all the bitwise operation built-in, so let's use that.

**THIS QUESTION IS VERY CONFUSING**. I spent 3 hrs just to understand what was being asked. You are **ONLY** allowed to teach `1` language to EVERYBODY. 
Take this test case for example:
```
4
[[1],[2],[3],[4]]
[[1,2],[3,4]]
```
One may intuitively think that the answer should be 2 because we can teach person 1 the 2nd language and person 3 the 4th language; However that's against the rule because we are only allowed to teach **exactly** 1 language. Because we are only allowed to teach 1 language, we should teach the language that are most common so as to reduce the number of user that needs to be taught. 

**Java (98% Speed):**

```Java
class Solution {
    public int minimumTeachings(int n, int[][] L, int[][] F) {
        BitSet[] bit = new BitSet[L.length];
        Arrays.setAll(bit, o -> new BitSet(n + 1));
        for (int i = 0; i < L.length; i++){
            for (int l : L[i]){
                bit[i].set(l);
            }
        }
        Set<Integer> teach = new HashSet<>();
        for (int[] f : F){
            BitSet t = (BitSet)bit[f[0] - 1].clone();
            t.and(bit[f[1] - 1]);
            if (t.isEmpty()){
                teach.add(f[0] - 1);
                teach.add(f[1] - 1);
            }
        }
        int[] count = new int[n + 1];
        for (int person : teach){
            for (int l : L[person]){
                count[l]++;
            }
        }

        return teach.size() - Arrays.stream(count).max().getAsInt();
    }
}
```