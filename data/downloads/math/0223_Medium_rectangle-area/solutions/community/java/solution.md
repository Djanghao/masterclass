# My Java solution [Sum of areas - Overlapped area]

**Author:** naus
**Votes:** 376
**Link:** [https://leetcode.com/problems/rectangle-area/solutions/62138/](https://leetcode.com/problems/rectangle-area/solutions/62138/)

---

    public int computeArea(int A, int B, int C, int D, int E, int F, int G, int H) {
            
            int areaOfSqrA = (C-A) * (D-B);
             int areaOfSqrB = (G-E) * (H-F);
            
            int left = Math.max(A, E);
            int right = Math.min(G, C);
            int bottom = Math.max(F, B);
            int top = Math.min(D, H);
            
            //If overlap
            int overlap = 0;
            if(right > left && top > bottom)
                 overlap = (right - left) * (top - bottom);
            
            return areaOfSqrA + areaOfSqrB - overlap;
        }

Hello! So, the code should be fairly straightforward. I first calculate the area of each rectangle and then calculate the overlapping area between the two rectangles (if there is one!). At the end, we sum up the individual areas and subtract the overlapping area/0 ! 

Feel free to ask should you have any queries for me OR if my solution can be improved upon! :)