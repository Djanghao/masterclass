# Worst Question ever ?? Java Solution with Explanation

**Author:** IAmCoderrr
**Votes:** 43
**Link:** [https://leetcode.com/problems/walking-robot-simulation-ii/solutions/1575926/](https://leetcode.com/problems/walking-robot-simulation-ii/solutions/1575926/)

---

I tried this for more the 1 hour . And finally now i find the solution
Credit to  [pigorski](https://leetcode.com/pigorski/)  for the solution

Here are some points to notice
1. To get Rid of TLE  we do % of num with   w * 2 + h * 2 - 4 because we have to travel through perimeter of the given grid and after travel  w * 2 + h * 2 - 4 we will reach at the same position.
1. if you wondered why we subtract 4 from  w * 2 + h * 2  if we simply do n*m we will  travel all the corner edges 2 times so to manage this we have to subtract 4 from  w * 2 + h * 2 - 4.
1. In case your solution passes 140 test case  and you didn't find the reason why your code fails .
Dry Run This test case
["Robot","getPos","getDir","move","getDir","getPos"]
[[2,3],[],[],[24],[],[]]

* in the beginning robot faces "East" at (0, 0),
* but next time, when it comes to (0, 0) it should face "South"


class Robot {
    
    private int w;
    private int h;
    private int x;
    private int y;
    private String dir;
    

    public Robot(int width, int height) {
        w = width;
        h = height;
        x = 0;
        y = 0;
        dir = "East";
    }
    
    public void move(int num) {
        num %= w * 2 + h * 2 - 4;
        if (num == 0) num = w * 2 + h * 2 - 4;
        
        for (int i = 0; i < num; i++) {
            switch (dir) {
                case "East":
                    if (x == w - 1) {
                        dir = "North";
                        y++;
                    }
                    else {
                        x++;
                    }
                    break;
                case "North":
                    if (y == h - 1) {
                        dir = "West";
                        x--;
                    }
                    else {
                        y++;
                    }
                    break;
                case "West":
                    if (x == 0) {
                        dir = "South";
                        y--;
                    }
                    else {
                        x--;
                    }
                    break;
                case "South":
                    if (y == 0) {
                        dir = "East";
                        x++;
                    }
                    else {
                        y--;
                    }
            }
        }
    }
    
    public int[] getPos() {
        return new int[] {x, y};
    }
    
    public String getDir() {
        return dir;
    }
}
 
