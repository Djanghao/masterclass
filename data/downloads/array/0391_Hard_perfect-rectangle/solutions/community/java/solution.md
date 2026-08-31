# ✅ Java | Easy Understanding | Simple Maths

**Author:** kalinga
**Votes:** 5
**Link:** [https://leetcode.com/problems/perfect-rectangle/solutions/2989119/](https://leetcode.com/problems/perfect-rectangle/solutions/2989119/)

---

**THE INTUITION BEHIND THE APPROACH IS SIMPLE MATH. MANUALLY FINDING ALL COORDINATES OF EACH RECTANGLE AND FINDING COORDINATES OF RECTANGLE IN WHOLE AND IF THEY ARE EQUAL THEN RETURN TRUE OR RETURN FALSE.**
```
class Solution {
    public boolean isRectangleCover(int[][] rectangles) {
        HashSet<String> hs=new HashSet<>();
        int area=0;
        int minX=Integer.MAX_VALUE;
        int minY=Integer.MAX_VALUE;
        int maxA=Integer.MIN_VALUE;
        int maxB=Integer.MIN_VALUE;
        for(int i=0;i<rectangles.length;i++){
            int x=rectangles[i][0];
            int y=rectangles[i][1];
            int a=rectangles[i][2];
            int b=rectangles[i][3];
            area+=Math.abs(y-b)*Math.abs(x-a);
            minX=Math.min(minX,x);
            minY=Math.min(minY,y);
            maxA=Math.max(maxA,a);
            maxB=Math.max(maxB,b);
            String bottomLeft=x+":"+y;
            String bottomRight=a+":"+y;
            String topLeft=x+":"+b;
            String topRight=a+":"+b;
            if(!hs.contains(bottomLeft))
                hs.add(bottomLeft);
            else
                hs.remove(bottomLeft);
            if(!hs.contains(bottomRight))
                hs.add(bottomRight);
            else
                hs.remove(bottomRight);
            if(!hs.contains(topLeft))
                hs.add(topLeft);
            else
                hs.remove(topLeft);
            if(!hs.contains(topRight))
                hs.add(topRight);
            else
                hs.remove(topRight);
        }
        String FullbottomLeft=minX+":"+minY;
        String FullbottomRight=maxA+":"+minY;
        String FulltopLeft=minX+":"+maxB;
        String FulltopRight=maxA+":"+maxB;
        if(!(hs.size()==4) || !hs.contains(FullbottomLeft) || !hs.contains(FullbottomRight) || !hs.contains(FulltopRight) || !hs.contains(FulltopLeft))
            return false;
        int newarea=Math.abs(minX-maxA)*Math.abs(minY-maxB);
        if(newarea==area)
            return true;
        return false;
        
    }
}
```
**IF YOU LIKED THE APPROACH PLEASE UPVOTE \uD83D\uDE4F\uD83D\uDE4F\uD83D\uDE4F**