# Simple Java Solution

**Author:** sakshikishore
**Votes:** 0
**Link:** [https://leetcode.com/problems/before-and-after-puzzle/solutions/5760726/](https://leetcode.com/problems/before-and-after-puzzle/solutions/5760726/)

---

# Code
```java []
class Solution {
    public List<String> beforeAndAfterPuzzles(String[] phrases) {
        TreeSet<String> tSet=new TreeSet<String>();
        List<String> res=new ArrayList<String>();
        for(int i=0;i<phrases.length;i++)
        {
             String str1[]=phrases[i].split(" ");
             String p=phrases[i].substring(0,phrases[i].length()-str1[str1.length-1].length());
            for(int j=0;j<phrases.length;j++)
            {
                if(i!=j)
                {
                   String str2[]=phrases[j].split(" ");
                   if(str1[str1.length-1].equals(str2[0]))
                   {
                     tSet.add(p+phrases[j]);
                   }
                }
            }
        }

        Iterator<String> itr=tSet.iterator();
        while(itr.hasNext())
        {
            res.add(itr.next());
        }
      return res;
    
    }
}
```